import React, { useState } from "react";
import Button from "./Button";

export default function NoteModal() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="fixed inset-0 bg-gray-800/60 flex justify-center items-center">
      <div className="bg-white p-8 rounded w-2/4">
        <h2 className="text-xl font-bold mb-4">Add New Note</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Note Title"
            className="border-[1px] border-gray-300 p-2 w-full mb-4 focus:outline-none rounded"
          />

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Note Description"
            className="border-[1px] border-gray-300 p-2 w-full mb-4 focus:outline-none h-32 rounded"
          />

          <div className="flex justify-between items-center mt-4">
            <button className="text-red-500 border-[1px] border-red-500 px-4 py-2 rounded hover:bg-red-500/10 cursor-pointer font-semibold">
              Cancel
            </button>

            <Button className="px-4">Add Note</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
