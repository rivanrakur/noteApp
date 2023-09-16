import { NoteEditor } from "@/components/NoteEditor";

async function getNotes() {
  const res = await fetch("https://api.tablebackend.com/v1/rows/gXBKXPmA3DuL", {
    cache: "no-cache",
  });
  const data = await res.json();
  return data;
}

export default async function Page() {
  const { data } = await getNotes();

  return <NoteEditor notedData={data} />;
}
