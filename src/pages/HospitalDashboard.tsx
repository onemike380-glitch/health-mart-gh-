import { Plus, Edit, Trash2, Package, Users, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { mockMedications } from '@/utils/mockData'
import { useAuth } from '@/contexts/AuthContext'

export function HospitalDashboard() {
  const { user } = useAuth()
  
  // Filter medications for current hospital (in real app, this would be filtered by user's hospital ID)
  const hospitalMedications = mockMedications.filter(med => med.hospital?.name === user?.name || true)

  if (!user || user.role !== 'hospital') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Access Denied</h2>
          <p className="text-gray-600">Only hospital accounts can access this dashboard.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Hospital Dashboard</h1>
          <p className="text-lg text-gray-600">
            Manage your medication inventory and orders.
          </p>
        </div>
      </div>

      <div className="container py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Medications</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{hospitalMedications.length}</div>
              <p className="text-xs text-muted-foreground">
                +2 from last month
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">In Stock</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{hospitalMedications.filter(m => m.inStock).length}</div>
              <p className="text-xs text-muted-foreground">
                94% availability rate
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">156</div>
              <p className="text-xs text-muted-foreground">
                +12% from last month
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Revenue</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₵12,450</div>
              <p className="text-xs text-muted-foreground">
                +8% from last month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Medications Table */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Medication Inventory</CardTitle>
                <CardDescription>
                  Manage your hospital's medication catalog
                </CardDescription>
              </div>
              <Button className="healthcare-gradient">
                <Plus className="h-4 w-4 mr-2" />
                Add Medication
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {hospitalMedications.map((medication) => (
                <div key={medication.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden">
                      <img
                        src={medication.images[0]}
                        alt={medication.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{medication.name}</h3>
                      <p className="text-sm text-gray-600">{medication.dosage}</p>
                      
                      <div className="flex flex-wrap gap-2 mt-2">
                        <Badge variant="outline">
                          {medication.category}
                        </Badge>
                        {medication.inStock ? (
                          <Badge className="in-stock-badge">
                            In Stock ({medication.stockQuantity})
                          </Badge>
                        ) : (
                          <Badge variant="destructive" className="out-of-stock-badge">
                            Out of Stock
                          </Badge>
                        )}
                        {medication.requiresPrescription && (
                          <Badge variant="outline" className="prescription-badge">
                            Prescription Required
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="text-lg font-bold text-primary">₵{medication.price}</p>
                      <p className="text-sm text-gray-500">per unit</p>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
