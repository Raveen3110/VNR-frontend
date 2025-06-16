import { useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import type { ServiceOption } from '../types'

const Hero: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>('')
  const [searchQuery, setSearchQuery] = useState<string>('')

  const services: ServiceOption[] = [
    { id: 'bus-timing', name: 'Bus Timing' },
    { id: 'tow-service', name: 'Tow Service' },
    { id: 'find-roommate', name: 'Find Roommate' },
    { id: 'rental-room', name: 'Rental Room' }
  ]

  const handleServiceClick = (serviceName: string) => {
    setSelectedService(serviceName)
  }

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Search query:', searchQuery)
    // Handle search logic here
  }

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            One Platform - Many Solutions
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
            Instantly find bus timing, towing help, shared rooms, or rental spaces
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8 sm:mb-12">
            <form onSubmit={handleSearchSubmit} className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Services"
                className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-[30px] focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-md"
              />
            </form>
          </div>

          {/* Service Tags */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => handleServiceClick(service.name)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-200 transform hover:scale-105 ${
                  selectedService === service.name
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100 shadow-sm hover:shadow-md'
                }`}
              >
                {service.name}
              </button>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-[30px] font-medium hover:bg-primary-600 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center text-sm sm:text-base">
              Request a Service
              <svg className="ml-2 h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            <button className="border-2 border-primary-500 text-primary-500 px-6 sm:px-8 py-3 sm:py-4 rounded-[30px] font-medium hover:bg-primary-50 transition-all duration-200 transform hover:scale-105 shadow-sm hover:shadow-md flex items-center justify-center text-sm sm:text-base">
              Explore More
              <svg className="ml-2 h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero