import Head from 'next/head';

const SITE = 'Fiel Contabilidade';
export default function Seo({ title, description }: { title?: string; description: string }) {
  const t = title ? `${title} · ${SITE}` : `${SITE} — contas em ordem, decisões com calma`;
  return (
    <Head>
      <title>{t}</title>
      <meta name="description" content={description} />
    </Head>
  );
}
