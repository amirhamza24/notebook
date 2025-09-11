import React, { useState } from "react";
import { FiUser, FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    // <div className="flex justify-center items-center min-h-screen bg-gray-100">
    //   <div className="border border-gray-200 shadow-md p-6 w-1/3 bg-white rounded-lg">
    //     <h2 className="text-2xl font-bold mb-4">Create an Account</h2>

    //     <form>
    //       <div className="mb-4">
    //         <label className="block text-gray-700 font-semibold">Name</label>
    //         <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2">
    //           <FiUser className="text-gray-400 mr-2" />
    //           <input
    //             type="text"
    //             className="w-full bg-gray-100 focus:outline-none"
    //             placeholder="Enter Username"
    //           />
    //         </div>
    //       </div>

    //       <div className="mb-4">
    //         <label className="block text-gray-700 font-semibold">Email</label>
    //         <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2">
    //           <FiMail className="text-gray-400 mr-2" />
    //           <input
    //             type="email"
    //             className="w-full bg-gray-100 focus:outline-none"
    //             placeholder="Enter Email"
    //           />
    //         </div>
    //       </div>

    //       <div className="mb-4">
    //         <label className="block text-gray-700 font-semibold">
    //           Password
    //         </label>
    //         <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2">
    //           <FiLock className="text-gray-400 mr-2" />
    //           <input
    //             type={showPassword ? "text" : "password"}
    //             className="w-full bg-gray-100 focus:outline-none"
    //             placeholder="*********"
    //           />
    //           <button
    //             type="button"
    //             onClick={() => setShowPassword(!showPassword)}
    //             className="ml-2 text-gray-500 focus:outline-none cursor-pointer"
    //           >
    //             {showPassword ? <FiEyeOff /> : <FiEye />}
    //           </button>
    //         </div>
    //       </div>

    //       <div className="mb-4">
    //         <button
    //           type="submit"
    //           className="w-full bg-teal-600 text-white font-semibold py-2 rounded cursor-pointer hover:bg-teal-600/90"
    //         >
    //           Signup
    //         </button>

    //         <p className="text-center mt-2">
    //           Already have an account?{" "}
    //           <a href="#" className="text-blue-500 hover:underline">
    //             Login
    //           </a>
    //         </p>
    //       </div>
    //     </form>
    //   </div>
    // </div>

    <div className="flex w-full h-screen">
      <div className="flex items-center justify-center w-full lg:w-1/2">
        {/* <Form /> */}

        <div className="shadow-[0_0_50px_0_rgba(0,0,0,0.2)] p-6 w-123 bg-white rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Create an Account</h2>

          <form>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">Name</label>
              <div className="flex items-center bg-gray-100 rounded-sm px-3 py-2">
                <FiUser className="text-gray-400 mr-2" />
                <input
                  type="text"
                  className="w-full bg-gray-100 focus:outline-none"
                  placeholder="Enter Username"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">Email</label>
              <div className="flex items-center bg-gray-100 rounded-sm px-3 py-2">
                <FiMail className="text-gray-400 mr-2" />
                <input
                  type="email"
                  className="w-full bg-gray-100 focus:outline-none"
                  placeholder="Enter Email"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">
                Password
              </label>
              <div className="flex items-center bg-gray-100 rounded-sm px-3 py-2">
                <FiLock className="text-gray-400 mr-2" />
                <input
                  type={showPassword ? "text" : "password"}
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
                className="w-full bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 animate-gradientMove text-white font-semibold py-2 
             rounded-sm cursor-pointer shadow-md"
              >
                Signup
              </button>

              <p className="text-center mt-2">
                Already have an account?{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>

      <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
        <div className="w-60 h-60 bg-gradient-to-tr from-teal-500 to-blue-500 rounded-full animate-spin" />
        <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg" />
      </div>
    </div>
  );
}
