import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { FiLogOut, FiUser } from "react-icons/fi";
import { useAuth } from "../context/ContextProvider";

export default function Navbar({ setQuery }) {
  const { user, logout } = useAuth();
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef(null);

  console.log("user", user);

  const handleToggleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <nav className="font-Montserrat bg-gray-800 p-4 md:py-4 md:px-8 text-white flex justify-between items-center">
        <div className="text-4xl font-semibold font-logo tracking-wider">
          <Link
            to="/"
            className="bg-gradient-to-r from-[#4079ff] via-[#40ffaa] to-[#4079ff] bg-clip-text text-transparent animate-gradientLogo"
          >
            Notebook
          </Link>
        </div>

        {/* Search Bar */}
        <div className="hidden md:block">
          <input
            type="text"
            placeholder="Search Notes"
            className="bg-gray-600 px-4 py-2 rounded"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="relative" ref={dropdownRef}>
          {!user ? (
            <>
              <div className="hidden md:flex">
                <Link
                  to="/login"
                  className="bg-blue-500 px-4 py-2 rounded mr-4"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="bg-teal-500 px-4 py-2 rounded mr-4"
                >
                  Signup
                </Link>
              </div>
            </>
          ) : (
            <>
              <button
                onClick={handleToggleDropdown}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-600 hover:bg-gray-700 cursor-pointer"
              >
                <FiUser className="text-white text-xl" />
              </button>

              {/* Dropdown */}
              {openDropdown && (
                <div className="absolute right-0 mt-2 w-[250px] h-40 bg-white text-black rounded z-50 space-y-2 flex flex-col justify-center items-center shadow-[0_0_40px_0_rgba(0,0,0,0.2)]  bg-[linear-gradient(to_top_right,#FCF2ED,#E8F5FA)]">
                  <div className="text-2xl px-4 text-center font-semibold flex items-center justify-center h-full">
                    {user.name}
                  </div>
                  <div className="w-full border-b-[.5px] border-gray-300 my-0"></div>
                  <div className="flex items-center justify-center h-full">
                    <Button
                      className="text-left px-6 py-2 flex justify-center items-center gap-2"
                      onClick={logout}
                    >
                      Logout <FiLogOut />
                    </Button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </nav>
    </div>
  );
}
