const P: Record<string, string> = {
  doc: 'M7 3h7l5 5v13H7zM14 3v5h5M10 13h6M10 17h6',
  book: 'M5 4h10a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3zM5 17a3 3 0 0 1 3-3h10M9 8h5',
  users: 'M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM2.5 20c0-3.3 2.9-5.5 6.5-5.5s6.5 2.2 6.5 5.5M16 4.6a3.5 3.5 0 0 1 0 6.8M18 14.8c2.2.6 3.5 2.3 3.5 5.2',
  chart: 'M4 20V4M4 20h16M8 16v-4M12 16V8M16 16v-6',
  check: 'M5 12.5l4.5 4.5L19 7',
  home: 'M4 11l8-7 8 7v9h-5v-6H9v6H4z',
  file: 'M7 3h7l5 5v13H7zM14 3v5h5',
  chat: 'M4 5h16v11H9l-5 4z',
  cal: 'M4 6h16v14H4zM4 10h16M8 3v4M16 3v4',
  arrow: 'M5 12h14M13 6l6 6-6 6',
  menu: 'M4 7h16M4 12h16M4 17h16',
  close: 'M6 6l12 12M18 6L6 18'
};
export default function Icon({ n, s = 22 }: { n: string; s?: number }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={P[n]} />
    </svg>
  );
}
