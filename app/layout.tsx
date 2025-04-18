import { supabase } from '../lib/supabase';
import Header from '../components/Header';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen">
        <Header user={user} />
        <main>{children}</main>
      </body>
    </html>
  );
}
