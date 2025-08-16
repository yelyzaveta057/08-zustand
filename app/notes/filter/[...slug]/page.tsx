
import { fetchNoteById } from "@/lib/api";
import NotesClient from "./Notes.client";

type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params
  const note = await fetchNoteById(id)
  return {
    title: `Note: ${note.title}`,
    description: note.content.slice(0, 30),
  }
}


export default async function NotesPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  
  const { slug } = await params; 
  const raw = slug?.[0];
  const tag =
    !raw || raw.toLowerCase() === "all" ? undefined : decodeURIComponent(raw);
    

  return <NotesClient tag={tag} />;
}