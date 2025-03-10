import React, { createContext, useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./Firebase.init";
// import { auth } from "../firebaseConfig"; // Ensure firebaseConfig.js is correctly set up

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const logOut = () => {
        return signOut(auth);
    };

    return (
        <AuthContext.Provider value={{ user, loading, logOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
