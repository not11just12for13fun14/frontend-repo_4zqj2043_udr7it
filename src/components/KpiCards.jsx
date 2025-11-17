import { useEffect, useState } from 'react'

function formatValue(value, format) {
  if (format === 'currency') {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value)
  }
  if (format === 'percent') {
    return `${value}%`
  }
  return new Intl.NumberFormat('en-US').format(value)
}

export default function KpiCards() {
  const [summary, setSummary] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/kpis`)
        const data = await res.json()
        setSummary(data.summary || [])
      } catch (e) {
        setError('Failed to load KPIs')
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) {
    return (
      <div id="metrics" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-28 rounded-xl bg-slate-100 animate-pulse" />
          ))}
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div id="metrics" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-red-600">{error}</div>
      </div>
    )
  }

  return (
    <div id="metrics" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {summary.map((kpi) => (
          <div key={kpi.label} className="rounded-xl border border-slate-200 bg-white/80 p-5 shadow-sm">
            <div className="text-slate-500 text-sm">{kpi.label}</div>
            <div className="mt-1 text-2xl font-semibold tracking-tight">{formatValue(kpi.value, kpi.format)}</div>
            <div className={`mt-2 text-sm font-medium ${kpi.delta >= 0 ? 'text-emerald-600' : 'text-rose-600'}`}>{kpi.delta >= 0 ? '▲' : '▼'} {Math.abs(kpi.delta)}%</div>
          </div>
        ))}
      </div>
    </div>
  )
}
