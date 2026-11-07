import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Icon from '@/components/Icon';
import { servicos, servicoPorSlug } from '@/lib/servicos';

export const dynamicParams = false;
export const generateStaticParams = () => servicos.map((s) => ({ slug: s.slug }));

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const s = servicoPorSlug((await params).slug);
  return s ? { title: s.nome, description: s.resumo } : {};
}

export default async function Servico({ params }: { params: Promise<{ slug: string }> }) {
  const s = servicoPorSlug((await params).slug);
  if (!s) notFound();
  return (
    <div className="wrap">
      <div className="page-h">
        <p className="crumb"><Link href="/servicos/">Serviços</Link> / {s.nome}</p>
        <h1>{s.nome}</h1>
        <p className="lead">{s.resumo}</p>
      </div>
      <div className="two" style={{ paddingBottom: 90 }}>
        <div className="box">
          <h3>O que está incluído</h3>
          <ul className="checks">
            {s.entrega.map((e) => <li key={e}><Icon n="check" /><span>{e}</span></li>)}
          </ul>
        </div>
        <aside className="side">
          <div><span className="eyebrow">A partir de</span><p style={{ font: '500 1.7rem/1.2 var(--serif)', marginTop: 6 }}>{s.desde}</p></div>
          <div><b>Prazo</b><p style={{ color: 'var(--ink2)' }}>{s.prazo}</p></div>
          <div><b>Para quem</b><p style={{ color: 'var(--ink2)' }}>{s.para}</p></div>
          <Link href="/contato/" className="btn copper">Pedir proposta</Link>
        </aside>
      </div>
    </div>
  );
}
