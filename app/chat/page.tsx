export default function Chat() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-2xl w-full mx-auto p-6 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Chat</h2>
        <div className="h-96 overflow-y-auto mb-4 p-4 border border-gray-300 rounded">
          <div className="mb-2">
            <span className="font-bold text-gray-700">You: </span>
            <span>Hello! How can I stay focused today?</span>
          </div>
          <div className="mb-2">
            <span className="font-bold text-gray-700">Assistant: </span>
            <span>Try breaking tasks into small chunks and using a timer!</span>
          </div>
        </div>
        <form>
          <div className="flex gap-2">
            <input
              type="text"
              className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type a message..."
              disabled
            />
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
              disabled
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
