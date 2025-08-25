const stats = [
  { label: 'Partner Hospitals', value: '500+' },
  { label: 'Medications Available', value: '10,000+' },
  { label: 'Happy Customers', value: '25,000+' },
  { label: 'Cities Covered', value: '16' },
]

export function Stats() {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')`
        }}
      ></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/95 via-green-800/90 to-blue-900/95"></div>
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.3' fill-rule='evenodd'%3E%3Cpath d='M20 20 L25 15 L30 20 L25 25 Z'/%3E%3Cpath d='M0 20 L5 15 L10 20 L5 25 Z'/%3E%3Cpath d='M30 0 L35 5 L30 10 L25 5 Z'/%3E%3Cpath d='M10 30 L15 35 L10 40 L5 35 Z'/%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2 drop-shadow-lg">
                {stat.value}
              </div>
              <div className="text-green-100 text-sm sm:text-base font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
