"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export const Input = () => {
  const router = useRouter();
  const [content, setContent] = useState("");

  const handleCreateNotes = async () => {
    const res = await fetch(
      "https://api.tablebackend.com/v1/rows/gXBKXPmA3DuL",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([{ name: content, attachment: "" }]),
      }
    );
    const data = await res.json();
    setContent("");
    router.refresh();
  };

  return (
    <div className="w-full flex gap-4">
      <button
        className=" bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ... border-none hover:scale-105 duration-300"
        onClick={handleCreateNotes}
      >
        Create Card
      </button>
    </div>
  );
};
