import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 48 48">
    <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
  </svg>
);

export default function PaySphereLogin() {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState(searchParams.get("mode") === "signup" ? "signup" : "login");

  useEffect(() => {
    const mode = searchParams.get("mode");
    if (mode === "signup" || mode === "login") {
      setActiveTab(mode);
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col font-sans">
      <div className="flex-1 flex items-center justify-center px-4 py-6 sm:py-8">

        <div className="w-full max-w-6xl bg-white rounded-2xl sm:rounded-3xl shadow-xl flex flex-col md:flex-row overflow-hidden">

          {/* LEFT PANEL (hidden on mobile) */}
          <div className="hidden md:flex md:w-[42%] bg-linear-to-br from-indigo-50 via-red-50 to-yellow-100 p-8 lg:p-10 flex-col justify-between relative overflow-hidden">

            <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-blue-500/10" />
            <div className="absolute bottom-24 -left-10 w-40 h-40 rounded-full bg-yellow-400/20" />

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-12 lg:mb-16">
                <div className="w-8 h-8 bg-blue-600 rounded-lg" />
                <span className="font-bold text-lg text-gray-900">PaySphere</span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-serif mb-4 leading-tight">
                Back to <br /> simplicity.
              </h1>

              <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
                Experience the digital ledger for modern Bharat.
              </p>
            </div>

            <div className="bg-white rounded-xl p-4 lg:p-5 shadow-md relative z-10">
              <p className="text-sm text-gray-500 mb-2">Last Month Payout</p>
              <h2 className="text-xl lg:text-2xl font-serif text-gray-900">
                ₹12,45,000
              </h2>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="w-full md:flex-1 px-5 sm:px-8 md:px-12 py-8 sm:py-10 flex flex-col justify-center">

            {/* tabs */}
            <div className="flex bg-gray-100 rounded-xl p-1 mb-6 sm:mb-8">
              <button
                onClick={() => setActiveTab("login")}
                className={`flex-1 py-2 rounded-lg text-sm font-medium transition ${activeTab === "login"
                    ? "bg-white shadow text-gray-900"
                    : "text-gray-500"
                  }`}
              >
                Login
              </button>

              <button
                onClick={() => setActiveTab("signup")}
                className={`flex-1 py-2 rounded-lg text-sm font-medium transition ${activeTab === "signup"
                    ? "bg-white shadow text-gray-900"
                    : "text-gray-500"
                  }`}
              >
                Create Account
              </button>
            </div>

            {/* LOGIN */}
            {activeTab === "login" ? (
              <>
                <h2 className="text-2xl font-serif mb-1">Welcome back</h2>
                <p className="text-gray-500 text-sm mb-6">
                  Enter your credentials
                </p>

                <input
                  type="email"
                  placeholder="name@company.com"
                  className="w-full mb-4 px-4 py-3 rounded-lg bg-gray-100 focus:bg-white focus:border focus:border-blue-500 outline-none"
                />

                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full mb-4 px-4 py-3 rounded-lg bg-gray-100 focus:bg-white focus:border focus:border-blue-500 outline-none"
                />

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition mb-5">
                  Login
                </button>

                <div className="flex items-center gap-3 mb-5">
                  <div className="flex-1 h-px bg-gray-200" />
                  <span className="text-xs text-gray-400 font-semibold">
                    OR
                  </span>
                  <div className="flex-1 h-px bg-gray-200" />
                </div>

                <button className="w-full border border-gray-200 py-3 rounded-lg flex items-center justify-center gap-2 hover:shadow">
                  <GoogleIcon />
                  Sign in with Google
                </button>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-serif mb-1">
                  Create your account
                </h2>

                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full mb-4 px-4 py-3 rounded-lg bg-gray-100 focus:bg-white focus:border focus:border-blue-500 outline-none"
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full mb-4 px-4 py-3 rounded-lg bg-gray-100 focus:bg-white focus:border focus:border-blue-500 outline-none"
                />

                <input
                  type="password"
                  placeholder="Password"
                  className="w-full mb-4 px-4 py-3 rounded-lg bg-gray-100 focus:bg-white focus:border focus:border-blue-500 outline-none"
                />

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition mb-5">
                  Create Account
                </button>

                <div className="flex items-center gap-3 mb-5">
                  <div className="flex-1 h-px bg-gray-200" />
                  <span className="text-xs text-gray-400 font-semibold">
                    OR
                  </span>
                  <div className="flex-1 h-px bg-gray-200" />
                </div>

                <button className="w-full border border-gray-200 py-3 rounded-lg flex items-center justify-center gap-2 hover:shadow">
                  <GoogleIcon />
                  Sign Up with Google
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}