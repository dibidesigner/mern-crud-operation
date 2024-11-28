import React from 'react';
import secondshape from '../assets/images/secondshape.png';
import secondroundshape from '../assets/svg/secondpageround.svg'
import '../assets/CSS/font.css';
import '../assets/fonts/starif.css';
import latesttext from '../assets/images/latesttext.png'

function Work() {
  return (
    <div className="absolute top-[760px] w-screen">
      <div className="relative">
        {/* Background Image */}
        <img 
          src={secondshape} 
          alt="Second Shape" 
          className="w-screen  h-auto object-cover"
        />
        {/* Absolute Overlay */}
        <div className="absolute top-0 left-0 w-full h-[600px] flex flex-col items-center justify-center bg-opacity-50 text-white text-3xl font-bold">
            <div className="relative w-[800px] h-auto">
                {/* Main Shape Image */}
                <img src={secondroundshape} alt="Second Shape" className="w-full h-auto" />

                {/* Content Positioned on the Image */}
                <div className="absolute top-[290px] left-1/4">
                    <div className="flex flex-col gap-12 items-center">
                        {/* Latest Text Image */}
                        <img src={latesttext} alt="Latest Text" className="w-36 h-auto" />
                        {/* Work Heading */}
                        <h1 className="starif text-[170px]">Work</h1>
                    </div>
                    </div>

                    {/* Green Overlay */}
                    <div className="absolute top-[500px] left-0 w-full h-[600px] opacity-50"></div>
                </div>
            </div>

      </div>
    </div>
  );
}

export default Work;
