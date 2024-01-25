import Link from 'next/link';
import React, { useState } from 'react';
import { RxCross1 } from 'react-icons/rx';
import Signup from '../Signup/Signup';

const Login = ({ setIsOpen, isOpen }: any) => {
  const [isShow, setIsShow] = useState(1);
  const [error, setError] = useState("");
  const [loginError, setLoginError] = useState("");
  const [formData, setFormData] = useState({

    username: '',
    password: '',
    email: '',

  });

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };



  const handleLogin = async (e: any) => {


    e.preventDefault();
    
    const apiTokenEndpoint = 'https://learnkoodsapi.onrender.com/api/token/';
    const loginEndpoint = 'https://learnkoodsapi.onrender.com/login_api/';
  
    try {
      // Step 1: Get API Token
      const apiTokenResponse = await fetch(apiTokenEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
        }),
      });
  
      if (!apiTokenResponse.ok) {
       
        setLoginError('User Not Exist');
        return;
      }
  
      const apiTokenResult = await apiTokenResponse.json();
  
      // Step 2: Perform Login with obtained API Token
      const loginResponse = await fetch(loginEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiTokenResult.access}`,
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
        }),
      });

      console.log(await loginResponse.json());

      if (loginResponse.ok) {
        // Handle successful login
        setLoginError('User logged in successfully');
      } else {
        
        setLoginError('Failed to log in');
        
      }
    } catch (error) {
      setLoginError('Failed to log in');
    }
  };



  
  const handleRegister = async (e:any) => {

      e.preventDefault();
      
    

      const apiEndpoint = 'https://learnkoodsapi.onrender.com/user_api/';
      const requestBody = new FormData();
      requestBody.append('username', formData.username);
      requestBody.append('password', formData.password);
      requestBody.append('email', formData.email);
  
      try {
        
        const response = await fetch(apiEndpoint, {

          method: 'POST',
          body: requestBody,

        });
  
  
        if (response.ok) {
          console.log("fff")
         
         
           setError('User registered successfully');

        } else {

          console.log("fff")
          // Handle registration error
          console.log(response)

          setError('User Already Register');
        }
      }
      catch (error:any) {

        setError(`Error during registration: ${error}`); 

      }
    };
    
  


  return (

    <div className="h-[100vh] w-[100vw] bg-[rgba(0,0,0,0.5)] fixed top-0 left-0  flex justify-center items-center z-50">
      <div className="modal-content rounded-md md:w-[35%] sm:w-[60%] w-[85%] bg-white md:p-10 p-5 relative">
        <button type="button" className="absolute right-5 top-5 bg-[#f0f5f7] md:p-3 p-2 rounded-md" data-bs-dismiss="modal" onClick={() => setIsOpen(false)}><RxCross1 /></button>

        {isShow === 1 && (
          <div className="modal-body">
            <div id="login-modal">
              <div className="login-form default-form">
                <div className="form-inner">
                  <h3 className="md:text-2xl text-xl font-semibold mb-4 text-center">Login to Superio</h3>

                  <div className="md:text-xl text-md font-semibold mb-4 text-center">{loginError}</div>

                  <form method="post" onSubmit={handleLogin}>
                    <div className="mb-4 login-container">
                      <label className="block text-gray-700 text-sm font-semibold mb-2">Username</label>
                      <input
                        className="rounded w-full py-4 px-3 bg-[#f0f5f7]"
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="mb-4 login-container">
                      <label className="block text-gray-700 text-sm font-semibold mb-2">Password</label>
                      <input
                        className="rounded w-full py-4 px-3 bg-[#f0f5f7]"
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="mb-4">
                      <button className="bg-blue-500 w-full text-white py-4 px-4 rounded" type="submit" name="log-in">
                        Log In
                      </button>
                    </div>
                  </form>
                  <div className="bottom-box flex justify-center  ">
                    <div className="text-center text-xs text-gray-500 flex items-center gap-1">
                      Don't have an account?{' '}
                      <div onClick={() => setIsShow(2)} className="call-modal signup text-gray-600 text-sm font-semibold cursor-pointer">
                        Signup
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {isShow === 2 && (
          <div className="modal-body">
            <div id="login-modal">
              <div className="login-form default-form">
                <div className="form-inner">
                  <h3 className="md:text-2xl text-xl font-semibold mb-4 text-center">Create a Free Superio Account</h3>
                  <div className="md:text-lg text-md font-semibold mb-4 text-red-500 text-center">{error}</div>
                  <form method="post" onSubmit={handleRegister}>
                    <div className="mb-4 login-container">
                      <label className="block text-gray-700 text-sm font-semibold mb-2">Username</label>
                      <input
                        className="rounded w-full py-4 px-3 bg-[#f0f5f7]"
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="mb-4 login-container">
                      <label className="block text-gray-700 text-sm font-semibold mb-2">Password</label>
                      <input
                        className="rounded w-full py-4 px-3 bg-[#f0f5f7]"
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="mb-4 login-container">
                      <label className="block text-gray-700 text-sm font-semibold mb-2">Email</label>
                      <input
                        className="rounded w-full py-4 px-3 bg-[#f0f5f7]"
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="mb-4">
                      <button className="bg-blue-500 w-full text-white py-4 px-4 rounded" type="submit" name="register">
                        Register
                      </button>
                    </div>
                  </form>
                  <div className="bottom-box flex justify-center">
                    <div className="text-center text-xs text-gray-500 flex items-center gap-1">
                      Already have an account?{' '}
                      <div onClick={() => setIsShow(1)} className=" cursor-pointer signup text-gray-600 text-sm font-semibold">
                        Login
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
