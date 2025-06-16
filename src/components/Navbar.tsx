import { useState } from 'react'
import Link from 'next/link'
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-primary-600 transition-colors">
              VTRN
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Home
            </Link>
            
            <div className="relative">
              <button 
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center"
              >
                Services
                <ChevronDownIcon className={`ml-1 h-4 w-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-10">
                  <Link href="/services/bus-timing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Bus Timing
                  </Link>
                  <Link href="/services/towing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Tow Service
                  </Link>
                  <Link href="/services/roommate" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Find Roommate
                  </Link>
                  <Link href="/services/rental" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Rental Room
                  </Link>
                </div>
              )}
            </div>
            
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              About us
            </Link>
            
            <Link 
              href="/contact" 
              className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Contacts
            </Link>
          </div>

          {/* Login Button */}
          <div className="hidden md:block">
            <Link 
              href="/login" 
              className="bg-primary-100 text-primary-700 px-6 py-2 rounded-lg text-sm font-medium hover:bg-primary-200 transition-all duration-200 transform hover:scale-105"
            >
              Log In
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-primary-600 p-2 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
            <Link 
              href="/" 
              className="block px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/services" 
              className="block px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/about" 
              className="block px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About us
            </Link>
            <Link 
              href="/contact" 
              className="block px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contacts
            </Link>
            <Link 
              href="/login" 
              className="block mx-3 mt-4 px-4 py-2 bg-primary-100 text-primary-700 rounded-lg text-center font-medium hover:bg-primary-200 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar