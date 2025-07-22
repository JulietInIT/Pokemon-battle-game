// app/layout.tsx
import "./styles/globals.css";
import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans p-4">
        {/* Header */}
        <nav className="flex gap-4 border-b pb-2 mb-4">
          <Link href="/pages/">Home</Link>
          <Link href="/pages/roster">My Roster</Link>
          <Link href="/pages/battle">Battle</Link>
          <Link href="/pages/leaderboard">Leaderboard</Link>
          <Link href="/pages/signup">Sign Up</Link>
          <Link href="/pages/login">Log In</Link>
        </nav>
        {/* Main content */}
        <main>{children}</main>
      </body>
    </html>
  );
}