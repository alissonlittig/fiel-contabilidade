export const DEMO = { email: 'demo@entrepaes.example', senha: 'demo2026' };

export const loginDemo = (email: string, senha: string) =>
  email.trim().toLowerCase() === DEMO.email && senha === DEMO.senha;

export const faturamento = [
  { m: 'nov', v: 61200 }, { m: 'dez', v: 78400 }, { m: 'jan', v: 55300 }, { m: 'fev', v: 58900 },
  { m: 'mar', v: 64100 }, { m: 'abr', v: 66700 }, { m: 'mai', v: 71200 }, { m: 'jun', v: 69800 },
  { m: 'jul', v: 74500 }, { m: 'ago', v: 77100 }, { m: 'set', v: 80200 }, { m: 'out', v: 84310 }
];

export const guias = [
  { nome: 'DAS (Simples Nacional)', dia: 20, valor: 6842.15 },
  { nome: 'FGTS Digital', dia: 7, valor: 2310.4 },
  { nome: 'DARF IRRF', dia: 20, valor: 418.9 }
];

export interface Msg { de: 'cliente' | 'escritorio'; texto: string; hora: string; }
export const msgsIniciais: Msg[] = [
  { de: 'escritorio', texto: 'Oi, Marta! O balancete de setembro já está na aba Documentos.', hora: '09:12' },
  { de: 'cliente', texto: 'Obrigada! Posso antecipar o pagamento do DAS?', hora: '09:40' },
  { de: 'escritorio', texto: 'Pode sim. A guia já está liberada na aba Guias.', hora: '09:44' }
];

export const docsIniciais = [
  { nome: 'Balancete-setembro-2026.pdf', info: 'Escritório · 28/10' },
  { nome: 'Folha-outubro-2026.pdf', info: 'Escritório · 03/11' },
  { nome: 'Extrato-banco-outubro.ofx', info: 'Você · 02/11' }
];
