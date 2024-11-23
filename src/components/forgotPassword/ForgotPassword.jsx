import React from 'react';
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";


const ForgotPassword = () => {
    
    return (
        <div>
            <h2 className='text-2xl text-cyan-950'>Register your account</h2>
            <form  className='flex flex-col w-1/2 justify-center'>
                <input className=' px-4 py-2 border-4 border-e-red-50 mb-4 rounded-md ' type="email" name='email' placeholder='type your email' required/>
                <div className='relative'>
                <input 
                className=' w-full px-4 py-2 border-4 border-e-red-50 mb-4 rounded-md' 
                // type={showPass? "text":"password" }
                type="password"
                name='password' 
                placeholder='type your password' 
                required
                
                />
                 {/* <span className='absolute top-3 right-4' onClick={()=>setShowPass(!showPass)}>
                {
                        showPass ? <FaEyeSlash className='text-xl' />:<FaEye className='text-xl' /> 
                    }
                </span> */}


                </div>
                <div className='flex mb-5'>
                    <input type="checkbox" name='terms' />
                    <p className='ml-2'>I have read and agree to the Terms</p>
                </div>
                
               
                <button className='bg-gray-400  px-4 py-2 rounded-md'>Submit</button>
            </form>
          
          

            
        </div>
    );
};

export default ForgotPassword;