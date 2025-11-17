import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Calculator from './components/Calculator'
import MinersTable from './components/MinersTable'
import Insights from './components/Insights'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Calculator />
      <MinersTable />
      <Insights />
      <footer className="py-10 border-t border-white/10 bg-black/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-white/50 text-sm">
          Built with a neon, futuristic theme. All profitability figures shown are illustrative examples only.
        </div>
      </footer>
    </div>
  )
}

export default App
