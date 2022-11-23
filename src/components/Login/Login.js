import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import app from '../../firebase.init';

const auth = getAuth(app)
const Login = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth)
    return (

        <div>
            <h2>Please Login</h2>

            <div style={{ margin: '20px' }}>
                <button onClick={() => signInWithGoogle()}>Google Sign In</button>
            </div>

            <form>
                <input type="email" name="" id="" />
                <br />
                <input type="password" name="" id="" />
                <br />
                <button type="submit">Login</button>
            </form>

        </div>
    );
};

export default Login;