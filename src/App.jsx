import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Plans from './components/Plans'
import HowItWorks from './components/HowItWorks'
import FAQ from './components/FAQ'

function App() {
  return (
    <div className="min-h-screen bg-black text-emerald-100">
      <Navbar />
      <Hero />
      <Features />
      <Plans />
      <HowItWorks />
      <FAQ />

      <footer className="border-t border-emerald-400/10 bg-black/80">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-emerald-300/70 text-sm">© {new Date().getFullYear()} BlockHost — Free Minecraft Hosting</p>
          <div className="text-sm text-emerald-300/70">Powered by renewable energy • Secure • Fast</div>
        </div>
      </footer>
    </div>
  )
}

export default App
