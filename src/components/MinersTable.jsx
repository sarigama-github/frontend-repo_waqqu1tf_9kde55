const miners = [
  { name: 'Antminer S19 Pro', algo: 'SHA-256', hashrate: '110 TH/s', power: 3250, profit: 8.5 },
  { name: 'Antminer L7', algo: 'Scrypt', hashrate: '9.5 GH/s', power: 3425, profit: 14.2 },
  { name: 'NVIDIA RTX 4090', algo: 'KawPow', hashrate: '58 MH/s', power: 220, profit: 1.2 },
  { name: 'Goldshell KD6', algo: 'Kadena', hashrate: '29.2 TH/s', power: 2560, profit: 6.7 },
  { name: 'iPollo V1', algo: 'Ethash', hashrate: '3.6 GH/s', power: 3100, profit: 4.2 },
  { name: 'Jasminer X4', algo: 'Etchash', hashrate: '2.5 GH/s', power: 1200, profit: 3.1 },
  { name: 'Antminer D9', algo: 'X11', hashrate: '1770 GH/s', power: 2839, profit: 5.3 },
  { name: 'Whatsminer M50S', algo: 'SHA-256', hashrate: '126 TH/s', power: 3276, profit: 9.1 },
]

export default function MinersTable() {
  return (
    <section id="miners" className="py-16 sm:py-24 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold text-white">Popular Miners</h2>
            <p className="text-white/60 text-sm">Example specs and est. daily profit assuming typical market conditions.</p>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/60">
          <table className="min-w-full text-sm">
            <thead className="bg-white/5 text-white/70">
              <tr>
                <th className="text-left font-medium px-4 py-3">Name</th>
                <th className="text-left font-medium px-4 py-3">Algorithm</th>
                <th className="text-left font-medium px-4 py-3">Hashrate</th>
                <th className="text-left font-medium px-4 py-3">Power</th>
                <th className="text-left font-medium px-4 py-3">Profit/day</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 text-white">
              {miners.map((m) => (
                <tr key={m.name} className="hover:bg-white/5">
                  <td className="px-4 py-3">{m.name}</td>
                  <td className="px-4 py-3 text-white/80">{m.algo}</td>
                  <td className="px-4 py-3">{m.hashrate}</td>
                  <td className="px-4 py-3">{m.power} W</td>
                  <td className="px-4 py-3"><span className="text-emerald-400">${m.profit.toFixed(2)}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
