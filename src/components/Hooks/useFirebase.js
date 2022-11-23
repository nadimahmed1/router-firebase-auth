import { useEffect, useState } from "react"
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import app from "../../firebase.init";

const auth = getAuth(app)
const provider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const handleGoogleSign = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                setUser(user)
                console.log(user)
            })
            .catch(error => {
                console.error(error)
            })
    }

    const handleGoogleSignOut = () => {
        signOut(auth)
            .then(() => {

                console.log('Sign Out Successful')
            })
            .catch(error => {
                console.error(error)
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user);
        })
    }, [])

    return { user, handleGoogleSign, handleGoogleSignOut }
}
export default useFirebase;