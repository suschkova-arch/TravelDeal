import { useState } from 'react';
import { flights } from '../data/travelData';

const FlightsSection = () => {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [tab, setTab] = useState<'roundtrip' | 'oneway'>('roundtrip');

  return (
    <section id="flights" style={{ padding: '80px 24px', background: 'rgba(10,15,30,1)' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'rgba(16,185,129,0.15)',
              border: '1px solid rgba(16,185,129,0.3)',
              borderRadius: 100,
              padding: '6px 16px',
              marginBottom: 16,
            }}
          >
            <span style={{ color: '#34d399', fontSize: 13, fontWeight: 600 }}>✈️ Авиабилеты</span>
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, color: '#fff', marginBottom: 12 }}>
            Лучшие рейсы прямо сейчас
          </h2>
        </div>

        <div
          style={{
            display: 'flex',
            gap: 4,
            background: 'rgba(255,255,255,0.05)',
            borderRadius: 12,
            padding: 4,
            marginBottom: 24,
            maxWidth: 300,
            margin: '0 auto 24px',
          }}
        >
          {(['roundtrip', 'oneway'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                flex: 1,
                padding: '10px',
                background: tab === t ? 'linear-gradient(135deg, #667eea, #764ba2)' : 'transparent',
                border: 'none',
                borderRadius: 10,
                color: '#fff',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: 13,
                transition: 'all 0.2s',
              }}
            >
              {t === 'roundtrip' ? '🔄 Туда-обратно' : '→ В одну сторону'}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {flights.map((flight) => {
            const isExp = expanded === flight.id;
            const discount = Math.round((1 - flight.price / flight.oldPrice) * 100);
            return (
              <div
                key={flight.id}
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: `1px solid ${isExp ? 'rgba(102,126,234,0.5)' : 'rgba(255,255,255,0.1)'}`,
                  borderRadius: 16,
                  overflow: 'hidden',
                  transition: 'all 0.3s',
                  boxShadow: isExp ? '0 10px 40px rgba(102,126,234,0.2)' : 'none',
                }}
              >
                <div
                  style={{
                    padding: '20px 24px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 16,
                    flexWrap: 'wrap',
                  }}
                  onClick={() => setExpanded(isExp ? null : flight.id)}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 140 }}>
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        background: 'linear-gradient(135deg, rgba(102,126,234,0.13), rgba(118,75,162,0.13))',
                        border: '1px solid rgba(102,126,234,0.3)',
                        borderRadius: 12,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 22,
                      }}
                    >
                      {flight.airlineLogo}
                    </div>
                    <div>
                      <div style={{ color: '#fff', fontWeight: 600, fontSize: 13 }}>{flight.airline}</div>
                      <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11 }}>
                        {flight.stops === 0 ? '🟢 Прямой' : `🟡 ${flight.stops} пересадка`}
                      </div>
                    </div>
                  </div>

                  <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 12, minWidth: 220 }}>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ color: '#fff', fontSize: 22, fontWeight: 700 }}>{flight.departTime}</div>
                      <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12 }}>{flight.fromCode}</div>
                    </div>
                    <div style={{ flex: 1, textAlign: 'center' }}>
                      <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11, marginBottom: 4 }}>
                        {flight.duration}
                      </div>
                      <div
                        style={{
                          height: 1,
                          background:
                            'linear-gradient(to right, transparent, rgba(102,126,234,0.6), transparent)',
                          position: 'relative',
                        }}
                      >
                        <div style={{ position: 'absolute', right: -4, top: -4, fontSize: 10 }}>✈</div>
                      </div>
                      <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11, marginTop: 4 }}>
                        {flight.stops === 0 ? 'Без остановок' : '1 пересадка'}
                      </div>
                    </div>
                    <div>
                      <div style={{ color: '#fff', fontSize: 22, fontWeight: 700 }}>{flight.arriveTime}</div>
                      <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12 }}>{flight.toCode}</div>
                    </div>
                  </div>

                  <div style={{ textAlign: 'right', marginLeft: 'auto' }}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                        justifyContent: 'flex-end',
                        marginBottom: 2,
                      }}
                    >
                      <span
                        style={{
                          background: '#ef4444',
                          color: '#fff',
                          borderRadius: 6,
                          padding: '2px 8px',
                          fontSize: 11,
                          fontWeight: 700,
                        }}
                      >
                        -{discount}%
                      </span>
                    </div>
                    <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, textDecoration: 'line-through' }}>
                      {flight.oldPrice.toLocaleString()}₽
                    </div>
                    <div
                      style={{
                        fontSize: 24,
                        fontWeight: 800,
                        background: 'linear-gradient(135deg, #667eea, #a78bfa)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      {flight.price.toLocaleString()}₽
                    </div>
                    <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11 }}>
                      {tab === 'roundtrip' ? 'туда-обратно' : 'в одну сторону'}
                    </div>
                  </div>

                  <div
                    style={{
                      color: 'rgba(255,255,255,0.4)',
                      fontSize: 20,
                      transform: isExp ? 'rotate(180deg)' : 'rotate(0)',
                      transition: 'transform 0.3s',
                    }}
                  >
                    ▾
                  </div>
                </div>

                {isExp && (
                  <div
                    style={{
                      padding: '0 24px 24px',
                      borderTop: '1px solid rgba(255,255,255,0.08)',
                      paddingTop: 20,
                      animation: 'fadeIn 0.3s ease',
                    }}
                  >
                    <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', marginBottom: 16 }}>
                      <div>
                        <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 11, marginBottom: 4 }}>ДАТА ВЫЛЕТА</div>
                        <div style={{ color: '#fff', fontWeight: 600 }}>📅 {flight.date}</div>
                      </div>
                      {tab === 'roundtrip' && (
                        <div>
                          <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 11, marginBottom: 4 }}>
                            ДАТА ВОЗВРАТА
                          </div>
                          <div style={{ color: '#fff', fontWeight: 600 }}>📅 {flight.returnDate}</div>
                        </div>
                      )}
                      <div>
                        <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 11, marginBottom: 4 }}>БАГАЖ</div>
                        <div style={{ color: '#fff', fontWeight: 600 }}>🧳 {flight.baggage}</div>
                      </div>
                      <div>
                        <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 11, marginBottom: 4 }}>САМОЛЁТ</div>
                        <div style={{ color: '#fff', fontWeight: 600 }}>✈️ {flight.aircraft}</div>
                      </div>
                      <div>
                        <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 11, marginBottom: 4 }}>МАРШРУТ</div>
                        <div style={{ color: '#fff', fontWeight: 600 }}>
                          {flight.from} → {flight.to}
                        </div>
                      </div>
                    </div>
                    <a
                      href={flight.partnerUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 8,
                        padding: '12px 28px',
                        background: 'linear-gradient(135deg, #667eea, #764ba2)',
                        borderRadius: 12,
                        color: '#fff',
                        textDecoration: 'none',
                        fontWeight: 700,
                        fontSize: 15,
                        boxShadow: '0 4px 20px rgba(102,126,234,0.4)',
                      }}
                    >
                      ✈️ Купить билет на {flight.partner} — {flight.price.toLocaleString()}₽
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FlightsSection;
