import { Menu, Cpu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-fuchsia-500 via-cyan-400 to-blue-500 p-[1px]">
            <div className="h-full w-full rounded-lg bg-black grid place-items-center">
              <Cpu className="h-5 w-5 text-cyan-300" />
            </div>
          </div>
          <span className="text-white font-semibold tracking-wide">Neon Miner Calc</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
          <a href="#calculator" className="hover:text-white transition">Calculator</a>
          <a href="#miners" className="hover:text-white transition">Miners</a>
          <a href="#insights" className="hover:text-white transition">Insights</a>
        </nav>
        <button className="md:hidden p-2 rounded-lg border border-white/10 text-white/80 hover:text-white hover:border-white/20">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  )
}
