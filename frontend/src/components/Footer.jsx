export default function Footer() {
  return (
    <>
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto bg-blue-600 rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-200">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent)]"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-[1.1]">Stop chasing spreadsheets.</h2>
            <p className="text-xl text-blue-100 mb-12 max-w-xl mx-auto">
              It takes 5 minutes to set up and saves you 10 hours every month.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 text-lg font-bold px-10 py-4 rounded-xl shadow-xl transition-all hover:scale-105 active:scale-95">
                Start Your Free Trial
              </button>
            </div>
            <p className="mt-8 text-blue-200 text-sm font-medium">Free forever for teams up to 5 employees.</p>
          </div>
        </div>
      </section>

      <footer className="pt-24 pb-12 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-20">
            <div className="col-span-2">
              <div className="text-xl font-black tracking-tight flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-lg">P</div>
                PaySphere
              </div>
              <p className="text-gray-500 text-[15px] leading-relaxed max-w-xs mb-8">
                Building the financial infrastructure for modern Indian small businesses.
                Simplify payroll, stay compliant.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Product</h4>
              <ul className="space-y-4 text-[15px] text-gray-500">
                <li className="hover:text-blue-600 cursor-pointer transition-colors">Features</li>
                <li className="hover:text-blue-600 cursor-pointer transition-colors">Integrations</li>
                <li className="hover:text-blue-600 cursor-pointer transition-colors">Pricing</li>
                <li className="hover:text-blue-600 cursor-pointer transition-colors">Changelog</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Company</h4>
              <ul className="space-y-4 text-[15px] text-gray-500">
                <li className="hover:text-blue-600 cursor-pointer transition-colors">About Us</li>
                <li className="hover:text-blue-600 cursor-pointer transition-colors">Careers</li>
                <li className="hover:text-blue-600 cursor-pointer transition-colors">Privacy</li>
                <li className="hover:text-blue-600 cursor-pointer transition-colors">Terms</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Support</h4>
              <ul className="space-y-4 text-[15px] text-gray-500">
                <li className="hover:text-blue-600 cursor-pointer transition-colors">Help Center</li>
                <li className="hover:text-blue-600 cursor-pointer transition-colors">Contact</li>
                <li className="hover:text-blue-600 cursor-pointer transition-colors">Status</li>
                <li className="hover:text-blue-600 cursor-pointer transition-colors">Security</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-gray-100 gap-6">
            <p className="text-sm text-gray-400">© 2026 PaySphere Inc. All rights reserved.</p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                System Operational
              </span>
              <span className="cursor-pointer hover:text-gray-900 transition-colors">Privacy Policy</span>
              <span className="cursor-pointer hover:text-gray-900 transition-colors">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}