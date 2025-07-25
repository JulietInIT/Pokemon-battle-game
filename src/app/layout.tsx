// app/layout.tsx
import "./styles/globals.css";
import Link from 'next/link';
import { Header, Footer } from "@/components";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans p-4">
        < Header />
        {/* Main content */}
        <main>{children}</main>
        < Footer />
      </body>
    </html>
  );
}