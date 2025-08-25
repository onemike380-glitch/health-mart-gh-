import { Shield, Truck, Clock, Users, Smartphone, HeartHandshake } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const features = [
  {
    icon: Shield,
    title: 'Verified Medications',
    description: 'All medications are sourced directly from licensed hospitals and verified healthcare facilities across Ghana.',
    color: 'text-green-600 bg-green-100'
  },
  {
    icon: Truck,
    title: 'Safe Delivery',
    description: 'Professional delivery service ensuring your medications reach you safely and securely at your doorstep.',
    color: 'text-blue-600 bg-blue-100'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock customer support and emergency assistance for urgent medication needs.',
    color: 'text-purple-600 bg-purple-100'
  },
  {
    icon: Users,
    title: 'Expert Consultation',
    description: 'Connect with qualified pharmacists and healthcare professionals for medication guidance.',
    color: 'text-orange-600 bg-orange-100'
  },
  {
    icon: Smartphone,
    title: 'Easy Ordering',
    description: 'Simple, intuitive platform that makes ordering medications as easy as a few clicks.',
    color: 'text-pink-600 bg-pink-100'
  },
  {
    icon: HeartHandshake,
    title: 'Trusted Network',
    description: 'Partnered with over 500 hospitals and healthcare facilities across all regions of Ghana.',
    color: 'text-teal-600 bg-teal-100'
  }
]

export function Features() {
  return (
    <section className="relative py-20 medical-pattern-bg">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full bg-repeat bg-center"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23059669' fill-opacity='0.1' fill-rule='evenodd'%3E%3Ccircle cx='30' cy='30' r='3'/%3E%3Ccircle cx='10' cy='10' r='3'/%3E%3Ccircle cx='50' cy='10' r='3'/%3E%3Ccircle cx='10' cy='50' r='3'/%3E%3Ccircle cx='50' cy='50' r='3'/%3E%3Cpath d='M30 15 L35 20 L30 25 L25 20 Z'/%3E%3Cpath d='M15 30 L20 35 L15 40 L10 35 Z'/%3E%3Cpath d='M45 30 L50 35 L45 40 L40 35 Z'/%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>
      
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/90 via-white/95 to-blue-50/90"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-800 mb-4">
            ✨ Premium Healthcare Services
          </div>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Why Choose Health Mart Ghana?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're revolutionizing healthcare access in Ghana with our comprehensive platform 
            that connects patients directly with trusted healthcare providers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm hover:bg-white/90">
                <CardHeader>
                  <div className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-4 shadow-sm`}>
                    <Icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
