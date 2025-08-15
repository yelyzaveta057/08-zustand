
import NotesClient from "./Notes.client";


export async function generateMetadata({params}:Props) {
  const {id} = await params
  const note = await fetchNoteById(id)
  return{
    title: `Note: ${note.title}`,
    description: note.content.slice(0, 30),
    openGraph: {
      title: `Note: ${note.title}`,
      description: note.content.slice(0, 100),
      url: `https://notehub.com/notes/${id}`,
      siteName: 'NoteHub',
      images: [
        {
          url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
          width: 1200,
          height: 630,
          alt: note.title,
        },
      ],
      type: 'article',
    },
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