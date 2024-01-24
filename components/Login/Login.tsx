
// import React from 'react'

// const Login = () => {
//   return (
//  <>
//     <div className="h-[100vh] w-[100vw] bg-[rgba(0,0,0,0.5)] fixed top-0 left-0  flex justify-center items-center z-50">
//       <div className="lg:w-[50%] md:w-[70%] w-[90%] h-auto bg-[white] rounded-xl ">
//       <p className='h-[500px] bg-[red]'>vbbbbbbb</p>
// </div>
//         </div>
//  </>
//   )
// }

// export default Login

// LoginForm.js
"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { RxCross1 } from "react-icons/rx";
import Signup from '../Signup/Signup';

const Login = ({setIsOpen,isOpen}:any) => {
  const [isSignUpOpen,setIsSignUpOpen]=useState(false)
  return (
    <div className="h-[100vh] w-[100vw] bg-[rgba(0,0,0,0.5)] fixed top-0 left-0  flex justify-center items-center z-50">
    <div className="modal-content rounded-md md:w-[35%] sm:w-[60%] w-[85%] bg-white md:p-10 p-5 relative">
      <button type="button" className="absolute right-5 top-5 bg-[#f0f5f7] md:p-3 p-2 rounded-md" data-bs-dismiss="modal"
      onClick={()=>setIsOpen("none")}><RxCross1 /></button>
    {isOpen==="login"&&
      <div className="modal-body">
      <div id="login-modal">
        <div className="login-form default-form">
          <div className="form-inner">
            <h3 className="md:text-2xl text-xl font-semibold mb-4 text-center">Login to Superio</h3>
            <form method="post">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-semibold mb-2">Username</label>
                <input
                  className=" rounded w-full py-4 px-3 bg-[#f0f5f7]"
                  type="text"
                  name="username"
                  placeholder="Username"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-semibold mb-2 ">Password</label>
                <input
                  className=" rounded w-full py-4 px-3 bg-[#f0f5f7]"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </div>
              {/* <div className="mb-4">
                <div className="field-outer">
                  <div className="input-group checkboxes square">
                    <input
                      className="mr-2 "
                      type="checkbox"
                      name="remember-me"
                      id="remember"
                    />
                    <label htmlFor="remember" className="text-sm text-gray-700">
                      Remember me
                    </label>
                  </div>
                  <a href="#" className="text-sm text-blue-500">
                    Forgot password?
                  </a>
                </div>
              </div> */}
              <div className="mb-4">
                <button className="bg-blue-500 w-full text-white py-4 px-4 rounded " type="submit" name="log-in">
                  Log In
                </button>
              </div>
            </form>
            <div className="bottom-box">
              <div className="text-center text-xs text-gray-500">
                Don't have an account?{' '}
                <div onClick={()=>setIsOpen("signup")} className="call-modal signup text-gray-600 text-sm font-semibold" data-bs-toggle="modal" data-bs-target="#registerModal" >
                  Signup
                </div>
              </div>
            
            
            </div>
            {/* {isOpen==="signup"&&<Signup/>} */}
          </div>
        </div>
      </div>
    </div>
    }
    {isOpen==="signup"&&
     <div className="modal-body">
     <div id="login-modal">
       <div className="login-form default-form">
         <div className="form-inner">
           <h3 className="md:text-2xl text-xl font-semibold mb-4 text-center">Create a Free Superio Account</h3>
           <form method="post">
             <div className="mb-4">
               <label className="block text-gray-700 text-sm font-semibold mb-2">Username</label>
               <input
                 className=" rounded w-full py-4 px-3 bg-[#f0f5f7]"
                 type="text"
                 name="username"
                 placeholder="Username"
               />
             </div>
             <div className="mb-6">
               <label className="block text-gray-700 text-sm font-semibold mb-2 ">Password</label>
               <input
                 className=" rounded w-full py-4 px-3 bg-[#f0f5f7]"
                 type="password"
                 name="password"
                 placeholder="Password"
               />
             </div>
             {/* <div className="mb-4">
               <div className="field-outer">
                 <div className="input-group checkboxes square">
                   <input
                     className="mr-2 "
                     type="checkbox"
                     name="remember-me"
                     id="remember"
                   />
                   <label htmlFor="remember" className="text-sm text-gray-700">
                     Remember me
                   </label>
                 </div>
                 <a href="#" className="text-sm text-blue-500">
                   Forgot password?
                 </a>
               </div>
             </div> */}
             <div className="mb-4">
               <button className="bg-blue-500 w-full text-white py-4 px-4 rounded " type="submit" name="log-in">
                 Register
               </button>
             </div>
           </form>
           <div className="bottom-box">
             <div className="text-center text-xs text-gray-500">
             Already have an account?{' '}
               <Link href={'/login'} className="call-modal signup text-gray-600 text-sm font-semibold" data-bs-toggle="modal" data-bs-target="#registerModal" >
                Login
               </Link>
             </div>
           
           
           </div>
         </div>
       </div>
     </div>
   </div>
    }
    </div>
    </div>
  );
};

export default Login;
