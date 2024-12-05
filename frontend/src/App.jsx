import react from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Crudoperation from './Component/Crudoperation'
import Home from './Component/Home'
import Navbar from './Component/Navbar'
import Portfolio from './Component/Portfolio/Portfolio'
import Aboutus from './Component/Aboutus/Aboutus'
import Footer from './Component/Footer'
import Signup from './Component/Signup'

function App() {
  return (
    <>
      
      <BrowserRouter>
      {/* This is Navbar */}
       <Navbar /> 
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crudoperation" element={<Crudoperation />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/signup" element={<Signup />} />
       </Routes>
       <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
