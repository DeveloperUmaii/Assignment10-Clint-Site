import { useState } from "react";
import { auth } from "./FirebaseConfig/Firebase.init";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import { useNavigate, useLocation } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // ✅ আগের লোকেশন পাওয়া যাবে
  const from = location.state?.from?.pathname || "/"; // ✅ আগের লোকেশন না থাকলে "/MyList" এ যাবে

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      Swal.fire("Success", "Login successful!", "success");
      navigate(from, { replace: true }); // ✅ আগের লোকেশনে পাঠাবে
    } catch (error) {
      Swal.fire("Error", "Invalid email or password", "error");
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      Swal.fire("Success", "Google login successful!", "success");
      navigate(from, { replace: true }); // ✅ আগের লোকেশনে পাঠাবে
    } catch (error) {
      Swal.fire("Error", error.message, "error");
    }
  };

  return (
    <form onSubmit={handleLogin} className="p-5 w-96 mx-auto bg-gray-100 rounded-lg shadow-lg">
      <input type="email" name="email" placeholder="Email" className="input input-bordered w-full my-2" required />
      <div className="relative">
        <input type={showPassword ? "text" : "password"} name="password" placeholder="Password" className="input input-bordered w-full my-2" required />
        <button type="button" className="absolute top-3 right-3" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
        </button>
      </div>
      <button type="submit" className="btn btn-primary w-full">Login</button>
      <button type="button" onClick={handleGoogleLogin} className="btn btn-secondary w-full mt-3">Login with Google</button>
    </form>
  );
};

export default Login;
