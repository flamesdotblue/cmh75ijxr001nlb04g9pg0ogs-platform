import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Database, GraduationCap, Receipt, MapPin } from 'lucide-react'

const products = [
  {
    key: 'sbs',
    name: 'Smart Business Suite',
    desc: 'Modular ERP/CRM for finance, sales, inventory, and HR—streamlined for SMEs.',
    icon: Database,
    features: ['Unified CRM & ERP', 'GST-ready ledgers', 'Custom dashboards'],
  },
  {
    key: 'edu',
    name: 'EduConnect',
    desc: 'All-in-one school management: admissions, fees, attendance, and more.',
    icon: GraduationCap,
    features: ['Parent portal', 'Attendance & exams', 'Fee billing & receipts'],
  },
  {
    key: 'bill',
    name: 'SmartBill',
    desc: 'Fast GST billing with e-invoicing, inventory, and multi-branch support.',
    icon: Receipt,
    features: ['E-invoice ready', 'Barcode & stock', 'Reports & analytics'],
  },
  {
    key: 'field',
    name: 'FieldTrack',
    desc: 'Real-time field employee tracking with routes, tasks, and proof-of-visit.',
    icon: MapPin,
    features: ['Live GPS & routes', 'Geo-verified tasks', 'Performance insights'],
  },
]

export default function ProductsOverview() {
  return (
    <section id="products" className="relative py-16 sm:py-20">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="h-full w-full opacity-[0.04] dark:opacity-[0.06] bg-[radial-gradient(circle,rgba(0,0,0,0.7)_1px,transparent_1px)] [background-size:12px_12px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">Everything You Need, All in One Place</h2>
          <p className="mt-3 text-[var(--text-secondary)]">Four powerful apps that work beautifully together with a unified dashboard and mobile-first design.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((p, i) => (
            <motion.article
              key={p.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05, duration: 0.5, ease: [0.16,1,0.3,1] }}
              className="group relative overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-gradient-to-br from-teal-500/5 to-cyan-500/5" />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-lg bg-gradient-to-br from-teal-600 to-cyan-500 text-white flex items-center justify-center shadow-sm">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold leading-snug">{p.name}</h3>
                </div>
                <p className="mt-3 text-sm text-[var(--text-secondary)] leading-relaxed">{p.desc}</p>
                <ul className="mt-4 space-y-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-teal-600" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a href={`#${p.key}`} className="mt-4 inline-flex items-center gap-2 text-sm text-teal-700 hover:underline">
                  Learn more
                  <span aria-hidden>→</span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
