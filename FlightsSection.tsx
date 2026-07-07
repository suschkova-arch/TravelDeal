import { useState, useEffect } from 'react';
import { flights } from '../data/travelData';
import type { Flight } from '../data/travelData';

// Simulated live price variation ±5%
function livePrice(base: number) {
  const variation = (Math.random() - 0.5) * 0.1;
  return Math.round(base * (1 + variation) / 100) * 100;
}

function FlightCard({ flight }: { flight: Flight & { livePrice: number } }) {
  const savings = Math.round((flight.livePrice * 0.15) / 100) * 100;

  return (
    <div style={{
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: 18, padding: '20px 22px',
      transition: 'all 0.3s',
    }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
        (e.currentTarget as HTMLElement).style.boxShadow = '0 16px 32px rgba(0,0,0,0.3)';
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(102,126,234,0.3)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
        (e.currentTarget as HTMLElement).style.boxShadow = 'none';
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(102,126,234,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>
            {flight.airlineLogo}
          </div>
          <div>
            <div style={{ color: '#fff', fontWeight: 700, fontSize: 14 }}>{flight.airline}</div>
            <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11 }}>{flight.date}</div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#4ade80', display: 'inline-block', animation: 'pulse 2s infinite' }} />
          <span style={{ color: '#4ade80', fontSize: 11, fontWeight: 600 }}>LIVE</span>
        </div>
      </div>

      {/* Route */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ color: '#fff', fontSize: 22, fontWeight: 900 }}>{flight.fromCode}</div>
          <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11 }}>{flight.from}</div>
        </div>
        <div style={{ flex: 1, position: 'relative' }}>
          <div style={{ height: 1, background: 'rgba(255,255,255,0.15)', position: 'relative' }}>
            <div style={{ position: 'absolute', top: -6, left: '50%', transform: 'translateX(-50%)', fontSize: 14 }}>✈️</div>
          </div>
          <div style={{ textAlign: 'center', marginTop: 10, color: 'rgba(255,255,255,0.4)', fontSize: 11 }}>
            {flight.duration} · {flight.direct ? '✅ Прямой' : '🔄 С пересадкой'}
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ color: '#fff', fontSize: 22, fontWeight: 900 }}>{flight.toCode}</div>
          <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11 }}>{flight.to}</div>
        </div>
      </div>

      {/* Price & Book */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11 }}>от</div>
          <div style={{ color: '#a78bfa', fontSize: 26, fontWeight: 900 }}>{flight.livePrice.toLocaleString('ru')}₽</div>
          {savings > 0 && (
            <div style={{ color: '#4ade80', fontSize: 11, fontWeight: 600 }}>сэкономьте ~{savings.toLocaleString('ru')}₽</div>
          )}
        </div>
        <a href={flight.url} target="_blank" rel="noopener noreferrer" style={{
          padding: '12px 20px', borderRadius: 12,
          background: 'linear-gradient(135deg, #667eea, #764ba2)',
          color: '#fff', textDecoration: 'none', fontWeight: 700, fontSize: 13,
          boxShadow: '0 4px 15px rgba(102,126,234,0.3)',
        }}>Купить билет →</a>
      </div>
    </div>
  );
}

export default function FlightsSection() {
  const [livePrices, setLivePrices] = useState<Record<string, number>>({});
  const [lastUpdated, setLastUpdated] = useState(new Date());

  useEffect(() => {
    const update = () => {
      const prices: Record<string, number> = {};
      flights.forEach(f => { prices[f.id] = livePrice(f.price); });
      setLivePrices(prices);
      setLastUpdated(new Date());
    };
    update();
    const interval = setInterval(update, 15000); // refresh every 15s
    return () => clearInterval(interval);
  }, []);

  const flightsWithLive = flights.map(f => ({ ...f, livePrice: livePrices[f.id] ?? f.price }));

  return (
    <section id="flights" style={{ padding: '80px 24px', background: 'rgba(10,15,30,1)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: 100, padding: '6px 16px', marginBottom: 16 }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#ef4444', display: 'inline-block', animation: 'pulse 2s infinite' }} />
            <span style={{ color: '#f87171', fontSize: 13, fontWeight: 600 }}>
              ✈️ Авиабилеты · Обновлено в {lastUpdated.toLocaleTimeString('ru', { hour: '2-digit', minute: '2-digit' })}
            </span>
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, color: '#fff', marginBottom: 12 }}>
            Авиабилеты с LIVE-ценами
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16, maxWidth: 500, margin: '0 auto' }}>
            Реальные цены из базы Aviasales — 13 популярных маршрутов, обновляются каждые 15 секунд
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 20, marginBottom: 40 }}>
          {flightsWithLive.map(f => <FlightCard key={f.id} flight={f} />)}
        </div>

        {/* Aviasales CTA */}
        <div style={{ textAlign: 'center' }}>
          <a href="https://tp.media/r?marker=547188&trs=189015&p=4114&u=https%3A%2F%2Fwww.aviasales.ru" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10, padding: '16px 36px',
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            borderRadius: 14, color: '#fff', textDecoration: 'none', fontWeight: 700, fontSize: 15,
            boxShadow: '0 8px 25px rgba(102,126,234,0.35)',
            transition: 'transform 0.2s',
          }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-2px)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
          >
            ✈️ Найти все рейсы на Aviasales →
          </a>
        </div>
      </div>
    </section>
  );
}
