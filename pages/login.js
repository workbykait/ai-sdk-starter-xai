import { supabase } from '../lib/supabase';
export default function Login() {
  const signIn = async () => {
    await supabase.auth.signInWithPassword({
      email: 'user@example.com', // Replace with test email
      password: 'password', // Replace with test password
    });
    window.location.href = '/';
  };
  return (
    <div>
      <h1>Login</h1>
      <button onClick={signIn}>Sign In</button>
    </div>
  );
}
