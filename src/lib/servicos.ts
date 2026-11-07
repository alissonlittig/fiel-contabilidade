export interface Servico {
  slug: string; nome: string; resumo: string; icone: string; desde: string;
  entrega: string[]; prazo: string; para: string;
}
export const servicos: Servico[] = [
  { slug: 'abertura-de-empresa', nome: 'Abertura de empresa', icone: 'doc', desde: 'R$ 690 único',
    resumo: 'CNPJ, inscrições e enquadramento tributário escolhido com conta feita, não por padrão.',
    entrega: ['Estudo de enquadramento (MEI, Simples ou Presumido)', 'Contrato social e registro na Junta', 'CNPJ, inscrição municipal e estadual', 'Alvará e licenças da atividade', 'Certificado digital e orientação de emissão de nota'],
    prazo: 'De 5 a 15 dias úteis, conforme cidade e atividade.', para: 'Quem vai abrir o primeiro CNPJ ou migrar de MEI para ME.' },
  { slug: 'contabilidade-mensal', nome: 'Contabilidade mensal', icone: 'book', desde: 'R$ 129/mês',
    resumo: 'Escrituração, apuração de impostos e guias no prazo, com relatório que o dono entende.',
    entrega: ['Escrituração contábil e fiscal', 'Apuração e guias (DAS, DARF, ISS)', 'Balancete e DRE mensais em linguagem simples', 'Reunião trimestral de resultado', 'Atendimento por chamado com resposta em até 1 dia útil'],
    prazo: 'Fechamento até o dia 10 do mês seguinte.', para: 'Empresas ativas que querem previsibilidade e zero multa.' },
  { slug: 'folha-e-departamento-pessoal', nome: 'Folha e departamento pessoal', icone: 'users', desde: 'R$ 49 por pessoa',
    resumo: 'Admissão, folha, férias, 13º e eSocial sem planilha paralela.',
    entrega: ['Admissões e rescisões', 'Folha mensal, recibos e encargos', 'Férias e 13º com provisão no fluxo de caixa', 'Transmissão do eSocial e FGTS Digital', 'Contratos e documentos assinados no portal'],
    prazo: 'Folha entregue 3 dias úteis antes do pagamento.', para: 'Quem tem equipe e quer parar de calcular encargos na mão.' },
  { slug: 'imposto-de-renda', nome: 'Imposto de renda e planejamento', icone: 'chart', desde: 'R$ 180 por declaração',
    resumo: 'IRPF para sócios e autônomos, mais planejamento para pagar o imposto certo, nem mais nem menos.',
    entrega: ['Declaração IRPF completa', 'Revisão de pró-labore e distribuição de lucros', 'Simulação de regimes para o ano seguinte', 'Regularização de malha fina', 'Carnê-leão e ganho de capital'],
    prazo: 'Declaração pronta em até 5 dias úteis após os documentos.', para: 'Sócios, profissionais liberais e quem recebe de mais de uma fonte.' }
];
export const servicoPorSlug = (s: string) => servicos.find((x) => x.slug === s);
