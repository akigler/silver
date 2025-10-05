'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gray-900">Silver Packs</h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Features
            </a>
            <a href="#pricing" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Pricing
            </a>
            <a href="#faq" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              FAQ
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#features" className="text-gray-500 hover:text-gray-900 block px-3 py-2 text-base font-medium">
                Features
              </a>
              <a href="#pricing" className="text-gray-500 hover:text-gray-900 block px-3 py-2 text-base font-medium">
                Pricing
              </a>
              <a href="#faq" className="text-gray-500 hover:text-gray-900 block px-3 py-2 text-base font-medium">
                FAQ
              </a>
              <button className="w-full text-left bg-blue-600 text-white px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 transition-colors mt-4">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
