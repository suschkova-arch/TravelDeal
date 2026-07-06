import { useState } from 'react';
import { destinations } from '../data/travelData';

const DestinationsSection = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="destinations" style={{ padding: '80px 24px', background: 'rgba(10,15,30,1)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'rgba(102,126,234,0.15)',
              border: '1px solid rgba(102,126,234,0.3)',
              borderRadius: 100,
              padding: '6px 16px',
              marginBottom: 16,
            }}
          >
            <span style={{ color: '#a78bfa', fontSize: 13, fontWeight: 600 }}>🌍 Популярные направления</span>
          </div>
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 800,
              color: '#fff',
              marginBottom: 12,
            }}
          >
            Горящие предложения недели
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16, maxWidth: 500, margin: '0 auto' }}>
            Лучшие цены на популярные направления, обновляются ежедневно
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: 24,
          }}
        >
          {destinations.map((dest) => {
            const discount = Math.round((1 - dest.price / dest.oldPrice) * 100);
            const isHov = hovered === dest.id;
            return (
              <div
                key={dest.id}
                onMouseEnter={() => setHovered(dest.id)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  position: 'relative',
                  borderRadius: 20,
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transform: isHov ? 'translateY(-8px)' : 'translateY(0)',
                  boxShadow: isHov
                    ? '0 30px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(102,126,234,0.4)'
                    : '0 8px 30px rgba(0,0,0,0.3)',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  height: 300,
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `url(${dest.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transform: isHov ? 'scale(1.05)' : 'scale(1)',
                    transition: 'transform 0.6s ease',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: isHov
                      ? 'linear-gradient(to top, rgba(10,15,30,0.95) 0%, rgba(10,15,30,0.4) 60%, transparent 100%)'
                      : 'linear-gradient(to top, rgba(10,15,30,0.85) 0%, rgba(10,15,30,0.2) 60%, transparent 100%)',
                    transition: 'background 0.4s',
                  }}
                />

                <div
                  style={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    background: 'linear-gradient(135deg, #f97316, #ef4444)',
                    borderRadius: 10,
                    padding: '6px 12px',
                    color: '#fff',
                    fontSize: 13,
                    fontWeight: 700,
                    boxShadow: '0 4px 15px rgba(239,68,68,0.5)',
                  }}
                >
                  -{discount}%
                </div>

                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: 24,
                  }}
                >
                  <div style={{ display: 'flex', gap: 6, marginBottom: 10, flexWrap: 'wrap' }}>
                    {dest.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          background: 'rgba(102,126,234,0.3)',
                          border: '1px solid rgba(102,126,234,0.4)',
                          borderRadius: 100,
                          padding: '3px 10px',
                          color: '#a78bfa',
                          fontSize: 11,
                          fontWeight: 600,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 style={{ color: '#fff', fontSize: 22, fontWeight: 800, marginBottom: 2 }}>{dest.name}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, marginBottom: 10 }}>
                    {dest.country} · {dest.description}
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, textDecoration: 'line-through' }}>
                        от {dest.oldPrice.toLocaleString()}₽
                      </div>
                      <div
                        style={{
                          background: 'linear-gradient(135deg, #667eea, #a78bfa)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          fontSize: 22,
                          fontWeight: 800,
                        }}
                      >
                        от {dest.price.toLocaleString()}₽
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span style={{ color: '#fbbf24', fontSize: 14 }}>{'★'.repeat(Math.floor(dest.rating))}</span>
                      <span style={{ color: '#fff', fontWeight: 700, fontSize: 14 }}>{dest.rating}</span>
                      <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12 }}>({dest.reviews})</span>
                    </div>
                  </div>

                  {isHov && (
                    <a
                      href={dest.partnerUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'block',
                        marginTop: 14,
                        padding: '10px',
                        background: 'linear-gradient(135deg, #667eea, #764ba2)',
                        borderRadius: 10,
                        color: '#fff',
                        textDecoration: 'none',
                        textAlign: 'center',
                        fontWeight: 700,
                        fontSize: 14,
                        boxShadow: '0 4px 15px rgba(102,126,234,0.4)',
                        animation: 'fadeIn 0.3s ease',
                      }}
                    >
                      Смотреть на {dest.partner} →
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <a
            href="https://aviasales.ru"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '14px 32px',
              background: 'rgba(102,126,234,0.15)',
              border: '1px solid rgba(102,126,234,0.4)',
              borderRadius: 12,
              color: '#a78bfa',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: 15,
              transition: 'all 0.3s',
            }}
          >
            Смотреть все направления ✈️
          </a>
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
