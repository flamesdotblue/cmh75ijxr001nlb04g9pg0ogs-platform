import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, PlayCircle } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-70 dark:opacity-40" aria-hidden>
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-teal-500/20 blur-3xl" />
        <div className="absolute top-40 -right-16 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-24 md:pt-28 md:pb-32 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16,1,0.3,1] }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--text-primary)]"
        >
          Build Your Business With
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-500"> Smart Solutions</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.16,1,0.3,1] }}
          className="mt-5 text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto"
        >
          Affordable SaaS platform tailored for SMEs and educational institutions in India. GST-compliant billing, unified dashboards, and real-time insights—built for Tier-2 cities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.16,1,0.3,1] }}
          className="mt-8 flex items-center justify-center gap-3"
        >
          <a
            href="#get-started"
            className="inline-flex items-center gap-2 rounded-lg bg-teal-700 px-5 py-3 text-white shadow-sm transition-transform duration-200 hover:scale-[1.02]"
          >
            Start Free Trial
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#demo"
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] px-5 py-3 text-[var(--text-primary)] hover:bg-[var(--surface-secondary)]"
          >
            <PlayCircle className="h-5 w-5" /> Watch Demo
          </a>
        </motion.div>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { title: 'Smart Business Suite', color: 'from-teal-500 to-cyan-500' },
            { title: 'EduConnect', color: 'from-teal-500 to-emerald-500' },
            { title: 'SmartBill', color: 'from-cyan-500 to-teal-500' },
            { title: 'FieldTrack', color: 'from-emerald-500 to-cyan-500' },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + i * 0.05, duration: 0.5, ease: [0.16,1,0.3,1] }}
              className="relative overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-sm"
            >
              <div className={`absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gradient-to-br ${card.color} opacity-20`} />
              <div className="relative">
                <div className={`h-10 w-10 rounded-lg bg-gradient-to-br ${card.color} shadow-sm`} />
                <div className="mt-3 font-medium text-sm text-[var(--text-primary)] leading-snug">{card.title}</div>
                <div className="mt-1 text-xs text-[var(--text-tertiary)]">Click to learn more</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div aria-hidden className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-0 w-[120%] h-[180px]">
        <div className="w-full h-full rounded-t-[50%] bg-[radial-gradient(120%_100%_at_50%_100%,rgba(20,115,125,0.12)_0%,rgba(50,184,198,0.10)_40%,transparent_70%)]" />
      </div>
    </section>
  )
}
