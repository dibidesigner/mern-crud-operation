import react from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Crudoperation from './Component/Crudoperation'
import Home from './Component/Home'
import Navbar from './Component/Navbar'

function App() {
  return (
    <>
      
      <BrowserRouter>
      {/* This is Navbar */}
       <Navbar /> 
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crudoperation" element={<Crudoperation />} />
       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
