import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { FiLogOut } from "react-icons/fi";

export default function Navbar() {
  return (
    <div>
      <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link to="/">Notebook</Link>
        </div>

        <input
          type="text"
          placeholder="Search Notes"
          className="bg-gray-600 px-4 py-2 rounded"
        />

        <div>
          <span className="mr-4">User Name</span>

          {/* <Link to="/login" className="bg-blue-500 px-4 py-2 rounded mr-4">
            Login
          </Link>

          <Link to="/register" className="bg-blue-500 px-4 py-2 rounded mr-4">
            Signup
          </Link> */}

          {/* <button className="btn-primary">Logout</button> */}
          <Link to="/login">
            <Button className="px-4">
              <span className="flex items-center gap-2">
                Logout <FiLogOut className="text-white text-lg" />
              </span>
            </Button>
          </Link>
        </div>
      </nav>
    </div>
  );
}
