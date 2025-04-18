"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [newTaskTier, setNewTaskTier] = useState("Urgent");
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (!data.user) {
        router.push("/login");
      } else {
        setUser(data.user);
        fetchMessages(data.user.id);
        fetchTasks(data.user.id);
      }
    };
    fetchUser();
  }, []);

  const fetchMessages = async (userId: string) => {
    const { data } = await supabase
      .from("messages")
      .select("content, created_at")
      .eq("user_id", userId)
      .order("created_at", { ascending: false });
    setMessages(data || []);
  };

  const fetchTasks = async (userId: string) => {
    const { data } = await supabase
      .from("tasks")
      .select("id, title, tier, completed")
      .eq("user_id", userId)
      .order("created_at", { ascending: true });
    setTasks(data || []);
  };

  const addTask = async () => {
    if (!newTask || !user) return;
    const { error } = await supabase
      .from("tasks")
      .insert([{ user_id: user.id, title: newTask, tier: newTaskTier }]);
    if (!error) {
      setNewTask("");
      fetchTasks(user.id);
    }
  };

  const toggleTask = async (taskId: number, completed: boolean) => {
    const { error } = await supabase
      .from("tasks")
      .update({ completed: !completed })
      .eq("id", taskId);
    if (!error) {
      fetchTasks(user.id);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-[#303030] text-[#F7F7F7] flex">
      <div className="w-64 bg-[#606060] p-4 fixed h-screen">
        <h2 className="text-xl font-bold mb-4">Dashboard</h2>
        <button
          onClick={handleSignOut}
          className="w-full text-left text-[#A0A0A0] hover:text-[#E0E0E0]"
        >
          Sign Out
        </button>
      </div>
      <div className="ml-64 p-8 flex-1">
        <h1 className="text-3xl font-bold mb-8">Profile Dashboard</h1>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Chat History</h2>
          <div className="bg-[#606060] rounded-lg p-4 max-h-96 overflow-y-auto">
            {messages.length === 0 ? (
              <p className="text-[#A0A0A0]">No chat history yet.</p>
            ) : (
              messages.map((msg: { content: string; created_at: string }, index: number) => (
                <div key={index} className="mb-2">
                  <p className="text-sm text-[#A0A0A0]">
                    {new Date(msg.created_at).toLocaleString()}
                  </p>
                  <p>{msg.content}</p>
                </div>
              ))
            )}
          </div>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-4">To-Do List</h2>
          <div className="bg-[#606060] rounded-lg p-4">
            <div className="flex gap-2 mb-4">
              <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Add a task..."
                className="flex-1 rounded-md border border-[#A0A0A0] bg-[#303030] p-2 text-[#F7F7F7]"
              />
              <select
                value={newTaskTier}
                onChange={(e) => setNewTaskTier(e.target.value)}
                className="rounded-md border border-[#A0A0A0] bg-[#303030] p-2 text-[#F7F7F7]"
              >
                <option value="Urgent">Urgent</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
              <button
                onClick={addTask}
                className="rounded-md bg-[#A0A0A0] p-2 text-[#303030] hover:bg-[#E0E0E0]"
              >
                Add
              </button>
            </div>
            {["Urgent", "Medium", "Low"].map((tier) => (
              <div key={tier} className="mb-4">
                <h3 className="text-lg font-medium mb-2">{tier}</h3>
                {tasks
                  .filter((task: { tier: string }) => task.tier === tier)
                  .map((task: { id: number; title: string; completed: boolean }) => (
                    <div
                      key={task.id}
                      className="flex items-center gap-2 mb-2"
                    >
                      <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => toggleTask(task.id, task.completed)}
                        className="h-4 w-4 text-[#A0A0A0]"
                      />
                      <span
                        className={task.completed ? "line-through text-[#A0A0A0]" : ""}
                      >
                        {task.title}
                      </span>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
