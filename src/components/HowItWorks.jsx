import { MousePointerClick, PlayCircle, Settings, Rocket } from 'lucide-react'

const steps = [
  { icon: MousePointerClick, title: 'Create account', desc: 'Use your email or single sign-on to get started.' },
  { icon: Settings, title: 'Pick version & mods', desc: 'Paper, Forge, Fabric — choose what you love.' },
  { icon: PlayCircle, title: 'Launch instantly', desc: 'We provision your server in seconds.' },
  { icon: Rocket, title: 'Invite friends', desc: 'Share your IP and start your adventure.' },
]

export default function HowItWorks() {
  return (
    <section id="how" className="py-20 bg-gradient-to-b from-black to-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white">How it works</h2>
          <p className="mt-2 text-emerald-200/80">From zero to a live world in four clicks.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="rounded-2xl border border-emerald-400/20 bg-slate-900/60 backdrop-blur-md p-6">
              <div className="h-11 w-11 grid place-items-center rounded-xl bg-emerald-500/10 ring-1 ring-emerald-400/30 text-emerald-300">
                <s.icon className="h-6 w-6" />
              </div>
              <div className="mt-3 text-emerald-200/80">Step {i + 1}</div>
              <h3 className="text-white font-semibold">{s.title}</h3>
              <p className="mt-1.5 text-sm text-emerald-100/80">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
