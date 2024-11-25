import React, { useEffect, useState } from 'react'
import axios from 'axios'


function StudentDetails() {
  const [studentdata, setStudentdata] = useState([]);



  const getstudentData = async ()=>{
    const response = await axios.get('http://localhost:3000/student/getstudentData');
    setStudentdata(response.data);
    }

  
  useEffect(()=>{
    getstudentData();
  },[])

  const deletedata =()=>{
    
  }



  return (
    <>
      
        
          
          
       
      <table className='w-[70%] flex flex-col justify-start items-center'>
        <tr className='w-full h-12 bg-yellow-700 flex justify-center items-center text-white'>
            <th className='w-[15%] inline-flex justify-center items-center'>Name</th>
            <th className='w-[15%] inline-flex justify-center items-center'>Roll No</th>
            <th className='w-[15%] inline-flex justify-center items-center'>Batch</th>
            <th className='w-[15%] inline-flex justify-center items-center'>College Name</th>
            <th className='w-[15%] inline-flex justify-center items-center'>Gender</th>
            <th className='w-[25%] inline-flex justify-center items-center'>Action</th>
            
        </tr>
        <div className='w-full h-[700px] overflow-hidden overflow-y-auto'>
        {
        studentdata.map((newdata, index)=>(
        
          <tr className='w-full h-12 flex justify-around items-center border border-b-gray-200 ' key={newdata.id}>
              <td className='w-[15%] inline-flex justify-center items-center'>{newdata.name}</td>
              <td className='w-[15%] inline-flex justify-center items-center'>{newdata.rollno}</td>
              <td className='w-[15%] inline-flex justify-center items-center'>{newdata.batch}</td>
              <td className='w-[15%] inline-flex justify-center items-center'>{newdata.collegeName}</td>
              <td className='w-[15%] inline-flex justify-center items-center'>{index}</td>
              <td className='w-[25%]  flex-row gap-4 text-white inline-flex justify-center items-center'>
                  <button className=''>
                    <div className='w-24 h80 bg-green-700 rounded' onClick={deletedata}>Edit</div>
                  </button>
                  <button className=''>
                    <div className='w-24 h80 bg-red-700 rounded'>Delete</div>
                  </button>
              </td>
              
              
          </tr>
          
         )
          
        )
      }
      </div>
      </table>
    </>
  )
}

export default StudentDetails