export default function GamePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white text-black">
      <h1 className="text-2xl font-bold mb-4">Game</h1>
      <div className="bg-[#E8ECEF] rounded-lg p-4 w-full max-w-md">
        <p className="text-[#6B7280] mb-4">Welcome to the Game Hub!</p>
        <div className="space-y-2">
          <button
            className="w-full rounded-md bg-[#A0A0A0] p-2 text-black opacity-50 cursor-not-allowed"
            disabled
          >
            Start Game
          </button>
          <button
            className="w-full rounded-md bg-[#A0A0A0] p-2 text-black opacity-50 cursor-not-allowed"
            disabled
          >
            Leaderboard
          </button>
        </div>
        <p className="text-[#6B7280] italic mt-4">Mock game interface...</p>
      </div>
    </div>
  );
}
