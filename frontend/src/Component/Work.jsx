import React from 'react';
import secondshape from '../assets/images/secondshape.png';
import secondroundshape from '../assets/svg/secondpageround.svg'
import '../assets/CSS/font.css';
import '../assets/fonts/starif.css';
import latesttext from '../assets/images/latesttext.png'
import graphicpostimage from '../assets/images/Graphicpost.png'
import websitepostimage from '../assets/images/websitepost.png'

function Work() {


  

  return (
    <div className="absolute top-[760px] w-screen">
      <div className="relative">
       
        <img 
          src={secondshape} 
          alt="Second Shape" 
          className="w-screen  h-auto object-cover"
        />
        
        <div className="absolute top-0 left-0 w-full h-[600px] flex flex-col items-center justify-center  text-white text-3xl font-bold">
            <div className="relative w-[800px] h-auto">
              
                <img src={secondroundshape} alt="Second Shape" className="w-full h-auto" />

                
                <div className="absolute top-[250px] left-1/4">
                    <div className="flex flex-col gap-12 items-center mb-32">
                        
                        <img src={latesttext} alt="Latest Text" className="w-36 h-auto" />
                       
                        <h1 className="starif lg:text-[180px] xl:text-[220px]">Work</h1>
                    </div>
                    </div>

                   
                    <div className="absolute top-[500px] left-0 w-full lg:h-[400px] xl:h-[600px]">
                      <div className='w-full h-full  relative '>
                        <div className='absolute w-[700px] h-[700px] border border-[#A8E629] -left-96 top-10 rounded-lg'>
                          <div className='w-full h-full relative flex justify-center items-center'>
                            <div className='absolute w-56 h-12 bg-[#A8E629] -top-6 left-10 rounded-full flex justify-center items-center'>
                              <h1 className='text-[#00110A] starif'>Graphics</h1>
                              
                            </div>
                            <img src={graphicpostimage} />
                          </div>
                          
                        </div>
                        <div className='absolute w-[700px]  h-[700px] border border-[#A8E629] -right-96 top-10 rounded-lg'>
                        <div className='w-full h-full relative flex justify-center items-center'>
                            <div className='absolute w-56 h-12 bg-[#A8E629] -top-6 right-10 rounded-full flex justify-center items-center'>
                              <h1 className='text-[#00110A]  starif'>Website</h1>
                            </div>
                            <img src={websitepostimage} />
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>

      </div>
    </div>
  );
}

export default Work;
