import React from 'react'
import gradientline from '../assets/images/gradientline.png'
import '../assets/fonts/starif.css'
import cartoon from '../assets/images/cartoon.png'
import Graphicservicescard from './Graphicservicescard'


function Graphicservice() {
  return (
    <>
    <div className='w-screen h-[916.62px] bg-gradient-to-b from-[#07294F] to-[#3A134A]  flex flex-col justify-center items-center relative'>
        <div className='w-full h-[25%] flex flex-col justify-center items-center'>
          <div>
            <h1 className='text-[85px] text-white starif'>Graphic Design <span className='text-[#A380FF]'>Services</span></h1>
            <img src={gradientline} className='w-[400px] h-auto'/>
          </div>
          
        </div>
        <div className='w-full h-[75%] '>
          
            <img src={cartoon} className='ml-12 bg-cover w-full h-full'/>
           
         
        </div>
        <div className='w-screen h-full absolute flex justify-center items-end'>
           <div className='w-[90%] h-[500px]  mb-28 flex flex-row justify-evenly items-center'>
             <Graphicservicescard headcontent='Creative Logo 
& Branding' pcontent='Unique logos and cohesive branding solutions, including business cards and letterheads, to establish a strong brand identity.'/>
             <Graphicservicescard headcontent='Social Media 
& Marketing Graphics' pcontent='Eye-catching designs for social media posts, banners, and digital campaigns to boost your online presence and engagement.'/>
             <Graphicservicescard headcontent='Infographics 
& Presentations' pcontent='Professionally designed visuals that simplify complex data and deliver impactful messages.'/>
             <Graphicservicescard headcontent='Print & 
Digital Materials' pcontent='High-quality designs for brochures, flyers, posters, and other marketing essentials to enhance your brand’s visibility.'/>
           </div>
        </div>
    </div>
    </>
  )
}

export default Graphicservice