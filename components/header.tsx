'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabase } from '../lib/supabase';

export default function Header({ user }: { user: any }) {
  const router = useRouter();

  const signOut = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="max-w-4xl mx-auto flex justify-between">
        <div className="space-x-4">
          <Link href="/chat" className="hover:underline">
            Chat 💬
          </Link>
          <Link href="/profile" className="hover:underline">
            Profile 🧑
          </Link>
          <span>🎮</span>
        </div>
        {user ? (
          <button onClick={signOut} className="hover:underline">
            Sign Out
          </button>
        ) : (
          <Link href="/login" className="hover:underline">
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}
