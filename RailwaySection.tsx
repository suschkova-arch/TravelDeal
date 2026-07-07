import { railways } from '../data/travelData';
import type { Railway } from '../data/travelData';

function RailwayCard({ r }: { r: Railway }) {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: 18, padding: '22px 24px',
      transition: 'all 0.3s',
    }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(251,191,36,0.3)';
        (e.currentTarget as HTMLElement).style.boxShadow = '0 16px 32px rgba(0,0,0,0.3)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
        (e.currentTarget as HTMLElement).style.boxShadow = 'none';
      }}
    >
      {/* Train name */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
        <div style={{ width: 42, height: 42, borderRadius: 12, background: 'rgba(251,191,36,0.1)', border: '1px solid rgba(251,191,36,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>🚆</div>
        <div>
          <div style={{ color: '#fff', fontWeight: 700, fontSize: 15 }}>{r.trainName}</div>
          <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12 }}>№{r.trainNumber} · {r.date}</div>
        </div>
      </div>

      {/* Route */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ color: '#fff', fontWeight: 800, fontSize: 16 }}>{r.from}</div>
        </div>
        <div style={{ flex: 1, textAlign: 'center' }}>
          <div style={{ height: 2, background: 'linear-gradient(90deg, #fbbf24, #f97316)', borderRadius: 2 }} />
          <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11, marginTop: 6 }}>{r.duration}</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ color: '#fff', fontWeight: 800, fontSize: 16 }}>{r.to}</div>
        </div>
      </div>

      {/* Prices by class */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
        {r.prices.map((p, i) => (
          <div key={p.type} style={{
            flex: 1, minWidth: 90, padding: '10px 12px', borderRadius: 10, textAlign: 'center',
            background: i === 0 ? 'rgba(251,191,36,0.1)' : 'rgba(255,255,255,0.03)',
            border: i === 0 ? '1px solid rgba(251,191,36,0.25)' : '1px solid rgba(255,255,255,0.08)',
          }}>
            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 11, marginBottom: 4 }}>{p.type}</div>
            <div style={{ color: i === 0 ? '#fbbf24' : '#fff', fontWeight: 800, fontSize: 16 }}>{p.price.toLocaleString('ru')}₽</div>
          </div>
        ))}
      </div>

      <a href={r.url} target="_blank" rel="noopener noreferrer" style={{
        display: 'block', textAlign: 'center', padding: '12px',
        background: 'linear-gradient(135deg, #f59e0b, #d97706)',
        borderRadius: 12, color: '#fff', textDecoration: 'none', fontWeight: 700, fontSize: 14,
        boxShadow: '0 4px 15px rgba(245,158,11,0.3)',
      }}>🎫 Купить билет на Туту.ру</a>
    </div>
  );
}

export default function RailwaySection() {
  return (
    <section id="railway" style={{ padding: '80px 24px', background: 'rgba(13,18,40,1)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(251,191,36,0.15)', border: '1px solid rgba(251,191,36,0.3)', borderRadius: 100, padding: '6px 16px', marginBottom: 16 }}>
            <span style={{ color: '#fbbf24', fontSize: 13, fontWeight: 600 }}>🚆 Ж/Д билеты</span>
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, color: '#fff', marginBottom: 12 }}>
            Поезда по России и Европе
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16, maxWidth: 500, margin: '0 auto' }}>
            Сапсаны, Стрижи, Ласточки — 9 направлений с ценами на плацкарт, купе и люкс через официального партнёра РЖД
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20, marginBottom: 40 }}>
          {railways.map(r => <RailwayCard key={r.id} r={r} />)}
        </div>

        <div style={{ textAlign: 'center' }}>
          <a href="https://tp.media/r?marker=547188&trs=189015&p=4114&u=https%3A%2F%2Fwww.tutu.ru%2Fpoezda%2F" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10, padding: '16px 36px',
            background: 'linear-gradient(135deg, #f59e0b, #d97706)',
            borderRadius: 14, color: '#fff', textDecoration: 'none', fontWeight: 700, fontSize: 15,
            boxShadow: '0 8px 25px rgba(245,158,11,0.3)',
            transition: 'transform 0.2s',
          }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-2px)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
          >
            🚆 Все ж/д билеты на Туту.ру →
          </a>
        </div>
      </div>
    </section>
  );
}
