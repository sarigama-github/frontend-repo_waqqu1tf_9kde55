import { useMemo, useState } from 'react'
import { Zap, DollarSign, Gauge, Leaf } from 'lucide-react'

const format = (n) => new Intl.NumberFormat(undefined, { maximumFractionDigits: 2 }).format(n)

export default function Calculator() {
  const [hashrate, setHashrate] = useState(60) // MH/s
  const [power, setPower] = useState(120) // watts
  const [efficiency, setEfficiency] = useState(0.95) // pool efficiency
  const [price, setPrice] = useState(0.10) // $/kWh
  const [rewardUsd, setRewardUsd] = useState(1.5) // USD per MH/day (example proxy)

  const results = useMemo(() => {
    const dailyCoinsUsd = (hashrate * rewardUsd * efficiency) / 100
    const dailyPowerKwh = (power * 24) / 1000
    const dailyPowerCost = dailyPowerKwh * price
    const dailyProfit = dailyCoinsUsd - dailyPowerCost
    const profitColor = dailyProfit >= 0 ? 'text-emerald-400' : 'text-rose-400'

    return { dailyCoinsUsd, dailyPowerKwh, dailyPowerCost, dailyProfit, profitColor }
  }, [hashrate, power, efficiency, price, rewardUsd])

  return (
    <section id="calculator" className="relative py-16 sm:py-24 bg-black">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.25),transparent_40%),_radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.2),transparent_45%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10">
            <h2 className="text-xl font-semibold text-white">Quick Calculator</h2>
            <p className="text-white/60 text-sm">Adjust sliders to estimate profitability. Values are examples.</p>

            <div className="mt-6 space-y-6">
              <div>
                <label className="flex items-center justify-between text-sm text-white/70">
                  <span>Hashrate (MH/s)</span>
                  <span className="text-white">{format(hashrate)}</span>
                </label>
                <input type="range" min="10" max="200" step="1" value={hashrate} onChange={(e)=>setHashrate(Number(e.target.value))} className="w-full accent-cyan-400" />
              </div>

              <div>
                <label className="flex items-center justify-between text-sm text-white/70">
                  <span>Power (W)</span>
                  <span className="text-white">{format(power)}</span>
                </label>
                <input type="range" min="50" max="350" step="1" value={power} onChange={(e)=>setPower(Number(e.target.value))} className="w-full accent-fuchsia-400" />
              </div>

              <div>
                <label className="flex items-center justify-between text-sm text-white/70">
                  <span>Pool Efficiency</span>
                  <span className="text-white">{Math.round(efficiency*100)}%</span>
                </label>
                <input type="range" min="0.6" max="1" step="0.01" value={efficiency} onChange={(e)=>setEfficiency(Number(e.target.value))} className="w-full accent-emerald-400" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-white/70">Electricity ($/kWh)</label>
                  <input type="number" step="0.01" value={price} onChange={(e)=>setPrice(Number(e.target.value))} className="mt-1 w-full rounded-lg bg-black/60 border border-white/10 p-2 text-white" />
                </div>
                <div>
                  <label className="block text-sm text-white/70">Revenue proxy ($ per 100 MH/day)</label>
                  <input type="number" step="0.01" value={rewardUsd} onChange={(e)=>setRewardUsd(Number(e.target.value))} className="mt-1 w-full rounded-lg bg-black/60 border border-white/10 p-2 text-white" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <StatCard icon={DollarSign} label="Revenue / day" value={`$${format(results.dailyCoinsUsd)}`} />
            <StatCard icon={Zap} label="Power cost / day" value={`$${format(results.dailyPowerCost)}`} />
            <StatCard icon={Gauge} label="Energy / day" value={`${format(results.dailyPowerKwh)} kWh`} />
            <StatCard icon={Leaf} label="Profit / day" value={`$${format(results.dailyProfit)}`} extraClass={results.profitColor} />
          </div>
        </div>
      </div>
    </section>
  )
}

function StatCard({ icon: Icon, label, value, extraClass }) {
  return (
    <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10">
      <div className="flex items-center gap-3 text-white/70">
        <Icon className="h-5 w-5" />
        <span className="text-sm">{label}</span>
      </div>
      <div className={`mt-3 text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-br from-cyan-300 to-fuchsia-400 ${extraClass}`}>
        {value}
      </div>
    </div>
  )
}
