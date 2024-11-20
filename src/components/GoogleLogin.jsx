import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import app from '../firebase/firebase.init';
import { useState } from 'react';


const GoogleLogin = () => {
    const [user, setUser]= useState(null)

    const auth = getAuth(app)
    console.log(app)

    const handleGoogleSignin =()=>{
        console.log('google signin done')
        signInWithPopup(auth, googleProvider)
        .then((result)=>{
            const loggedInUser = result.user;
            console.log(user);
            setUser(loggedInUser)
        })
        .catch((error)=>{
            console.log(error);
        })
    
    }
    const handleGitHubSignin =()=>{
        console.log('gitHub signin done')
        signInWithPopup(auth, gitProvider)
        .then(result=>{
            const loggedUser= result.user
            console.log(user);
            setUser(loggedUser)
        })
        .catch(error=>{
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

    const googleProvider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();

   
    
    return (
        <div>
            
            <h2 className="py-5">Login with Google</h2>
            {
                user ?
                <button onClick={handleSignOut}>SignOut</button>:
            <div>
                <button onClick={handleGoogleSignin}>Google Login</button>
                <button onClick={handleGitHubSignin}>GitHub Login</button>
            </div>
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