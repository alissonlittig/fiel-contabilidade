import Link from 'next/link';
import { Logo } from './Header';
import { servicos } from '@/lib/servicos';

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="cols">
          <div>
            <Link href="/" className="brand"><Logo /></Link>
            <p style={{ marginTop: 14, maxWidth: '38ch' }}>Contabilidade para pequenas empresas, com guias no prazo e relatórios que o dono entende.</p>
          </div>
          <div>
            <p className="h4">Serviços</p>
            {servicos.map((s) => <Link key={s.slug} href={`/servicos/${s.slug}/`}>{s.nome}</Link>)}
          </div>
          <div>
            <p className="h4">Escritório</p>
            <Link href="/blog/">Blog</Link>
            <Link href="/cliente/">Área do cliente (demo)</Link>
            <Link href="/contato/">Contato</Link>
          </div>
        </div>
        <div className="fine">
          <span>Projeto de demonstração. Fiel Contabilidade é uma marca fictícia; todos os nomes, valores e dados são inventados.</span>
          <span>Feito por Alisson Littig</span>
        </div>
      </div>
    </footer>
  );
}
