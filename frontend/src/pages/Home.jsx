import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { FiPlus } from "react-icons/fi";
import NoteModal from "../components/NoteModal";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect } from "react";
import SingleNoteCard from "../components/SingleNoteCard";
import { SpinnerDiamond } from "spinners-react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentNote, setCurrentNote] = useState(null);
  const [isViewOnly, setIsViewOnly] = useState(false);
  const [filteredNotes, setFilteredNotes] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchNotes();
  }, []);

  useEffect(() => {
    setFilteredNotes(
      notes.filter(
        (note) =>
          note.title.toLowerCase().includes(query.toLowerCase()) ||
          note.description.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [query, notes]);

  const fetchNotes = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("http://localhost:5000/api/note", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
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
    setCurrentNote(null);
    setIsViewOnly(false);
    setIsModalOpen(false);
  };

  // create new note
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

  const onEdit = (note) => {
    setCurrentNote(note);
    setIsViewOnly(false);
    setIsModalOpen(true);
  };

  const onView = (note) => {
    setCurrentNote(note);
    setIsViewOnly(true); // view-only mode
    setIsModalOpen(true);
  };

  // update note
  const editNote = async (id, title, description) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/note/${id}`,
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
      console.log("update note response: ", response);
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

  // delete note
  const deleteNote = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/note/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log("delete note response: ", response);
      if (response.data.success) {
        toast.success(response.data.message);
        closeModal();
        fetchNotes();
      }
    } catch (error) {
      console.log("error: ", error);
      toast.error(error?.response?.data?.message);
    }
  };

  // background colors for the cards
  const colors = [
    "bg-red-100",
    "bg-blue-100",
    "bg-green-100",
    "bg-yellow-100",
    "bg-purple-100",
    "bg-pink-100",
    "bg-orange-100",
  ];

  return (
    <div className="bg-gray min-h-screen font-Montserrat">
      <Navbar setQuery={setQuery} />

      {loading ? (
        <div className="h-[500px] flex items-center justify-center">
          <SpinnerDiamond
            size={70}
            thickness={150}
            speed={136}
            color="#36ad47"
            secondaryColor="rgba(0, 0, 0, 0.44)"
          />
        </div>
      ) : (
        <div className="px-8 pt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          {filteredNotes.length > 0 ? (
            filteredNotes.map((note, index) => {
              const randomColor = colors[index % colors.length]; // cycle colors
              return (
                <SingleNoteCard
                  key={note._id}
                  note={note}
                  bgColor={randomColor}
                  onEdit={onEdit}
                  onView={onView}
                  deleteNote={deleteNote}
                />
              );
            })
          ) : (
            <div className="col-span-3 flex items-center justify-center h-[300px]">
              <p className="text-gray-700 text-lg font-semibold">
                No notes found{" "}
                {query && (
                  <>
                    with "<span className="text-red-500">{query}</span>"
                  </>
                )}
              </p>
            </div>
          )}
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

      {isModalOpen && (
        <NoteModal
          closeModal={closeModal}
          addNote={addNote}
          currentNote={currentNote}
          editNote={editNote}
          isViewOnly={isViewOnly}
        />
      )}
    </div>
  );
}
