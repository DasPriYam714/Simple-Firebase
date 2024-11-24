import { signInWithEmailAndPassword, getAuth} from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../../firebase/firebase.init';

const Login = () => {
    const [loginError, setLoginError] = useState('');
    const [successLogin, setSuccessLogin] = useState('');


    const handleHeroLogin=e=>{
        e.preventDefault();
        const email= e.target.email.value;
        const password= e.target.password.value;
        console.log(email,password)

        if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
            setLoginError('Please enter a valid email');
    
        }

        // Reset error and Success 
        setLoginError('');
        setSuccessLogin('');

        const auth= getAuth(app);

        signInWithEmailAndPassword(auth, email, password)
        .then(result=>{
            const user=result.user;
            console.log(user);
            setSuccessLogin('logged in successfully');
        })
        .catch( error=>{
            console.error(error);
            setLoginError(error.message);
        })
    }

   
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleHeroLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
           <Link to={'/forgotPassword'} className="label-text-alt link link-hover">Forgot password?</Link> 
          </label>
        </div>
        
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        {
        loginError && <p className=' text-red-600'>{loginError}</p>
      }
      {
        successLogin && <p className=' text-red-600'>{successLogin} </p>
      }
      </form>
      <div>
                <p className='text-sm text-center'>Are you new here? <Link to={'/register'} >Register</Link></p>
            </div>
     
    </div>
  </div>
</div>
    );
};

export default Login;