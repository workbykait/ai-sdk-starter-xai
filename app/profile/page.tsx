export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-white text-black flex pt-16">
      {/* Sidebar */}
      <div className="w-64 bg-white p-4 fixed h-[calc(100vh-64px)] top-16 overflow-y-auto border-r border-black">
        <h2 className="text-xl font-bold text-black mb-4">Dashboard</h2>
        <div>
          <h3 className="text-lg font-semibold text-black mb-2">Chat History</h3>
          <div className="space-y-2">
            <div>
              <p className="text-sm text-gray-500">Apr 18, 2025, 9:00 AM</p>
              <p className="text-black">Hello, how can I assist you today?</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Apr 18, 2025, 9:02 AM</p>
              <p className="text-black">I’m working on a project!</p>
            </div>
            <p className="text-gray-500 italic">Mock chat history...</p>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="ml-64 p-8 flex-1">
        <h1 className="text-3xl font-bold mb-8 text-black">Profile Dashboard</h1>
        {/* Boxes for Critical Thinking, Emotional Regulation, Hazard Handling */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-lg p-4 shadow-sm border border-black">
            <h3 className="text-lg font-semibold text-black mb-2">Critical Thinking</h3>
            <p className="text-gray-500">
              Practice structured problem-solving to make clear decisions. Try breaking tasks into smaller steps.
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm border border-black">
            <h3 className="text-lg font-semibold text-black mb-2">Emotional Regulation</h3>
            <p className="text-gray-500">
              Use mindfulness techniques to stay calm under stress. Take a deep breath before reacting.
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm border border-black">
            <h3 className="text-lg font-semibold text-black mb-2">Hazard Handling</h3>
            <p className="text-gray-500">
              Identify potential risks early. Create a checklist to stay prepared for challenges.
            </p>
          </div>
        </div>
        {/* To-Do List Section */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-black">To-Do List</h2>
          <div className="bg-white rounded-lg p-4 border border-black">
            <div className="flex gap-2 mb-4">
              <input
                type="text"
                placeholder="Add a task..."
                className="flex-1 rounded-md border border-black bg-white p-2 text-gray-500 opacity-50 cursor-not-allowed"
                disabled
              />
              <select
                className="rounded-md border border-black bg-white p-2 text-gray-500 opacity-50 cursor-not-allowed"
                disabled
              >
                <option>Urgent</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
              <button
                className="rounded-md bg-black p-2 text-white opacity-50 cursor-not-allowed"
                disabled
              >
                Add
              </button>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-medium mb-2 text-black">Urgent</h3>
              <div className="flex items-center gap-2 mb-2">
                <input type="checkbox" className="h-4 w-4 text-black" disabled />
                <span className="text-black">Finish project proposal</span>
              </div>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-medium mb-2 text-black">Medium</h3>
              <div className="flex items-center gap-2 mb-2">
                <input type="checkbox" className="h-4 w-4 text-black" disabled />
                <span className="text-black">Read book chapter</span>
              </div>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-medium mb-2 text-black">Low</h3>
              <div className="flex items-center gap-2 mb-2">
                <input type="checkbox" className="h-4 w-4 text-black" disabled />
                <span className="text-black">Organize desk</span>
              </div>
            </div>
            <p className="text-gray-500 italic">Mock to-do list...</p>
          </div>
        </section>
      </div>
    </div>
  );
}
