import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const items = [
  { q: 'Is it really free?', a: 'Yes. Our free tier gives you a real server with fair limits. You can upgrade anytime for more power.' },
  { q: 'How long do servers stay online?', a: 'Free servers sleep after periods of inactivity to save resources. Paid plans stay online 24/7.' },
  { q: 'Can I use mods and plugins?', a: 'Absolutely. We support Paper, Spigot, Forge, Fabric, and more.' },
  { q: 'Where are servers located?', a: 'We deploy across multiple regions to keep latency low worldwide.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-slate-950 to-black">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Frequently Asked Questions</h2>
          <p className="mt-2 text-emerald-200/80">Quick answers to common questions.</p>
        </div>

        <div className="space-y-3">
          {items.map((it, i) => (
            <div key={it.q} className="rounded-2xl border border-emerald-400/20 bg-slate-900/60 backdrop-blur-md">
              <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full flex items-center justify-between px-5 py-4 text-left">
                <span className="text-white font-medium">{it.q}</span>
                <ChevronDown className={`h-5 w-5 text-emerald-300 transition-transform ${open === i ? 'rotate-180' : ''}`} />
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-emerald-100/85 text-sm">{it.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
