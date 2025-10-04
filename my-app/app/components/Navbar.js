"use client"
import React, { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import { useSession, signOut } from "next-auth/react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { data: session } = useSession()

  // Only show navbar on home (/) and generate page
  if (pathname !== "/" && pathname !== "/generate") return null

  return (
    <nav className="bg-white w-full md:w-[85vw] sticky top-0 md:top-6 md:left-[7.5vw] rounded-xl md:rounded-full shadow-lg z-50 px-4 md:px-8 py-4">

      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
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
          <span className="font-bold text-xl truncate">Linktree</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium items-center">
          <li><Link href="/products">Products</Link></li>
          <li><Link href="/templates">Templates</Link></li>
          <li><Link href="/marketplace">Marketplace</Link></li>
          <li><Link href="/learn">Learn</Link></li>
          <li><Link href="/pricing">Pricing</Link></li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4">
          {session ? (
            <>
              <span className="text-gray-800 font-medium">{session.user?.name}</span>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="px-6 py-2 rounded-xl bg-gray-100 text-gray-800 hover:bg-gray-200"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="px-6 py-2 rounded-xl bg-gray-100 text-gray-800 hover:bg-gray-200"
              >
                Log in
              </Link>
              <Link
                href="/signup"
                className="px-6 py-2 rounded-xl bg-black text-white hover:bg-gray-900"
              >
                Sign up free
              </Link>
            </>
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col items-center gap-4 bg-white rounded-2xl shadow-lg py-6 px-4 mx-2">
          <Link href="/products" className="w-full text-center py-2 rounded hover:bg-gray-100">Products</Link>
          <Link href="/templates" className="w-full text-center py-2 rounded hover:bg-gray-100">Templates</Link>
          <Link href="/marketplace" className="w-full text-center py-2 rounded hover:bg-gray-100">Marketplace</Link>
          <Link href="/learn" className="w-full text-center py-2 rounded hover:bg-gray-100">Learn</Link>
          <Link href="/pricing" className="w-full text-center py-2 rounded hover:bg-gray-100">Pricing</Link>

          <div className="flex flex-col gap-2 mt-2 w-full">
            {session ? (
              <>
                <span className="w-full text-center py-2 rounded-xl bg-gray-100 text-gray-800">
                  {session.user?.name}
                </span>
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="w-full text-center py-2 rounded-xl bg-gray-100 text-gray-800 hover:bg-gray-200"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="w-full text-center py-2 rounded-xl bg-gray-100 text-gray-800 hover:bg-gray-200"
                >
                  Log in
                </Link>
                <Link
                  href="/signup"
                  className="w-full text-center py-2 rounded-xl bg-black text-white hover:bg-gray-900"
                >
                  Sign up free
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
