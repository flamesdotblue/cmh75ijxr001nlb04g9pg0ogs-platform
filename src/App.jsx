import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductsOverview from './components/ProductsOverview'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)] transition-colors duration-300">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <ProductsOverview />
      </main>
      <Footer />
    </div>
  )
}
