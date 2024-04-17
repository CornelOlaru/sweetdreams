import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import "./components/navbar.css"
import Products from './routes/Products'
import About from './routes/About'
import Contact from './routes/Contact'

function App() {

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
