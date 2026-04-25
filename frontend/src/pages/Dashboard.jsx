import { useState } from "react";

export default function PaySphereDashboard() {
  const [activePage, setActivePage] = useState("dashboard");
  const [search, setSearch] = useState("");

  const employees = [
    { id: 1, name: "Ravi Kumar", role: "Software Engineer", salary: "₹35,000", status: "Paid", color: "#6366F1" },
    { id: 2, name: "Ananya Sharma", role: "Product Designer", salary: "₹52,000", status: "Paid", color: "#EC4899" },
    { id: 3, name: "Vikram Singh", role: "Senior Lead", salary: "₹1,15,000", status: "Pending", color: "#F59E0B" },
    { id: 4, name: "Priya Das", role: "Operations Manager", salary: "₹48,500", status: "Paid", color: "#10B981" },
  ];

  const filtered = employees.filter(
    (e) =>
      e.name.toLowerCase().includes(search.toLowerCase()) ||
      e.role.toLowerCase().includes(search.toLowerCase())
  );

  const getInitials = (name) =>
    name
      .split(" ")
      .map((w) => w[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

  return (
    <div className="min-h-screen bg-gray-100 flex font-sans">

      {/* Sidebar */}
      <aside className="w-56 bg-white border-r border-gray-200 fixed inset-y-0 left-0 flex flex-col">
        <div className="p-5 border-b border-gray-200 flex items-center gap-3">
          <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
            ₹
          </div>
          <div>
            <p className="font-bold text-sm text-gray-900">Acme Corp</p>
            <p className="text-xs text-gray-400">Payroll ID: 8821</p>
          </div>
        </div>

        <nav className="flex-1 p-3 space-y-1">
          {["Dashboard", "Employees"].map((item) => (
            <button
              key={item}
              onClick={() => setActivePage(item)}
              className={`w-full flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm transition ${
                activePage === item
                  ? "bg-indigo-50 text-blue-600 font-semibold"
                  : "text-gray-500 hover:bg-gray-50"
              }`}
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="p-3 border-t border-gray-200 space-y-2">
          <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-sm">
            Run Payroll
          </button>

          <button className="w-full px-3 py-2 text-gray-500 text-sm hover:bg-gray-50 rounded-lg">
            Help & Support
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="ml-56 flex-1 flex flex-col">

        {/* Topbar */}
        <header className="h-16 bg-white border-b border-gray-200 px-8 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-6">
            <span className="font-bold text-blue-900">Ledger Payroll</span>
            <button className="text-blue-600 font-semibold border-b-2 border-blue-600 pb-0.5">
              April 2026
            </button>
          </div>

          <div className="flex items-center gap-4 text-gray-500">
            <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white text-sm font-bold">
              AC
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="p-8">

          {/* Title */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <p className="text-sm text-gray-400">Monthly Overview</p>
              <h1 className="text-4xl font-serif text-gray-900">April 2026</h1>
            </div>

            <div className="flex gap-3">
              <button className="px-5 py-2.5 border border-gray-200 rounded-lg text-sm font-semibold hover:shadow">
                Reports
              </button>

              <button className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-bold">
                Run Payroll
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="flex gap-4 mb-10">
            <div className="flex-1 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <p className="text-xs uppercase text-gray-400 font-bold mb-2">
                Total Monthly Payout
              </p>
              <h2 className="text-3xl font-bold">₹12,45,000</h2>
              <p className="text-green-500 text-sm mt-2">+4.2% vs last month</p>
            </div>

            <div className="w-64 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <p className="text-xs uppercase text-gray-400 font-bold mb-2">
                Employees
              </p>
              <h2 className="text-4xl font-bold">24</h2>
              <p className="text-gray-400 text-sm">Active this month</p>
            </div>
          </div>

          {/* Search */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold">Employee Directory</h2>

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search employees..."
              className="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:border-blue-500 outline-none"
            />
          </div>

          {/* Grid */}
          <div className="grid grid-cols-3 gap-5">
            {filtered.map((emp) => {
              const isPending = emp.status === "Pending";

              return (
                <div key={emp.id} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition flex flex-col gap-4">

                  {/* Header */}
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold"
                        style={{ backgroundColor: emp.color }}
                      >
                        {getInitials(emp.name)}
                      </div>

                      <div>
                        <p className="font-bold text-sm">{emp.name}</p>
                        <p className="text-xs text-gray-400">{emp.role}</p>
                      </div>
                    </div>

                    <span
                      className={`text-xs font-bold px-2 py-1 rounded-md border ${
                        isPending
                          ? "bg-orange-50 text-orange-600 border-orange-200"
                          : "bg-green-50 text-green-600 border-green-200"
                      }`}
                    >
                      {emp.status}
                    </span>
                  </div>

                  {/* Salary */}
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-400 uppercase">
                      Base Salary
                    </p>
                    <p className="text-lg font-bold">{emp.salary}</p>
                  </div>

                  {/* Button */}
                  <button className="border border-gray-200 rounded-lg py-2 text-blue-600 font-semibold hover:bg-indigo-50">
                    + Add Update
                  </button>
                </div>
              );
            })}

            {/* Add Card */}
            <div className="border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center min-h-45 hover:border-blue-500 hover:bg-indigo-50 cursor-pointer">
              <p className="text-gray-400 font-semibold">+ Add Employee</p>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}