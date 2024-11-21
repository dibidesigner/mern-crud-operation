import React from 'react'
import Header from './Header';
import Inputfield from './Inputfield';
import StudentDetails from './StudentDetails';

function Home() {
  return (
    <>
    <Header />
    <div className='w-screen flex flex-row'>
          <Inputfield className="w-[30%] h-full"/>
          <StudentDetails />
    </div>
    </>
  )
}

export default Home;