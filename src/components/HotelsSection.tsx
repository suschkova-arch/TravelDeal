import { useState } from 'react';
import { hotels } from '../data/travelData';

const HotelsSection = () => {
  const [filter, setFilter] = useState('Все');
  const [sort, setSort] = useState('price');
  const [liked, setLiked] = useState<number[]>([]);

  const countries = ['Все', ...Array.from(new Set(hotels.map((h) => h.country)))];

  const filtered = hotels
    .filter((h) => filter === 'Все' || h.country === filter)
    .sort((a, b) => (sort === 'price' ? a.price - b.price : b.rating - a.rating));

  return (
    <section id="hotels" style={{ padding: '80px 24px', background: 'rgba(13,18,38,1)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'rgba(245,158,11,0.15)',
              border: '1px solid rgba(245,158,11,0.3)',
              borderRadius: 100,
              padding: '6px 16px',
              marginBottom: 16,
            }}
          >
            <span style={{ color: '#fbbf24', fontSize: 13, fontWeight: 600 }}>🏨 Лучшие отели</span>
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, color: '#fff', marginBottom: 12 }}>
            5★ Отели со скидкой до 40%
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16 }}>
            Отборные люксовые отели от наших партнёров
          </p>
        </div>

        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginBottom: 16, flexWrap: 'wrap' }}>
          {countries.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              style={{
                padding: '8px 20px',
                borderRadius: 100,
                border: `1px solid ${filter === c ? '#667eea' : 'rgba(255,255,255,0.15)'}`,
                background: filter === c ? 'rgba(102,126,234,0.25)' : 'transparent',
                color: filter === c ? '#a78bfa' : 'rgba(255,255,255,0.6)',
                cursor: 'pointer',
                fontWeight: filter === c ? 700 : 400,
                fontSize: 13,
                transition: 'all 0.2s',
              }}
            >
              {c}
            </button>
          ))}
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            style={{
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: 100,
              padding: '8px 16px',
              color: '#fff',
              fontSize: 13,
              cursor: 'pointer',
              outline: 'none',
              marginLeft: 'auto',
            }}
          >
            <option value="price" style={{ background: '#1a1f35' }}>
              По цене
            </option>
            <option value="rating" style={{ background: '#1a1f35' }}>
              По рейтингу
            </option>
          </select>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 24 }}>
          {filtered.map((hotel) => (
            <div
              key={hotel.id}
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 20,
                overflow: 'hidden',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 50px rgba(0,0,0,0.4)';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(102,126,234,0.4)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)';
              }}
            >
              <div style={{ position: 'relative', height: 200 }}>
                <img src={hotel.image} alt={hotel.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(10,15,30,0.8) 0%, transparent 60%)',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: 12,
                    left: 12,
                    background: 'linear-gradient(135deg, #f97316, #ef4444)',
                    borderRadius: 8,
                    padding: '4px 10px',
                    color: '#fff',
                    fontSize: 12,
                    fontWeight: 700,
                  }}
                >
                  -{hotel.discount}%
                </div>

                <button
                  onClick={() =>
                    setLiked((l) => (l.includes(hotel.id) ? l.filter((id) => id !== hotel.id) : [...l, hotel.id]))
                  }
                  style={{
                    position: 'absolute',
                    top: 12,
                    right: 12,
                    background: liked.includes(hotel.id) ? '#ef4444' : 'rgba(255,255,255,0.2)',
                    border: 'none',
                    borderRadius: '50%',
                    width: 36,
                    height: 36,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    fontSize: 18,
                    transition: 'all 0.2s',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  {liked.includes(hotel.id) ? '❤️' : '🤍'}
                </button>

                <div style={{ position: 'absolute', bottom: 12, left: 12 }}>
                  <div style={{ color: '#fbbf24', fontSize: 16 }}>{'★'.repeat(hotel.stars)}</div>
                </div>
              </div>

              <div style={{ padding: 20 }}>
                <h3 style={{ color: '#fff', fontSize: 17, fontWeight: 700, marginBottom: 4 }}>{hotel.name}</h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, marginBottom: 12 }}>
                  📍 {hotel.city}, {hotel.country}
                </p>

                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 16 }}>
                  {hotel.amenities.slice(0, 3).map((a) => (
                    <span
                      key={a}
                      style={{
                        background: 'rgba(255,255,255,0.06)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: 6,
                        padding: '3px 8px',
                        color: 'rgba(255,255,255,0.6)',
                        fontSize: 11,
                      }}
                    >
                      {a}
                    </span>
                  ))}
                  {hotel.amenities.length > 3 && (
                    <span
                      style={{
                        background: 'rgba(255,255,255,0.06)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: 6,
                        padding: '3px 8px',
                        color: 'rgba(255,255,255,0.4)',
                        fontSize: 11,
                      }}
                    >
                      +{hotel.amenities.length - 3}
                    </span>
                  )}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                  <div>
                    <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, textDecoration: 'line-through' }}>
                      {hotel.oldPrice.toLocaleString()}₽/ночь
                    </div>
                    <div
                      style={{
                        fontSize: 22,
                        fontWeight: 800,
                        background: 'linear-gradient(135deg, #667eea, #a78bfa)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      {hotel.price.toLocaleString()}₽
                      <span style={{ fontSize: 13, WebkitTextFillColor: 'rgba(255,255,255,0.4)' }}>/ночь</span>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ color: '#fbbf24', fontSize: 16 }}>★ {hotel.rating}</div>
                    <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11 }}>{hotel.reviews} отзывов</div>
                  </div>
                </div>

                <a
                  href={hotel.partnerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'block',
                    padding: '12px',
                    background: 'linear-gradient(135deg, #667eea, #764ba2)',
                    borderRadius: 12,
                    color: '#fff',
                    textDecoration: 'none',
                    textAlign: 'center',
                    fontWeight: 700,
                    fontSize: 14,
                    boxShadow: '0 4px 15px rgba(102,126,234,0.3)',
                    transition: 'all 0.2s',
                  }}
                >
                  Забронировать на {hotel.partner}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotelsSection;
