"use client"
import React from "react"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div>
          <h1 className="text-2xl font-bold text-green-500 mb-4">Linktree</h1>
          <p className="text-gray-400">
            Simplify your links, share your content, and grow your online presence with ease.
          </p>
          <div className="flex gap-4 mt-4">
            <Link href="#"><FaFacebookF className="hover:text-green-500 transition" /></Link>
            <Link href="#"><FaTwitter className="hover:text-green-500 transition" /></Link>
            <Link href="#"><FaInstagram className="hover:text-green-500 transition" /></Link>
            <Link href="#"><FaLinkedinIn className="hover:text-green-500 transition" /></Link>
          </div>
        </div>

        {/* Products */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Products</h2>
          <ul className="space-y-2">
            <li><Link href="#" className="hover:text-green-500 transition">Pricing</Link></li>
            <li><Link href="#" className="hover:text-green-500 transition">Templates</Link></li>
            <li><Link href="#" className="hover:text-green-500 transition">Marketplace</Link></li>
            <li><Link href="#" className="hover:text-green-500 transition">Integrations</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Resources</h2>
          <ul className="space-y-2">
            <li><Link href="#" className="hover:text-green-500 transition">Blog</Link></li>
            <li><Link href="#" className="hover:text-green-500 transition">Help Center</Link></li>
            <li><Link href="#" className="hover:text-green-500 transition">Developers</Link></li>
            <li><Link href="#" className="hover:text-green-500 transition">Support</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Subscribe</h2>
          <p className="text-gray-400 mb-4">Get the latest updates and offers.</p>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-green-500 flex-1"
            />
            <button className="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Linktree. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
