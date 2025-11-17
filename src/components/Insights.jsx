import { Shield, BatteryCharging, Coins, Sparkles } from 'lucide-react'

const tips = [
  {
    icon: Coins,
    title: 'Diversify Revenue',
    text: 'Consider dual mining or auto-switching pools to capture higher yield opportunities.'
  },
  {
    icon: BatteryCharging,
    title: 'Optimize Power',
    text: 'Undervolt and tune fans to reduce watts while maintaining hashrate for better efficiency.'
  },
  {
    icon: Shield,
    title: 'Secure Operations',
    text: 'Use VPNs, segregated networks, and keep firmware updated to protect your rigs.'
  },
  {
    icon: Sparkles,
    title: 'Plan ROI',
    text: 'Track market cycles and hardware resale value to forecast realistic payback periods.'
  },
]

export default function Insights() {
  return (
    <section id="insights" className="py-16 sm:py-24 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-semibold text-white">Operational Insights</h2>
        <p className="text-white/60 text-sm mb-8">Practical guidance to improve uptime and profitability.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {tips.map((t) => (
            <div key={t.title} className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 text-white">
              <t.icon className="h-5 w-5 text-cyan-300" />
              <h3 className="mt-3 font-semibold">{t.title}</h3>
              <p className="mt-2 text-sm text-white/70">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
