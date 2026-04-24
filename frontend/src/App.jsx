import { BrowserRouter, Routes, Route } from "react-router-dom"
import Landing from "./pages/Landing"
import LoginSignUp from "./pages/LoginSignUp"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<LoginSignUp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App