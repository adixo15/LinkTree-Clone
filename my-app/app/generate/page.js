"use client"
import React, { useState } from "react"
import toast, { Toaster } from "react-hot-toast"
import { useRouter } from "next/navigation"

const Generate = () => {
  const router = useRouter()
  const [handle, setHandle] = useState("")
  const [links, setLinks] = useState([])
  const [linkText, setLinkText] = useState("")
  const [linkUrl, setLinkUrl] = useState("")
  const [picture, setPicture] = useState("")

  // Add link to local state
  const addLink = () => {
    if (!linkText || !linkUrl) {
      toast.error("Please enter both link text and URL")
      return
    }
    setLinks([...links, { linktext: linkText, link: linkUrl }])
    setLinkText("")
    setLinkUrl("")
    toast.success("Link added!")
  }

  // Submit to backend and redirect
  const handleSubmit = async () => {
    if (!handle) {
      toast.error("Handle is required!")
      return
    }

    const body = { handle, links, pic: picture || "https://randomuser.me/api/portraits/lego/1.jpg" } // default PF

    try {
      const res = await fetch("/api/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })

      const data = await res.json()

      if (data.success) {
        toast.success("✅ LinkTree generated! Redirecting...")
        setTimeout(() => {
          router.push(`/${handle}`) // redirect to dynamic route
        }, 1500)
      } else {
        toast.error("❌ Failed to generate")
      }
    } catch (err) {
      toast.error("Something went wrong!")
      console.error(err)
    }
  }

  return (
    <div className="min-h-screen w-full bg-[#E9C0E9] flex flex-col md:grid md:grid-cols-2">
      <Toaster position="top-center" />

      {/* Left Side */}
      <div className="flex justify-center items-center flex-col px-6 py-10">
        <div className="flex flex-col gap-8 w-full max-w-lg">
          <h1 className="font-bold text-4xl sm:text-5xl text-center md:text-left text-slate-900">
            Create your LinkTree
          </h1>

          {/* Step 1 */}
          <div>
            <h2 className="font-semibold text-2xl mb-3 text-slate-800">
              Step 1: Claim your Handle
            </h2>
            <input
              type="text"
              value={handle}
              onChange={(e) => setHandle(e.target.value)}
              placeholder="Choose a handle"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-pink-400 focus:outline-none"
            />
          </div>

          {/* Step 2 */}
          <div>
            <h2 className="font-semibold text-2xl mb-3 text-slate-800">
              Step 2: Add your links
            </h2>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
              <input
                type="text"
                value={linkText}
                onChange={(e) => setLinkText(e.target.value)}
                placeholder="Enter Link Text"
                className="flex-1 px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-pink-400 focus:outline-none"
              />
              <input
                type="text"
                value={linkUrl}
                onChange={(e) => setLinkUrl(e.target.value)}
                placeholder="Enter Link URL"
                className="flex-1 px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-pink-400 focus:outline-none"
              />
              <button
                onClick={addLink}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-pink-400 to-pink-500 text-white font-semibold shadow-md hover:scale-105 transition"
              >
                + Add Link
              </button>
            </div>

            {/* Show added links */}
            <ul className="mt-3 space-y-2">
              {links.map((l, i) => (
                <li
                  key={i}
                  className="px-4 py-2 rounded-lg bg-white shadow-sm border text-gray-700"
                >
                  {l.linktext} → {l.link}
                </li>
              ))}
            </ul>
          </div>

          {/* Step 3 */}
          <div>
            <h2 className="font-semibold text-2xl mb-3 text-slate-800">
              Step 3: Add Picture and Finalize
            </h2>
            <input
              type="text"
              value={picture}
              onChange={(e) => setPicture(e.target.value)}
              placeholder="Enter link to your picture (optional)"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-pink-400 focus:outline-none"
            />
          </div>

          {/* Final Button */}
          <button
            onClick={handleSubmit}
            className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-purple-400 to-pink-500 text-white font-bold shadow-lg hover:scale-105 transition"
          >
            🚀 Generate My LinkTree
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex justify-center items-center p-6 bg-[#E9C0E9]">
        <img
          className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[350px] h-auto object-contain rounded-xl"
          src="/generate.png"
          alt="Generate your picture"
        />
      </div>
    </div>
  )
}

export default Generate
