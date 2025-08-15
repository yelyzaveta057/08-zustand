// app/not-found.tsx

'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import css from "./page.module.css"

const NotFound = () => {
  const router = useRouter();

export async function generateMetadata({params}:NotFound) {
  const { NotFound } = await router
  const note = await NotFound
  return{
    title: `Note: ${note.title}`,
    description: note.content.slice(0, 30),
    openGraph: {
      title: `Note: ${note.title}`,
      description: note.content.slice(0, 100),
      url: `https://notehub.com/notes/not-found.tsx`,
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

  useEffect(() => {
    // Редірект через 3 секунди
    const timer = setTimeout(() => router.push('/'), 3000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div>
      <h1 className={css.title}>404 - Page not found</h1>
<p className={css.description}>Sorry, the page you are looking for does not exist.</p>

    </div>
  );
};

export default NotFound