import type { Metadata } from 'next';
import BlogLista from '@/components/BlogLista';

export const metadata: Metadata = { title: 'Blog', description: 'Artigos curtos sobre impostos, rotina fiscal e gestão para pequenas empresas.' };

export default function Blog() {
  return (
    <div className="wrap">
      <div className="page-h">
        <p className="eyebrow">Blog</p>
        <h1 style={{ marginTop: 14 }}>Contabilidade sem jargão.</h1>
        <p className="lead">Textos curtos para quem toca a empresa e precisa decidir.</p>
      </div>
      <div style={{ paddingBottom: 90 }}><BlogLista /></div>
    </div>
  );
}
