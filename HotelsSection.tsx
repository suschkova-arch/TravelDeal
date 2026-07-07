import { useState } from 'react';
import { hotels } from '../data/travelData';
import type { Hotel } from '../data/travelData';

const COUNTRIES = ['Все', 'ОАЭ', 'Турция', 'Россия', 'Египет', 'Таиланд', 'Испания', 'Мальдивы'];
const STARS = ['Все', '5★', '4★', '3★'];
const MEALS = ['Все', 'AI', 'BB', 'HB', 'FB'];

function StarRating({ n }: { n: number }) {
  return <span style={{ color: '#fbbf24', fontSize: 12 }}>{'★'.repeat(n)}{'☆'.repeat(5 - n)}</span>;
}

function HotelCard({ hotel }: { hotel: Hotel }) {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: 20, overflow: 'hidden',
      transition: 'all 0.3s',
    }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
        (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(102,126,234,0.3)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
        (e.currentTarget as HTMLElement).style.boxShadow = 'none';
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
      }}
    >
      {/* Image */}
      <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden' }}>
        <img src={hotel.image} alt={hotel.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }} loading="lazy"
          onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
        />
        <div style={{ position: 'absolute', top: 12, right: 12 }}>
          <span style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)', borderRadius: 8, padding: '4px 10px', color: '#fff', fontSize: 12, fontWeight: 700 }}>
            {hotel.countryFlag} {hotel.country}
          </span>
        </div>
        <div style={{ position: 'absolute', top: 12, left: 12 }}>
          <span style={{ background: 'rgba(74,222,128,0.2)', border: '1px solid rgba(74,222,128,0.4)', borderRadius: 8, padding: '4px 10px', color: '#4ade80', fontSize: 12, fontWeight: 700 }}>
            {hotel.meal}
          </span>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '16px 20px' }}>
        <div style={{ marginBottom: 10 }}>
          <StarRating n={hotel.stars} />
          <h3 style={{ color: '#fff', fontWeight: 700, fontSize: 16, margin: '6px 0 4px' }}>{hotel.name}</h3>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13 }}>📍 {hotel.city}</p>
        </div>

        {/* Tags */}
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 14 }}>
          {hotel.tags.map(t => (
            <span key={t} style={{ background: 'rgba(102,126,234,0.15)', border: '1px solid rgba(102,126,234,0.2)', borderRadius: 6, padding: '2px 8px', color: '#a78bfa', fontSize: 11 }}>{t}</span>
          ))}
        </div>

        {/* Rating */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
          <div style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)', borderRadius: 8, padding: '4px 10px', color: '#fff', fontWeight: 800, fontSize: 14 }}>{hotel.rating}</div>
          <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12 }}>{hotel.reviews.toLocaleString('ru')} отзывов</div>
        </div>

        {/* Partners */}
        <div style={{ marginBottom: 14 }}>
          {hotel.partners.map(p => (
            <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '7px 10px', marginBottom: 6, textDecoration: 'none',
              borderRadius: 10,
              background: p.best ? 'rgba(102,126,234,0.1)' : 'rgba(255,255,255,0.03)',
              border: p.best ? '1px solid rgba(102,126,234,0.25)' : '1px solid rgba(255,255,255,0.06)',
              transition: 'all 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(102,126,234,0.15)')}
              onMouseLeave={e => (e.currentTarget.style.background = p.best ? 'rgba(102,126,234,0.1)' : 'rgba(255,255,255,0.03)')}
            >
              <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13 }}>
                {p.best && '🏆 '}{p.name}
              </span>
              <span style={{ color: p.best ? '#a78bfa' : 'rgba(255,255,255,0.6)', fontWeight: 700, fontSize: 14 }}>
                {p.price.toLocaleString('ru')}₽
              </span>
            </a>
          ))}
        </div>

        {/* Book button */}
        <a href={hotel.partners[0].url} target="_blank" rel="noopener noreferrer" style={{
          display: 'block', textAlign: 'center', padding: '12px',
          background: 'linear-gradient(135deg, #667eea, #764ba2)',
          borderRadius: 12, color: '#fff', textDecoration: 'none', fontWeight: 700, fontSize: 14,
          boxShadow: '0 4px 15px rgba(102,126,234,0.3)',
        }}>
          Забронировать от {hotel.priceRub.toLocaleString('ru')}₽
        </a>
      </div>
    </div>
  );
}

export default function HotelsSection() {
  const [country, setCountry] = useState('Все');
  const [stars, setStars] = useState('Все');
  const [meal, setMeal] = useState('Все');

  const filtered = hotels.filter(h => {
    if (country !== 'Все' && h.country !== country) return false;
    if (stars !== 'Все' && h.stars !== parseInt(stars)) return false;
    if (meal !== 'Все' && h.meal !== meal) return false;
    return true;
  });

  const FilterBtn = ({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) => (
    <button onClick={onClick} style={{
      padding: '7px 16px', borderRadius: 100, fontSize: 13, fontWeight: 600, cursor: 'pointer',
      border: active ? '1px solid rgba(102,126,234,0.5)' : '1px solid rgba(255,255,255,0.1)',
      background: active ? 'rgba(102,126,234,0.2)' : 'rgba(255,255,255,0.04)',
      color: active ? '#a78bfa' : 'rgba(255,255,255,0.6)',
      transition: 'all 0.2s',
    }}>{label}</button>
  );

  return (
    <section id="hotels" style={{ padding: '80px 24px', background: 'rgba(13,18,40,1)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(102,126,234,0.15)', border: '1px solid rgba(102,126,234,0.3)', borderRadius: 100, padding: '6px 16px', marginBottom: 16 }}>
            <span style={{ color: '#a78bfa', fontSize: 13, fontWeight: 600 }}>🏨 Подборка отелей</span>
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, color: '#fff', marginBottom: 12 }}>
            Лучшие отели по лучшим ценам
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16, maxWidth: 500, margin: '0 auto' }}>
            Сравниваем цены 3–4 партнёров в каждой карточке — лучшая выделена 🏆
          </p>
        </div>

        {/* Filters */}
        <div style={{ marginBottom: 36 }}>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 12 }}>
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, alignSelf: 'center', marginRight: 4 }}>Страна:</span>
            {COUNTRIES.map(c => <FilterBtn key={c} label={c} active={country === c} onClick={() => setCountry(c)} />)}
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 12 }}>
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, alignSelf: 'center', marginRight: 4 }}>Звёзды:</span>
            {STARS.map(s => <FilterBtn key={s} label={s} active={stars === s} onClick={() => setStars(s)} />)}
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, alignSelf: 'center', marginRight: 4 }}>Питание:</span>
            {MEALS.map(m => <FilterBtn key={m} label={m} active={meal === m} onClick={() => setMeal(m)} />)}
          </div>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', color: 'rgba(255,255,255,0.4)', padding: '60px 0' }}>
            Ничего не найдено. Попробуйте изменить фильтры.
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}>
            {filtered.map(h => <HotelCard key={h.id} hotel={h} />)}
          </div>
        )}

        {/* Hotellook CTA */}
        <div style={{ marginTop: 48, textAlign: 'center' }}>
          <a href="https://tp.media/r?marker=547188&trs=189015&p=4114&u=https%3A%2F%2Fhotels.aviasales.ru" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 32px',
            background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 14, color: '#fff', textDecoration: 'none', fontWeight: 600, fontSize: 15,
            transition: 'all 0.2s',
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(102,126,234,0.1)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(102,126,234,0.3)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)'; }}
          >
            🔍 Найти ещё отели на Hotellook →
          </a>
        </div>
      </div>
    </section>
  );
}
