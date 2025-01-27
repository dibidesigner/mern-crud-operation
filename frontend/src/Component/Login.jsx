import React, { useState } from 'react'
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { IoIosEye } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FaEyeSlash } from "react-icons/fa";
import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;


function Login() {

  const [username , setUsername] = useState([]);

  const [pword, setPassword] =useState([]);

  const [termcondition, settermcondition] = useState(false);

  const [loginStatus, setLoginstatus] = useState("");


  const toggleconditin =()=>{
    settermcondition(!termcondition);
  }

  
  console.log(termcondition);



  console.log(username);
  console.log(pword);


  const [pinputtype, setPinputtype] =useState("password");

  const changeinputtype =()=>{
    setPinputtype(

      pinputtype === "text" ? "password" : "text" 
    );
  }

  const data = {
    username : username, 
    password :pword}

  const submitlogin =async (e)=>{
    e.preventDefault();

    try{
      if ( termcondition == true){
        if( !username && !pword ){
          alert('Please enter username & password');
          
        }else{
          
          const loginUrl = `${apiUrl}/user/userlogin`;
          await  axios.post(loginUrl, data).then(response=>{
            setLoginstatus(response.data);
            console.log(response);
          }).catch(error=>{
             console.log(error);
          })

          
          
          
        }

        
      }
      else{
        alert('you need to agree with term and condition');
      }
    }
    catch (error){
      console.log(`You are getting erro reason ${error}`);
    }
    
    

  }



  return (
    <>
    <div className='w-screen flex justify-center items-center lg:flex-row flex-col bg-[#2C2638]'>
            <div className='lg:w-1/2 w-full lg:order-2 order-2 h-screen  p-10'>
    
              <div className='w-full  h-full  rounded-lg bg-red-500 overflow-hidden'>
                      <img src='https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?q=80&w=1992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='w-full  h-full object-cover'></img>
              </div>
            
            </div>
            <div className='lg:w-1/2 w-full lg:order-1 order-1 h-screen p-10'>
                <form onSubmit={submitlogin} className='w-full  h-full flex flex-col justify-center items-start text-white gap-5 pl-20'>
                         <h1 className='text-4xl mb-20'>login with your account</h1>
                         <h1>{loginStatus}</h1>
                         
                        
                         <div className='flex flex-col justify-center items-start gap-5'>
                            
                            <input type='text' placeholder='Enter emaill id' onChange={(e)=>setUsername(e.target.value)} className='lg:w-[37rem] w-72 h-12 rounded-lg pl-5 bg-[#3C364C]' />
                            <div className='relative'>
                                <input type={pinputtype} placeholder='Enter password' onChange={(e)=>setPassword(e.target.value)} className='lg:w-[37rem] w-72 h-12 rounded-lg pl-5 bg-[#3C364C]' />
                                <div className='flex justify-center items-center absolute top-3 right-5 cursor-pointer' onClick={changeinputtype}>
                                  { pinputtype === "text" ?

                                     <FaEyeSlash size={20} /> :

                                     <IoIosEye size={20} /> 
                                    
                                  }
                                   
                                </div>
                                
                            </div>
                            
                            <div className='flex flex-row justify-start items-center gap-3'>
                              <input type='checkbox' onChange={toggleconditin}/>
                              <h1>I am agree to the <span>Term & Conditions</span></h1>
                            </div>
                            <div className='lg:w-full flex flex-col justify-center items-start'>
                              <button className='lg:w-[37rem] w-72 h-12 bg-[#6D54B5] rounded-lg'>Login</button>
                              <h1 className='mt-5'>Don't have an account? <Link to='/signup' className='text-green-300'>Register</Link></h1>
                            </div>
    
    
                            <div className='w-full flex flex-row justify-center items-center mt-5'>
                              <div></div>
                              <div>Or login with</div>
                              <div></div>
                            </div>
                            <div className='w-full flex justify-center lg:flex-row flex-col items-center gap-5'>
                              <button className='w-40 h-10 rounded-lg border border-white hover:bg-white hover:text-black inline-flex justify-center items-center gap-3'><FaGoogle />Google</button>
                              <button className='w-40 h-10 rounded-lg border border-white hover:bg-white hover:text-black  inline-flex justify-center items-center gap-3'><FaApple />Apple</button>
                            </div>
                         </div>
                         
                </form>
            </div>
         </div>
         </>
  )
}

export default Login