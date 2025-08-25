import { ArrowRight, Shield, Clock, MapPin } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export function Hero() {
  const navigate = useNavigate()

  return (
    <section className="relative overflow-hidden py-20 sm:py-32 hero-background">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 via-green-800/85 to-blue-900/90 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')`
        }}
      ></div>
      
      <div className="container relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="max-w-2xl">
            <div className="mb-6">
              <div className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm border border-white/30 px-4 py-2 text-sm font-medium text-white mb-4">
                <Shield className="mr-2 h-4 w-4" />
                Trusted Healthcare Platform
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Your Health,
                <span className="text-green-300"> Our Priority</span>
              </h1>
            </div>
            
            <p className="text-lg text-green-50 mb-8 leading-relaxed">
              Health Mart Ghana connects you directly with verified hospitals across the country. 
              Get authentic medications delivered safely to your doorstep with our trusted healthcare network.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-white text-green-800 hover:bg-green-50 font-semibold"
                onClick={() => navigate('/medications')}
              >
                Browse Medications
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white/10 backdrop-blur-sm"
                onClick={() => navigate('/hospitals')}
              >
                Find Hospitals
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/30">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Verified Hospitals</h3>
                  <p className="text-sm text-green-100">Only licensed facilities</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/30">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">24/7 Service</h3>
                  <p className="text-sm text-green-100">Round-the-clock support</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/30">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Nationwide</h3>
                  <p className="text-sm text-green-100">All regions covered</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative mx-auto w-full max-w-lg">
              <img
                src="https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
                alt="Healthcare professional with digital interface"
                className="w-full rounded-2xl shadow-2xl border-4 border-white/20"
              />
              
              {/* Floating stats */}
              <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-4 border border-white/50">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🏥</span>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">500+</p>
                    <p className="text-sm text-gray-600">Partner Hospitals</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-4 border border-white/50">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">💊</span>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">10K+</p>
                    <p className="text-sm text-gray-600">Medications</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
