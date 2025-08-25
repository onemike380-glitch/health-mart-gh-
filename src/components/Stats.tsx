const stats = [
  { label: 'Partner Hospitals', value: '500+' },
  { label: 'Medications Available', value: '10,000+' },
  { label: 'Happy Customers', value: '25,000+' },
  { label: 'Cities Covered', value: '16' },
]

export function Stats() {
  return (
    <section className="py-16 healthcare-gradient">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-green-100 text-sm sm:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
