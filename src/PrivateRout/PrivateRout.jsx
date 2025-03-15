import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Pages/FirebaseConfig/AuthProvider";
// import { ClipLoader } from "react-spinners"; // ✅ স্পিনার লাইব্রেরি ইমপোর্ট


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext); // ✅ ইউজার ও লোডিং স্টেট আনবে
    const location = useLocation();

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                    <span className="loading loading-ring loading-xs"></span>
                      <span className="loading loading-ring loading-sm"></span>
            </div>
        ); // ✅ স্পিনার দেখাবে যখন লোডিং হবে
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />; // ✅ ইউজার না থাকলে লগইন পেজে পাঠাবে
    }

    return children; // ✅ ইউজার থাকলে চাইল্ড কম্পোনেন্ট দেখাবে
};

export default PrivateRoute;
