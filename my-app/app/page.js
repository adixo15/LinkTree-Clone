"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [handle, setHandle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!handle.trim()) return;
    // navigate to /generate with query param
    router.push(`/generate?handle=${encodeURIComponent(handle)}`);
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[#254f1a] min-h-screen flex flex-col md:grid md:grid-cols-2 items-center pt-20 pb-16">
        {/* Left Content */}
        <div className="flex flex-col justify-center px-6 md:px-[10vw] gap-4 text-center md:text-left">
          <h1 className="text-yellow-300 font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
            <p>Everything You</p>
            <p>are. In One</p>
            <p>simple Link in bio</p>
          </h1>
          <p className="text-yellow-200 text-base sm:text-lg md:text-xl mt-4 leading-relaxed">
            Join <span className="font-bold">50M+ people</span> using Linktree for their link in bio.
            One link to help you share everything you create, curate, and sell from your
            Instagram, TikTok, Twitter, YouTube, and other social media platforms.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 mt-6 w-full max-w-md mx-auto md:mx-0"
          >
            <input
              type="text"
              placeholder="linktr.ee/yourname"
              value={handle}
              onChange={(e) => setHandle(e.target.value)}
              className="flex-1 px-4 py-3 rounded-md outline-none border border-gray-300 focus:border-yellow-400 text-gray-800 bg-white placeholder-gray-500"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-full bg-pink-200 hover:bg-pink-300 text-black font-semibold transition"
            >
              Claim your tree
            </button>
          </form>
        </div>

        {/* Right Content */}
        <div className="flex justify-center items-center px-6 md:px-[10vw] mt-10 md:mt-0">
          <Image
            src="/home.png"
            alt="homepage image"
            width={500}
            height={500}
            className="object-contain drop-shadow-lg"
          />
        </div>
      </section>
    </main>
  );
}
