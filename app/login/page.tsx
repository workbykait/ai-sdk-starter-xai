'use client';

import { supabase } from '../../lib/supabase';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const signIn = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      alert('Login failed: ' + error.message);
    } else {
      router.push('/');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#303030] text-[#F7F7F7]">
      <div className="w-full max-w-md space-y-6 rounded-lg bg-[#606060] p-8 shadow-lg">
        <h1 className="text-2xl font-bold">Login</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-md border border-[#A0A0A0] bg-[#303030] p-2 text-[#F7F7F7]"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-md border border-[#A0A0A0] bg-[#303030] p-2 text-[#F7F7F7]"
        />
        <button
          onClick={signIn}
          className="w-full rounded-md bg-[#A0A0A0] p-2 hover:bg-[#E0E0E0] hover:text-[#303030]"
        >
          Sign In
        </button>
      </div>
    </div>
  );
}
