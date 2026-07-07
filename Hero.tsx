import { useState } from 'react';
import { buildAviasalesUrl } from '../services/liveApi';

const POPULAR = ['Дубай', 'Анталья', 'Пхукет', 'Сочи', 'Барселона', 'Мальдивы'];

const CITY_CODES: Record<string, string> = {
  'Дубай': 'DXB', 'Анталья': 'AYT', 'Пхукет': 'HKT', 'Сочи': 'AER',
  'Барселона': 'BCN', 'Мальдивы': 'MLE', 'Стамбул': 'IST', 'Хургада': 'HRG',
  'Бали': 'DPS', 'Москва': 'MOW', 'СПб': 'LED',
};

export default function Hero() {
  const [dest, setDest] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const code = CITY_CODES[dest] ?? dest.toUpperCase().slice(0, 3);
    window.open(buildAviasalesUrl('MOW', code), '_blank');
  };

  return (
    <section style={{
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #0a0f1e 0%, #0d1428 40%, #0a0f1e 100%)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '100px 24px 60px', position: 'relative', overflow: 'hidden',
    }}>
      {/* Background glow blobs */}
      <div style={{ position: 'absolute', top: '15%', left: '10%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(102,126,234,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '20%', right: '5%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(167,139,250,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 900, width: '100%', textAlign: 'center', position: 'relative' }}>
        {/* Badge */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(102,126,234,0.15)', border: '1px solid rgba(102,126,234,0.3)', borderRadius: 100, padding: '6px 16px', marginBottom: 24 }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#4ade80', display: 'inline-block', animation: 'pulse 2s infinite' }} />
          <span style={{ color: '#a78bfa', fontSize: 13, fontWeight: 600 }}>🔴 LIVE-цены обновляются каждые 15 минут</span>
        </div>

        {/* Heading */}
        <h1 style={{ fontSize: 'clamp(36px, 6vw, 72px)', fontWeight: 900, lineHeight: 1.1, marginBottom: 20 }}>
          <span style={{ color: '#fff' }}>Находим лучшие цены</span><br />
          <span style={{ background: 'linear-gradient(135deg, #667eea, #a78bfa, #f472b6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            на путешествия
          </span>
        </h1>

        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 'clamp(15px, 2vw, 19px)', maxWidth: 620, margin: '0 auto 40px', lineHeight: 1.6 }}>
          Сравниваем цены 23+ партнёров — Aviasales, Hotellook, Ostrovok, Яндекс.Путешествия и других.
          Экономия <strong style={{ color: '#a78bfa' }}>до 60%</strong> на отелях и авиабилетах.
        </p>

        {/* Search form */}
        <form onSubmit={handleSearch} style={{
          display: 'flex', gap: 12, maxWidth: 580, margin: '0 auto 32px',
          flexWrap: 'wrap', justifyContent: 'center',
        }}>
          <input
            type="text"
            value={dest}
            onChange={e => setDest(e.target.value)}
            placeholder="Куда хотите поехать?"
            style={{
              flex: 1, minWidth: 220, padding: '16px 20px',
              background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: 14, color: '#fff', fontSize: 15, outline: 'none',
            }}
          />
          <button type="submit" style={{
            padding: '16px 28px', borderRadius: 14,
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            border: 'none', color: '#fff', fontWeight: 800, fontSize: 15,
            cursor: 'pointer', boxShadow: '0 8px 25px rgba(102,126,234,0.4)',
            transition: 'transform 0.2s',
          }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-2px)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
          >🔍 Найти</button>
        </form>

        {/* Popular */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center', marginBottom: 56 }}>
          <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13 }}>Популярные:</span>
          {POPULAR.map(city => (
            <button key={city} onClick={() => {
              const code = CITY_CODES[city] ?? 'DXB';
              window.open(buildAviasalesUrl('MOW', code), '_blank');
            }} style={{
              background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 100, padding: '5px 14px', color: 'rgba(255,255,255,0.7)',
              fontSize: 13, cursor: 'pointer', transition: 'all 0.2s',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(102,126,234,0.2)'; (e.currentTarget as HTMLElement).style.color = '#fff'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)'; (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.7)'; }}
            >{city}</button>
          ))}
        </div>

        {/* Stats */}
        <div style={{ display: 'flex', gap: 32, justifyContent: 'center', flexWrap: 'wrap' }}>
          {[
            { num: '2.4 млн', label: 'Путешественников' },
            { num: '63+', label: 'Направлений' },
            { num: 'до 60%', label: 'Экономия' },
            { num: '23', label: 'Партнёра' },
          ].map(s => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 900, background: 'linear-gradient(135deg, #667eea, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{s.num}</div>
              <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, marginTop: 2 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
