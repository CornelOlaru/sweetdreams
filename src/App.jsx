import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import "./components/navbar.css"
import Products from './routes/Products'
import About from './routes/About'
import Contact from './routes/Contact'
import Categories from './components/Categories'

function App() {

  return (
    <div className=''>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/category/:categoryId" element={<Categories />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
