export default function Navbar() {
    return(
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-10">
            <div className="text-2xl font-black tracking-tight flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-lg">P</div>
              PaySphere
            </div>
            <ul className="hidden md:flex gap-8 text-[15px] font-medium text-gray-600">
              <li className="hover:text-blue-600 cursor-pointer transition-colors">Features</li>
              <li className="hover:text-blue-600 cursor-pointer transition-colors">Why Ledger</li>
              <li className="hover:text-blue-600 cursor-pointer transition-colors">Pricing</li>
              <li className="hover:text-blue-600 cursor-pointer transition-colors">FAQ</li>
            </ul>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-[15px] font-semibold px-4 py-2 hover:bg-gray-50 rounded-lg transition-colors">Login</button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-[15px] font-bold px-6 py-2.5 rounded-lg shadow-lg shadow-blue-200 transition-all active:scale-95">
              Get Started
            </button>
          </div>
        </div>
      </nav>
    )
}