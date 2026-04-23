export default function Hero() {
  return (
      <section className="pt-44 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full text-xs font-bold text-blue-600 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse"></span>
            THE SMARTEST PAYROLL FOR BHARAT
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1] animate-in fade-in slide-in-from-bottom-6 duration-700">
            Run your monthly payroll <br />
            in <span className="text-blue-600">under 2 minutes.</span>
          </h1>

          <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-900">
            The digital ledger for modern Indian small businesses. Manage attendance,
            compliance, and payouts without the headache.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-10 duration-1000">
            <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold px-10 py-4 rounded-xl shadow-xl shadow-blue-200 transition-all hover:translate-y-[-2px] active:scale-95">
              Start Your Free Trial
            </button>
          </div>
        </div>
      </section>
  )
}