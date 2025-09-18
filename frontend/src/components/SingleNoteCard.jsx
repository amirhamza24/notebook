import React from "react";
import { FiEdit } from "react-icons/fi";
import { FaTrash } from "react-icons/fa";
import "../styles/style.css";

export default function SingleNoteCard({ note }) {
  console.log("single note card: ", note);

  const truncateText = (text, limit) => {
    if (!text) return "";
    return text.length > limit ? text.substring(0, limit) + "..." : text;
  };

  return (
    // <div className="bg-white p-4 rounded-md border border-gray-200 hover:border-blue-500 hover:shadow-[0_0_70px_0_rgba(0,0,0,0.1)] hover:bg-gray-50 transition-all duration-300 ease-in-out cursor-pointer card">
    <div className="card hover:shadow-[0_0_70px_0_rgba(0,0,0,0.1)] flex flex-col">
      <div>
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
        <button className="text-blue-500 mr-2 cursor-pointer">
          <FiEdit />
        </button>
        <button className="text-red-500 cursor-pointer">
          <FaTrash />
        </button>
      </div>
    </div>
  );
}
