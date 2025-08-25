import { ShoppingCart, User, Heart, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useAuth } from '@/contexts/AuthContext'
import { useCart } from '@/contexts/CartContext'

export function Header() {
  const { user, logout } = useAuth()
  const { itemCount } = useCart()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg healthcare-gradient">
            <Heart className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-primary">Health Mart</h1>
            <p className="text-xs text-muted-foreground">Ghana</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </a>
          <a href="/medications" className="text-sm font-medium hover:text-primary transition-colors">
            Medications
          </a>
          <a href="/hospitals" className="text-sm font-medium hover:text-primary transition-colors">
            Hospitals
          </a>
          <a href="/about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </a>
        </nav>

        {/* User Actions */}
        <div className="flex items-center space-x-4">
          {/* Cart */}
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            {itemCount > 0 && (
              <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                {itemCount}
              </Badge>
            )}
          </Button>

          {/* User Menu */}
          {user ? (
            <div className="flex items-center space-x-2">
              <Button variant="ghost" className="hidden md:flex items-center space-x-2">
                <img 
                  src={user.avatar} 
                  alt={user.name}
                  className="w-6 h-6 rounded-full"
                />
                <span className="text-sm">{user.name}</span>
              </Button>
              <Button variant="outline" size="sm" onClick={logout}>
                Logout
              </Button>
            </div>
          ) : (
            <div className="hidden md:flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                Login
              </Button>
              <Button size="sm">
                Sign Up
              </Button>
            </div>
          )}

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container py-4 space-y-3">
            <nav className="flex flex-col space-y-3">
              <a href="/" className="text-sm font-medium hover:text-primary transition-colors">
                Home
              </a>
              <a href="/medications" className="text-sm font-medium hover:text-primary transition-colors">
                Medications
              </a>
              <a href="/hospitals" className="text-sm font-medium hover:text-primary transition-colors">
                Hospitals
              </a>
              <a href="/about" className="text-sm font-medium hover:text-primary transition-colors">
                About
              </a>
            </nav>
            
            {!user && (
              <div className="flex flex-col space-y-2 pt-3 border-t">
                <Button variant="ghost" size="sm" className="justify-start">
                  Login
                </Button>
                <Button size="sm" className="justify-start">
                  Sign Up
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
