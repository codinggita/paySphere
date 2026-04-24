export default function Steps() {
  return (
      <section className="py-24 bg-gray-50/50 border-y border-gray-100 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Payroll in three simple steps.</h2>
          <p className="text-lg text-gray-500 mb-16">We stripped away the complexity of traditional payroll systems.</p>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: "👥", title: "Add your Team", color: "bg-blue-50" },
              { icon: "📋", title: "Log Daily Updates", color: "bg-indigo-50" },
              { icon: "💸", title: "Click and Payout", color: "bg-violet-50" }
            ].map((step, i) => (
              <div key={i} className="group p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform`}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed text-[15px]">
                  Import your existing team in seconds. Our automated system handles the migration.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}