"use client"
import React, { useState } from "react"
import Link from "next/link"
import { FaUser, FaEnvelope, FaLock, FaGithub } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc" // ✅ Official Google icon
import { signIn } from "next-auth/react"

const SignupPage = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Name:", name, "Email:", email, "Password:", password)
  }

  const handleGoogleSignup = () => signIn("google", { callbackUrl: "/" })
  const handleGithubSignup = () => signIn("github", { callbackUrl: "/" })

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-100 px-4 py-10 md:py-16">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl">
        {/* Logo and Header */}
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
            Create your account and start sharing your links.
          </p>
        </div>

        {/* Social Signup */}
        <div className="flex flex-col gap-3 mb-6">
          <button
            onClick={handleGoogleSignup}
            className="flex items-center justify-center gap-3 border border-gray-300 py-3 rounded-xl hover:bg-gray-100 transition"
          >
            <FcGoogle className="text-2xl" /> {/* ✅ Real Google icon */}
            <span className="font-medium text-gray-700">Sign up with Google</span>
          </button>
          <button
            onClick={handleGithubSignup}
            className="flex items-center justify-center gap-3 border border-gray-300 py-3 rounded-xl hover:bg-gray-100 transition"
          >
            <FaGithub className="text-gray-800 text-lg" />
            <span className="font-medium text-gray-700">Sign up with GitHub</span>
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-3 text-gray-500 text-sm">or</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Signup Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Name Input */}
          <div className="relative">
            <label className="block text-gray-700 font-medium mb-1">Full Name</label>
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className="w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                required
              />
            </div>
          </div>

          {/* Email Input */}
          <div className="relative">
            <label className="block text-gray-700 font-medium mb-1">Email address</label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                required
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="relative">
            <label className="block text-gray-700 font-medium mb-1">Password</label>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                required
              />
            </div>
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition duration-200 font-semibold"
          >
            Create Account
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-700 mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-green-700 font-semibold hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignupPage
