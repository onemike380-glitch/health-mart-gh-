import React, { createContext, useContext, useEffect, useState } from 'react'
import { AuthContextType, User, RegisterData } from '@/types'

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in (from localStorage)
    const storedUser = localStorage.getItem('health-mart-user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    setLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Mock user data - in real app, this would come from your backend
    const mockUser: User = {
      id: '1',
      email,
      name: email.split('@')[0],
      role: email.includes('hospital') ? 'hospital' : 'patient',
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`
    }
    
    setUser(mockUser)
    localStorage.setItem('health-mart-user', JSON.stringify(mockUser))
    setLoading(false)
  }

  const register = async (data: RegisterData) => {
    setLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    const newUser: User = {
      id: Date.now().toString(),
      email: data.email,
      name: data.name,
      role: data.role,
      phone: data.phone,
      address: data.address,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${data.email}`
    }
    
    setUser(newUser)
    localStorage.setItem('health-mart-user', JSON.stringify(newUser))
    setLoading(false)
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('health-mart-user')
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
