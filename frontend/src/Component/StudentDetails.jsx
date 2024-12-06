import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Updateform from './Updateform';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";




function StudentDetails({hideInputbox,hide}) {
  const [studentdata, setStudentdata] = useState([]);

  const [updateuser, setUpdateuser] = useState([]);

  const [update, setUpdate] = useState([]);



  const updateData = async (id)=>{
    const data={
      "id":id
    }
    const response = await axios.post(`https://mern-crud-operation-47ne.vercel.app/student/getuser`,data);
    setUpdate(!update);
    setUpdateuser(response.data);
    
  }

  const getstudentData = async ()=>{
    const response = await axios.get('https://mern-crud-operation-47ne.vercel.app/student/getstudentData');
    setStudentdata(response.data);
    }

  
  useEffect(()=>{
    getstudentData();
  })
    


  const deletedata= async (id)=>{
    
      const response = await axios.delete(`https://mern-crud-operation-47ne.vercel.app/student/delete/${id}`)
      getstudentData();
    }



  

  return (
    <>
      
      <tbody className='w-screen flex flex-col justify-start items-center relative'>
        <div className='text-white absolute -left-5 top-[50%] w-10 h-10 rounded-full bg-yellow-500 hover:bg-yellow-600 cursor-pointer flex justify-center items-center ' onClick={hideInputbox}>
         <button >{ hide ?

          <FaArrowLeft /> : <FaArrowRight />
          
          }</button>
        </div>
        {
              !update && 
             
              <div className='absolute w-[50%]  bg-green-950 rounded top-20 flex flex-col justify-center items-center'>
                  <div className='w-full text-white flex justify-end items-center px-5 bg-white'>
                  
                      </div>
                      
                        
                   
                  </div>
        }
        <tr className='w-full h-12 bg-green-900 flex justify-center items-center text-white'>
            <th className='w-[5%] inline-flex justify-center items-center'>Sl. No.</th>
            <th className='w-[15%] inline-flex justify-center items-center'>Name</th>
            <th className='w-[15%] inline-flex justify-center items-center'>Roll No</th>
            <th className='w-[15%] inline-flex justify-center items-center'>Batch</th>
            <th className='w-[15%] inline-flex justify-center items-center'>College Name</th>
            <th className='w-[15%] inline-flex justify-center items-center'>Gender</th>
            <th className='w-[20%] inline-flex justify-center items-center'>Action</th>
            
        </tr>
        <div className='w-full h-[700px] overflow-hidden overflow-y-auto'>
        {
        studentdata.map((newdata, index)=>(
        
          <tr className='w-full h-12 flex justify-around items-center border border-b-gray-200 ' key={newdata.id}>
              <td className='w-[5%] inline-flex justify-center items-center'>{index+1}</td>
              <td className='w-[15%] inline-flex justify-center items-center'>{newdata.name}</td>
              <td className='w-[15%] inline-flex justify-center items-center'>{newdata.rollno}</td>
              <td className='w-[15%] inline-flex justify-center items-center'>{newdata.batch}</td>
              <td className='w-[15%] inline-flex justify-center items-center'>{newdata.collegeName}</td> 
              <td className='w-[15%] inline-flex justify-center items-center'>{newdata.gender}</td>
              <td className='w-[20%]  flex-row gap-4 text-white inline-flex justify-center items-center'>
                  
                    <table className='w-24 h-8 bg-yellow-600 hover:bg-yellow-700 rounded inline-flex justify-center items-center' onClick={()=>updateData(newdata._id)}>Edit</table>
                  
                  
                    <button className='w-24 h-8 bg-red-700 hover:bg-red-800 rounded' onClick={()=>deletedata(newdata._id)}>Delete</button>
                  
              </td>
          </tr>
          
         )
          
        )
      }
      </div>
      </tbody>
    </>
  )
}

export default StudentDetails