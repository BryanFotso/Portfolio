const paths = {
  arrowUpRight: 'M7 17 17 7M7 7h10v10',
  building: 'M3 21h18M6 21V5l6-3 6 3v16M9 9h1m-1 4h1m4-4h1m-1 4h1',
  chart: 'M4 19V9m6 10V5m6 14v-7m4 7H2',
  check: 'm5 12 4 4L19 6',
  cloud: 'M17.5 19H7a5 5 0 1 1 1.7-9.7A6 6 0 0 1 20 12a3.5 3.5 0 0 1-2.5 7Z',
  code: 'm8 9-4 3 4 3m8-6 4 3-4 3m-2-9-4 12',
  download: 'M12 3v12m-5-5 5 5 5-5M5 21h14',
  email: 'M3 5h18v14H3zM3 7l9 6 9-6',
  github:
    'M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.4 4 5 5 0 0 0 19.3.5S18.2 0 15 2a13.4 13.4 0 0 0-6 0C5.8 0 4.7.5 4.7.5A5 5 0 0 0 4.6 4a5.4 5.4 0 0 0-1.4 3.7c0 5.3 3.5 6.5 6.8 7A4.8 4.8 0 0 0 9 18v4m0-3c-3 .9-3-1.5-4.2-2',
  linkedin:
    'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4v2a4 4 0 0 1 2-3ZM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z',
  location: 'M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0ZM12 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z',
  menu: 'M4 6h16M4 12h16M4 18h16',
  phone:
    'M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z',
  user: 'M20 21a8 8 0 0 0-16 0M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z',
  x: 'M18 6 6 18M6 6l12 12',
};

const Icon = ({ name, className = '' }) => (
  <svg
    aria-hidden="true"
    className={`icon ${className}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
  >
    <path d={paths[name] || paths.code} />
  </svg>
);

export default Icon;
