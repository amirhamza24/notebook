import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { FiPlus } from "react-icons/fi";
import NoteModal from "../components/NoteModal";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect } from "react";
import SingleNoteCard from "../components/SingleNoteCard";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("http://localhost:5000/api/note");
      console.log("get notes: ", data);

      if (data.success) {
        setNotes(data.notes);
      }
    } catch (error) {
      console.log("error: ", error);
      toast.error(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

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
        fetchNotes();
        // setTitle("");
        // setDescription("");
      }
    } catch (error) {
      console.log("error: ", error);
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="bg-gray min-h-screen font-Montserrat">
      <Navbar />

      {loading ? (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800/50 flex justify-center items-center">
          <div className="w-60 h-60 bg-gradient-to-tr from-teal-500 to-blue-500 rounded-full animate-spin" />
        </div>
      ) : (
        <div className="px-8 pt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          {notes.map((note) => {
            return <SingleNoteCard key={note._id} note={note} />;
          })}
        </div>
      )}

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
