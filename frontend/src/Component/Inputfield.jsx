import React, { useState } from 'react'

function Inputfield() {

  const [nname, setNname]=useState("")
  const [rollno, setRollno]=useState("")
  const [batch, setBatch]=useState("")
  const [year, setYear]=useState("")

  console.log(nname);

  const nameFunction = (e) =>{
     const name = e.target.value;
     setNname(name);
  }

  const rollFunction = (e) =>{
    const roll = e.target.value;
    setRollno(roll);
  }



 

  return (
     <>
      <div className='w-[30%] h-[800px] bg-green-950 flex justify-center items-center'>
      <form className='flex flex-col justify-center items-center gap-4 border border-green-800 rounded p-8'>
        <input type='text' placeholder='Enter your name' className='w-[300px] h-12 rounded pl-5' onChange={nameFunction}/>
        <input type='text' placeholder='Enter your roll no' className='w-[300px] h-12 rounded pl-5' onChange={rollFunction}/>
        <div className=' h-12 rounded flex flex-row gap-2 justify-center items-center bg-gray-100'>
            <label className='ml-3'>Select Batch</label>
            <select className='w-[195px] bg-gray-100 font-bold' >
              <option value={2024} >2024</option>
              <option value={2023} >2023</option>
              <option value={2022} >2022</option>
              <option value={2021} >2021</option>
            </select>
        </div>
        <input type='text' placeholder='Enter College Name' className='w-[300px] h-12 rounded pl-5'/>
        <div className='flex flex-row gap-4 text-white w-[300px] justify-start'>
          <label>Select Gender :</label>
          <div className='flex flex-row gap-4'>
            <div className='flex flex-row gap-2'>
                <input type='radio' name='gender' value={"male"} />
                <label>Male</label>
            </div>
            <div className='flex flex-row'>
                <input type='radio' name='gender' value={"female"} />
                <label>Female</label>
            </div>
          </div>
          
          
        </div>
        <button type='submit' className='w-40 h-12 bg-yellow-500 rounded-md hover:bg-yellow-600' >Submit</button>
      </form>
    </div>

     </>
  )
}

export default Inputfield