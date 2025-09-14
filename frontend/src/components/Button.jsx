import React from "react";

export default function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`w-auto bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 animate-gradientMove text-white font-semibold py-2 rounded-sm cursor-pointer shadow-md ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
