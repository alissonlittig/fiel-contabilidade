import { Html, Head, Main, NextScript } from 'next/document';

const base = process.env.NEXT_PUBLIC_BASE ?? '';
export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <meta name="theme-color" content="#13222b" />
        <link rel="icon" href={`${base}/icon.svg`} type="image/svg+xml" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
