import type { Metadata, Viewport } from 'next';
import '@fontsource-variable/newsreader';
import '@fontsource-variable/inter-tight';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: { default: 'Fiel Contabilidade — contas em ordem, decisões com calma', template: '%s · Fiel Contabilidade' },
  description: 'Contabilidade para pequenas empresas: abertura, mensal, folha e imposto de renda, com portal do cliente. Site de demonstração com marca fictícia.'
};
export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#13222b' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <a className="skip" href="#main">Pular para o conteúdo</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
