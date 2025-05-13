import {HashRouter as Router, Routes, Route, HashRouter} from "react-router-dom"

import './index.css'
import Home from './Pages/Home'
import About from "./Pages/About"
import Properties from "./Pages/Properties"
import Service from "./Pages/Service"
import Contact from "./Pages/Contact"

function App() {
  return (
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </HashRouter>
  )
}

export default App
