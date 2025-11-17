import Navbar from './components/Navbar'
import Hero from './components/Hero'
import KpiCards from './components/KpiCards'
import Trends from './components/Trends'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100">
      <Navbar />
      <Hero />
      <KpiCards />
      <Trends />
      <footer className="py-10 text-center text-slate-500 text-sm">Built with love • KPI Dashboard</footer>
    </div>
  )
}

export default App
