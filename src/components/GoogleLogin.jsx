import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import app from '../firebase/firebase.init';

const GoogleLogin = () => {

    const auth = getAuth(app)
    console.log(app)

    const handleGoogleSignin =()=>{
        console.log('google signin done')
    }

    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
    .then((result)=>{
        const user = result.user;
        console.log(user);
    })
    .catch((error)=>{
        console.log(error);
    })

    
    return (
        <div>
            <h2 className="py-5">Login with Google</h2>
            <button onClick={handleGoogleSignin}>Google Login</button>
        </div>
    );
};

export default GoogleLogin;