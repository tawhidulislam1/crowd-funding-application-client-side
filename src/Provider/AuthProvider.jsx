import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from 'firebase/auth';
import { toast } from 'react-toastify';

import { App } from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(App);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    useEffect(() => {
        const unSubcribe = onAuthStateChanged(auth, (currentUser) => {
            setLoading(false);
            setUser(currentUser);
        });
        return () => {
            setLoading(true);
            unSubcribe();
        };
    }, []);

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = () => {
        setLoading(true);
        toast.error('Logout Successfully');

        return signOut(auth);
    };

    const updateProfiles = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);
    };

    const googleLogin = () => {
        return signInWithPopup(auth, provider);
    };

    const forgetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    };

    const authInfo = {
        user,
        setUser,
        logOut,
        signIn,
        loading,
        forgetPassword,
        googleLogin,
        updateProfiles,
        createUser,
    };

    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

// Add PropTypes validation
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthProvider;
