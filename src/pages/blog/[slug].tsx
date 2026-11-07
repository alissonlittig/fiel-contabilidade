import type { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import Seo from '@/components/Seo';
import { posts, postPorSlug, fmtData, type Post } from '@/lib/posts';

export const getStaticPaths: GetStaticPaths = () => ({ paths: posts.map((p) => ({ params: { slug: p.slug } })), fallback: false });
export const getStaticProps: GetStaticProps<{ p: Post }> = ({ params }) => ({ props: { p: postPorSlug(String(params?.slug))! } });

export default function Artigo({ p }: { p: Post }) {
  return (
    <div className="wrap">
      <Seo title={p.titulo} description={p.resumo} />
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
