import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

function Aboutus() {
 
const dispatch = useDispatch();
const storeValue = useSelector((state)=>state.counterValue)

  const increasevalue = () =>{
    dispatch({type : 'INCREMENT'})
  }

  const decreasevalue = () =>{
    dispatch({type : 'DECREMENT'})
  }



 
  return (
    <>
    <div className='flex flex-row gap-5 w-screen h-screen justify-center items-center'>
       <div className='size-10 bg-red-500 inline-flex justify-center items-center cursor-pointer' onClick={decreasevalue} >+</div>
      <div className='size-10 inline-flex justify-center items-center'>{storeValue}</div>
      <div className='size-10 bg-green-500 inline-flex justify-center items-center cursor-pointer' onClick={increasevalue}>+</div>
    </div>
       
    </>
    
  )
}

export default Aboutus