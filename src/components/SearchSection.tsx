import { useState } from 'react'
import { CalendarDaysIcon, ArrowsRightLeftIcon } from '@heroicons/react/24/outline'
import type { SearchData } from '../types'

const SearchSection: React.FC = () => {
  const [searchData, setSearchData] = useState<SearchData>({
    date: '',
    from: '',
    to: ''
  })

  const handleInputChange = (field: keyof SearchData, value: string) => {
    setSearchData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Search data:', searchData)
    // Handle search logic here
  }

  return (
    <section className="bg-white py-8 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
              {/* Date Picker */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Date</label>
                <div className="relative">
                  <input
                    type="date"
                    value={searchData.date}
                    onChange={(e) => handleInputChange('date', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 pl-10"
                  />
                  <CalendarDaysIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                </div>
              </div>

              {/* From Input */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">From</label>
                <input
                  type="text"
                  placeholder="Search Place"
                  value={searchData.from}
                  onChange={(e) => handleInputChange('from', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                />
              </div>

              {/* Swap Button */}
              <div className="flex justify-center lg:justify-start">
                <button
                  type="button"
                  className="p-3 bg-primary-100 text-primary-600 rounded-full hover:bg-primary-200 transition-colors duration-200 transform hover:scale-110"
                  aria-label="Swap locations"
                >
                  <ArrowsRightLeftIcon className="h-5 w-5" />
                </button>
              </div>

              {/* To Input */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">To</label>
                <input
                  type="text"
                  placeholder="Search Place"
                  value={searchData.to}
                  onChange={(e) => handleInputChange('to', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>

            {/* Search Button */}
            <div className="mt-6 flex justify-center lg:justify-end">
              <button
                type="submit"
                className="bg-primary-500 text-white px-8 py-3 rounded-[30px] font-medium hover:bg-primary-600 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center"
              >
                View Timetable
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default SearchSection