import React, { useState } from "react";
import { FiUser, FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../context/ContextProvider";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [dots, setDots] = useState("");

  const { login } = useAuth();

  // Loading dots
  useEffect(() => {
    if (!loading) return;

    let count = 0;
    const interval = setInterval(() => {
      count = (count + 1) % 4; // 0 → 1 → 2 → 3 → 0
      setDots(".".repeat(count));
    }, 500); // change every 0.5s

    return () => clearInterval(interval);
  }, [loading]);

  // form submission
  const handleSubmit = async (e) => {
    console.log("email", email);
    console.log("password", password);

    e.preventDefault();

    // Basic validations
    if (!email.trim()) {
      toast.error("Please enter your Email");
      return;
    }
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    if (!password.trim()) {
      toast.error("Please enter your Password");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password }
      );
      console.log("api response: ", response);
      if (response.data.success) {
        login(response.data.user);
        toast.success(response.data.message);

        localStorage.setItem("token", response.data.token);

        // navigate to home page after login
        navigate("/");
      }
    } catch (error) {
      console.log("error: ", error);
      toast.error(error?.response?.data?.message);
    } finally {
      setLoading(false); // stop loading
    }
  };

  return (
    <div className="flex w-full h-screen">
      <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
        <div className="w-60 h-60 bg-gradient-to-tr from-teal-500 to-blue-500 rounded-full animate-spin" />
        <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg" />
      </div>

      <div className="flex items-center justify-center w-full lg:w-1/2">
        {/* <Form /> */}

        <div className=" lg:shadow-[0_0_70px_0_rgba(0,0,0,0.1)] p-6 w-123 bg-white rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Login Notebook Account</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">
                Email <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center bg-gray-100 rounded-sm px-3 py-2">
                <FiMail className="text-gray-400 mr-2" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-gray-100 focus:outline-none"
                  placeholder="Enter Email"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center bg-gray-100 rounded-sm px-3 py-2">
                <FiLock className="text-gray-400 mr-2" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-gray-100 focus:outline-none"
                  placeholder="*********"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="ml-2 text-gray-500 focus:outline-none cursor-pointer"
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>

            <div className="mb-4">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 animate-gradientMove text-white font-semibold py-2 rounded-sm cursor-pointer shadow-md"
                disabled={loading}
              >
                {/* Login */}
                {loading ? `Login${dots}` : "Login"}
              </button>

              <p className="text-center mt-2">
                Don't have an account?{" "}
                <Link className="text-blue-500 hover:underline" to="/register">
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
        <div className="w-60 h-60 bg-gradient-to-tr from-teal-500 to-blue-500 rounded-full animate-spin" />
        <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg" />
      </div> */}

      {/* Toast container */}
      {/* <ToastContainer position="top-center" autoClose={3000} /> */}
    </div>
  );
}
