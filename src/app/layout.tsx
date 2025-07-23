// app/layout.tsx
import "./styles/globals.css";
import Link from 'next/link';
import { Header, Footer } from "@/components";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans p-4">
        < Header />
        <nav className="flex gap-4 border-b pb-2 mb-4">
          <Link href="/">Home</Link>
          <Link href="/roster">My Roster</Link>
          <Link href="/battle">Battle</Link>
          <Link href="/leaderboard">Leaderboard</Link>
          <Link href="/signup">Sign Up</Link>
          <Link href="/login">Log In</Link>
        </nav>
        {/* Main content */}
        <main>{children}</main>
        < Footer />
      </body>
    </html>
  );
}