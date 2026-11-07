import Link from 'next/link';
import Icon from '@/components/Icon';
import Calculadora from '@/components/Calculadora';
import { servicos } from '@/lib/servicos';
import { posts, fmtData } from '@/lib/posts';

const faq = [
  ['Quanto tempo leva para trocar de contador?', 'Em média 7 dias úteis. Nós pedimos os arquivos ao contador anterior, conferimos saldos e só então assumimos, sem lacuna nas obrigações.'],
  ['Posso falar com uma pessoa, não com um robô?', 'Sim. Cada cliente tem um contador responsável, com nome e horário de atendimento. O portal serve para guardar documentos e acompanhar guias, não para esconder a equipe.'],
  ['Como funcionam os honorários?', 'Valor mensal fixo, definido pelo regime, número de funcionários e volume de notas. Sem taxa de adesão na contabilidade mensal e sem reajuste fora do contrato.'],
  ['E se eu receber uma notificação da Receita?', 'Abra um chamado com a foto da notificação. Respondemos em até um dia útil e cuidamos da defesa ou da regularização dentro do plano.']
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <div>
            <p className="eyebrow">Contabilidade para pequenas empresas</p>
            <h1 style={{ marginTop: 16 }}>Contas em ordem, <em>decisões</em> com calma.</h1>
            <p className="lead">Cuidamos de impostos, folha e abertura de empresa com prazo cumprido e relatório em português claro. Você acompanha tudo no portal.</p>
            <div className="cta">
              <Link href="/contato/" className="btn copper">Pedir uma proposta</Link>
              <Link href="/cliente/" className="btn ghost">Ver o portal do cliente</Link>
            </div>
            <div className="proof">
              <div><b>312</b><span>empresas atendidas</span></div>
              <div><b>0</b><span>multas por atraso em 2025</span></div>
              <div><b>1 dia</b><span>resposta máxima</span></div>
            </div>
          </div>
          <div className="mock" aria-hidden="true">
            <div className="mock-h"><span className="dots"><i /><i /><i /></span><span>Portal · Padaria Entre Pães (fictícia)</span></div>
            <div className="mock-kpis">
              <div className="kpi"><span>Faturamento do mês</span><b>R$ 84.310</b></div>
              <div className="kpi ok"><span>Imposto estimado</span><b>R$ 6.842</b></div>
            </div>
            <div className="bars">{[38, 44, 41, 52, 49, 58, 55, 63, 60, 71, 68, 84].map((h, i) => <i key={i} style={{ height: `${h}%` }} />)}</div>
            <ul className="mock-list">
              <li><span>DAS · vence dia 20</span><span className="tag warn">em 13 dias</span></li>
              <li><span>Folha de outubro</span><span className="tag">entregue</span></li>
              <li><span>Balancete setembro</span><span className="tag">disponível</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow">O que fazemos</p>
            <h2>Quatro serviços, uma equipe que conhece o seu negócio.</h2>
          </div>
          <div className="grid4">
            {servicos.map((s) => (
              <Link key={s.slug} href={`/servicos/${s.slug}/`} className="card">
                <span className="ico"><Icon n={s.icone} /></span>
                <h3>{s.nome}</h3>
                <p>{s.resumo}</p>
                <span className="price">A partir de {s.desde}</span>
                <span className="more">Ver detalhes →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="dark">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow">Como começamos</p>
            <h2>Da primeira conversa ao primeiro fechamento em quatro passos.</h2>
          </div>
          <div className="steps">
            <div className="step"><h3>Conversa</h3><p>Vinte minutos para entender atividade, equipe e dores atuais.</p></div>
            <div className="step"><h3>Diagnóstico</h3><p>Revisamos o enquadramento e mostramos onde há multa ou imposto a mais.</p></div>
            <div className="step"><h3>Migração</h3><p>Pedimos a documentação ao contador anterior e organizamos o portal.</p></div>
            <div className="step"><h3>Rotina</h3><p>Fechamento até o dia 10 e reunião trimestral de resultado.</p></div>
          </div>
        </div>
      </section>

      <section id="honorarios">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow">Honorários</p>
            <h2>Simule quanto custa ter a contabilidade em dia.</h2>
            <p className="lead">Preço fixo por mês, sem surpresa. Ajuste os controles e veja o valor na hora.</p>
          </div>
          <Calculadora />
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head"><p className="eyebrow">Clientes</p><h2>O que dizem quem já fechou o mês sem susto.</h2></div>
          <div className="quotes">
            <figure className="quote" style={{ margin: 0 }}>
              <blockquote>“Descobri que pagava imposto de um regime que não era o meu. Eles refizeram a conta e o caixa respirou.”</blockquote>
              <cite><b>Helena Duarte</b>Estúdio de pilates (cliente fictício)</cite>
            </figure>
            <figure className="quote" style={{ margin: 0 }}>
              <blockquote>“A folha chega antes do prazo e o portal mostra cada guia. Parei de perseguir contador por mensagem.”</blockquote>
              <cite><b>Raul Menezes</b>Oficina mecânica (cliente fictício)</cite>
            </figure>
            <figure className="quote" style={{ margin: 0 }}>
              <blockquote>“Abri o CNPJ em nove dias e já sai da reunião sabendo quanto reservar de imposto por nota.”</blockquote>
              <cite><b>Camila Ferraz</b>Consultoria de marketing (cliente fictícia)</cite>
            </figure>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--paper2)' }}>
        <div className="wrap">
          <div className="sec-head"><p className="eyebrow">Blog</p><h2>Conteúdo para decidir melhor, sem jargão.</h2></div>
          <div className="posts">
            {posts.slice(0, 3).map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}/`} className="post">
                <div className="meta"><span className="tag">{p.tag}</span><span>{fmtData(p.data)}</span></div>
                <h3>{p.titulo}</h3>
                <p>{p.resumo}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap faq">
          <div className="sec-head"><p className="eyebrow">Dúvidas</p><h2>Perguntas que ouvimos toda semana.</h2></div>
          {faq.map(([q, a]) => (
            <details key={q}><summary>{q}</summary><p>{a}</p></details>
          ))}
        </div>
      </section>

      <section className="dark" style={{ textAlign: 'center' }}>
        <div className="wrap" style={{ display: 'grid', gap: 22, justifyItems: 'center' }}>
          <h2 style={{ maxWidth: '18ch' }}>Pronto para fechar o mês sem correria?</h2>
          <p className="lead">Conte como é a sua empresa e receba uma proposta em um dia útil.</p>
          <Link href="/contato/" className="btn copper">Pedir proposta</Link>
        </div>
      </section>
    </>
  );
}
