import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#destinations', label: 'Направления' },
    { href: '#hotels', label: 'Отели' },
    { href: '#flights', label: 'Авиабилеты' },
    { href: '#railway', label: 'Ж/Д' },
    { href: '#prices', label: 'Цены' },
    { href: '#partners', label: 'Партнёры' },
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '12px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: scrolled ? 'rgba(10,15,30,0.95)' : 'rgba(10,15,30,0.4)',
        backdropFilter: 'blur(20px)',
        borderBottom: scrolled ? '1px solid rgba(99,179,237,0.2)' : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}
    >
      <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
        <div
          style={{
            width: 40,
            height: 40,
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            borderRadius: 12,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 20,
            boxShadow: '0 4px 15px rgba(102,126,234,0.5)',
          }}
        >
          ✈️
        </div>
        <span
          style={{
            fontSize: 22,
            fontWeight: 800,
            background: 'linear-gradient(135deg, #667eea, #a78bfa)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          TravelDeal
        </span>
      </a>

      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }} className="nav-links">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            style={{
              color: 'rgba(255,255,255,0.8)',
              textDecoration: 'none',
              padding: '8px 16px',
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 500,
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = '#fff';
              (e.currentTarget as HTMLElement).style.background = 'rgba(102,126,234,0.2)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.8)';
              (e.currentTarget as HTMLElement).style.background = 'transparent';
            }}
          >
            {l.label}
          </a>
        ))}
        <a
          href="#partners"
          style={{
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            color: '#fff',
            textDecoration: 'none',
            padding: '10px 20px',
            borderRadius: 10,
            fontSize: 14,
            fontWeight: 600,
            marginLeft: 8,
            boxShadow: '0 4px 15px rgba(102,126,234,0.4)',
            transition: 'all 0.2s',
          }}
        >
          Найти тур
        </a>
      </div>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="burger-btn"
        style={{
          background: 'rgba(255,255,255,0.1)',
          border: 'none',
          borderRadius: 8,
          padding: '8px 12px',
          cursor: 'pointer',
          color: '#fff',
          fontSize: 20,
          display: 'none',
        }}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {menuOpen && (
        <div
          className="mobile-menu"
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(10,15,30,0.98)',
            backdropFilter: 'blur(20px)',
            padding: 20,
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
            borderBottom: '1px solid rgba(99,179,237,0.2)',
          }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: '#fff',
                textDecoration: 'none',
                padding: '12px 16px',
                borderRadius: 8,
                background: 'rgba(102,126,234,0.1)',
                fontWeight: 500,
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
