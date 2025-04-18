export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white text-black">
      <div className="w-full max-w-md space-y-6 rounded-lg bg-[#E8ECEF] p-8 shadow-lg">
        <h1 className="text-2xl font-bold">Sign In</h1>
        <input
          type="email"
          placeholder="Email"
          className="w-full rounded-md border border-[#A0A0A0] bg-white p-2 text-[#6B7280] opacity-50 cursor-not-allowed"
          disabled
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full rounded-md border border-[#A0A0A0] bg-white p-2 text-[#6B7280] opacity-50 cursor-not-allowed"
          disabled
        />
        <button
          className="w-full rounded-md bg-[#A0A0A0] p-2 text-black opacity-50 cursor-not-allowed"
          disabled
        >
          Sign In
        </button>
        <p className="text-[#6B7280] italic">Mock sign-in form...</p>
      </div>
    </div>
  );
}
