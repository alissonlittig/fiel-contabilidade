import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { posts, postPorSlug, fmtData } from '@/lib/posts';

export const dynamicParams = false;
export const generateStaticParams = () => posts.map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const p = postPorSlug((await params).slug);
  return p ? { title: p.titulo, description: p.resumo } : {};
}

export default async function Artigo({ params }: { params: Promise<{ slug: string }> }) {
  const p = postPorSlug((await params).slug);
  if (!p) notFound();
  return (
    <div className="wrap">
      <article className="article page-h" style={{ paddingBottom: 90 }}>
        <p className="crumb"><Link prefetch={false} href="/blog/">Blog</Link> / {p.tag}</p>
        <div className="meta"><span className="tag">{p.tag}</span><span>{fmtData(p.data)}</span><span>{p.min} min de leitura</span></div>
        <h1>{p.titulo}</h1>
        <p className="lead">{p.resumo}</p>
        <div className="body">{p.corpo.map((t, i) => <p key={i}>{t}</p>)}</div>
        <div className="box" style={{ marginTop: 44, display: 'grid', gap: 12 }}>
          <h3>Quer aplicar isso no seu caso?</h3>
          <p style={{ color: 'var(--ink2)' }}>Conte como é a sua empresa e simulamos os números com você.</p>
          <div><Link prefetch={false} href="/contato/" className="btn copper">Falar com o escritório</Link></div>
        </div>
        <p className="notice" style={{ marginTop: 20 }}>Conteúdo ilustrativo de um site de demonstração. Não constitui orientação contábil ou tributária.</p>
      </article>
    </div>
  );
}
