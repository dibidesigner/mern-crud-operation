

import Inputfield from './Inputfield';
import StudentDetails from './StudentDetails';
import React, { useState } from 'react'

function Home() {
  const [hide, setHide] = useState(true)

  
  const hideInputbox = () =>{
   
    setHide(!hide);
 
  
}  
 
  console.log(hide);
  return (
    <>
    
    <div className='w-screen flex flex-row'>
          <Inputfield hide={hide}/>
          <StudentDetails hideInputbox={hideInputbox} hide={hide}/>
    </div>
    </>
  )
}

export default Home;