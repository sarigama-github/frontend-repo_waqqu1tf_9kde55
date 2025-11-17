import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[72vh] min-h-[520px] w-full overflow-hidden bg-black" id="hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/44zrIZf-iQZhbQNQ/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex flex-col items-center justify-center text-center">
        <p className="text-xs sm:text-sm tracking-[0.35em] uppercase text-white/60">Crypto Mining Profitability</p>
        <h1 className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-cyan-300 via-fuchsia-400 to-blue-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.35)]">
          Neon Mining Calculator
        </h1>
        <p className="mt-4 max-w-2xl text-white/80">
          Estimate daily profits, power usage, and break-even timelines across popular GPUs and ASICs with live-like presets.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a href="#calculator" className="px-5 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-semibold shadow-[0_0_30px_rgba(236,72,153,0.25)] hover:brightness-110 transition">Start Calculating</a>
          <a href="#miners" className="px-5 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 transition">See Miner Table</a>
        </div>
      </div>
    </section>
  )
}
