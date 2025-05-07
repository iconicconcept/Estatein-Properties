import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import './index.css'
import Home from './Pages/Home'
import About from "./Pages/About"
import Properties from "./Pages/Properties"
import Service from "./Pages/service"
import Contact from "./Pages/Contact"

function App() {
  return (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
  )
}

export default App
