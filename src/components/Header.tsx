'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Icon from './Icon';

const links = [
  { href: '/servicos/', label: 'Serviços' },
  { href: '/blog/', label: 'Blog' },
  { href: '/contato/', label: 'Contato' }
];

export function Logo() {
  return (
    <>
      <svg width="34" height="34" viewBox="0 0 32 32" aria-hidden="true">
        <rect width="32" height="32" rx="8" fill="#13222b" />
        <path d="M16 6v17M9 10h14M9 10l-3.5 8h7zM23 10l-3.5 8h7zM11 25h10" fill="none" stroke="#f5f1e8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span>Fiel<small>Contabilidade</small></span>
    </>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname() ?? '';
  return (
    <header className="top">
      <div className="wrap">
        <Link href="/" className="brand" aria-label="Fiel Contabilidade, página inicial"><Logo /></Link>
        <button className="menu-btn" aria-expanded={open} aria-controls="nav" aria-label={open ? 'Fechar menu' : 'Abrir menu'} onClick={() => setOpen(!open)}>
          <Icon n={open ? 'close' : 'menu'} />
        </button>
        <nav id="nav" className="nav" data-open={open} onClick={() => setOpen(false)} aria-label="Principal">
          {links.map((l) => (
            <Link key={l.href} href={l.href} aria-current={path.startsWith(l.href.slice(0, -1)) ? 'page' : undefined}>{l.label}</Link>
          ))}
          <Link href="/cliente/" className="btn">Área do cliente</Link>
        </nav>
      </div>
    </header>
  );
}
