import React, { useState } from 'react';
import mainimage from '../assets/images/mainimage.png';
import '../assets/CSS/font.css';
import leftshape from '../assets/svg/leftshape.svg';
import { FaArrowTrendUp } from "react-icons/fa6";
import Work from './Work';

function Firstseondmix() {
  const [developer, setDeveloper] = useState(true);

  const designationChange = () => {
    setDeveloper(false);
  };

  const designationChangeDes = () => {
    setDeveloper(true);
  };

  return (
    <>
      <div className="relative">
        <div className="w-screen h-[890px] bg-[#090B27] flex flex-row justify-center items-center login">
          {/* Left Section */}
          <div className="w-1/2 h-full flex flex-col justify-start items-center relative">
            <img src={leftshape} className="absolute h-auto w-96 -left-56 bottom-10 opacity-40" />
            
            {/* Designation Section */}
            <div
              className="flex flex-col justify-center items-start lg:pl-28 xl:pl-48 mt-36"
              onMouseEnter={designationChange}
              onMouseLeave={designationChangeDes}
            >
              {developer ? (
                <div className="duration-500 transition-all opacity-100 transform translate-y-0">
                  <div className="text-white h-[0px] ml-2">Hello, I am</div>
                  <div className="text-white login lg:text-[100px] xl:text-[130px] lg:h-[80px] xl:h-[105px]">UI & UX</div>
                  <div className="text-[#A8E629] login lg:text-[120px] xl:text-[150px]">Designer</div>
                </div>
              ) : (
                <div className="duration-500 transition-all opacity-100 transform translate-y-0">
                  <div className="text-white h-[0px] ml-2">Hello, I am</div>
                  <div className="text-white login lg:text-[70px] xl:text-[100px] lg:h-[80px] xl:h-[75px]">Full Stack</div>
                  <div className="text-[#A8E629] login lg:text-[120px] xl:text-[150px]">Developer</div>
                </div>
              )}

              {/* Description Section */}
              <div>
                <p className="text-white text-wrap lg:w-[400px] xl:w-[600px]">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been dummy text of the
                </p>
              </div>

              {/* Buttons Section */}
              <div className="flex flex-row justify-center items-center gap-5 mt-7">
                <div className="w-48 h-10 border border-[#A8E629] hover:bg-[#A8E629] text-white hover:text-black rounded-full flex justify-center items-center cursor-pointer transition-all duration-300">
                  CALL NOW
                </div>
                <div className="text-white flex flex-row justify-center items-center gap-3 cursor-pointer group explore">
                  <h1>Explore Now</h1>
                  <FaArrowTrendUp className="text-[20px] group-hover:mb-2 group-hover:ml-2 transition-all duration-500 ease-in-out" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-1/2 h-full flex justify-center items-center">
            <img src={mainimage} className="w-[800px] h-auto lg:mb-32 xl:mb-0" />
          </div>
        </div>
        
        {/* Work Component */}
        <Work />
      </div>
    </>
  );
}

export default Firstseondmix;
