export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-white text-black flex">
      {/* Sidebar */}
      <div className="w-64 bg-[#606060] p-4 fixed h-screen">
        <h2 className="text-xl font-bold text-white mb-4">Dashboard</h2>
        <div className="max-h-[calc(100vh-100px)] overflow-y-auto">
          <h3 className="text-lg font-semibold text-white mb-2">Chat History</h3>
          <div className="space-y-2">
            <div>
              <p className="text-sm text-[#A0A0A0]">Apr 18, 2025, 9:00 AM</p>
              <p className="text-white">Hello, how can I assist you today?</p>
            </div>
            <div>
              <p className="text-sm text-[#A0A0A0]">Apr 18, 2025, 9:02 AM</p>
              <p className="text-white">I’m working on a project!</p>
            </div>
            <p className="text-[#A0A0A0] italic">Mock chat history...</p>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="ml-64 p-8 flex-1">
        <h1 className="text-3xl font-bold mb-8">Profile Dashboard</h1>
        {/* Boxes for Critical Thinking, Emotional Regulation, Hazard Handling */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-[#E8ECEF] rounded-lg p-4 shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Critical Thinking</h3>
            <p className="text-[#6B7280]">
              Practice structured problem-solving to make clear decisions. Try breaking tasks into smaller steps.
            </p>
          </div>
          <div className="bg-[#E8ECEF] rounded-lg p-4 shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Emotional Regulation</h3>
            <p className="text-[#6B7280]">
              Use mindfulness techniques to stay calm under stress. Take a deep breath before reacting.
            </p>
          </div>
          <div className="bg-[#E8ECEF] rounded-lg p-4 shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Hazard Handling</h3>
            <p className="text-[#6B7280]">
              Identify potential risks early. Create a checklist to stay prepared for challenges.
            </p>
          </div>
        </div>
        {/* To-Do List Section */}
        <section>
          <h2 className="text-xl font-semibold mb-4">To-Do List</h2>
          <div className="bg-[#E8ECEF] rounded-lg p-4">
            <div className="flex gap-2 mb-4">
              <input
                type="text"
                placeholder="Add a task..."
                className="flex-1 rounded-md border border-[#A0A0A0] bg-white p-2 text-[#6B7280] opacity-50 cursor-not-allowed"
                disabled
              />
              <select
                className="rounded-md border border-[#A0A0A0] bg-white p-2 text-[#6B7280] opacity-50 cursor-not-allowed"
                disabled
              >
                <option>Urgent</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
              <button
                className="rounded-md bg-[#A0A0A0] p-2 text-black opacity-50 cursor-not-allowed"
                disabled
              >
                Add
              </button>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-medium mb-2">Urgent</h3>
              <div className="flex items-center gap-2 mb-2">
                <input type="checkbox" className="h-4 w-4 text-[#6B7280]" disabled />
                <span>Finish project proposal</span>
              </div>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-medium mb-2">Medium</h3>
              <div className="flex items-center gap-2 mb-2">
                <input type="checkbox" className="h-4 w-4 text-[#6B7280]" disabled />
                <span>Read book chapter</span>
              </div>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-medium mb-2">Low</h3>
              <div className="flex items-center gap-2 mb-2">
                <input type="checkbox" className="h-4 w-4 text-[#6B7280]" disabled />
                <span>Organize desk</span>
              </div>
            </div>
            <p className="text-[#6B7280] italic">Mock to-do list...</p>
          </div>
        </section>
      </div>
    </div>
  );
}
