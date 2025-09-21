import React from "react";
import { FiEdit } from "react-icons/fi";
import { FaTrash } from "react-icons/fa";
import "../styles/style.css";

export default function SingleNoteCard({ note, bgColor }) {
  console.log("single note card: ", note);

  const truncateText = (text, limit) => {
    if (!text) return "";
    return text.length > limit ? text.substring(0, limit) + "..." : text;
  };

  return (
    // <div className="bg-white p-4 rounded-md border border-gray-200 hover:border-blue-500 hover:shadow-[0_0_70px_0_rgba(0,0,0,0.1)] hover:bg-gray-50 transition-all duration-300 ease-in-out cursor-pointer card">
    // <div className="card hover:shadow-[0_0_70px_0_rgba(0,0,0,0.1)] flex flex-col">
    //   <div className="h-20">
    //     <h2 className="text-xl font-bold">
    //       {/* {note.title} */}
    //       {truncateText(note.title, 15)}
    //     </h2>
    //     <p>
    //       {/* {note.description} */}
    //       {truncateText(note.description, 30)}
    //     </p>
    //   </div>

    //   <div className="flex justify-end mt-2 text-lg">
    //     {/* Edit Button */}
    //     <div className="relative group">
    //       <button className="text-blue-500 mr-2 cursor-pointer">
    //         <FiEdit />
    //       </button>
    //       <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-700 text-white text-[10px] rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition">
    //         Edit Note
    //       </span>
    //     </div>

    //     {/* Delete Button */}
    //     <div className="relative group">
    //       <button className="text-red-500 cursor-pointer">
    //         <FaTrash />
    //       </button>
    //       <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-700 text-white text-[10px] rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition">
    //         Delete Note
    //       </span>
    //     </div>
    //   </div>
    // </div>

    <div
      className={`${bgColor} p-4 rounded-md border border-gray-200 hover:border-blue-500 hover:shadow-[0_0_70px_0_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out cursor-pointer`}
    >
      <div className="h-20">
        <h2 className="text-xl font-bold">
          {/* {note.title} */}
          {truncateText(note.title, 15)}
        </h2>
        <p>
          {/* {note.description} */}
          {truncateText(note.description, 30)}
        </p>
      </div>

      <div className="flex justify-end mt-2 text-lg">
        {/* Edit Button */}
        <div className="relative group">
          <button className="text-blue-500 mr-2 cursor-pointer">
            <FiEdit />
          </button>
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-700 text-white text-[10px] rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition">
            Edit Note
          </span>
        </div>

        {/* Delete Button */}
        <div className="relative group">
          <button className="text-red-500 cursor-pointer">
            <FaTrash />
          </button>
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-700 text-white text-[10px] rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition">
            Delete Note
          </span>
        </div>
      </div>
    </div>
  );
}
