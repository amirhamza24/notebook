import React from "react";
import { FiEdit } from "react-icons/fi";
import { FaTrash } from "react-icons/fa";
import "../styles/style.css";

export default function SingleNoteCard({ note }) {
  console.log("single note card: ", note);

  return (
    // <div className="bg-white p-4 rounded-md border border-gray-200 hover:border-blue-500 hover:shadow-[0_0_70px_0_rgba(0,0,0,0.1)] hover:bg-gray-50 transition-all duration-300 ease-in-out cursor-pointer card">
    <div className="cursor-pointer card hover:shadow-[0_0_70px_0_rgba(0,0,0,0.1)] ">
      <h2 className="text-xl font-bold">{note.title}</h2>
      <p>{note.description}</p>

      <div className="flex justify-end mt-2">
        <button className="text-blue-500 mr-2">
          <FiEdit />
        </button>
        <button className="text-red-500">
          <FaTrash />
        </button>
      </div>
    </div>
  );
}
