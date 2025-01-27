import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import Updateform from './Updateform';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { useSelector } from 'react-redux';



const apiUrl = import.meta.env.VITE_API_URL;








function StudentDetails({hideInputbox,hide }) {
  

  const colormode = useSelector((state)=>state.divcolour);

  

  const [studentdata, setStudentdata] = useState([]);

  const [updateuser, setUpdateuser] = useState("");

  const [update, setUpdate] = useState([]);


  const [del, setDel] = useState(false);

  const [mode, setMode] =useState(false);

  const firstChange = useRef(true);

  

  useEffect(()=>{

    if (firstChange.current){
      firstChange.current == false;
      return;
    }
    setMode(true);

   
    setTimeout(()=>{
      setMode(false);
    }, 1000);

    return () => clearTimeout(timeout);


  },[colormode])

  // Upadate Details

  const [newname, setnewName] = useState("")
  
  console.log(newname);

  const closefield = () =>{
    setUpdateuser("");

  }
  


  const updateData = async (id)=>{
    const data={
      "id":id
    }
    
    const response = await axios.post(`${apiUrl}/student/getuser`,data);
    setUpdate(!update);
    setUpdateuser(response.data);
    console.log(response.data);
    
  }

  const getstudentData = async () =>{
    const response = await axios.get(`${apiUrl}/student/getstudentData`);
    setStudentdata(response.data);
    }

  const  dataUpdate = () =>{
    console.log('form updated');
  } 

  
  useEffect(()=>{
    getstudentData();
  }, [])
    
 

  const deletedata= async (id)=>{

   
    
    const response = await axios.delete(`${apiUrl}/student/delete/${id}`)
      console.log(response.data);
      if (response.data === "Data Deleted"){
        setDel(true);

        setTimeout(() => {
          setDel(false);
        }, 2000);
      }
      else{
        setDel(false);
      }
      getstudentData();
    }



  

  return (
    <>
      
      <tbody className='w-screen flex flex-col justify-start items-center relative dark:bg-white light:bg-' >
        <div className='text-white absolute -left-5 top-[50%] w-10 h-10 rounded-full bg-yellow-500 hover:bg-yellow-600 cursor-pointer flex justify-center items-center ' onClick={hideInputbox}>
         <button >{ hide ?

          <FaArrowLeft /> : <FaArrowRight />
          
          }</button>
        </div>
        {
              updateuser &&

              (

                <form
  onClick={dataUpdate}
  className="absolute w-[700px] h-[450px] top-1/3 left-1/4 bg-green-950 rounded-md flex flex-col justify-center items-center"
>
  <div className="flex flex-col justify-start items-center gap-3">
    {/* Updated name input */}
    <input
      type="text"
      value={updateuser.name || ""}
      className="w-[300px] h-12 rounded-md pl-5"
      onChange={(event) => setUpdateUser({ ...updateuser, name: event.target.value })}
    />
    <input
      type="text"
      value={updateuser.rollno || ""}
      className="w-[300px] h-12 rounded-md pl-5"
    />
    <div className="h-12 rounded flex flex-row gap-2 justify-center items-center bg-transparent">
      <label className="ml-3 text-white">Select Batch</label>
      <select
        className="w-[195px] bg-gray-100"
        onChange={(event) => setUpdateUser({ ...updateuser, batch: parseInt(event.target.value) })}
        value={updateuser.batch || ""}
      >
        <option value="">Select</option>
        <option value={2024}>2024</option>
        <option value={2023}>2023</option>
        <option value={2022}>2022</option>
        <option value={2021}>2021</option>
      </select>
    </div>
    <input
      type="text"
      placeholder="Enter College Name"
      value={updateuser.collegeName || ""}
      className="w-[300px] h-12 rounded pl-5"
      onChange={(event) => setUpdateUser({ ...updateuser, collegeName: event.target.value })}
    />
    <div className="flex flex-row gap-4 text-white w-[300px] justify-start">
      <label>Select Gender :</label>
      <div className="flex flex-row gap-4">
        {/* Added onChange handlers for gender */}
        <div className="flex flex-row gap-2">
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={updateuser.gender === "Male"}
            onChange={(event) => setUpdateUser({ ...updateuser, gender: event.target.value })}
          />
          <label>Male</label>
        </div>
        <div className="flex flex-row">
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={updateuser.gender === "Female"}
            onChange={(event) => setUpdateUser({ ...updateuser, gender: event.target.value })}
          />
          <label>Female</label>
        </div>
      </div>
    </div>
    <div className="flex flex-row gap-3">
      <button className="w-36 h-10 bg-yellow-500 rounded-md hover:bg-yellow-600">
        Update
      </button>
      <button
        className="w-36 h-10 bg-red-500 rounded-md hover:bg-red-600"
        onClick={closefield}
      >
        Close
      </button>
    </div>
  </div>
</form>

           
                

              )
        }
              
        {  del && (


          <div class= "absolute bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded " role="alert">
          <strong class="font-bold mx-10">Data Deleted</strong>
          </div>

        )
        }   


        {  mode && (


          <div class= "absolute bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded " role="alert">
            <strong class="font-bold mx-10">Light Mode activated</strong>
          </div>

        )
        }     
        
        <tr className='w-full h-12 bg-green-900 flex justify-center items-center text-white' >
            <th className='w-[5%] inline-flex justify-center items-center'>Sl. No.</th>
            <th className='w-[15%] inline-flex justify-center items-center'>Name</th>
            <th className='w-[15%] inline-flex justify-center items-center'>Roll No</th>
            <th className='w-[15%] inline-flex justify-center items-center'>Batch</th>
            <th className='w-[15%] inline-flex justify-center items-center'>College Name</th>
            <th className='w-[15%] inline-flex justify-center items-center'>Gender</th>
            <th className='w-[20%] inline-flex justify-center items-center'>Action</th>
            
        </tr>
        <div className='w-full h-[700px] overflow-hidden overflow-y-auto' onClick={closefield}>
        {
        studentdata.map((newdata, index)=>(
        
          <tr className='w-full h-12 flex justify-around items-center border border-b-gray-200 ' key={newdata.id} >
              <td className='w-[5%] inline-flex justify-center items-center'>{index+1}</td>
              <td className='w-[15%] inline-flex justify-start items-center pl-10'>{newdata.name}</td>
              <td className='w-[15%] inline-flex justify-start items-center pl-10'>{newdata.rollno}</td>
              <td className='w-[15%] inline-flex justify-start items-center pl-24'>{newdata.batch}</td>
              <td className='w-[15%] inline-flex justify-start items-center pl-10'>{newdata.collegeName}</td> 
              <td className='w-[15%] inline-flex justify-start items-center pl-10'>{newdata.gender}</td>
              <td className='w-[20%]  flex-row gap-4 text-white inline-flex justify-center items-center'>
                  
                    <table className=' rounded inline-flex justify-center items-center cursor-pointer' onClick={()=>updateData(newdata._id)}><FiEdit className='w-6  h-auto text-yellow-600 hover:text-yellow-700'/></table>
                  
                  
                    <button className=' text-red-700 hover:text-red-800 rounded text-32' onClick={()=>deletedata(newdata._id)}><MdOutlineDelete className='w-7 h-auto'/></button>
                  
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