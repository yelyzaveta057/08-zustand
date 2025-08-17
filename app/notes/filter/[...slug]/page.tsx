
import NotesClient from "./Notes.client";
import { Metadata } from "next";

type Params = { slug?: string[] };

export async function generateMetadata(
  { params }: { params: Params }
): Promise<Metadata> {
  const raw = params.slug?.[0];
  const tag =
    !raw || raw.toLowerCase() === "all"
      ? undefined
      : decodeURIComponent(raw);

  return {
    title: tag ? `Notes – ${tag}` : "Notes",
    description: tag
      ? `Browse notes tagged with "${tag}"`
      : "Browse all notes",
  };
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