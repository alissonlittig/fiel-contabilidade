export interface Contato { nome: string; email: string; mensagem: string; }

export function validarContato(c: Contato): Partial<Record<keyof Contato, string>> {
  const e: Partial<Record<keyof Contato, string>> = {};
  if (c.nome.trim().length < 2) e.nome = 'Informe seu nome.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(c.email.trim())) e.email = 'Informe um e-mail válido.';
  if (c.mensagem.trim().length < 10) e.mensagem = 'Conte um pouco mais (mínimo de 10 caracteres).';
  return e;
}
