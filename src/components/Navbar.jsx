import { Menu, Search } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-500 via-sky-500 to-cyan-400" />
          <div className="text-lg font-semibold tracking-tight">KPI Dashboard</div>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              className="pl-8 pr-3 py-2 text-sm rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500 bg-white/70"
              placeholder="Search metrics"
            />
          </div>
        </div>
        <button className="md:hidden p-2 rounded-md hover:bg-slate-100">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  )
}
