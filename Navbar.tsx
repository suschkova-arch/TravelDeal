import { useState } from 'react';

const links = [
  { label: 'Направления', href: '#destinations' },
  { label: 'Отели', href: '#hotels' },
  { label: 'Авиабилеты', href: '#flights' },
  { label: 'Ж/Д', href: '#railway' },
  { label: 'Партнёры', href: '#partners' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: 'rgba(10,15,30,0.85)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18,
          }}>✈️</div>
          <span style={{ fontSize: 20, fontWeight: 800, background: 'linear-gradient(135deg, #667eea, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            TravelDeal
          </span>
        </a>

        {/* Desktop links */}
        <div className="nav-links" style={{ display: 'flex', gap: 8 }}>
          {links.map(l => (
            <a key={l.href} href={l.href} style={{
              color: 'rgba(255,255,255,0.7)', textDecoration: 'none',
              padding: '8px 14px', borderRadius: 8, fontSize: 14, fontWeight: 500,
              transition: 'all 0.2s',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#fff'; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.7)'; (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
            >{l.label}</a>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <a href="https://tp.media/r?marker=547188&trs=189015&p=4114&u=https%3A%2F%2Fwww.aviasales.ru" target="_blank" rel="noopener noreferrer"
            style={{
              padding: '9px 20px', borderRadius: 10,
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              color: '#fff', textDecoration: 'none', fontWeight: 700, fontSize: 13,
              boxShadow: '0 4px 15px rgba(102,126,234,0.35)',
              transition: 'all 0.2s',
            }}
            className="nav-links"
          >🔍 Найти тур</a>

          {/* Burger */}
          <button
            className="burger-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: 'none', alignItems: 'center', justifyContent: 'center',
              width: 40, height: 40, background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, cursor: 'pointer', flexDirection: 'column', gap: 5,
            }}
          >
            <span style={{ display: 'block', width: 20, height: 2, background: '#fff', borderRadius: 2, transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translateY(7px)' : '' }} />
            <span style={{ display: 'block', width: 20, height: 2, background: '#fff', borderRadius: 2, transition: 'all 0.3s', opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: 'block', width: 20, height: 2, background: '#fff', borderRadius: 2, transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : '' }} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: 'rgba(10,15,30,0.98)', borderTop: '1px solid rgba(255,255,255,0.08)',
          padding: '16px 24px 24px',
        }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} style={{
              display: 'block', color: 'rgba(255,255,255,0.8)', textDecoration: 'none',
              padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.06)',
              fontSize: 15, fontWeight: 500,
            }}>{l.label}</a>
          ))}
          <a href="https://tp.media/r?marker=547188&trs=189015&p=4114&u=https%3A%2F%2Fwww.aviasales.ru" target="_blank" rel="noopener noreferrer"
            style={{
              display: 'block', marginTop: 16, padding: '12px', textAlign: 'center',
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              borderRadius: 10, color: '#fff', textDecoration: 'none', fontWeight: 700,
            }}>🔍 Найти тур</a>
        </div>
      )}
    </nav>
  );
}
