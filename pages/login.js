import { supabase } from '../lib/supabase';

export default function Login() {
  const signIn = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email: 'user@example.com',
      password: 'password'
    });
    if (error) {
      alert('Login failed: ' + error.message);
    } else {
      window.location.href = '/';
    }
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#303030', color: '#F7F7F7' }}>
      <h1>Login</h1>
      <button onClick={signIn}>Sign In (Test)</button>
    </div>
  );
}
