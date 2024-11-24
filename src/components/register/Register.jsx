import React, { useState } from 'react';
import app from '../../firebase/firebase.init';
import { createUserWithEmailAndPassword,getAuth } from 'firebase/auth';
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";



const Register = () => {

    const [errorMassageCopy, setErrorMassageCopy] = useState('');
    const [success, setSuccess] = useState('');
    const [showPass, setShowPass] = useState(false);
    
    const handleRegister= e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const condition= e.target.terms.checked;
        console.log(email, password, condition);

        if (password.length<6){
            setErrorMassageCopy('Password should be at least 6 characters');
            return;
        }
         else if(!/(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/.test(password)){
            setErrorMassageCopy('Password should be at least 6 characters and at least one special characters');
            return;

        }
        else if(!condition){
            setErrorMassageCopy('Please accept the terms and conditions.');
            return;
        }

        // Reset error and Success 
        setSuccess('');
        setErrorMassageCopy('');

        const auth= getAuth(app);

    createUserWithEmailAndPassword(auth,email,password)
    .then(result=>{
        const user=result.user;
        setSuccess('Registered successfully')
    })
    .catch(error=>{
        console.error(error);
        
        setErrorMassageCopy(error.message);
        console.log(errorMassageCopy)
    });
    }
    
    return (
        <div className='flex flex-col justify-center text-center'>
            <div className=''>
            <h2 className='text-2xl text-cyan-950'>Register your account</h2>
            <form onSubmit={handleRegister} className='flex flex-col w-1/2 justify-center'>
                <input className=' px-4 py-2 border-4 border-e-red-50 mb-4 rounded-md ' type="email" name='email' placeholder='type your email' required/>
                <div className='relative'>
                <input 
                className=' w-full px-4 py-2 border-4 border-e-red-50 mb-4 rounded-md' 
                type={showPass? "text":"password" }
                name='password' 
                placeholder='type your password' 
                required
                
                />
                 <span className='absolute top-3 right-4' onClick={()=>setShowPass(!showPass)}>
                {
                        showPass ? <FaEyeSlash className='text-xl' />:<FaEye className='text-xl' /> 
                    }
                </span>


                </div>
                <div className='flex mb-5'>
                    <input type="checkbox" name='terms' />
                    <p className='ml-2'>I have read and agree to the Terms</p>
                </div>
                
               
                <button className='bg-gray-400  px-4 py-2 rounded-md'>Submit</button>
            </form>
            {
                errorMassageCopy && <p className=' text-red-600'>{errorMassageCopy}</p>
            }
             {
                success && <p className=' text-green-600'>{success}</p>
            }
          

            </div>
            
            
        </div>
    );
};

export default Register;