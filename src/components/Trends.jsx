import { useEffect, useState } from 'react'

export default function Trends() {
  const [series, setSeries] = useState({ revenue: [], users: [], conversion: [] })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/kpis`)
        const data = await res.json()
        setSeries(data.timeseries || { revenue: [], users: [], conversion: [] })
      } catch (e) {
        setError('Failed to load trends')
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="h-64 rounded-xl bg-slate-100 animate-pulse" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-red-600">{error}</div>
    )
  }

  const Chart = ({ data, color }) => (
    <svg viewBox="0 0 100 30" className="w-full h-24 sm:h-28 md:h-32">
      {data.length > 0 && (
        <polyline
          fill="none"
          stroke={color}
          strokeWidth="2"
          points={data
            .map((d, i) => {
              const x = (i / (data.length - 1)) * 100
              const values = data.map((p) => p.value)
              const min = Math.min(...values)
              const max = Math.max(...values)
              const range = max - min || 1
              const y = 28 - ((d.value - min) / range) * 26
              return `${x},${y}`
            })
            .join(' ')}
        />
      )}
    </svg>
  )

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="rounded-xl border border-slate-200 bg-white/80 p-5 shadow-sm">
        <div className="text-slate-500 text-sm">Revenue</div>
        <Chart data={series.revenue} color="#0ea5e9" />
      </div>
      <div className="rounded-xl border border-slate-200 bg-white/80 p-5 shadow-sm">
        <div className="text-slate-500 text-sm">Users</div>
        <Chart data={series.users} color="#6366f1" />
      </div>
      <div className="rounded-xl border border-slate-200 bg-white/80 p-5 shadow-sm">
        <div className="text-slate-500 text-sm">Conversion</div>
        <Chart data={series.conversion} color="#22c55e" />
      </div>
    </div>
  )
}
