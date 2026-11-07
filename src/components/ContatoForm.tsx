import { useState } from 'react';
import { validarContato, type Contato } from '@/lib/contato';

export default function ContatoForm() {
  const [c, setC] = useState<Contato>({ nome: '', email: '', mensagem: '' });
  const [erros, setErros] = useState<Partial<Record<keyof Contato, string>>>({});
  const [ok, setOk] = useState(false);
  const set = (k: keyof Contato) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setC({ ...c, [k]: e.target.value });

  function enviar(e: React.FormEvent) {
    e.preventDefault();
    const er = validarContato(c);
    setErros(er);
    setOk(Object.keys(er).length === 0);
  }
  if (ok) {
    return (
      <div className="success" role="status">
        <h3>Recebido, {c.nome.split(' ')[0]}.</h3>
        <p style={{ marginTop: 8 }}>Esta é uma demonstração: nada foi enviado e nenhum dado saiu do seu navegador. Num site real, a proposta chegaria em um dia útil.</p>
      </div>
    );
  }
  return (
    <form className="form" onSubmit={enviar} noValidate>
      <p className="notice">Formulário de demonstração: nada é enviado.</p>
      <div className="field">
        <label className="l" htmlFor="nome">Nome</label>
        <input id="nome" type="text" autoComplete="name" value={c.nome} onChange={set('nome')} aria-invalid={!!erros.nome} aria-describedby={erros.nome ? 'e-nome' : undefined} />
        {erros.nome && <span className="err" id="e-nome">{erros.nome}</span>}
      </div>
      <div className="field">
        <label className="l" htmlFor="email">E-mail</label>
        <input id="email" type="email" autoComplete="email" value={c.email} onChange={set('email')} aria-invalid={!!erros.email} aria-describedby={erros.email ? 'e-email' : undefined} />
        {erros.email && <span className="err" id="e-email">{erros.email}</span>}
      </div>
      <div className="field">
        <label className="l" htmlFor="msg">Sobre a sua empresa</label>
        <textarea id="msg" value={c.mensagem} onChange={set('mensagem')} aria-invalid={!!erros.mensagem} aria-describedby={erros.mensagem ? 'e-msg' : undefined} />
        {erros.mensagem && <span className="err" id="e-msg">{erros.mensagem}</span>}
      </div>
      <button className="btn copper" type="submit">Pedir proposta</button>
    </form>
  );
}
