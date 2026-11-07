import type { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import Seo from '@/components/Seo';
import Icon from '@/components/Icon';
import { servicos, servicoPorSlug, type Servico as S } from '@/lib/servicos';

export const getStaticPaths: GetStaticPaths = () => ({ paths: servicos.map((s) => ({ params: { slug: s.slug } })), fallback: false });
export const getStaticProps: GetStaticProps<{ s: S }> = ({ params }) => ({ props: { s: servicoPorSlug(String(params?.slug))! } });

export default function Servico({ s }: { s: S }) {
  return (
    <div className="wrap">
      <Seo title={s.nome} description={s.resumo} />
      <div className="page-h">
        <p className="crumb"><Link prefetch={false} href="/servicos/">Serviços</Link> / {s.nome}</p>
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
          <Link prefetch={false} href="/contato/" className="btn copper">Pedir proposta</Link>
        </aside>
      </div>
    </div>
  );
}
