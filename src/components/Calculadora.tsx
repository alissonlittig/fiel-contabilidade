import { useState } from 'react';
import { honorario, brl, type Regime } from '@/lib/honorarios';

const regimes: { v: Regime; t: string }[] = [
  { v: 'mei', t: 'MEI' },
  { v: 'simples', t: 'Simples Nacional' },
  { v: 'presumido', t: 'Lucro Presumido' }
];

export default function Calculadora() {
  const [regime, setRegime] = useState<Regime>('simples');
  const [funcionarios, setF] = useState(2);
  const [notas, setN] = useState(60);
  const valor = honorario({ regime, funcionarios, notas });
  return (
    <div className="calc">
      <form onSubmit={(e) => e.preventDefault()} aria-label="Simulador de honorários">
        <fieldset>
          <legend>Regime tributário</legend>
          <div className="seg">
            {regimes.map((r) => (
              <label key={r.v}>
                <input type="radio" name="regime" value={r.v} checked={regime === r.v} onChange={() => setRegime(r.v)} />
                <span>{r.t}</span>
              </label>
            ))}
          </div>
        </fieldset>
        <div>
          <label className="l" htmlFor="f">Funcionários</label>
          <input id="f" type="range" min={0} max={30} value={funcionarios} onChange={(e) => setF(+e.target.value)} />
          <div className="rv"><span>Registrados na folha</span><output htmlFor="f">{funcionarios}</output></div>
        </div>
        <div>
          <label className="l" htmlFor="n">Notas fiscais por mês</label>
          <input id="n" type="range" min={0} max={300} step={5} value={notas} onChange={(e) => setN(+e.target.value)} />
          <div className="rv"><span>Emitidas e recebidas</span><output htmlFor="n">{notas}</output></div>
        </div>
      </form>
      <div className="out" aria-live="polite">
        <span className="eyebrow" style={{ color: '#cfe3d9' }}>Estimativa mensal</span>
        <b>{brl(valor)}</b>
        <p>Inclui escrituração, guias, balancete mensal e atendimento por chamado. Valor de demonstração; a proposta real depende do seu caso.</p>
      </div>
    </div>
  );
}
