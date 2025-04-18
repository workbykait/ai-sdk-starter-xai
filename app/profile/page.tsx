export default function ProfilePage() {
  return (
    <div className="min-h-screen  text-[#303030] flex">
      {/* Sidebar */}
      <div className="w-64 bg-[#606060] p-4 fixed h-screen">
        <h2 className="text-xl font-bold mb-4">Dashboard</h2>
        <ul className="space-y-2">
          <li>
            <a href="#" className="text-[#A0A0A0] hover:text-[#E0E0E0]">
              Profile Overview
            </a>
          </li>
          <li>
            <a href="#" className="text-[#A0A0A0] hover:text-[#E0E0E0]">
              Settings
            </a>
          </li>
          <li>
            <a href="#" className="text-[#A0A0A0] hover:text-[#E0E0E0]">
              Sign Out
            </a>
          </li>
        </ul>
      </div>
      {/* Main Content */}
      <div className="ml-64 p-8 flex-1">
        <h1 className="text-3xl font-bold mb-8">Profile Dashboard</h1>
        {/* Mock Chat History Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Chat History</h2>
          <div className="bg-[#606060] rounded-lg p-4 max-h-96 overflow-y-auto">
            <div className="mb-2">
              <p className="text-sm text-[#A0A0A0]">Apr 18, 2025, 9:00 AM</p>
              <p>Hello, how can I assist you today?</p>
            </div>
            <div className="mb-2">
              <p className="text-sm text-[#A0A0A0]">Apr 18, 2025, 9:02 AM</p>
              <p>I’m working on a project!</p>
            </div>
            <p className="text-[#A0A0A0] italic">Mock chat history...</p>
          </div>
        </section>
        {/* Mock To-Do List Section */}
        <section>
          <h2 className="text-xl font-semibold mb-4">To-Do List</h2>
          <div className="bg-[#606060] rounded-lg p-4">
            <div className="flex gap-2 mb-4">
              <input
                type="text"
                placeholder="Add a task..."
                className="flex-1 rounded-md border border-[#A0A0A0] bg-[#303030] p-2 text-[#F7F7F7]"
                disabled
              />
              <select
                className="rounded-md border border-[#A0A0A0] bg-[#303030] p-2 text-[#F7F7F7]"
                disabled
              >
                <option>Urgent</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
              <button
                className="rounded-md bg-[#A0A0A0] p-2 text-[#303030] opacity-50 cursor-not-allowed"
                disabled
              >
                Add
              </button>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-medium mb-2">Urgent</h3>
              <div className="flex items-center gap-2 mb-2">
                <input type="checkbox" className="h-4 w-4 text-[#A0A0A0]" disabled />
                <span>Finish project proposal</span>
              </div>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-medium mb-2">Medium</h3>
              <div className="flex items-center gap-2 mb-2">
                <input type="checkbox" className="h-4 w-4 text-[#A0A0A0]" disabled />
                <span>Read book chapter</span>
              </div>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-medium mb-2">Low</h3>
              <div className="flex items-center gap-2 mb-2">
                <input type="checkbox" className="h-4 w-4 text-[#A0A0A0]" disabled />
                <span>Organize desk</span>
              </div>
            </div>
            <p className="text-[#A0A0A0] italic">Mock to-do list...</p>
          </div>
        </section>
      </div>
    </div>
  );
}
