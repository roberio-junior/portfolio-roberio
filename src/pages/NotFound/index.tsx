
import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <section
      style={{
        minHeight: 'calc(100vh - var(--header-height))',
        maxWidth: '900px',
        margin: '0 auto',
        padding: '100px 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        gap: '20px',
      }}
    >
      <span
        style={{
          color: 'var(--color-accent)',
          fontWeight: 700,
          letterSpacing: '2px',
        }}
      >
        ERRO / 404
      </span>

      <h1
        style={{
          fontSize: 'clamp(42px, 8vw, 90px)',
          lineHeight: 1,
          margin: 0,
        }}
      >
        Página não encontrada_
      </h1>

      <p
        style={{
          color: 'var(--color-muted)',
          fontSize: '17px',
          lineHeight: 1.7,
        }}
      >
        O endereço que você tentou acessar não existe.
      </p>

      <Link
        to="/"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          marginTop: '12px',
          padding: '14px 22px',
          background: 'var(--color-primary)',
          borderRadius: '9px',
          color: 'white',
          fontWeight: 700,
        }}
      >
        <ArrowLeft size={18} />
        Voltar ao início
      </Link>
    </section>
  );
}
