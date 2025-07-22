// src/app/pages/login/page.tsx
'use client';
import Link from "next/link";

export default function LoginPage() {
  return (
    <section className="max-w-md mx-auto mt-10 p-6 border rounded-md bg-white shadow text-gray-500">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form className="flex flex-col gap-4">
        <input type="email" placeholder="Email" className="border p-2 rounded" />
        <input type="password" placeholder="Password" className="border p-2 rounded" />
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
          Login
        </button>
      </form>
      <p className="mt-4 text-sm">
        Don’t have an account?{" "}
        <Link href="/pages/signup" className="text-blue-600 underline">
          Sign up here
        </Link>
      </p>
    </section>
  );
}