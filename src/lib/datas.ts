export function diaUtil(d: Date): Date {
  const r = new Date(d);
  while (r.getDay() === 0 || r.getDay() === 6) r.setDate(r.getDate() + 1);
  return r;
}

/** Próxima ocorrência do dia `dia` do mês (hoje conta), ajustada para dia útil. Feriados fora do escopo da demo. */
export function proximoVencimento(hoje: Date, dia: number): Date {
  const base = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate());
  let alvo = diaUtil(new Date(base.getFullYear(), base.getMonth(), dia));
  if (alvo < base) alvo = diaUtil(new Date(base.getFullYear(), base.getMonth() + 1, dia));
  return alvo;
}

export const diasAte = (hoje: Date, alvo: Date) =>
  Math.round((alvo.getTime() - new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate()).getTime()) / 864e5);
