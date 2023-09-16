"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

export const NoteCard = ({ id, name, attachment }) => {
  const router = useRouter();
  const [newContent, setNewContent] = useState(name);
  const [editMode, setEditMode] = useState(false);

  const handleDeleteNotes = async () => {
    console.log(id);
    const res = await fetch(
      "https://api.tablebackend.com/v1/rows/gXBKXPmA3DuL",
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([id]),
      }
    );
    const data = await res.json();
    router.refresh();
  };

  const handleEditNotes = async () => {
    const res = await fetch(
      "https://api.tablebackend.com/v1/rows/gXBKXPmA3DuL",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ _id: id, name: newContent, attachment: "" }),
      }
    );
    const data = await res.json();
    setEditMode(false);
    router.refresh();
  };

  return (
    <div className="border-2 p-4 rounded-lg shadow">
      {/* <Image src={attachment} width={100} height={100} alt="image" /> */}
      {editMode ? (
        <input
          className="mb-5"
          value={newContent || name}
          onChange={(e) => setNewContent(e.target.value)}
        />
      ) : (
        <div className="min-h-[120px]">{name}</div>
      )}

      <div className="flex gap-4">
        {editMode ? (
          <button
            className="bg-orange-400 border-orange-500 text-white hover:bg-orange-300 hover:scale-105 duration-300"
            onClick={handleEditNotes}
          >
            Update
          </button>
        ) : (
          <button
            className="bg-pink-400 border-pink-600 text-white hover:bg-pink-400 hover:scale-105 duration-300"
            onClick={() => setEditMode(true)}
          >
            Edit
          </button>
        )}

        <button
          className="bg-white border-2 border-red-600 text-red-600 hover:bg-white duration-300 hover:scale-105"
          onClick={handleDeleteNotes}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
