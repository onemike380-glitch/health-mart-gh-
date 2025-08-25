import { useState } from 'react'
import { Search, Filter, ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { mockMedications, medicationCategories } from '@/utils/mockData'
import { useCart } from '@/contexts/CartContext'
import { Medication } from '@/types'

export function Medications() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All Categories')
  const [showFilters, setShowFilters] = useState(false)
  const { addItem } = useCart()

  const filteredMedications = mockMedications.filter(medication => {
    const matchesSearch = medication.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         medication.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All Categories' || medication.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleAddToCart = (medication: Medication) => {
    addItem(medication)
    // You could add a toast notification here
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Medications</h1>
          <p className="text-lg text-gray-600">
            Browse our extensive collection of verified medications from trusted hospitals across Ghana.
          </p>
        </div>
      </div>

      <div className="container py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <div className="sticky top-4 space-y-6">
              {/* Search */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-4">Search</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search medications..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  {medicationCategories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                        selectedCategory === category
                          ? 'bg-primary text-white'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Filters */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-4">Quick Filters</h3>
                <div className="space-y-3">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">In Stock Only</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">No Prescription Required</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">Free Delivery</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">
                Showing {filteredMedications.length} of {mockMedications.length} medications
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>

            {/* Medications Grid */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredMedications.map((medication) => (
                <Card key={medication.id} className="medication-card group">
                  <CardHeader className="p-4">
                    <div className="aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden">
                      <img
                        src={medication.images[0]}
                        alt={medication.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-lg leading-tight">{medication.name}</CardTitle>
                        <div className="text-right">
                          <p className="text-lg font-bold text-primary">₵{medication.price}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {medication.requiresPrescription && (
                          <Badge variant="outline" className="prescription-badge">
                            Prescription Required
                          </Badge>
                        )}
                        {medication.inStock ? (
                          <Badge className="in-stock-badge">
                            In Stock ({medication.stockQuantity})
                          </Badge>
                        ) : (
                          <Badge variant="destructive" className="out-of-stock-badge">
                            Out of Stock
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-4 pt-0">
                    <CardDescription className="line-clamp-2 mb-4">
                      {medication.description}
                    </CardDescription>
                    
                    <div className="space-y-2 mb-4 text-sm text-gray-600">
                      <p><span className="font-medium">Dosage:</span> {medication.dosage}</p>
                      <p><span className="font-medium">Hospital:</span> {medication.hospital?.name}</p>
                    </div>
                    
                    <Button
                      className="w-full"
                      onClick={() => handleAddToCart(medication)}
                      disabled={!medication.inStock}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      {medication.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredMedications.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No medications found matching your criteria.</p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => {
                    setSearchTerm('')
                    setSelectedCategory('All Categories')
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
