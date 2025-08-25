export interface User {
  id: string
  email: string
  name: string
  role: 'patient' | 'hospital' | 'admin'
  avatar?: string
  phone?: string
  address?: string
}

export interface Hospital {
  id: string
  name: string
  location: string
  phone: string
  email: string
  verified: boolean
  logo?: string
  description?: string
}

export interface Medication {
  id: string
  name: string
  description: string
  price: number
  category: string
  manufacturer: string
  dosage: string
  sideEffects?: string
  instructions?: string
  inStock: boolean
  stockQuantity: number
  hospitalId: string
  hospital?: Hospital
  images: string[]
  requiresPrescription: boolean
  expiryDate: string
}

export interface CartItem {
  id: string
  medication: Medication
  quantity: number
  addedAt: string
}

export interface Order {
  id: string
  userId: string
  items: CartItem[]
  total: number
  status: 'pending' | 'confirmed' | 'preparing' | 'ready' | 'completed' | 'cancelled'
  createdAt: string
  updatedAt: string
  deliveryAddress: string
  paymentMethod: 'cash' | 'mobile_money' | 'card'
  prescriptionUrl?: string
}

export interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  register: (data: RegisterData) => Promise<void>
  logout: () => void
  loading: boolean
}

export interface RegisterData {
  email: string
  password: string
  name: string
  role: 'patient' | 'hospital'
  phone?: string
  address?: string
  hospitalName?: string
  hospitalLocation?: string
}

export interface CartContextType {
  items: CartItem[]
  addItem: (medication: Medication, quantity?: number) => void
  removeItem: (medicationId: string) => void
  updateQuantity: (medicationId: string, quantity: number) => void
  clearCart: () => void
  total: number
  itemCount: number
}
