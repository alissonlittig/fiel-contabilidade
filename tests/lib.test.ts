import { describe, it, expect } from 'vitest';
import { honorario } from '@/lib/honorarios';
import { diaUtil, proximoVencimento, diasAte } from '@/lib/datas';
import { posts } from '@/lib/posts';
import { servicos } from '@/lib/servicos';

describe('honorarios', () => {
  it('base por regime', () => {
    expect(honorario({ regime: 'mei', funcionarios: 0, notas: 5 })).toBe(129);
    expect(honorario({ regime: 'simples', funcionarios: 0, notas: 40 })).toBe(389);
  });
  it('soma funcionários e notas excedentes', () => {
    expect(honorario({ regime: 'simples', funcionarios: 2, notas: 50 })).toBe(389 + 98 + 25);
  });
  it('entradas negativas ou NaN não reduzem o valor', () => {
    expect(honorario({ regime: 'presumido', funcionarios: -3, notas: -9 })).toBe(890);
    expect(honorario({ regime: 'mei', funcionarios: NaN, notas: NaN })).toBe(129);
  });
});
describe('datas', () => {
  it('sábado vai para segunda', () => { expect(diaUtil(new Date(2026, 10, 7)).getDate()).toBe(9); });
  it('próximo vencimento no mesmo mês e no seguinte', () => {
    expect(proximoVencimento(new Date(2026, 10, 3), 20).getDate()).toBe(20);
    const v = proximoVencimento(new Date(2026, 10, 25), 7);
    expect([v.getMonth(), v.getDate()]).toEqual([11, 7]);
  });
  it('diasAte', () => { expect(diasAte(new Date(2026, 10, 3), new Date(2026, 10, 20))).toBe(17); });
});
describe('conteúdo', () => {
  it('slugs únicos', () => {
    const s = [...posts.map((p) => p.slug), ...servicos.map((x) => x.slug)];
    expect(new Set(s).size).toBe(s.length);
  });
  it('posts com data válida e corpo', () => {
    for (const p of posts) { expect(Number.isNaN(Date.parse(p.data))).toBe(false); expect(p.corpo.length).toBeGreaterThan(2); }
  });
});
import { loginDemo, DEMO } from '@/lib/cliente';
import { validarContato } from '@/lib/contato';
describe('cliente e contato', () => {
  it('login demo', () => {
    expect(loginDemo(' ' + DEMO.email.toUpperCase(), DEMO.senha)).toBe(true);
    expect(loginDemo(DEMO.email, 'errada')).toBe(false);
  });
  it('valida contato', () => {
    expect(Object.keys(validarContato({ nome: '', email: 'x', mensagem: 'oi' }))).toHaveLength(3);
    expect(validarContato({ nome: 'Ana', email: 'ana@x.com', mensagem: 'Quero uma proposta' })).toEqual({});
  });
});
