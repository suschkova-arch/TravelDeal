import { destinations } from '../data/travelData';

export default function DestinationsSection() {
  return (
    <section id="destinations" style={{ padding: '80px 24px', background: 'rgba(10,15,30,1)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(102,126,234,0.15)', border: '1px solid rgba(102,126,234,0.3)', borderRadius: 100, padding: '6px 16px', marginBottom: 16 }}>
            <span style={{ color: '#a78bfa', fontSize: 13, fontWeight: 600 }}>🌍 Популярные направления</span>
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, color: '#fff', marginBottom: 12 }}>
            Куда летят сейчас
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16, maxWidth: 500, margin: '0 auto' }}>
            Горящие предложения с лучшими ценами прямо сейчас
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
          {destinations.map(dest => (
            <a
              key={dest.id}
              href={dest.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: 'none', borderRadius: 20, overflow: 'hidden',
                position: 'relative', display: 'block', aspectRatio: '16/10',
                transition: 'transform 0.3s',
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-6px)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              {/* Image */}
              <img src={dest.image} alt={dest.city} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} loading="lazy" />
              {/* Overlay */}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.85) 100%)' }} />

              {/* Tag */}
              <div style={{ position: 'absolute', top: 14, left: 14 }}>
                <span style={{ background: dest.tagColor, borderRadius: 100, padding: '4px 12px', fontSize: 12, fontWeight: 700, color: '#fff' }}>{dest.tag}</span>
              </div>

              {/* Info */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '16px 20px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ color: '#fff', fontSize: 20, fontWeight: 800 }}>{dest.flag} {dest.city}</div>
                    <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13 }}>{dest.country}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 11 }}>от</div>
                    <div style={{ color: '#a78bfa', fontSize: 22, fontWeight: 900 }}>{dest.price.toLocaleString('ru')}₽</div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
