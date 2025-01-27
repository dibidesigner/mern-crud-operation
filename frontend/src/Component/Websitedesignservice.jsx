import React, { useEffect, useState } from 'react'
import webdesign from '../assets/images/webdesign.png'
import Contentcard from './Contentcard'
import { useSelector } from 'react-redux'

function Websitedesignservice() {
  

  const [color, setColor]  = useState("");


  const divcolour =useSelector((state)=>state.divcolour);

  console.log('disstructuring', divcolour);

  const checkColor = () =>{
    if (divcolour == 'dark'){
      setColor('bg-[#000957] ');
    }else{
      setColor('bg-[#A9C46C]  ');
    }
  }
 
   
  useEffect(()=>{
    checkColor();
  },[divcolour]);



     
  return (
    <> 
      <div className={`w-screen h-[1000px] flex mt-[1180px] ${color} flex-col justify-center items-center relative`}>
            <div className='w-full h-1/2 flex flex-row '>
                <div className=' w-[40%] h-full flex justify-end items-center pr-10'>
                    <img src={webdesign} className='w-[500px] h-auto'/>
                </div>
                <div className='w-[60%] h-full flex flex-row justify-center items-center gap-40 relative'>
                    <Contentcard className="flex  absolute " down='mt-20' title='Custom Responsive Designs' content='Tailored websites that adapt seamlessly to any device, ensuring an excellent user experience on desktops, tablets, and mobile devices.'/>
                    
                    <Contentcard className="flex absolute top-10"  title='SEO-Friendly Development' content='Websites optimized for search engines to improve your online visibility and attract more organic traffic.'/>
                </div>
            </div>
            <div className='w-full h-1/2 flex flex-row justify-end items-center pr-40 gap-20'>
                <Contentcard className="flex mt-10 ml-5 p-4 " down='mt-2' title='E-CommerceIntegration' content='Build and manage your online store with secure payment gateways, intuitive navigation, and user-friendly features.' />
                <Contentcard className="flex mt-20 mr-10 p-6" down='mt-16'  title='Fast Loading Speed' content='Fully optimized websites for faster loading times to enhance user satisfaction and reduce bounce rates.' />
                <Contentcard className="flex mt-5 ml-0 p-2" down='-mt-20' title='CMS Integration' content='Easy-to-manage content solutions like WordPress, enabling you to update your website effortlessly.' />
            </div>
        </div>    
    </>
  )
}

export default Websitedesignservice