// app/layout.tsx
import "./styles/globals.css";
import Link from "next/link";
import { Header, Footer } from "@/components";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className='font-sans p-4 relative'
        style={{
          backgroundColor: "#D2D2DD",
          minHeight: "100vh",
          zIndex: -2,
        }}
      >
        {/* Background pattern overlay */}
        <div
          className='fixed inset-0 pointer-events-none'
          style={{
            backgroundImage: "url(/pattern_default.png)",
            backgroundRepeat: "repeat",
            backgroundSize: "1000px 1000px",
            opacity: 0.3,
            zIndex: -1,
          }}
        />
        {/* Header */}
        <Header />
        {/* Main content */}
        <main>{children}</main>
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
