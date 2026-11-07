import type { Metadata } from 'next';
import ContatoForm from '@/components/ContatoForm';

export const metadata: Metadata = { title: 'Contato', description: 'Peça uma proposta de contabilidade para a sua empresa.' };

export default function Contato() {
  return (
    <div className="wrap">
      <div className="page-h"><p className="eyebrow">Contato</p><h1 style={{ marginTop: 14 }}>Conte da sua empresa.</h1></div>
      <div className="contact" style={{ paddingBottom: 90 }}>
        <div style={{ display: 'grid', gap: 18 }}>
          <p className="lead">Respondemos em até um dia útil com uma proposta de valor fixo. Sem compromisso.</p>
          <ul className="rows" style={{ maxWidth: 420 }}>
            <li><span><small>Horário</small>Segunda a sexta, 9h às 18h</span></li>
            <li><span><small>Cidade</small>Curitiba, PR (endereço fictício)</span></li>
            <li><span><small>Primeira conversa</small>20 minutos, por vídeo ou telefone</span></li>
          </ul>
        </div>
        <ContatoForm />
      </div>
    </div>
  );
}
