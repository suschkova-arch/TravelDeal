import { useMemo, useState } from 'react';
import { hotels2026, hotelCountries, mealTypes } from '../data/travelData';
import LiveHotelSearch from './LiveHotelSearch';

const starOptions = ['Все', '5★', '4★', '3★'];

const HotelsSection = () => {
  const [country, setCountry] = useState('Все страны');
  const [stars, setStars] = useState('Все');
  const [meal, setMeal] = useState('Любое питание');
  const [sort, setSort] = useState<'price' | 'rating'>('price');

  const filtered = useMemo(() => {
    return hotels2026
      .filter((h) => country === 'Все страны' || h.country === country)
      .filter((h) => stars === 'Все' || h.stars === parseInt(stars))
      .filter((h) => meal === 'Любое питание' || h.meal === meal)
      .map((h) => {
        const sorted = [...h.offers].sort((a, b) => a.price - b.price);
        return { ...h, best: sorted[0], worst: sorted[sorted.length - 1] };
      })
      .sort((a, b) => (sort === 'price' ? a.best.price - b.best.price : b.rating - a.rating));
  }, [country, stars, meal, sort]);

  return (
    <section id="hotels" style={{ padding: '80px 24px', background: 'rgba(13,18,38,1)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
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
            <span style={{ color: '#fbbf24', fontSize: 13, fontWeight: 600 }}>🏨 Поиск отелей · сезон 2026</span>
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, color: '#fff', marginBottom: 12 }}>
            Реальные цены на отели
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 15, maxWidth: 640, margin: '0 auto' }}>
            Ищите отели с живыми ценами из базы Hotellook (Aviasales Group) — или изучите нашу
            подборку популярных отелей со сравнением систем бронирования ниже.
          </p>
        </div>

        {/* ЖИВОЙ ПОИСК с реальными ценами */}
        <LiveHotelSearch />

        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <h3 style={{ color: '#fff', fontSize: 24, fontWeight: 700, marginBottom: 6 }}>
            Подборка популярных отелей 2026
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12 }}>
            Ориентировочные цены ₽/ночь · точная цена подтверждается на сайте партнёра при выборе дат
          </p>
        </div>

        {/* Фильтры */}
        <div
          style={{
            display: 'flex',
            gap: 12,
            justifyContent: 'center',
            marginBottom: 32,
            flexWrap: 'wrap',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 16,
            padding: 16,
          }}
        >
          <div>
            <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 10, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4 }}>
              Страна
            </div>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(102,126,234,0.35)',
                borderRadius: 10,
                padding: '10px 14px',
                color: '#fff',
                fontSize: 14,
                cursor: 'pointer',
                outline: 'none',
                minWidth: 170,
              }}
            >
              {hotelCountries.map((c) => (
                <option key={c} value={c} style={{ background: '#1a1f35' }}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div>
            <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 10, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4 }}>
              Звёзды
            </div>
            <div style={{ display: 'flex', gap: 6 }}>
              {starOptions.map((s) => (
                <button
                  key={s}
                  onClick={() => setStars(s === 'Все' ? 'Все' : s.replace('★', ''))}
                  style={{
                    padding: '10px 14px',
                    borderRadius: 10,
                    border: `1px solid ${
                      stars === (s === 'Все' ? 'Все' : s.replace('★', '')) ? '#667eea' : 'rgba(255,255,255,0.15)'
                    }`,
                    background:
                      stars === (s === 'Все' ? 'Все' : s.replace('★', ''))
                        ? 'rgba(102,126,234,0.25)'
                        : 'transparent',
                    color:
                      stars === (s === 'Все' ? 'Все' : s.replace('★', '')) ? '#a78bfa' : 'rgba(255,255,255,0.6)',
                    cursor: 'pointer',
                    fontWeight: 600,
                    fontSize: 13,
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 10, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4 }}>
              Питание
            </div>
            <select
              value={meal}
              onChange={(e) => setMeal(e.target.value)}
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(102,126,234,0.35)',
                borderRadius: 10,
                padding: '10px 14px',
                color: '#fff',
                fontSize: 14,
                cursor: 'pointer',
                outline: 'none',
                minWidth: 190,
              }}
            >
              {mealTypes.map((m) => (
                <option key={m} value={m} style={{ background: '#1a1f35' }}>
                  {m}
                </option>
              ))}
            </select>
          </div>

          <div>
            <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 10, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4 }}>
              Сортировка
            </div>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as 'price' | 'rating')}
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(102,126,234,0.35)',
                borderRadius: 10,
                padding: '10px 14px',
                color: '#fff',
                fontSize: 14,
                cursor: 'pointer',
                outline: 'none',
              }}
            >
              <option value="price" style={{ background: '#1a1f35' }}>
                Сначала дешёвые
              </option>
              <option value="rating" style={{ background: '#1a1f35' }}>
                По рейтингу
              </option>
            </select>
          </div>
        </div>

        <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, marginBottom: 16 }}>
          Найдено отелей: <b style={{ color: '#a78bfa' }}>{filtered.length}</b>
        </div>

        {/* Карточки */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: 24 }}>
          {filtered.map((hotel) => {
            const saving = hotel.worst.price - hotel.best.price;
            return (
              <div
                key={hotel.id}
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 20,
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
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
                <div style={{ position: 'relative', height: 190, background: 'rgba(255,255,255,0.05)' }}>
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = 'none';
                      const parent = (e.currentTarget as HTMLImageElement).parentElement;
                      if (parent && !parent.querySelector('.img-fallback')) {
                        const fb = document.createElement('div');
                        fb.className = 'img-fallback';
                        fb.style.cssText =
                          'position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:48px;';
                        fb.textContent = '🏨';
                        parent.appendChild(fb);
                      }
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(10,15,30,0.85) 0%, transparent 60%)',
                    }}
                  />
                  {saving > 0 && (
                    <div
                      style={{
                        position: 'absolute',
                        top: 12,
                        left: 12,
                        background: 'linear-gradient(135deg, #10b981, #059669)',
                        borderRadius: 8,
                        padding: '4px 10px',
                        color: '#fff',
                        fontSize: 12,
                        fontWeight: 700,
                      }}
                    >
                      Экономия до {saving.toLocaleString()}₽/ночь
                    </div>
                  )}
                  <div style={{ position: 'absolute', bottom: 12, left: 12, right: 12 }}>
                    <div style={{ color: '#fbbf24', fontSize: 15, marginBottom: 2 }}>{'★'.repeat(hotel.stars)}</div>
                    <div style={{ color: '#fff', fontWeight: 800, fontSize: 18 }}>{hotel.name}</div>
                    <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12 }}>
                      📍 {hotel.city}, {hotel.country}
                    </div>
                  </div>
                </div>

                <div style={{ padding: 18, flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', gap: 8, marginBottom: 14, flexWrap: 'wrap', alignItems: 'center' }}>
                    <span
                      style={{
                        background: 'rgba(102,126,234,0.2)',
                        border: '1px solid rgba(102,126,234,0.4)',
                        borderRadius: 100,
                        padding: '3px 10px',
                        color: '#a78bfa',
                        fontSize: 11,
                        fontWeight: 600,
                      }}
                    >
                      🍽️ {hotel.meal}
                    </span>
                    <span style={{ color: '#fbbf24', fontSize: 13, fontWeight: 700 }}>★ {hotel.rating}</span>
                    <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11 }}>{hotel.reviews} отзывов</span>
                  </div>

                  {/* Сравнение цен партнёров */}
                  <div
                    style={{
                      background: 'rgba(0,0,0,0.25)',
                      border: '1px solid rgba(255,255,255,0.07)',
                      borderRadius: 12,
                      padding: 12,
                      marginBottom: 14,
                    }}
                  >
                    <div
                      style={{
                        color: 'rgba(255,255,255,0.4)',
                        fontSize: 10,
                        textTransform: 'uppercase',
                        letterSpacing: 1,
                        marginBottom: 8,
                      }}
                    >
                      Сравнение цен (₽/ночь)
                    </div>
                    {[...hotel.offers]
                      .sort((a, b) => a.price - b.price)
                      .map((offer, idx) => (
                        <a
                          key={offer.partner}
                          href={offer.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '7px 10px',
                            borderRadius: 8,
                            marginBottom: 4,
                            textDecoration: 'none',
                            background: idx === 0 ? 'rgba(16,185,129,0.15)' : 'transparent',
                            border: idx === 0 ? '1px solid rgba(16,185,129,0.4)' : '1px solid transparent',
                            transition: 'background 0.15s',
                          }}
                          onMouseEnter={(e) => {
                            if (idx !== 0)
                              (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)';
                          }}
                          onMouseLeave={(e) => {
                            if (idx !== 0) (e.currentTarget as HTMLElement).style.background = 'transparent';
                          }}
                        >
                          <span style={{ color: idx === 0 ? '#34d399' : 'rgba(255,255,255,0.7)', fontSize: 13, fontWeight: idx === 0 ? 700 : 400 }}>
                            {idx === 0 && '🏆 '}
                            {offer.partner}
                          </span>
                          <span
                            style={{
                              color: idx === 0 ? '#34d399' : 'rgba(255,255,255,0.6)',
                              fontWeight: idx === 0 ? 800 : 500,
                              fontSize: idx === 0 ? 15 : 13,
                            }}
                          >
                            {offer.price.toLocaleString()}₽
                          </span>
                        </a>
                      ))}
                  </div>

                  {/* Бронирование по лучшей цене */}
                  <a
                    href={hotel.best.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'block',
                      marginTop: 'auto',
                      padding: '13px',
                      background: 'linear-gradient(135deg, #10b981, #059669)',
                      borderRadius: 12,
                      color: '#fff',
                      textDecoration: 'none',
                      textAlign: 'center',
                      fontWeight: 700,
                      fontSize: 14,
                      boxShadow: '0 4px 15px rgba(16,185,129,0.35)',
                      transition: 'all 0.2s',
                    }}
                  >
                    Забронировать на {hotel.best.partner} — {hotel.best.price.toLocaleString()}₽
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: 60, color: 'rgba(255,255,255,0.5)' }}>
            😔 По выбранным фильтрам отелей не найдено. Попробуйте изменить параметры.
          </div>
        )}
      </div>
    </section>
  );
};

export default HotelsSection;
