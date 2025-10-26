import React from 'react'
import { Twitter, Linkedin, Instagram, Rocket } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="footer" className="relative mt-10">
      <div aria-hidden className="pointer-events-none w-full h-[180px] -mb-[90px]">
        <div className="w-full h-full rounded-b-[50%] bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(33,128,141,0.08)_30%,rgba(33,128,141,0.15)_60%,#262828_100%)]" />
      </div>

      <div className="bg-[#262828] text-white pt-24 pb-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-xl bg-teal-500 flex items-center justify-center">
                  <Rocket className="h-4 w-4 text-white" />
                </div>
                <span className="font-semibold tracking-tight">SoftOrigin</span>
              </div>
              <p className="mt-3 text-sm/6 text-white/70 max-w-xs">Empowering businesses with smart solutions built for India’s growing Tier-2 cities.</p>
              <div className="mt-4 flex items-center gap-3 text-white/80">
                <a aria-label="LinkedIn" href="#" className="p-2 rounded-lg hover:bg-white/10"><Linkedin className="h-4 w-4" /></a>
                <a aria-label="Twitter" href="#" className="p-2 rounded-lg hover:bg-white/10"><Twitter className="h-4 w-4" /></a>
                <a aria-label="Instagram" href="#" className="p-2 rounded-lg hover:bg-white/10"><Instagram className="h-4 w-4" /></a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold">Products</h4>
              <ul className="mt-3 space-y-2 text-white/80 text-sm">
                <li><a href="#sbs" className="hover:underline underline-offset-4">Smart Business Suite</a></li>
                <li><a href="#edu" className="hover:underline underline-offset-4">EduConnect</a></li>
                <li><a href="#bill" className="hover:underline underline-offset-4">SmartBill</a></li>
                <li><a href="#field" className="hover:underline underline-offset-4">FieldTrack</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold">Company</h4>
              <ul className="mt-3 space-y-2 text-white/80 text-sm">
                <li><a href="#about" className="hover:underline underline-offset-4">About Us</a></li>
                <li><a href="#careers" className="hover:underline underline-offset-4">Careers</a></li>
                <li><a href="#contact" className="hover:underline underline-offset-4">Contact</a></li>
                <li><a href="#blog" className="hover:underline underline-offset-4">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold">Legal</h4>
              <ul className="mt-3 space-y-2 text-white/80 text-sm">
                <li><a href="#privacy" className="hover:underline underline-offset-4">Privacy Policy</a></li>
                <li><a href="#terms" className="hover:underline underline-offset-4">Terms of Service</a></li>
                <li><a href="#cookies" className="hover:underline underline-offset-4">Cookie Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/60 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p>Copyright © 2026 SoftOrigin Technologies</p>
            <p>Made with ❤️ in Gwalior, India</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
