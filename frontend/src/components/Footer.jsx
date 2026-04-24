export default function Footer() {
  return (
    <>
      {/* CTA Section */}
      <section className="px-4 sm:px-6 py-16 sm:py-20 md:py-24">
        <div className="max-w-6xl mx-auto bg-blue-600 rounded-2xl sm:rounded-[2.5rem] md:rounded-[3rem] p-6 sm:p-10 md:p-16 lg:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-200">
          
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent)]"></div>

          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tight leading-[1.2] sm:leading-[1.1]">
              Stop chasing spreadsheets.
            </h2>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-100 mb-8 sm:mb-10 md:mb-12 max-w-xl mx-auto">
              It takes 5 minutes to set up and saves you 10 hours every month.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button className="w-full sm:w-auto bg-white text-blue-600 text-base sm:text-lg font-bold px-6 sm:px-10 py-3 sm:py-4 rounded-xl shadow-xl transition-all hover:scale-105 active:scale-95">
                Start Your Free Trial
              </button>
            </div>

            <p className="mt-6 sm:mt-8 text-blue-200 text-xs sm:text-sm font-medium">
              Free forever for teams up to 5 employees.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-16 sm:pt-20 md:pt-24 pb-10 sm:pb-12 px-4 sm:px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 sm:gap-12 mb-12 sm:mb-16 md:mb-20">

            {/* Brand */}
            <div className="md:col-span-2">
              <div className="text-lg sm:text-xl font-black tracking-tight flex items-center gap-2 mb-4 sm:mb-6">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-sm sm:text-lg">
                  P
                </div>
                PaySphere
              </div>

              <p className="text-gray-500 text-sm sm:text-[15px] leading-relaxed max-w-xs mb-6 sm:mb-8">
                Building the financial infrastructure for modern Indian small businesses.
                Simplify payroll, stay compliant.
              </p>
            </div>

            {/* Columns */}
            {[
              {
                title: "Product",
                links: ["Features", "Integrations", "Pricing", "Changelog"]
              },
              {
                title: "Company",
                links: ["About Us", "Careers", "Privacy", "Terms"]
              },
              {
                title: "Support",
                links: ["Help Center", "Contact", "Status", "Security"]
              }
            ].map((col, i) => (
              <div key={i}>
                <h4 className="font-bold text-xs sm:text-sm uppercase tracking-widest mb-4 sm:mb-6">
                  {col.title}
                </h4>

                <ul className="space-y-3 sm:space-y-4 text-sm sm:text-[15px] text-gray-500">
                  {col.links.map((link, j) => (
                    <li
                      key={j}
                      className="hover:text-blue-600 cursor-pointer transition-colors"
                    >
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-6 sm:pt-8 md:pt-10 border-t border-gray-100 gap-4 sm:gap-6 text-center md:text-left">
            
            <p className="text-xs sm:text-sm text-gray-400">
              © 2026 PaySphere Inc. All rights reserved.
            </p>

            <div className="flex flex-wrap justify-center md:justify-end items-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                System Operational
              </span>

              <span className="cursor-pointer hover:text-gray-900 transition-colors">
                Privacy Policy
              </span>

              <span className="cursor-pointer hover:text-gray-900 transition-colors">
                Terms of Service
              </span>
            </div>

          </div>
        </div>
      </footer>
    </>
  );
}