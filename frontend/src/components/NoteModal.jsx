import React, { useEffect, useState } from "react";
import Button from "./Button";
import { toast } from "react-toastify";

export default function NoteModal({
  closeModal,
  addNote,
  currentNote,
  editNote,
  isViewOnly,
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // const navigate = useNavigate();

  console.log("is View: ", isViewOnly);

  useEffect(() => {
    if (currentNote) {
      setTitle(currentNote.title);
      setDescription(currentNote.description);
    }
  }, [currentNote]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) {
      toast.error("Please enter a title");
      return;
    }
    if (!description.trim()) {
      toast.error("Please enter a description");
      return;
    }

    if (currentNote) {
      editNote(currentNote._id, title, description);
    } else {
      addNote(title, description);
    }

    // addNote(title, description);

    // try {
    //   const response = await axios.post("http://localhost:5000/api/note/add", {
    //     title,
    //     description,
    //   });
    //   if (response.data.success) {
    //     toast.success(response.data.message);
    //     closeModal();
    //     navigate("/");
    //     setTitle("");
    //     setDescription("");
    //   }
    // } catch (error) {
    //   console.log("error: ", error);
    //   toast.error(error?.response?.data?.message);
    // }
  };

  return (
    <div className="fixed inset-0 bg-gray-800/60 flex justify-center items-center">
      <div className="bg-white p-8 rounded w-2/4">
        <h2 className="text-xl font-bold mb-4">
          {currentNote ? "Edit Note" : "Add New Note"}
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Note Title"
            disabled={isViewOnly}
            className="border-[1px] border-gray-300 p-2 w-full mb-4 focus:outline-none rounded"
          />

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Note Description"
            disabled={isViewOnly}
            className="border-[1px] border-gray-300 p-2 w-full mb-4 focus:outline-none h-32 rounded text-sm"
          />

          <div
            className={`flex mt-4 ${
              isViewOnly ? "justify-end" : "justify-between"
            } items-center`}
          >
            <button
              onClick={closeModal}
              className="text-red-500 border-[1px] border-red-500 px-4 py-2 rounded hover:bg-red-500/10 cursor-pointer font-semibold"
            >
              Cancel
            </button>

            {!isViewOnly && (
              <Button className="px-4">
                {currentNote ? "Update Note" : "Add Note"}
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
