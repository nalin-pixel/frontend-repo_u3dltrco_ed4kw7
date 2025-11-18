import { Check, Cpu, Gauge, HardDrive } from 'lucide-react'

const plans = [
  {
    name: 'Free',
    price: '$0',
    tagline: 'Perfect for friends & testing',
    specs: ['2 GB RAM', '1 vCPU', '10 GB NVMe', 'DDoS Protection', 'Backups'],
    highlight: true,
  },
  {
    name: 'Plus',
    price: '$5/mo',
    tagline: 'For small communities',
    specs: ['4 GB RAM', '2 vCPU', '20 GB NVMe', 'Priority Queue', 'Scheduled Backups'],
  },
  {
    name: 'Pro',
    price: '$12/mo',
    tagline: 'Serious performance',
    specs: ['8 GB RAM', '4 vCPU', '50 GB NVMe', '24/7 Uptime', 'Premium Support'],
  },
]

export default function Plans() {
  return (
    <section id="plans" className="py-20 bg-gradient-to-b from-slate-950 to-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Pick your power level</h2>
          <p className="mt-2 text-emerald-200/80">Start free. Upgrade anytime.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className={`rounded-2xl border ${p.highlight ? 'border-emerald-400/50 bg-slate-900/70 shadow-[0_0_40px_rgba(16,185,129,0.2)]' : 'border-emerald-400/20 bg-slate-900/50'} backdrop-blur-md p-6`}>
              <div className="flex items-baseline gap-3">
                <h3 className="text-white text-xl font-semibold">{p.name}</h3>
                {p.highlight && (
                  <span className="text-xs px-2 py-1 rounded-full bg-emerald-500/15 ring-1 ring-emerald-400/30 text-emerald-200">Popular</span>
                )}
              </div>
              <p className="mt-1 text-emerald-200/80">{p.tagline}</p>
              <div className="mt-5 text-4xl font-extrabold text-white">{p.price}</div>
              <ul className="mt-5 space-y-2">
                {p.specs.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-emerald-100/90">
                    <Check className="h-4 w-4 text-emerald-400" /> {s}
                  </li>
                ))}
              </ul>
              <a href="#launch" className={`mt-6 inline-block w-full text-center px-4 py-2 rounded-lg font-semibold transition ${p.highlight ? 'bg-emerald-500 text-slate-900 hover:bg-emerald-400' : 'text-emerald-200 ring-1 ring-emerald-400/30 hover:ring-emerald-400/60'}`}>Get started</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
