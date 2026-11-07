export type Regime = 'mei' | 'simples' | 'presumido';
export interface Entrada { regime: Regime; funcionarios: number; notas: number; }

const BASE: Record<Regime, number> = { mei: 129, simples: 389, presumido: 890 };
const NOTAS_INCLUIDAS: Record<Regime, number> = { mei: 20, simples: 40, presumido: 80 };
const POR_FUNCIONARIO = 49;
const POR_NOTA_EXTRA = 2.5;

export function honorario({ regime, funcionarios, notas }: Entrada): number {
  const f = Math.max(0, Math.floor(funcionarios) || 0);
  const extra = Math.max(0, (Math.floor(notas) || 0) - NOTAS_INCLUIDAS[regime]);
  return Math.round(BASE[regime] + f * POR_FUNCIONARIO + extra * POR_NOTA_EXTRA);
}

export const brl = (v: number) =>
  v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });
