import React from 'react';
import app from '../../firebase/firebase.init';
import { createUserWithEmailAndPassword,getAuth } from 'firebase/auth';

const Register = () => {
    
    const handleRegister= e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        const auth= getAuth(app);

    createUserWithEmailAndPassword(auth,email,password)
    .then(result=>{
        const user=result.user;
    })
    .catch(error=>{
        console.log(error);
    });
    }
    
    return (
        <div className='flex flex-col justify-center text-center'>
            <h2>Register your account</h2>
            <form onSubmit={handleRegister} className='flex flex-col '>
                <input className='w-1/2 px-4 py-2 border-4 border-e-red-50 mb-4 rounded-md ' type="email" name='email' placeholder='type your email' />
                <input className='w-1/2 px-4 py-2 border-4 border-e-red-50 mb-4 rounded-md' type="password" name='password' placeholder='type your password' />
                <button className='bg-gray-400 w-1/2 px-4 py-2 rounded-md'>Submit</button>
            </form>
            
        </div>
    );
};

export default Register;