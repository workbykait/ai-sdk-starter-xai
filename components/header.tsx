import Link from "next/link";

export const Header = () => {
  return (
    <div className="fixed right-0 left-0 w-full top-0 bg-[#303030] text-[#F7F7F7]">
      <div className="flex justify-between items-center p-4">
        <div className="flex flex-row items-center gap-4">
          <span className="text-2xl">💬</span>
          <span className="text-2xl">👤</span>
          <span className="text-2xl">🎮</span>
        </div>
        <div className="flex flex-row items-center gap-2">
          <Link
            href="/login"
            className="rounded-md bg-[#A0A0A0] px-4 py-2 text-[#303030] hover:bg-[#E0E0E0]"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};
