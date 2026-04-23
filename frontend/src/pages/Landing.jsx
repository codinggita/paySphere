import Navbar from "../components/Navbar"
import Hero from "../components/Hero"

export default function Landing() {
  return (
    <div className="min-h-screen bg-white font-['Outfit'] text-[#1A1A1A] selection:bg-blue-100 selection:text-blue-600">
        <Navbar />
        <Hero />
    </div>
  )
}