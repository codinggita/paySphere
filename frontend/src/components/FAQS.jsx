import { useState } from "react";

export default function FAQS() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            q: "Is it really free for teams under 5?",
            a: "Yes. Our mission is to help Bharat's micro-enterprises grow. We offer a fully-featured free tier for teams with up to 5 employees, with no hidden charges or credit card required."
        },
        {
            q: "Is payroll easy to manage without accounting knowledge?",
            a: "Yes, you just need to tell who did'nt come to work on how many days."
        },
        {
            q: "Can I export data for my CA?",
            a: "Absolutely. You can export one-click reports to your CA."
        }
    ];

    return (
        <section className="py-24 px-6 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 tracking-tight">
                Frequently Asked Questions
            </h2>

            <div className="space-y-4">
                {faqs.map((f, i) => {
                    const isOpen = openIndex === i;

                    return (
                        <div key={i} className="border-b border-gray-100 py-6 last:border-0">
                            <button
                                className="flex justify-between items-center w-full text-left font-semibold text-lg text-gray-900"
                                onClick={() => setOpenIndex(isOpen ? null : i)}
                            >
                                {f.q}
                                <span className={`text-2xl transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
                                    +
                                </span>
                            </button>

                            {isOpen && (
                                <div className="text-gray-600 mt-4 leading-relaxed max-w-2xl animate-in fade-in slide-in-from-top-2 duration-300">
                                    {f.a}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}