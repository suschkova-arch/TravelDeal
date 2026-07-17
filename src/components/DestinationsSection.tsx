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
                    background: 'linear-gradient(to top, rgba(4,7,16,0.99) 0%, rgba(4,7,16,0.95) 30%, rgba(4,7,16,0.7) 55%, rgba(4,7,16,0.25) 80%, rgba(4,7,16,0) 100%)',
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
                    padding: '28px 24px 24px',
                    textAlign: 'center',
                  }}
                >
                  <div style={{ display: 'flex', gap: 6, marginBottom: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
                    {dest.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          background: 'rgba(0,0,0,0.6)',
                          border: '1px solid rgba(34,211,238,0.5)',
                          borderRadius: 100,
                          padding: '4px 12px',
                          color: '#67e8f9',
                          fontSize: 11,
                          fontWeight: 700,
                          letterSpacing: '0.3px',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3
                    style={{
                      color: '#fff',
                      fontSize: 28,
                      fontWeight: 900,
                      marginBottom: 6,
                      textShadow: '0 3px 16px rgba(0,0,0,1), 0 1px 3px rgba(0,0,0,0.9)',
                      letterSpacing: '-0.5px',
                    }}
                  >
                    {dest.name}
                  </h3>
                  <p
                    style={{
                      color: '#e2e8f0',
                      fontSize: 13,
                      fontWeight: 600,
                      marginBottom: 14,
                      textShadow: '0 2px 10px rgba(0,0,0,1), 0 1px 2px rgba(0,0,0,0.9)',
                      lineHeight: 1.45,
                    }}
                  >
                    {dest.country} · {dest.description}
                  </p>

                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                      background: 'rgba(0,0,0,0.55)',
                      padding: '5px 12px',
                      borderRadius: 100,
                      marginBottom: 12,
                    }}
                  >
                    <span style={{ color: '#fbbf24', fontSize: 14, textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}>
                      {'★'.repeat(Math.floor(dest.rating))}
                    </span>
                    <span style={{ color: '#fff', fontWeight: 800, fontSize: 14 }}>{dest.rating}</span>
                    <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: 12 }}>({dest.reviews.toLocaleString()})</span>
                  </div>

                  <div>
                    <div
                      style={{
                        color: 'rgba(255,255,255,0.75)',
                        fontSize: 13,
                        textDecoration: 'line-through',
                        textShadow: '0 1px 6px rgba(0,0,0,1)',
                        marginBottom: 2,
                      }}
                    >
                      от {dest.oldPrice.toLocaleString()}₽
                    </div>
                    <div
                      style={{
                        color: '#fbbf24',
                        fontSize: 30,
                        fontWeight: 900,
                        textShadow: '0 3px 14px rgba(0,0,0,1), 0 1px 3px rgba(0,0,0,0.9)',
                        letterSpacing: '-0.5px',
                        lineHeight: 1.1,
                      }}
                    >
                      от {dest.price.toLocaleString()}₽
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
