import type { Metadata } from 'next';
import ClienteApp from '@/components/ClienteApp';

export const metadata: Metadata = { title: 'Área do cliente (demo)', description: 'Portal de demonstração: guias, documentos e mensagens com dados fictícios.' };

export default function Cliente() {
  return <ClienteApp />;
}
