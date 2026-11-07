import type { AppProps } from 'next/app';
import '@fontsource-variable/newsreader';
import '@fontsource-variable/inter-tight';
import '../globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <a className="skip" href="#main">Pular para o conteúdo</a>
      <Header />
      <main id="main"><Component {...pageProps} /></main>
      <Footer />
    </>
  );
}
