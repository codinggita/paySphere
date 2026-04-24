import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-6">
          <div className="text-xl sm:text-2xl font-black tracking-tight flex items-center gap-2">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-sm sm:text-lg">
              P
            </div>
            PaySphere
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 lg:gap-8 text-[14px] lg:text-[15px] font-medium text-gray-600">
            <li className="hover:text-blue-600 cursor-pointer transition-colors">Features</li>
            <li className="hover:text-blue-600 cursor-pointer transition-colors">Why Ledger</li>
            <li className="hover:text-blue-600 cursor-pointer transition-colors">Pricing</li>
            <li className="hover:text-blue-600 cursor-pointer transition-colors">FAQ</li>
          </ul>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3 lg:gap-4">
          <button className="text-[14px] lg:text-[15px] font-semibold px-3 lg:px-4 py-2 hover:bg-gray-50 rounded-lg transition-colors">
            Login
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-[14px] lg:text-[15px] font-bold px-4 lg:px-6 py-2 rounded-lg shadow-lg shadow-blue-200 transition-all active:scale-95">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-6 bg-white border-t border-gray-100">
          <ul className="flex flex-col gap-4 text-[15px] font-medium text-gray-700 mt-4">
            <li>Features</li>
            <li>Why Ledger</li>
            <li>Pricing</li>
            <li>FAQ</li>
          </ul>

          <div className="flex flex-col gap-3 mt-6">
            <button className="w-full text-[15px] font-semibold px-4 py-2 hover:bg-gray-50 rounded-lg transition-colors">
              Login
            </button>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-[15px] font-bold px-6 py-2.5 rounded-lg shadow-lg shadow-blue-200 transition-all active:scale-95">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}