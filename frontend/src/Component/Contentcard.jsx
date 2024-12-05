import React from 'react'
import '../assets/CSS/font.css';

function Contentcard({title, content, down}) {
  return (
    <>
      <div className={`h-[369.44px] w-[339px] border border-white rounded-lg flex justify-center items-center flex-col px-7 gap-5 ${down}`}>
         <label className='text-center text-[#04E134] trocchi-regular'>{title}</label>
         <p className='text-center text-white'>
         {content}
         </p>
      </div>
    </>
  )
}

export default Contentcard