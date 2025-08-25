import { Heart, Phone, Mail, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg healthcare-gradient">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Health Mart</h3>
                <p className="text-sm text-gray-400">Ghana</p>
              </div>
            </Link>
            <p className="text-gray-400">
              Empowering Ghana's healthcare, one click at a time. Connecting patients 
              with trusted hospitals nationwide.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/medications" className="text-gray-400 hover:text-white transition-colors">Medications</Link></li>
              <li><Link to="/hospitals" className="text-gray-400 hover:text-white transition-colors">Hospitals</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Prescription Delivery</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Online Consultation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Health Insurance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Emergency Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Lab Tests</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-gray-400">+233 50 123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-gray-400">info@healthmart.gh</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-gray-400">
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
            <a href="#" className="hover:text-white transition-colors"> Privacy Policy</a> | 
            <a href="#" className="hover:text-white transition-colors"> Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
