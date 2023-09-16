"use client";

import { NoteCard } from "./NoteCard";
import { Input } from "./Input";

export const NoteEditor = ({ notedData }) => {
  return (
    <div className="space-y-8 ">
      <Input />
      <div className="space-y-4">
        {notedData.map(({ _id, name, attachment }) => {
          return (
            <div>
              <NoteCard key={_id} id={_id} name={name} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
