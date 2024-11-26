import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Updateform({update}) {

 
  return (
    <>
    {
     !update && 
    
    <div className='absolute w-[50%]  bg-green-950 rounded top-20 flex flex-col justify-center items-center'>
        <div className='w-full text-white flex justify-end items-center px-5 bg-white'>
        
        </div>
            <form className='flex flex-col justify-center items-center gap-4 rounded p-8 ' >
                
                    <input type='text' placeholder='Enter your name' className='w-[300px] h-12 rounded pl-5' />
                    <input type='text' placeholder='Enter your roll no' className='w-[300px] h-12 rounded pl-5' />
                    <div className=' h-12 rounded flex flex-row gap-2 justify-center items-center bg-transparent'>
                        <label className='ml-3 text-white'>Select Batch</label>
                        <select className='w-[195px] bg-gray-100 font-bold' >
                        <option selected>Select</option>
                        <option >2024</option>
                        <option >2023</option>
                        <option >2022</option>
                        <option >2021</option>
                        </select>
                    </div>
                    <input type='text' placeholder='Enter College Name' className='w-[300px] h-12 rounded pl-5'/>
                    <div className='flex flex-row gap-4 text-white w-[300px] justify-start'>
                    <label>Select Gender :</label>
                    <div className='flex flex-row gap-4'>
                        <div className='flex flex-row gap-2'>
                            <input type='radio' name='gender' value={"Male"} />
                            <label>Male</label>
                        </div>
                        <div className='flex flex-row'>
                            <input type='radio' name='gender' value={"Female"} />
                            <label>Female</label>
                        </div>
                    </div>
                    
                    
                    </div>
                
                
                <button type='submit' className='w-40 h-12 bg-yellow-500 rounded-md hover:bg-yellow-600' >Update</button>
            </form>
            
    </div>
    }
    </>
  )
}

export default Updateform