import { useMemo, useState } from 'react';
import { hotels } from '../data/travelData';
import { getPartnerLink } from '../utils/partnerLinks';

// Генерация встроенных графических заглушек высокого разрешения в зависимости от типа направления
const getSvgPlaceholder = (hotel: any) => {
  const isSea = ['Турция', 'Таиланд', 'Индонезия', 'Мальдивы', 'Абхазия', 'Кипр', 'Куба', 'Филиппины'].includes(hotel.country);
  const isMountain = ['Алтай', 'Камчатка', 'Кавказ', 'Минеральные Воды', 'Нальчик', 'Ессентуки', 'Пятигорск', 'Южно-Сахалинск', 'Курильск'].includes(hotel.city) || ['Кавказ'].includes(hotel.country);
  
  if (isSea) {
    // Стиль 1: Спокойное море, полная золотая луна с дорожкой на воде и пальма
    return `data:image/svg+xml;utf8,${encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
        <defs>
          <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#050b18"/>
            <stop offset="100%" stop-color="#0a152d"/>
          </linearGradient>
          <linearGradient id="moonGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#fef08a"/>
            <stop offset="100%" stop-color="#f59e0b"/>
          </linearGradient>
        </defs>
        <rect width="1200" height="800" fill="url(#skyGrad)"/>
        
        <!-- Мерцающие звезды -->
        <circle cx="150" cy="120" r="1.5" fill="#fff" opacity="0.4"/>
        <circle cx="380" cy="80" r="1" fill="#fff" opacity="0.3"/>
        <circle cx="850" cy="140" r="2" fill="#fff" opacity="0.5"/>
        <circle cx="1050" cy="90" r="1.2" fill="#fff" opacity="0.4"/>
        
        <!-- Большая полная луна -->
        <circle cx="600" cy="240" r="95" fill="url(#moonGrad)" filter="drop-shadow(0 0 35px rgba(245,158,11,0.32))"/>
        
        <!-- Спокойное море -->
        <path d="M0 480 Q300 472 600 480 T1200 480 V800 H0 Z" fill="#070d1d"/>
        <path d="M0 530 Q300 520 600 530 T1200 530 V800 H0 Z" fill="#040814" opacity="0.8"/>
        
        <!-- Лунная дорожка и рябь воды -->
        <ellipse cx="600" cy="480" rx="140" ry="6" fill="#fef08a" opacity="0.32" />
        <ellipse cx="600" cy="510" rx="190" ry="8" fill="#fef08a" opacity="0.22" />
        <ellipse cx="600" cy="550" rx="240" ry="12" fill="#fef08a" opacity="0.14" />
        <ellipse cx="600" cy="610" rx="300" ry="18" fill="#fef08a" opacity="0.08" />
        
        <!-- Изящная пальма -->
        <path d="M1020 480 Q1000 320 920 220" fill="none" stroke="#451a03" stroke-width="14" stroke-linecap="round"/>
        <path d="M920 220 Q840 210 800 240 M920 220 Q870 160 840 140 M920 220 Q960 150 1000 160 M920 220 Q990 210 1020 260" fill="none" stroke="#10b981" stroke-width="11" stroke-linecap="round"/>
        
        <!-- Декоративные 5 звезд -->
        <text x="600" y="100" text-anchor="middle" fill="#f59e0b" font-family="Arial, sans-serif" font-size="28" letter-spacing="4">★★★★★</text>
        <text x="600" y="690" text-anchor="middle" fill="#ffffff" font-family="Arial, sans-serif" font-size="44" font-weight="900" letter-spacing="1">${hotel.name}</text>
        <text x="600" y="735" text-anchor="middle" fill="#38bdf8" font-family="Arial, sans-serif" font-size="20" font-weight="600">Эксклюзивный морской курорт • Спецпредложение 2026</text>
      </svg>
    `)}`;
  } else if (isMountain) {
    // Стиль 2: Величественные горы, сияющие звезды и растущий полумесяц
    return `data:image/svg+xml;utf8,${encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
        <defs>
          <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#040814"/>
            <stop offset="100%" stop-color="#0a122c"/>
          </linearGradient>
          <linearGradient id="mountGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#4f46e5"/>
            <stop offset="100%" stop-color="#1e1b4b"/>
          </linearGradient>
        </defs>
        <rect width="1200" height="800" fill="url(#skyGrad)"/>
        
        <!-- Звездное небо -->
        <circle cx="200" cy="150" r="1" fill="#fff" opacity="0.4"/>
        <circle cx="850" cy="90" r="1.5" fill="#fff" opacity="0.6"/>
        <circle cx="1050" cy="180" r="1" fill="#fff" opacity="0.3"/>
        
        <!-- Растущий полумесяц -->
        <path d="M600 150 A 60 60 0 1 0 660 210 A 50 50 0 1 1 600 150" fill="#fbbf24" filter="drop-shadow(0 0 18px rgba(251,191,36,0.35))"/>
        
        <!-- Горы -->
        <path d="M100 480 L450 180 L800 480 Z" fill="url(#mountGrad)" opacity="0.8" stroke="rgba(255,255,255,0.08)" stroke-width="2"/>
        <path d="M400 480 L750 240 L1100 480 Z" fill="url(#mountGrad)" opacity="0.6" stroke="rgba(255,255,255,0.06)" stroke-width="2"/>
        <path d="M0 480 Q300 460 600 480 T1200 480 V800 H0 Z" fill="#030712"/>
        
        <!-- Ели внизу -->
        <polygon points="200,480 185,440 215,440" fill="#065f46" opacity="0.9"/>
        <polygon points="200,450 190,410 210,410" fill="#065f46" opacity="0.9"/>
        <polygon points="230,480 215,430 245,430" fill="#065f46" opacity="0.7"/>
        
        <text x="600" y="100" text-anchor="middle" fill="#fbbf24" font-family="Arial, sans-serif" font-size="28" letter-spacing="4">★★★★★</text>
        <text x="600" y="690" text-anchor="middle" fill="#ffffff" font-family="Arial, sans-serif" font-size="44" font-weight="900" letter-spacing="1">${hotel.name}</text>
        <text x="600" y="735" text-anchor="middle" fill="#a78bfa" font-family="Arial, sans-serif" font-size="20" font-weight="600">Горный отель и эко-отдых • Спецпредложение 2026</text>
      </svg>
    `)}`;
  } else {
    // Стиль 3: Вечерний европейский город, неоновое классическое здание
    return `data:image/svg+xml;utf8,${encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
        <defs>
          <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#020617"/>
            <stop offset="100%" stop-color="#0f172a"/>
          </linearGradient>
          <linearGradient id="facadeGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#4f46e5"/>
            <stop offset="100%" stop-color="#312e81"/>
          </linearGradient>
        </defs>
        <rect width="1200" height="800" fill="url(#skyGrad)"/>
        
        <!-- Неоновые очертания отеля -->
        <rect x="360" y="200" width="480" height="420" rx="16" fill="url(#facadeGrad)" opacity="0.14" stroke="#6366f1" stroke-width="4" filter="drop-shadow(0 0 15px rgba(99,102,241,0.25))"/>
        
        <!-- Колонны -->
        <rect x="420" y="320" width="24" height="300" fill="#818cf8" opacity="0.6"/>
        <rect x="756" y="320" width="24" height="300" fill="#818cf8" opacity="0.6"/>
        <path d="M390 320 H810 L780 270 H420 Z" fill="#4f46e5" opacity="0.8"/>
        
        <!-- Окна с теплым светом -->
        <rect x="430" y="230" width="45" height="45" rx="6" fill="#fbbf24" opacity="0.95"/>
        <rect x="510" y="230" width="45" height="45" rx="6" fill="#fbbf24" opacity="0.85"/>
        <rect x="590" y="230" width="45" height="45" rx="6" fill="#38bdf8" opacity="0.7"/>
        <rect x="670" y="230" width="45" height="45" rx="6" fill="#fbbf24" opacity="0.9"/>
        <rect x="750" y="230" width="45" height="45" rx="6" fill="#fff" opacity="0.2"/>
        
        <text x="600" y="100" text-anchor="middle" fill="#fbbf24" font-family="Arial, sans-serif" font-size="28" letter-spacing="4">★★★★★</text>
        <text x="600" y="690" text-anchor="middle" fill="#ffffff" font-family="Arial, sans-serif" font-size="44" font-weight="900" letter-spacing="1">${hotel.name}</text>
        <text x="600" y="735" text-anchor="middle" fill="#f59e0b" font-family="Arial, sans-serif" font-size="20" font-weight="600">Премиальный городской отель • Спецпредложение 2026</text>
      </svg>
    `)}`;
  }
};


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

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24 }}>
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
                      target.src = getSvgPlaceholder(hotel);
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
                      Забронировать на {cheapest.partner} — {cheapest.price.toLocaleString()}₽/ночь за 2 гостей
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
