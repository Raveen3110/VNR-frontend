import { 
    ClockIcon, 
    ShieldCheckIcon, 
    DevicePhoneMobileIcon, 
    ClockIcon as Clock24Icon 
  } from '@heroicons/react/24/outline'
  import type { FeatureCard } from '../types'
  
  const Features: React.FC = () => {
    const features: FeatureCard[] = [
      {
        id: 'fast-local',
        title: 'Fast, Local & Reliable',
        description: 'Quick and dependable local services',
        icon: <ClockIcon className="h-12 w-12 text-primary-500" />
      },
      {
        id: 'verified-trusted',
        title: 'Verified & Trusted',
        description: 'All service providers are verified',
        icon: <ShieldCheckIcon className="h-12 w-12 text-primary-500" />
      },
      {
        id: 'endless-convenience',
        title: 'Endless Convenience',
        description: 'Available whenever you need it',
        icon: <DevicePhoneMobileIcon className="h-12 w-12 text-primary-500" />
      },
      {
        id: 'available-24x7',
        title: 'Available 24x7',
        description: 'Round the clock service availability',
        icon: <Clock24Icon className="h-12 w-12 text-primary-500" />
      }
    ]
  
    return (
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Us?
            </h2>
            <p className="text-xl sm:text-2xl text-gray-600">
              Because Local Shouldn't Mean Low-Tech
            </p>
          </div>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <div 
                key={feature.id}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="bg-white rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default Features