
import { Metadata } from 'next';
import NotFound from './not-found';

export const metadata: Metadata = {
  title: "Not-Found Page",
  description: "Something went wrong",
  openGraph: {
      title: "Not-Found Page",
      description: "Something went wrong",
      url: `https://notehub.com/not-found`,
      siteName: 'NoteHub',
      images: [
        {
          url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
          width: 1200,
          height: 630,
          alt:  "Error",
        },
      ],
      type: 'article',
    },
  
};

export default function NotFoundPage() {
  return <NotFound />
}