import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";

export default function DeleteModal({ isOpen, onClose, onConfirm, noteTitle }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 w-1/3">
        {/* <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Delete Confirmation!
        </h2> */}

        <div className="flex items-center gap-3 mb-4">
          <FaExclamationTriangle className="text-red-500 text-2xl" />
          <h2 className="text-xl font-semibold text-gray-800">
            Delete Confirmation
          </h2>
        </div>
        <p className="text-sm text-gray-600 mb-6">
          Are you sure you want to permanently delete{" "}
          <span className="font-semibold text-red-500">"{noteTitle}"</span>{" "}
          note?
        </p>

        <div className="h-6"></div>

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded font-semibold border border-gray-300 hover:bg-gray-100 text-gray-600 cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded font-semibold bg-red-500 text-white hover:bg-red-600 cursor-pointer"
          >
            Yes, Delete
          </button>
        </div>
      </div>
    </div>
  );
}
