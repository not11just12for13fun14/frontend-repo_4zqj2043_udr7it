import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[68vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/80 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-slate-900 via-indigo-700 to-sky-600">
            Working KPI Dashboard
          </h1>
          <p className="mt-6 text-lg text-slate-600">
            Monitor revenue, user growth, and conversion at a glance. Interactive, modern, and ready to plug into your data.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#metrics" className="inline-flex items-center rounded-md bg-slate-900 text-white px-4 py-2 text-sm font-medium hover:bg-slate-800 transition">
              Explore Metrics
            </a>
            <a href="/test" className="inline-flex items-center rounded-md bg-white text-slate-900 px-4 py-2 text-sm font-medium border border-slate-200 hover:bg-slate-50 transition">
              Backend Status
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
