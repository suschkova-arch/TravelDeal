import { useState } from 'react';
import { reviews } from '../data/travelData';

const ReviewsSection = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + reviews.length) % reviews.length);
  const next = () => setCurrent((c) => (c + 1) % reviews.length);

  const r = reviews[current];

  return (
    <section style={{ padding: '80px 24px', background: 'rgba(13,18,38,1)' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'rgba(167,139,250,0.15)',
              border: '1px solid rgba(167,139,250,0.3)',
              borderRadius: 100,
              padding: '6px 16px',
              marginBottom: 16,
            }}
          >
            <span style={{ color: '#a78bfa', fontSize: 13, fontWeight: 600 }}>💬 Отзывы путешественников</span>
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, color: '#fff', marginBottom: 12 }}>
            Реальные истории экономии 2025–2026
          </h2>
        </div>

        <div
          style={{
            background: 'linear-gradient(135deg, rgba(102,126,234,0.1), rgba(167,139,250,0.1))',
            border: '1px solid rgba(102,126,234,0.3)',
            borderRadius: 24,
            padding: '40px',
            marginBottom: 32,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 20,
              right: 30,
              fontSize: 120,
              color: 'rgba(102,126,234,0.1)',
              fontFamily: 'serif',
              lineHeight: 1,
              userSelect: 'none',
            }}
          >
            &quot;
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 20, flexWrap: 'wrap' }}>
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #667eea, #764ba2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 32,
                flexShrink: 0,
              }}
            >
              {r.avatar}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                <span style={{ color: '#fff', fontWeight: 700, fontSize: 18 }}>{r.name}</span>
                {r.verified && (
                  <span
                    style={{
                      background: 'rgba(16,185,129,0.2)',
                      border: '1px solid rgba(16,185,129,0.4)',
                      borderRadius: 100,
                      padding: '2px 10px',
                      color: '#34d399',
                      fontSize: 11,
                      fontWeight: 600,
                    }}
                  >
                    ✓ Верифицировано
                  </span>
                )}
              </div>
              <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, marginBottom: 6 }}>
                📍 {r.destination} · {r.date} · сумма экономии указана за всю поездку
              </div>
              <div style={{ color: '#fbbf24', fontSize: 18 }}>{'★'.repeat(r.rating)}</div>
            </div>

            <div
              style={{
                background: 'linear-gradient(135deg, rgba(16,185,129,0.2), rgba(16,185,129,0.1))',
                border: '1px solid rgba(16,185,129,0.3)',
                borderRadius: 16,
                padding: '16px 24px',
                textAlign: 'center',
              }}
            >
              <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 12, marginBottom: 4 }}>СЭКОНОМИЛ(А)</div>
              <div style={{ color: '#34d399', fontSize: 26, fontWeight: 800 }}>{r.saved.toLocaleString()}₽</div>
            </div>
          </div>

          <p
            style={{
              color: 'rgba(255,255,255,0.8)',
              fontSize: 16,
              lineHeight: 1.7,
              fontStyle: 'italic',
            }}
          >
            &quot;{r.text}&quot;
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 16,
            marginBottom: 32,
          }}
        >
          <button
            onClick={prev}
            style={{
              width: 44,
              height: 44,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              color: '#fff',
              fontSize: 20,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s',
            }}
          >
            ‹
          </button>
          <div style={{ display: 'flex', gap: 8 }}>
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                style={{
                  width: i === current ? 24 : 8,
                  height: 8,
                  borderRadius: 4,
                  background: i === current ? '#667eea' : 'rgba(255,255,255,0.2)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  padding: 0,
                }}
              />
            ))}
          </div>
          <button
            onClick={next}
            style={{
              width: 44,
              height: 44,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              color: '#fff',
              fontSize: 20,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s',
            }}
          >
            ›
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16 }}>
          {reviews.map((rev, i) => (
            <div
              key={rev.id}
              onClick={() => setCurrent(i)}
              style={{
                background: i === current ? 'rgba(102,126,234,0.15)' : 'rgba(255,255,255,0.03)',
                border: `1px solid ${i === current ? 'rgba(102,126,234,0.4)' : 'rgba(255,255,255,0.08)'}`,
                borderRadius: 14,
                padding: '16px',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                <span style={{ fontSize: 24 }}>{rev.avatar}</span>
                <div>
                  <div style={{ color: '#fff', fontWeight: 600, fontSize: 13 }}>{rev.name}</div>
                  <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11 }}>{rev.destination}</div>
                </div>
                <div style={{ marginLeft: 'auto', color: '#34d399', fontWeight: 700, fontSize: 13 }}>
                  -{rev.saved.toLocaleString()}₽
                </div>
              </div>
              <div style={{ color: '#fbbf24', fontSize: 12 }}>{'★'.repeat(rev.rating)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
