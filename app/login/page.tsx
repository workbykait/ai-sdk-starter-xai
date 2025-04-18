"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const router = useRouter();

  const handleAuth = async () => {
    try {
      if (isSignUp) {
        const { error } = await supabase.auth.signUp({
          email,
          password,
        });
        if (error) {
          alert("Sign-up failed: " + error.message);
        } else {
          alert("Sign-up successful! Please check your email to confirm.");
          router.push("/profile");
        }
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) {
          alert("Sign-in failed: " + error.message);
        } else {
          router.push("/profile");
        }
      }
    } catch (err) {
      console.error("Auth error:", err);
      alert("An error occurred during authentication.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#303030] text-[#F7F7F7]">
      <div className="w-full max-w-md space-y-6 rounded-lg bg-[#606060] p-8 shadow-lg">
        <h1 className="text-2xl font-bold">{isSignUp ? "Sign Up" : "Sign In"}</h1>
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
          onClick={handleAuth}
          className="w-full rounded-md bg-[#A0A0A0] p-2 text-[#303030] hover:bg-[#E0E0E0]"
        >
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>
        <button
          onClick={() => setIsSignUp(!isSignUp)}
          className="w-full text-[#A0A0A0] hover:text-[#E0E0E0]"
        >
          {isSignUp ? "Already have an account? Sign In" : "Need an account? Sign Up"}
        </button>
      </div>
    </div>
  );
}
