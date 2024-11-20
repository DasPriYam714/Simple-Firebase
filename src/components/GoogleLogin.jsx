import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import app from '../firebase/firebase.init';
import { useState } from 'react';


const GoogleLogin = () => {
    const [user, setUser]= useState(null)

    const auth = getAuth(app)
    console.log(app)

    const handleGoogleSignin =()=>{
        console.log('google signin done')
        signInWithPopup(auth, provider)
        .then((result)=>{
            const loggedInUser = result.user;
            console.log(user);
            setUser(loggedInUser)
        })
        .catch((error)=>{
            console.log(error);
        })
    
    }
    const handleSignOut =()=>{
        signOut(auth)
        .then(result=>{
            setUser(null);
            console.log(result)
        })
        .catch(error=>{
            console.log(error);
        })
    }

    const provider = new GoogleAuthProvider();

   
    
    return (
        <div>
            
            <h2 className="py-5">Login with Google</h2>
            {
                user ?
                <button onClick={handleSignOut}>SignOut</button>:
            <button onClick={handleGoogleSignin}>Google Login</button>
            }
            

            {user && <div>
                    <h2>User: {user.displayName}</h2>
                    <p>Email:{user.email}</p>
                    <img src={user.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default GoogleLogin;