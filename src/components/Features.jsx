import { ShieldCheck, Zap, Cloud, Database, Timer, Leaf, Lock } from 'lucide-react'

const features = [
  { icon: ShieldCheck, title: 'DDoS Protection', desc: 'Enterprise-grade mitigation keeps your server online and lag-free.' },
  { icon: Zap, title: '1-Click Launch', desc: 'Spin up a server in seconds with our guided setup.' },
  { icon: Cloud, title: '99.9% Uptime', desc: 'Resilient infrastructure with smart auto-restarts.' },
  { icon: Database, title: 'Fast NVMe Storage', desc: 'Blazing-fast world saves and chunk loading.' },
  { icon: Timer, title: 'Backups & Snapshots', desc: 'Automatic daily backups with one-click restore.' },
  { icon: Leaf, title: 'Green Energy', desc: 'Powered entirely by renewable energy datacenters.' },
  { icon: Lock, title: 'Secure by Default', desc: 'Isolated containers with strict security policies.' },
]

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-gradient-to-b from-black to-slate-950">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_50%_-50%),rgba(16,185,129,0.08),transparent_40%]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Why gamers choose us</h2>
          <p className="mt-2 text-emerald-200/80">Performance you can feel, sustainability you can trust.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-emerald-400/20 bg-slate-900/60 backdrop-blur-md p-6 hover:border-emerald-400/40 transition relative overflow-hidden">
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-emerald-500/10 blur-2xl" />
              <div className="h-11 w-11 grid place-items-center rounded-xl bg-emerald-500/10 ring-1 ring-emerald-400/30 text-emerald-300">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-white font-semibold">{f.title}</h3>
              <p className="mt-1.5 text-sm text-emerald-100/80">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
