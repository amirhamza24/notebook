import React from "react";
import { FiEdit } from "react-icons/fi";
import { FaTrash } from "react-icons/fa";

export default function SingleNoteCard({ note }) {
  console.log("single note card: ", note);

  return (
    <div className="bg-white p-4 rounded shadow-md">
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
