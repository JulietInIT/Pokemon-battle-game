// src/app/signup/page.tsx
'use client';
import Link from "next/link";

export default function SignupPage() {
  return (
    <section className="max-w-md mx-auto mt-10 p-6 border rounded-md bg-white shadow text-gray-500">
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Username" className="border p-2 rounded" />
        <input type="email" placeholder="Email" className="border p-2 rounded" />
        <input type="password" placeholder="Password" className="border p-2 rounded" />
        <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded">
          Create Account
        </button>
      </form>
      <p className="mt-4 text-sm">
        Already have an account?{" "}
        <Link href="/login" className="text-blue-600 underline">
          Login here
        </Link>
      </p>
    </section>
  );
}