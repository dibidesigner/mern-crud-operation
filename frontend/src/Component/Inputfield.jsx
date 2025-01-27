import React, { useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux';

const api_base_url = import.meta.env.VITE_API_URL;









function Inputfield({hide}, getstudentData={getstudentData} ) {

  const storeValue = useSelector((state)=>state.counterValue);
  
  const [nname, setNname]=useState("")
  const [rollno, setRollno]=useState("")
  const [batch, setBatch]=useState(0)
  const [college, setCollege]=useState("")
  const [gender, setGender]=useState("")

  console.log(nname);

  const nameFunction = (e) =>{
     setNname(e.target.value);
  }

  const rollFunction = (e) =>{
    setRollno(e.target.value);
  }

  const batchFunction =(e)=>{
    setBatch(e.target.value);
  }

  const collegeFunction=(e)=>{
    setCollege(e.target.value);
  }

  const genderFunction=(e)=>{
    setGender(e.target.value);
  }
  const studentData={
    "name":nname,
     
    "rollno":rollno,
       
    "batch":batch,
    
    "collegeName":college,

    "gender":gender

  }

  const  formsubmitFunction = async (e) =>{
    e.preventDefault();

    try {
      const senddata =await axios.post(`${api_base_url}/student/studentregister`, studentData).then(response=>{
        console.log(response.data);
        
        alert('Data Successfully Submited');
      }).catch(error =>{
        alert(error);
      })
    } catch (error) {
      
    }}

    
  
  
    

  return (
     <>
     {
      hide && 
      
      <div className='w-[30%] h-[800px] bg-green-950 flex justify-center items-center'>
        
      <form className='flex flex-col justify-center items-center gap-4   rounded p-8' onSubmit={formsubmitFunction}>
       
        <input type='text' placeholder='Enter your name' className='w-[300px] h-12 rounded pl-5' onChange={nameFunction}/>
        <input type='text' placeholder='Enter your roll no' className='w-[300px] h-12 rounded pl-5' onChange={rollFunction}/>
        <div className=' h-12 rounded flex flex-row gap-2 justify-center items-center bg-transparent '>
            <label className='ml-3 text-white'>Select Batch</label>
            <select className='w-[195px] bg-gray-100 ' onChange={batchFunction} >
              <option selected>Select</option>
              <option >2024</option>
              <option >2023</option>
              <option >2022</option>
              <option >2021</option>
            </select>
        </div>
        <input type='text' placeholder='Enter College Name' className='w-[300px] h-12 rounded pl-5' onChange={collegeFunction}/>
        <div className='flex flex-row gap-4 text-white w-[300px] justify-start'>
          <label>Select Gender :</label>
          <div className='flex flex-row gap-4'>
            <div className='flex flex-row gap-2'>
                <input type='radio' name='gender' value={"Male"} onChange={genderFunction}/>
                <label>Male</label>
            </div>
            <div className='flex flex-row'>
                <input type='radio' name='gender' value={"Female"} onChange={genderFunction} />
                <label>Female</label>
            </div>
          </div>
          
          
        </div>
        
        <button type='submit' className='w-40 h-12 bg-yellow-500 rounded-md hover:bg-yellow-600' >Submit</button>
      </form>
    </div>
  }
     </>
  )
}

export default Inputfield