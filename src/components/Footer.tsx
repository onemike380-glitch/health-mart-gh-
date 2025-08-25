import { Heart, Phone, Mail, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2310b981' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M30 25 L35 30 L30 35 L25 30 Z'/%3E%3Cpath d='M10 5 L15 10 L10 15 L5 10 Z'/%3E%3Cpath d='M50 5 L55 10 L50 15 L45 10 Z'/%3E%3Cpath d='M10 45 L15 50 L10 55 L5 50 Z'/%3E%3Cpath d='M50 45 L55 50 L50 55 L45 50 Z'/%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      
      <div className="container py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg healthcare-gradient shadow-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Health Mart</h3>
                <p className="text-sm text-gray-400">Ghana</p>
              </div>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Empowering Ghana's healthcare, one click at a time. Connecting patients 
              with trusted hospitals nationwide for better health outcomes.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center hover:bg-green-600/30 transition-colors cursor-pointer">
                <span className="text-green-400">📱</span>
              </div>
              <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center hover:bg-blue-600/30 transition-colors cursor-pointer">
                <span className="text-blue-400">💬</span>
              </div>
              <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center hover:bg-purple-600/30 transition-colors cursor-pointer">
                <span className="text-purple-400">📧</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-green-400">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block">Home</Link></li>
              <li><Link to="/medications" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block">Medications</Link></li>
              <li><Link to="/hospitals" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block">Hospitals</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-green-400">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block">Prescription Delivery</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block">Online Consultation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block">Health Insurance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block">Emergency Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block">Lab Tests</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-green-400">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center group-hover:bg-green-600/30 transition-colors">
                  <Phone className="h-5 w-5 text-green-400" />
                </div>
                <span className="text-gray-400 group-hover:text-white transition-colors">+233 50 123 4567</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600/30 transition-colors">
                  <Mail className="h-5 w-5 text-blue-400" />
                </div>
                <span className="text-gray-400 group-hover:text-white transition-colors">info@healthmart.gh</span>
              </div>
              <div className="flex items-start space-x-3 group">
                <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center group-hover:bg-purple-600/30 transition-colors mt-0.5">
                  <MapPin className="h-5 w-5 text-purple-400" />
                </div>
                <span className="text-gray-400 group-hover:text-white transition-colors">
                  123 Independence Ave<br />
                  Accra, Ghana
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Health Mart Ghana. All rights reserved. | 
            <a href="#" className="hover:text-white transition-colors ml-1"> Privacy Policy</a> | 
            <a href="#" className="hover:text-white transition-colors ml-1"> Terms of Service</a>
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Made with ❤️ for Ghana's healthcare future
          </p>
        </div>
      </div>
    </footer>
  )
}
