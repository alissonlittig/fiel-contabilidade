'use client';
import Link from 'next/link';
import { useState } from 'react';
import { posts, fmtData } from '@/lib/posts';

const tags = ['Todos', ...Array.from(new Set(posts.map((p) => p.tag)))];

export default function BlogLista() {
  const [tag, setTag] = useState('Todos');
  const lista = posts.filter((p) => tag === 'Todos' || p.tag === tag);
  return (
    <>
      <div className="chips" role="group" aria-label="Filtrar por assunto">
        {tags.map((t) => <button key={t} className="chip" aria-pressed={t === tag} onClick={() => setTag(t)}>{t}</button>)}
      </div>
      <div className="posts">
        {lista.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}/`} className="post">
            <div className="meta"><span className="tag">{p.tag}</span><span>{fmtData(p.data)}</span><span>{p.min} min</span></div>
            <h3>{p.titulo}</h3>
            <p>{p.resumo}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
