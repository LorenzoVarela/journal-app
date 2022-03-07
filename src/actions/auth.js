//import { object } from 'webidl-conversions'
import { firebase, googleAuthProvider } from '../firebase/firebaseConfig'
import { types } from '../types/types'

export const starLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(login(123, 'Pedro'));
        }, 3500)
    }
}

export const starGoogleLogin = () => {
    console.log('Estoy aquí');
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({ user }) => {
                dispatch(
                    login(user.uid, user.displayName)
                )

            })
    }
}

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
});

