import React, { createContext, useContext, useEffect, useState } from 'react'
import { CartContextType, CartItem, Medication } from '@/types'

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  useEffect(() => {
    // Load cart from localStorage
    const storedCart = localStorage.getItem('health-mart-cart')
    if (storedCart) {
      setItems(JSON.parse(storedCart))
    }
  }, [])

  useEffect(() => {
    // Save cart to localStorage whenever it changes
    localStorage.setItem('health-mart-cart', JSON.stringify(items))
  }, [items])

  const addItem = (medication: Medication, quantity = 1) => {
    setItems(prevItems => {
      const existingItem = prevItems.find(item => item.medication.id === medication.id)
      
      if (existingItem) {
        return prevItems.map(item =>
          item.medication.id === medication.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      
      const newItem: CartItem = {
        id: Date.now().toString(),
        medication,
        quantity,
        addedAt: new Date().toISOString()
      }
      
      return [...prevItems, newItem]
    })
  }

  const removeItem = (medicationId: string) => {
    setItems(prevItems => prevItems.filter(item => item.medication.id !== medicationId))
  }

  const updateQuantity = (medicationId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(medicationId)
      return
    }
    
    setItems(prevItems =>
      prevItems.map(item =>
        item.medication.id === medicationId
          ? { ...item, quantity }
          : item
      )
    )
  }

  const clearCart = () => {
    setItems([])
  }

  const total = items.reduce((sum, item) => sum + (item.medication.price * item.quantity), 0)
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <CartContext.Provider value={{
      items,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      total,
      itemCount
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
