import type { BenefitCard } from '../types'

const Benefits: React.FC = () => {
  const benefits: BenefitCard[] = [
    {
      id: 'best-deals',
      title: 'Best deals &',
      subtitle: 'Prices on Hotels',
      icon: (
        <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
          <span className="text-yellow-600 text-xl font-bold">%</span>
        </div>
      ),
      color: 'bg-yellow-50 border-yellow-200'
    },
    {
      id: 'premium-support',
      title: '24/7',
      subtitle: 'Premium Support',
      icon: (
        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
          <span className="text-orange-600 text-xl font-bold">🎧</span>
        </div>
      ),
      color: 'bg-orange-50 border-orange-200'
    },
    {
      id: 'largest-selection',
      title: 'Largest Selection',
      subtitle: 'of Hotels',
      icon: (
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
          <span className="text-blue-600 text-xl font-bold">🏨</span>
        </div>
      ),
      color: 'bg-blue-50 border-blue-200'
    },
    {
      id: 'pay-hotel',
      title: 'Pay at Hotel',
      subtitle: 'option available',
      icon: (
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
          <span className="text-green-600 text-xl font-bold">💳</span>
        </div>
      ),
      color: 'bg-green-50 border-green-200'
    }
  ]

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {benefits.map((benefit) => (
            <div 
              key={benefit.id}
              className={`${benefit.color} border-2 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-lg hover:transform hover:scale-105`}
            >
              <div className="flex items-start space-x-4">
                {benefit.icon}
                <div>
                  <h3 className="font-semibold text-gray-900 text-base sm:text-lg leading-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    {benefit.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits