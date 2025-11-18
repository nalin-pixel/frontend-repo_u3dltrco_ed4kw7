import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[78vh] min-h-[560px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xm1zyUmdIZRP4-d1/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/80 pointer-events-none" />

      <div className="relative z-10 h-full">
        <div className="mx-auto max-w-7xl h-full px-6 flex flex-col justify-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 ring-1 ring-emerald-400/30 px-3 py-1 mb-5 text-emerald-200 text-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Now offering free Minecraft servers
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_0_20px_rgba(16,185,129,0.35)]">
              Free, green, game-ready Minecraft hosting
            </h1>
            <p className="mt-4 text-emerald-100/85 text-lg">
              Spin up your server in seconds. No credit card. DDoS protected, NVMe storage, and automated backups — all powered by renewable energy.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#launch" className="px-6 py-3 rounded-xl text-base font-semibold bg-emerald-500 text-slate-900 hover:bg-emerald-400 transition shadow-[0_0_35px_rgba(16,185,129,0.35)]">
                Launch Free Server
              </a>
              <a href="#features" className="px-6 py-3 rounded-xl text-base font-semibold text-emerald-200 ring-1 ring-emerald-400/30 hover:ring-emerald-400/60 transition">
                Explore features
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
