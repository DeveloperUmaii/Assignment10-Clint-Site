import { useState } from "react";
import { auth } from "./FirebaseConfig/Firebase.init";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // ✅ আগের লোকেশন পাওয়া যাবে
  const from = location.state?.from?.pathname || "/"; // ✅ আগের লোকেশন না থাকলে "/MyList" এ যাবে

  const handleRegister = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.PhotoUrl.value;
    const password = form.password.value;

    if (password.length < 6 || !/[A-Z]/.test(password) || !/[a-z]/.test(password)) {
      Swal.fire("Error", "Password must be at least 6 characters and include both uppercase & lowercase letters", "error");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // 🔹 Register করার পর displayName ও photoURL সেট করা
      await updateProfile(user, {
        displayName: name,
        photoURL: photoURL,
      });

      Swal.fire("Success", "Registration successful!", "success");
      navigate(from, { replace: true }); // ✅ আগের লোকেশনে পাঠাবে
    } catch (error) {
      Swal.fire("Error", error.message, "error");
    }
  };

  return (
    <form onSubmit={handleRegister} className="p-5 w-96 mx-auto bg-gray-100 rounded-lg shadow-lg">
      <input type="text" name="name" placeholder="Name" className="input input-bordered w-full my-2" required />
      <input type="email" name="email" placeholder="Email" className="input input-bordered w-full my-2" required />
      <input type="url" name="PhotoUrl" placeholder="Photo URL" className="input input-bordered w-full my-2" required />
      <div className="relative">
        <input type={showPassword ? "text" : "password"} name="password" placeholder="Password" className="input input-bordered w-full my-2" required />
        <button type="button" className="absolute top-3 right-3" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
        </button>
      </div>
      <button type="submit" className="btn btn-primary w-full">Register</button>
    </form>
  );
};

export default Register;
