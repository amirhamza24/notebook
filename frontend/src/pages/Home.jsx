import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { FiPlus } from "react-icons/fi";
import NoteModal from "../components/NoteModal";
import axios from "axios";
import { toast } from "react-toastify";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addNote = async (title, description) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/note/add",
        {
          title,
          description,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log("create note response: ", response);
      if (response.data.success) {
        toast.success(response.data.message);
        closeModal();
        // setTitle("");
        // setDescription("");
      }
    } catch (error) {
      console.log("error: ", error);
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="bg-gray min-h-screen">
      <Navbar />

      <div className="fixed right-8 bottom-8 group">
        <button
          onClick={() => setIsModalOpen(true)}
          className="w-10 h-10 bg-teal-500 text-white font-bold rounded-full flex items-center justify-center text-xl cursor-pointer"
        >
          <FiPlus />
        </button>

        {/* Tooltip */}
        <span className="absolute -right-5 bottom-8 -translate-y-1/2 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm px-3 py-1 rounded-md whitespace-nowrap transition-opacity duration-300">
          Create New
        </span>
      </div>

      {isModalOpen && <NoteModal closeModal={closeModal} addNote={addNote} />}
    </div>
  );
}
