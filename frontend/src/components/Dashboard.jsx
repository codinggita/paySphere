import dashboardMockup from "../assets/dashboard-mockup.png"

export default function Dashboard() {
    return (
        <section className="px-6 pb-24 overflow-hidden">
            <div className="max-w-6xl mx-auto relative">
                <div className="relative rounded-[2.5rem] border border-gray-200 bg-gray-50/50 p-4 shadow-2xl animate-in fade-in zoom-in duration-1000">
                    <img
                        src={dashboardMockup}
                        alt="PaySphere Dashboard"
                        className="rounded-4xl w-full shadow-lg"
                    />

                    {/* Overlay Card - Total Net Payout */}
                    <div className="absolute -bottom-10 -right-4 md:-right-12 bg-white/90 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-white/50 max-w-70 hidden sm:block animate-in slide-in-from-right-10 duration-1000 delay-500">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                                <span className="text-xl">₹</span>
                            </div>
                            <div>
                                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Total Net Payout</div>
                                <div className="text-2xl font-black">₹4,82,51.50</div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                            <span className="text-xs font-semibold text-gray-500">12 Employees paid</span>
                            <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold uppercase">Success</span>
                        </div>
                    </div>
                </div>

                {/* Trusted By logos */}
                <div className="mt-32 text-center">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-10">TRUSTED BY MODERN TEAMS IN BHARAT</p>
                    <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                        <span className="text-2xl font-black italic">CAMPPOINT</span>
                        <span className="text-2xl font-black italic">FASHION</span>
                        <span className="text-2xl font-black italic">LEADERIT</span>
                        <span className="text-2xl font-black italic">SIMPLIFY</span>
                        <span className="text-2xl font-black italic">SKILLS</span>
                    </div>
                </div>
            </div>
        </section>
    )
}