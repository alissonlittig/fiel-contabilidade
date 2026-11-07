import Seo from '@/components/Seo';
import ClienteApp from '@/components/ClienteApp';

export default function Cliente() {
  return (
    <>
      <Seo title="Área do cliente (demo)" description="Portal de demonstração: guias, documentos e mensagens com dados fictícios." />
      <ClienteApp />
    </>
  );
}
