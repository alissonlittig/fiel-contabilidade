import { useEffect, useState } from 'react';
import Icon from './Icon';
import { brl } from '@/lib/honorarios';
import { proximoVencimento, diasAte } from '@/lib/datas';
import { DEMO, loginDemo, faturamento, guias, msgsIniciais, docsIniciais, type Msg } from '@/lib/cliente';

const KEY = 'fiel-demo-v1';
type Aba = 'resumo' | 'guias' | 'docs' | 'msgs';
const abas: { id: Aba; t: string; i: string }[] = [
  { id: 'resumo', t: 'Resumo', i: 'home' },
  { id: 'guias', t: 'Guias', i: 'cal' },
  { id: 'docs', t: 'Documentos', i: 'file' },
  { id: 'msgs', t: 'Mensagens', i: 'chat' }
];

function Grafico() {
  const max = Math.max(...faturamento.map((f) => f.v));
  const W = 640, H = 220, bw = 28, gap = (W - bw * 12) / 13;
  return (
    <svg className="chart" viewBox={`0 0 ${W} ${H + 24}`} role="img" aria-label="Faturamento dos últimos 12 meses, de R$ 61 mil a R$ 84 mil">
      {[0.25, 0.5, 0.75, 1].map((p) => <line key={p} x1="0" x2={W} y1={H - H * p} y2={H - H * p} stroke="rgba(19,34,43,.1)" />)}
      {faturamento.map((f, i) => {
        const h = (f.v / max) * H;
        const x = gap + i * (bw + gap);
        return (
          <g key={f.m}>
            <rect x={x} y={H - h} width={bw} height={h} rx="4" fill={i === 11 ? '#a2431b' : '#13222b'} opacity={i === 11 ? 1 : 0.85} />
            <text x={x + bw / 2} y={H + 17} textAnchor="middle" fontSize="12" fill="#52616a">{f.m}</text>
          </g>
        );
      })}
    </svg>
  );
}

export default function ClienteApp() {
  const [ok, setOk] = useState(false);
  const [pronto, setPronto] = useState(false);
  const [email, setEmail] = useState(DEMO.email);
  const [senha, setSenha] = useState(DEMO.senha);
  const [erro, setErro] = useState('');
  const [aba, setAba] = useState<Aba>('resumo');
  const [hoje, setHoje] = useState<Date | null>(null);
  const [pagas, setPagas] = useState<string[]>([]);
  const [docs, setDocs] = useState(docsIniciais);
  const [msgs, setMsgs] = useState<Msg[]>(msgsIniciais);
  const [txt, setTxt] = useState('');

  useEffect(() => {
    setHoje(new Date());
    try {
      const s = JSON.parse(localStorage.getItem(KEY) ?? '{}');
      if (s.ok) setOk(true);
      if (s.pagas) setPagas(s.pagas);
      if (s.docs) setDocs(s.docs);
      if (s.msgs) setMsgs(s.msgs);
    } catch { /* estado corrompido: começa do zero */ }
    setPronto(true);
  }, []);
  useEffect(() => {
    if (pronto) localStorage.setItem(KEY, JSON.stringify({ ok, pagas, docs, msgs }));
  }, [ok, pagas, docs, msgs, pronto]);

  if (!pronto) return <div className="wrap" style={{ minHeight: '60vh' }} />;

  if (!ok) {
    return (
      <div className="wrap">
        <form className="form login" onSubmit={(e) => { e.preventDefault(); if (loginDemo(email, senha)) { setOk(true); setErro(''); } else setErro('E-mail ou senha incorretos.'); }}>
          <div><p className="eyebrow">Área do cliente</p><h1 style={{ fontSize: '2.2rem', marginTop: 10 }}>Entrar no portal</h1></div>
          <p className="notice">Demonstração com dados fictícios. As credenciais de teste já estão preenchidas: <b>{DEMO.email}</b> / <b>{DEMO.senha}</b>.</p>
          <div className="field"><label className="l" htmlFor="le">E-mail</label><input id="le" type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="username" /></div>
          <div className="field"><label className="l" htmlFor="ls">Senha</label><input id="ls" type="password" value={senha} onChange={(e) => setSenha(e.target.value)} autoComplete="current-password" />{erro && <span className="err" role="alert">{erro}</span>}</div>
          <button className="btn copper" type="submit">Entrar</button>
        </form>
      </div>
    );
  }

  const lista = guias.map((g) => {
    const v = hoje ? proximoVencimento(hoje, g.dia) : new Date();
    return { ...g, v, d: hoje ? diasAte(hoje, v) : 0 };
  }).sort((a, b) => a.v.getTime() - b.v.getTime());
  const abertas = lista.filter((g) => !pagas.includes(g.nome));
  const totalAberto = abertas.reduce((s, g) => s + g.valor, 0);
  const fmt = (d: Date) => d.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' });
  const brl2 = (v: number) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  function enviarMsg(e: React.FormEvent) {
    e.preventDefault();
    if (!txt.trim()) return;
    const h = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    setMsgs([...msgs, { de: 'cliente', texto: txt.trim(), hora: h }, { de: 'escritorio', texto: 'Recebido! Um contador responde em até 1 dia útil. (resposta automática da demo)', hora: h }]);
    setTxt('');
  }
  function addDoc(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (f) setDocs([{ nome: f.name, info: `Você · ${f.size > 1e6 ? (f.size / 1e6).toFixed(1) + ' MB' : Math.max(1, Math.round(f.size / 1e3)) + ' KB'} · só nesta demo` }, ...docs]);
    e.target.value = '';
  }

  return (
    <div className="wrap">
      <div className="page-h dash-top" style={{ paddingBottom: 0 }}>
        <div><p className="eyebrow">Padaria Entre Pães (fictícia)</p><h1 style={{ fontSize: '2.4rem', marginTop: 10 }}>Olá, Marta.</h1></div>
        <button className="btn ghost" onClick={() => { setOk(false); setAba('resumo'); }}>Sair</button>
      </div>
      <p className="notice" style={{ margin: '18px 0 26px' }}>Dados fictícios de demonstração. Alterações ficam apenas neste navegador.</p>
      <div className="dash">
        <div className="tabs" role="tablist" aria-label="Seções do portal">
          {abas.map((a) => (
            <button key={a.id} role="tab" aria-selected={aba === a.id} onClick={() => setAba(a.id)}><Icon n={a.i} s={18} />{a.t}</button>
          ))}
        </div>
        <div className="panel" role="tabpanel">
          {aba === 'resumo' && (
            <>
              <div className="kpis">
                <div className="box"><span className="price">Faturamento de outubro</span><p style={{ font: '500 1.9rem/1.2 var(--serif)' }}>{brl(84310)}</p></div>
                <div className="box"><span className="price">Guias em aberto</span><p style={{ font: '500 1.9rem/1.2 var(--serif)' }}>{brl2(totalAberto)}</p></div>
                <div className="box"><span className="price">Alíquota efetiva</span><p style={{ font: '500 1.9rem/1.2 var(--serif)', color: 'var(--sage)' }}>8,1%</p></div>
              </div>
              <div className="box"><h3>Faturamento, últimos 12 meses</h3><Grafico /></div>
              <div className="box">
                <h3>Próximos vencimentos</h3>
                <ul className="rows">
                  {abertas.slice(0, 2).map((g) => (
                    <li key={g.nome}><span>{g.nome}<small>vence {fmt(g.v)}</small></span><span className={`tag ${g.d <= 7 ? 'warn' : ''}`}>{g.d === 0 ? 'hoje' : `em ${g.d} dias`}</span></li>
                  ))}
                  {abertas.length === 0 && <li>Tudo pago por aqui.</li>}
                </ul>
              </div>
            </>
          )}
          {aba === 'guias' && (
            <div className="box">
              <h3>Guias do mês</h3>
              <ul className="rows">
                {lista.map((g) => {
                  const paga = pagas.includes(g.nome);
                  return (
                    <li key={g.nome}>
                      <span>{g.nome}<small>vence {fmt(g.v)} · {brl2(g.valor)}</small></span>
                      {paga ? <span className="tag">paga</span> : <button className="btn ghost" style={{ minHeight: 40 }} onClick={() => setPagas([...pagas, g.nome])}>Marcar como paga</button>}
                    </li>
                  );
                })}
              </ul>
              <p className="price" style={{ marginTop: 12 }}>Vencimentos ajustados para dia útil. Na demo, “marcar como paga” só registra no seu navegador.</p>
            </div>
          )}
          {aba === 'docs' && (
            <div className="box">
              <h3>Documentos</h3>
              <label className="drop" style={{ display: 'block', marginBottom: 14, cursor: 'pointer' }}>
                <input type="file" onChange={addDoc} style={{ display: 'none' }} />
                Toque para anexar um arquivo <span className="price">(fica só na lista; nada é enviado)</span>
              </label>
              <ul className="rows">{docs.map((d, i) => <li key={d.nome + i}><span>{d.nome}<small>{d.info}</small></span><Icon n="file" /></li>)}</ul>
            </div>
          )}
          {aba === 'msgs' && (
            <div className="box">
              <h3>Mensagens com o contador</h3>
              <div className="msgs" aria-live="polite">
                {msgs.map((m, i) => <div key={i} className={`bubble ${m.de === 'cliente' ? 'me' : ''}`}>{m.texto}<small>{m.hora}</small></div>)}
              </div>
              <form className="row-form" onSubmit={enviarMsg}>
                <label className="sr" htmlFor="mt" style={{ position: 'absolute', left: -9999 }}>Mensagem</label>
                <input id="mt" type="text" value={txt} onChange={(e) => setTxt(e.target.value)} placeholder="Escreva sua dúvida" />
                <button className="btn" type="submit">Enviar</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
