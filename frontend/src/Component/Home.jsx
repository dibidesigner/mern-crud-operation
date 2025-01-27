import React from 'react'
import '../assets/CSS/font.css'
import Websitedesignservice from './Websitedesignservice';
import Firstseondmix from './Firstseondmix';
import Graphicservice from './Graphicservice';
import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);



function Home() {
  return (
    <>
      <Firstseondmix /> 
      <Websitedesignservice  />
      <Graphicservice />
      
      
    </>
  )
}

export default Home