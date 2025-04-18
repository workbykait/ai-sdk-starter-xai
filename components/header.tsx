import Link from "next/link";

export const Header = () => {
  return (
    <div className="fixed right-0 left-0 w-full top-0  text-[#303030]">
      <div className="flex justify-between items-center p-4">
        <div className="flex flex-row items-center gap-4">
          <Link href="/" className="text-2xl hover:text-[#E0E0E0]">
            💬
          </Link>
          <Link href="/profile" className="text-2xl hover:text-[#E0E0E0]">
            👤
          </Link>
          <Link href="/game" className="text-2xl hover:text-[#E0E0E0]">
            🎮
          </Link>
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
