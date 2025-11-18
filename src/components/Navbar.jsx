import { useState } from 'react'
import { Menu, X, Server, Leaf } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative z-20">
      <nav className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="h-10 w-10 grid place-items-center rounded-xl bg-emerald-500/10 ring-1 ring-emerald-400/30 text-emerald-300 group-hover:text-emerald-200 transition-colors">
            <Server className="h-6 w-6" />
          </div>
          <div>
            <p className="font-bold text-white tracking-tight">BlockHost</p>
            <p className="text-xs text-emerald-300/70">Free Minecraft Hosting</p>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-emerald-100/80 hover:text-white transition-colors">Features</a>
          <a href="#plans" className="text-emerald-100/80 hover:text-white transition-colors">Plans</a>
          <a href="#how" className="text-emerald-100/80 hover:text-white transition-colors">How it works</a>
          <a href="#faq" className="text-emerald-100/80 hover:text-white transition-colors">FAQ</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#launch" className="px-4 py-2 rounded-lg text-sm font-medium text-emerald-300 hover:text-white ring-1 ring-emerald-400/30 hover:ring-emerald-400/60 transition">Login</a>
          <a href="#launch" className="px-4 py-2 rounded-lg text-sm font-semibold bg-emerald-500 text-slate-900 hover:bg-emerald-400 transition shadow-[0_0_25px_rgba(16,185,129,0.35)]">Launch Free Server</a>
        </div>

        <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="md:hidden text-emerald-200">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden px-6 pb-6">
          <div className="rounded-2xl border border-emerald-400/20 bg-slate-900/70 backdrop-blur-md p-4 space-y-2">
            <a href="#features" className="block px-3 py-2 rounded-lg text-emerald-100/90 hover:bg-emerald-500/10">Features</a>
            <a href="#plans" className="block px-3 py-2 rounded-lg text-emerald-100/90 hover:bg-emerald-500/10">Plans</a>
            <a href="#how" className="block px-3 py-2 rounded-lg text-emerald-100/90 hover:bg-emerald-500/10">How it works</a>
            <a href="#faq" className="block px-3 py-2 rounded-lg text-emerald-100/90 hover:bg-emerald-500/10">FAQ</a>
            <div className="pt-2 flex gap-2">
              <a href="#launch" className="flex-1 px-4 py-2 rounded-lg text-sm font-medium text-emerald-300 hover:text-white ring-1 ring-emerald-400/30 text-center">Login</a>
              <a href="#launch" className="flex-1 px-4 py-2 rounded-lg text-sm font-semibold bg-emerald-500 text-slate-900 hover:bg-emerald-400 text-center">Launch</a>
            </div>
            <div className="flex items-center gap-2 text-emerald-300/70 text-sm pt-1">
              <Leaf className="h-4 w-4" /> 100% green energy powered
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
