import { reviews } from '../data/travelData';

export default function ReviewsSection() {
  return (
    <section id="reviews" style={{ padding: '80px 24px', background: 'rgba(10,15,30,1)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(102,126,234,0.15)', border: '1px solid rgba(102,126,234,0.3)', borderRadius: 100, padding: '6px 16px', marginBottom: 16 }}>
            <span style={{ color: '#a78bfa', fontSize: 13, fontWeight: 600 }}>💬 Отзывы путешественников</span>
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, color: '#fff', marginBottom: 12 }}>
            Реальные истории экономии
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16, maxWidth: 500, margin: '0 auto' }}>
            2026 год — отзывы наших пользователей о реально сэкономленных деньгах
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
          {reviews.map(r => (
            <div key={r.id} style={{
              background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 20, padding: '24px',
              transition: 'all 0.3s',
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(102,126,234,0.25)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
              }}
            >
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(102,126,234,0.15)', border: '1px solid rgba(102,126,234,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>{r.avatar}</div>
                  <div>
                    <div style={{ color: '#fff', fontWeight: 700 }}>{r.name}</div>
                    <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12 }}>📍 {r.destination} · {r.date}</div>
                  </div>
                </div>
                <div style={{ color: '#fbbf24', fontSize: 14 }}>{'★'.repeat(r.rating)}</div>
              </div>

              {/* Savings badge */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(74,222,128,0.25)', borderRadius: 10, padding: '6px 14px', marginBottom: 14 }}>
                <span style={{ color: '#4ade80', fontSize: 13, fontWeight: 800 }}>💰 Сэкономлено: {r.saved.toLocaleString('ru')}₽</span>
              </div>

              {/* Text */}
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14, lineHeight: 1.6 }}>"{r.text}"</p>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div style={{ marginTop: 48, background: 'linear-gradient(135deg, rgba(102,126,234,0.15), rgba(167,139,250,0.1))', border: '1px solid rgba(102,126,234,0.25)', borderRadius: 20, padding: '32px', textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🏆</div>
          <h3 style={{ color: '#fff', fontSize: 24, fontWeight: 700, marginBottom: 8 }}>Среднее: 29 500₽ экономии</h3>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 15 }}>
            Наши пользователи экономят в среднем <strong style={{ color: '#a78bfa' }}>29 500₽</strong> на каждой поездке,
            сравнивая цены через TravelDeal
          </p>
        </div>
      </div>
    </section>
  );
}
