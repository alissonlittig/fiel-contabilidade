import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import { servicos } from '@/lib/servicos';

export const metadata: Metadata = { title: 'Serviços', description: 'Abertura de empresa, contabilidade mensal, folha e imposto de renda.' };

export default function Servicos() {
  return (
    <div className="wrap">
      <div className="page-h">
        <p className="eyebrow">Serviços</p>
        <h1 style={{ marginTop: 14 }}>O que entregamos, e quando.</h1>
        <p className="lead">Cada serviço tem escopo, prazo e preço de partida claros. Sem letra miúda.</p>
      </div>
      <div className="grid4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', paddingBottom: 90 }}>
        {servicos.map((s) => (
          <Link prefetch={false} key={s.slug} href={`/servicos/${s.slug}/`} className="card">
            <span className="ico"><Icon n={s.icone} /></span>
            <h3>{s.nome}</h3>
            <p>{s.resumo}</p>
            <span className="price">A partir de {s.desde}</span>
            <span className="more">Ver detalhes →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
