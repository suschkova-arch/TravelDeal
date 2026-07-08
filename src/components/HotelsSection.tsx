import { useMemo, useState } from 'react';
import { hotels } from '../data/travelData';
import { getPartnerLink } from '../utils/partnerLinks';

const HOTEL_PLACEHOLDER = `data:image/svg+xml;utf8,${encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#0f172a"/>
        <stop offset="100%" stop-color="#1e293b"/>
      </linearGradient>
      <linearGradient id="p" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#667eea"/>
        <stop offset="100%" stop-color="#764ba2"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="800" fill="url(#g)"/>
    <rect x="240" y="150" width="720" height="500" rx="36" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.18)"/>
    <rect x="370" y="270" width="460" height="210" rx="28" fill="url(#p)" opacity="0.25"/>
    <rect x="430" y="230" width="340" height="64" rx="20" fill="rgba(255,255,255,0.1)"/>
    <path d="M470 455V350c0-22 18-40 40-40h180c22 0 40 18 40 40v105" fill="none" stroke="#e5e7eb" stroke-width="18" stroke-linecap="round"/>
    <rect x="445" y="455" width="310" height="58" rx="20" fill="#e5e7eb"/>
    <rect x="505" y="355" width="56" height="56" rx="12" fill="#0f172a" opacity="0.28"/>
    <rect x="573" y="355" width="56" height="56" rx="12" fill="#0f172a" opacity="0.28"/>
    <rect x="641" y="355" width="56" height="56" rx="12" fill="#0f172a" opacity="0.28"/>
    <text x="600" y="610" text-anchor="middle" fill="#ffffff" font-family="Arial, sans-serif" font-size="46" font-weight="700">TravelDeal Hotel</text>
    <text x="600" y="660" text-anchor="middle" fill="#cbd5e1" font-family="Arial, sans-serif" font-size="24">Фото временно недоступно</text>
  </svg>
`)}`;

const HotelsSection = () => {
  const [filter, setFilter] = useState('Все');
  const [city, setCity] = useState('Все города');
  const [stars, setStars] = useState(0);
  const [sort, setSort] = useState('price');
  const [liked, setLiked] = useState<number[]>([]);

  const countries = ['Все', ...Array.from(new Set(hotels.map((h) => h.country)))];
  const cities = [
    'Все города',
    ...Array.from(
      new Set(
        hotels
          .filter((h) => (filter === 'Все' ? true : h.country === filter))
          .map((h) => h.city),
      ),
    ),
  ];

  const filtered = useMemo(() => {
    const next = hotels
      .filter((h) => (filter === 'Все' ? true : h.country === filter))
      .filter((h) => (city === 'Все города' ? true : h.city === city))
      .filter((h) => (stars === 0 ? true : h.stars === stars))
      .sort((a, b) => {
        const cheapestA = Math.min(...(a.offers?.map((offer) => offer.price) ?? [a.price]));
        const cheapestB = Math.min(...(b.offers?.map((offer) => offer.price) ?? [b.price]));
        if (sort === 'price') return cheapestA - cheapestB;
        if (sort === 'rating') return b.rating - a.rating;
        return b.discount - a.discount;
      });

    return next;
  }, [filter, city, sort, stars]);

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
            <span style={{ color: '#fbbf24', fontSize: 13, fontWeight: 600 }}>🏨 Отели с фото и сравнением систем бронирования</span>
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, color: '#fff', marginBottom: 12 }}>
            Самые выгодные варианты по странам
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16 }}>
            Сравниваем Ostrovok, Яндекс Путешествия, Sutochno и другие площадки — ведём на самую дешёвую
          </p>
        </div>

        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginBottom: 18, flexWrap: 'wrap', alignItems: 'center' }}>
          {countries.map((c) => (
            <button
              key={c}
              onClick={() => {
                setFilter(c);
                setCity('Все города');
              }}
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
            value={city}
            onChange={(e) => setCity(e.target.value)}
            style={{
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: 100,
              padding: '8px 16px',
              color: '#fff',
              fontSize: 13,
              cursor: 'pointer',
              outline: 'none',
            }}
          >
            {cities.map((cityOption) => (
              <option key={cityOption} value={cityOption} style={{ background: '#1a1f35' }}>
                {cityOption}
              </option>
            ))}
          </select>
          {[0, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => setStars(star)}
              style={{
                padding: '8px 16px',
                borderRadius: 100,
                border: `1px solid ${stars === star ? '#10b981' : 'rgba(255,255,255,0.15)'}`,
                background: stars === star ? 'rgba(16,185,129,0.18)' : 'transparent',
                color: stars === star ? '#34d399' : 'rgba(255,255,255,0.6)',
                cursor: 'pointer',
                fontWeight: stars === star ? 700 : 400,
                fontSize: 13,
              }}
            >
              {star === 0 ? 'Все ★' : `${star}★`}
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
            }}
          >
            <option value="price" style={{ background: '#1a1f35' }}>
              По лучшей цене
            </option>
            <option value="rating" style={{ background: '#1a1f35' }}>
              По рейтингу
            </option>
            <option value="discount" style={{ background: '#1a1f35' }}>
              По размеру скидки
            </option>
          </select>
        </div>

        <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13, marginBottom: 22, textAlign: 'center' }}>
          Найдено <strong style={{ color: '#fff' }}>{filtered.length}</strong> отелей • фотографии подтягиваются из внешних источников и закреплены в карточках вручную
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 24 }}>
          {filtered.map((hotel) => {
            const offers = hotel.offers?.length
              ? [...hotel.offers].sort((a, b) => a.price - b.price)
              : [{ partner: hotel.partner, price: hotel.price, url: hotel.partnerUrl }];
            const cheapest = offers[0];
            const highest = offers[offers.length - 1];
            const saving = Math.max(0, highest.price - cheapest.price);

            return (
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
                <div style={{ position: 'relative', height: 220 }}>
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.onerror = null;
                      target.src = HOTEL_PLACEHOLDER;
                    }}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', background: '#121828' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(10,15,30,0.88) 0%, rgba(10,15,30,0.15) 55%, transparent 100%)',
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

                  <div style={{ position: 'absolute', bottom: 14, left: 14, right: 14, display: 'flex', alignItems: 'end', justifyContent: 'space-between', gap: 10 }}>
                    <div>
                      <div style={{ color: '#fbbf24', fontSize: 15 }}>{'★'.repeat(hotel.stars)}</div>
                      <div style={{ color: '#fff', fontSize: 18, fontWeight: 700 }}>{hotel.name}</div>
                      <div style={{ color: 'rgba(255,255,255,0.62)', fontSize: 12 }}>
                        📍 {hotel.city}, {hotel.country}
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ color: '#fbbf24', fontSize: 14 }}>★ {hotel.rating}</div>
                      <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: 11 }}>{hotel.reviews} отзывов</div>
                    </div>
                  </div>
                </div>

                <div style={{ padding: 20 }}>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 14 }}>
                    {hotel.amenities.slice(0, 4).map((a) => (
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
                  </div>

                  <div style={{ marginBottom: 14 }}>
                    <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: 11, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.8 }}>
                      Сравнение систем бронирования
                    </div>
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                      {offers.map((offer, index) => (
                        <a
                          key={`${hotel.id}-${offer.partner}`}
                          href={getPartnerLink(offer.partner, offer.url)}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            flex: 1,
                            minWidth: 92,
                            textDecoration: 'none',
                            background: index === 0 ? 'rgba(16,185,129,0.16)' : 'rgba(255,255,255,0.03)',
                            border: `1px solid ${index === 0 ? 'rgba(16,185,129,0.4)' : 'rgba(255,255,255,0.1)'}`,
                            borderRadius: 10,
                            padding: '8px 10px',
                            color: '#fff',
                          }}
                        >
                          <div style={{ fontSize: 10, color: index === 0 ? '#34d399' : 'rgba(255,255,255,0.55)', marginBottom: 2 }}>
                            {offer.partner}
                          </div>
                          <div style={{ fontWeight: 800, fontSize: 15 }}>{offer.price.toLocaleString()}₽</div>
                          {offer.note && (
                            <div style={{ fontSize: 9, color: '#34d399', marginTop: 3 }}>{offer.note}</div>
                          )}
                        </a>
                      ))}
                    </div>
                    {saving > 0 && (
                      <div
                        style={{
                          marginTop: 10,
                          background: 'rgba(16,185,129,0.1)',
                          border: '1px solid rgba(16,185,129,0.25)',
                          borderRadius: 10,
                          padding: '8px 10px',
                          color: '#34d399',
                          fontSize: 12,
                          fontWeight: 700,
                        }}
                      >
                        Экономия до {saving.toLocaleString()}₽ за ночь при переходе через {cheapest.partner}
                      </div>
                    )}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                    <div>
                        <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, textDecoration: 'line-through' }}>
                        {hotel.oldPrice.toLocaleString()}₽/ночь · за 2 гостей
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
                        {cheapest.price.toLocaleString()}₽
                        <span style={{ fontSize: 13, WebkitTextFillColor: 'rgba(255,255,255,0.4)' }}>/ночь за 2 гостей</span>
                      </div>
                    </div>
                    <div style={{ textAlign: 'right', color: 'rgba(255,255,255,0.52)', fontSize: 12 }}>
                      {offers.length} {offers.length === 1 ? 'система' : 'системы'}
                    </div>
                  </div>

                  <a
                    href={getPartnerLink(cheapest.partner, cheapest.url)}
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
                    }}
                  >
                    Забронировать на {cheapest.partner} — {cheapest.price.toLocaleString()}₽
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HotelsSection;
