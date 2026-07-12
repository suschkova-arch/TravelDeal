import { useState } from 'react';
import { destinations } from '../data/travelData';
import { getPartnerLink } from '../utils/partnerLinks';

const DESTINATION_PLACEHOLDER = `data:image/svg+xml;utf8,${encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#0b1224"/>
        <stop offset="100%" stop-color="#18233a"/>
      </linearGradient>
      <linearGradient id="sun" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#f59e0b"/>
        <stop offset="100%" stop-color="#fb7185"/>
      </linearGradient>
      <linearGradient id="mount" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#667eea"/>
        <stop offset="100%" stop-color="#764ba2"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="800" fill="url(#bg)"/>
    <circle cx="925" cy="185" r="82" fill="url(#sun)" opacity="0.9"/>
    <path d="M0 650C111 585 182 560 282 560C385 560 456 615 560 615C665 615 733 545 844 545C962 545 1046 614 1200 680V800H0V650Z" fill="#0f172a"/>
    <path d="M120 620L350 360L510 555L650 430L860 620H120Z" fill="url(#mount)" opacity="0.75"/>
    <path d="M250 620L430 460L520 555L660 500L810 620H250Z" fill="#A78BFA" opacity="0.28"/>
    <text x="600" y="690" text-anchor="middle" fill="#ffffff" font-family="Arial, sans-serif" font-size="46" font-weight="700">TravelDeal Destination</text>
    <text x="600" y="738" text-anchor="middle" fill="#cbd5e1" font-family="Arial, sans-serif" font-size="24">Фото направления временно недоступно</text>
  </svg>
`)}`;

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
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16, maxWidth: 560, margin: '0 auto' }}>
            Если внешняя фотография не загрузилась, будет показана локальная заглушка с вашего хостинга — без битых иконок и мерцания.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
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
                  background: '#111827',
                }}
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.onerror = null;
                    target.src = DESTINATION_PLACEHOLDER;
                  }}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transform: isHov ? 'scale(1.05)' : 'scale(1)',
                    transition: 'transform 0.6s ease',
                    display: 'block',
                    background: '#121828',
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
                          background: '#1e40af', // Сочный темный синий
                          border: '1.5px solid #3b82f6', // Яркий синий ободок
                          borderRadius: 100,
                          padding: '4px 12px',
                          color: '#ffffff', // Чистый белый жирный текст
                          fontSize: 11,
                          fontWeight: 800, // Очень жирно
                          letterSpacing: '0.4px'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 style={{ color: '#ffffff', fontSize: 24, fontWeight: 900, marginBottom: 4, textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>{dest.name}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 14, fontWeight: 700, marginBottom: 10, textShadow: '0 1px 6px rgba(0,0,0,0.8)' }}>
                    {dest.country}
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
                      href={getPartnerLink(dest.partner, dest.partnerUrl)}
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
            href="https://aviasales.tpk.lu/u9lFIAmF"
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
