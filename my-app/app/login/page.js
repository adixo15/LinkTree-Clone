"use client"
import React, { useState } from "react"
import Link from "next/link"
import { signIn } from "next-auth/react"
import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"

const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Email:", email, "Password:", password)
    // You can handle email/password login here if needed
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-100 px-4">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="green"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-tree-pine"
            >
              <path d="M12 2L6 8h12l-6-6zM6 14h12l-6-6-6 6z" />
              <path d="M12 22v-8" />
            </svg>
            <h1 className="text-2xl font-bold text-gray-800">Linktree</h1>
          </div>
          <p className="text-gray-500 mt-2 text-center">
            Welcome back! Log in to manage your links.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
              required
            />
          </div>

          <div className="flex justify-between items-center text-sm text-gray-600">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded border-gray-300" />
              Remember me
            </label>
            <Link href="#" className="text-green-700 hover:underline">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition duration-200 font-semibold"
          >
            Log In
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-3 text-gray-500 text-sm">or</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Social Login Buttons */}
        <div className="flex flex-col gap-3">
          <button
            onClick={() => signIn("google")}
            className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-xl py-3 hover:bg-gray-100 transition"
          >
            <FcGoogle size={20} />
            Log in with Google
          </button>

          <button
            onClick={() => signIn("github")}
            className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-xl py-3 hover:bg-gray-100 transition"
          >
            <FaGithub size={20} />
            Log in with GitHub
          </button>
        </div>

        {/* Sign up link */}
        <p className="text-center text-gray-700 mt-6">
          Don’t have an account?{" "}
          <Link href="/signup" className="text-green-700 font-semibold hover:underline">
            Sign up free
          </Link>
        </p>
      </div>
    </div>
  )
}

export default LoginPage
