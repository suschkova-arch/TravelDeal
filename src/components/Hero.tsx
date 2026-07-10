import { useState, useEffect } from 'react';
import type { FormEvent } from 'react';
import { partners } from '../data/travelData';

type Slide = {
  bg: string;
  city: string;
  country: string;
  tagline: string;
  pairPrice: string;
  oldPairPrice: string;
  perPersonPrice: string;
};

const slides: Slide[] = [
  {
    bg: 'images/hotel-tropical-resort.png',
    city: 'Анталья',
    country: 'Турция',
    tagline: 'Пятизвёздочные отели и море уже с конца июля 2026',
    pairPrice: '67 900₽',
    oldPairPrice: '94 400₽',
    perPersonPrice: '≈ 33 950₽/чел',
  },
  {
    bg: 'images/hotel-tropical-resort.png',
    city: 'Пхукет',
    country: 'Таиланд',
    tagline: 'Тропики, пляжи и длинные зимние бронирования заранее',
    pairPrice: '84 200₽',
    oldPairPrice: '94 400₽',
    perPersonPrice: '≈ 42 100₽/чел',
  },
  {
    bg: 'images/hotel-russia-city.png',
    city: 'Калининград',
    country: 'Россия',
    tagline: 'Балтийские выходные, отели и ж/д как альтернатива перелёту',
    pairPrice: '32 900₽',
    oldPairPrice: '48 900₽',
    perPersonPrice: '≈ 16 450₽/чел',
  },
  {
    bg: 'images/hotel-altai-mountain.png',
    city: 'Алтай',
    country: 'Россия',
    tagline: 'Горы, эко-отели и самостоятельные маршруты с прокатом авто',
    pairPrice: '54 600₽',
    oldPairPrice: '73 200₽',
    perPersonPrice: '≈ 27 300₽/чел',
  },
  {
    bg: 'images/hotel-europe-city-luxury.png',
    city: 'Венеция',
    country: 'Италия',
    tagline: 'Бутик-отели, каналы и осенние city-break маршруты 2026',
    pairPrice: '96 300₽',
    oldPairPrice: '122 000₽',
    perPersonPrice: '≈ 48 150₽/чел',
  },
];

const suggestions = [
  'Анталья', 'Стамбул', 'Пхукет', 'Бангкок', 'Калининград', 'Казань', 'Дагестан', 'Махачкала', 'Кавказ',
  'Кисловодск', 'Минеральные Воды', 'Пятигорск', 'Ессентуки', 'Нальчик', 'Краснодар', 'Ростов-на-Дону',
  'Сахалин', 'Камчатка', 'Курилы', 'Алтай', 'Крым', 'Абхазия', 'Гагра', 'Сухум', 'Пицунда', 'Гудаута',
  'Италия', 'Венеция', 'Испания', 'Кипр', 'Греция', 'Хорватия', 'Черногория', 'Куба', 'Филиппины', 'Китай', 'Пхеньян', 'Турция', 'Россия',
  'Таиланд', 'ОАЭ', 'Дубай', 'Париж', 'Токио', 'Вьетнам',
];

const notifications = [
  { text: 'Екатерина забронировала Анталью на 9 ночей и сэкономила 32 800₽ 🏖️', time: '47 мин назад', icon: '🏨' },
  { text: 'Семья из Казани выбрала ж/д + отель в Калининграде выгоднее на 21 400₽ 🚆', time: '49 мин назад', icon: '🚆' },
  { text: 'На Дагестан сейчас смотрят 18 человек 👀', time: '45 мин назад', icon: '👀' },
  { text: 'На Пхукет купили перелёт с выгодой 28 600₽ ✈️', time: '50 мин назад', icon: '✈️' },
];

const AVIASALES_AFFILIATE = 'https://aviasales.tpk.lu/u9lFIAmF';
const TUTU_AFFILIATE = 'https://tutu.tpk.lu/35nYuIo5';
const TRAVELATA_AFFILIATE = 'https://travelata.tpk.lu/iXthmQlV';

const Hero = () => {
  const partnersCount = partners.length;
  const [slide, setSlide] = useState(0);
  const [search, setSearch] = useState('');
  const [showSugg, setShowSugg] = useState(false);
  const [tourists, setTourists] = useState(2);
  const [dateRange, setDateRange] = useState('7');
  const [notif, setNotif] = useState(0);
  const [showNotif, setShowNotif] = useState(true);

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % slides.length), 6500);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    let timer: number;

    const schedule = () => {
      const delay = 55000 + Math.floor(Math.random() * 20000);
      timer = window.setTimeout(() => {
        setShowNotif(false);
        window.setTimeout(() => {
          setNotif((n) => (n + 1) % notifications.length);
          setShowNotif(true);
          schedule();
        }, 450);
      }, delay);
    };

    schedule();

    return () => window.clearTimeout(timer);
  }, []);

  const filtered = suggestions.filter(
    (s) => s.toLowerCase().includes(search.toLowerCase()) && search.length > 0,
  );

  const openAviasales = (query: string) => {
    const q = encodeURIComponent(query);
    window.open(`${AVIASALES_AFFILIATE}?search=${q}`, '_blank', 'noopener,noreferrer');
  };

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    const q = search || slides[slide].city;
    openAviasales(q);
  };

  return (
    <section style={{ position: 'relative', height: '100vh', minHeight: 660, overflow: 'hidden' }}>
      {/* Красивое ночное море, звездное небо и полная луна с рябью воды */}
      <div className="hero-night-beach" style={{ position: 'absolute', inset: 0, zIndex: 0 }} />

      <div
        style={{
          position: 'absolute',
          top: 90,
          right: 24,
          zIndex: 10,
          opacity: showNotif ? 1 : 0,
          transform: showNotif ? 'translateX(0)' : 'translateX(100px)',
          transition: 'all 0.5s ease',
        }}
      >
        <div
          style={{
            background: 'rgba(10,15,30,0.88)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(102,126,234,0.3)',
            borderRadius: 12,
            padding: '12px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            maxWidth: 340,
          }}
        >
          <span style={{ fontSize: 24 }}>{notifications[notif].icon}</span>
          <div>
            <div style={{ color: '#fff', fontSize: 13, fontWeight: 500, lineHeight: 1.45 }}>{notifications[notif].text}</div>
          </div>
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: '#10b981',
              boxShadow: '0 0 8px #10b981',
              animation: 'pulse 2s infinite',
              flexShrink: 0,
            }}
          />
        </div>
      </div>

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '0 24px',
          paddingTop: 80,
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'rgba(102,126,234,0.2)',
            border: '1px solid rgba(102,126,234,0.4)',
            borderRadius: 100,
            padding: '6px 16px',
            marginBottom: 20,
            backdropFilter: 'blur(10px)',
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: '#10b981',
              animation: 'pulse 2s infinite',
            }}
          />
          <span style={{ color: '#a78bfa', fontSize: 13, fontWeight: 600 }}>
            Сезон поиска: июль 2026 → 2027 · цены в hero указаны за 2 взрослых
          </span>
        </div>

        <h1
          style={{
            fontSize: 'clamp(38px, 7.6vw, 86px)',
            fontWeight: 900,
            color: '#fff',
            marginBottom: 10,
            lineHeight: 1.04,
            textShadow: '0 8px 40px rgba(0,0,0,0.5)',
          }}
        >
          Найдите идеальный тур
        </h1>
        <p style={{ fontSize: 'clamp(16px, 2vw, 24px)', color: 'rgba(255,255,255,0.92)', marginBottom: 6, fontWeight: 600 }}>
          {slides[slide].city} · {slides[slide].country}
        </p>
        <p style={{ fontSize: 'clamp(14px, 1.5vw, 18px)', color: 'rgba(255,255,255,0.74)', marginBottom: 14, maxWidth: 760 }}>
          Реальные цены от {partnersCount}+ проверенных партнёров · {slides[slide].tagline}
        </p>
        <p style={{ fontSize: 'clamp(13px, 1.3vw, 17px)', color: 'rgba(255,255,255,0.62)', marginBottom: 6 }}>
          Отели • Авиабилеты • Ж/Д • Круизы — всё в одном месте
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, marginBottom: 32 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
            <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16, textDecoration: 'line-through' }}>
              от {slides[slide].oldPairPrice} на двоих
            </span>
            <span
              style={{
                background: 'linear-gradient(135deg, #667eea, #a78bfa)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: 30,
                fontWeight: 900,
              }}
            >
              от {slides[slide].pairPrice} на двоих
            </span>
          </div>
          <div style={{ color: 'rgba(255,255,255,0.62)', fontSize: 13 }}>
            или {slides[slide].perPersonPrice} при 2 взрослых
          </div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(245,158,11,0.13)', border: '1px solid rgba(245,158,11,0.28)', borderRadius: 100, padding: '7px 16px', color: '#fbbf24', fontSize: 14, fontWeight: 800 }}>
            🎯 До 35 000₽ экономии с каждой поездкой
          </div>
        </div>

        <form
          onSubmit={handleSearch}
          style={{
            background: 'rgba(10,15,30,0.74)',
            backdropFilter: 'blur(26px)',
            border: '1px solid rgba(102,126,234,0.3)',
            borderRadius: 20,
            padding: 20,
            width: '100%',
            maxWidth: 760,
            marginBottom: 24,
            boxShadow: '0 20px 50px rgba(0,0,0,0.28)',
          }}
        >
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 16 }}>
            <div style={{ flex: '1 1 220px', position: 'relative' }}>
              <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 11, marginBottom: 6, textTransform: 'uppercase', letterSpacing: 1 }}>
                Направление
              </div>
              <input
                type="text"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setShowSugg(true);
                }}
                onFocus={() => setShowSugg(true)}
                onBlur={() => setTimeout(() => setShowSugg(false), 200)}
                placeholder={`🔍 ${slides[slide].city}, ${slides[slide].country}`}
                style={{
                  width: '100%',
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: 10,
                  padding: '10px 14px',
                  color: '#fff',
                  fontSize: 15,
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
              {showSugg && filtered.length > 0 && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    background: 'rgba(10,15,40,0.98)',
                    border: '1px solid rgba(102,126,234,0.3)',
                    borderRadius: 10,
                    marginTop: 4,
                    overflow: 'hidden',
                    zIndex: 100,
                    maxHeight: 260,
                    overflowY: 'auto',
                  }}
                >
                  {filtered.map((s) => (
                    <div
                      key={s}
                      onMouseDown={() => {
                        setSearch(s);
                        setShowSugg(false);
                      }}
                      style={{ padding: '10px 14px', color: '#fff', cursor: 'pointer', fontSize: 14, transition: 'background 0.15s' }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = 'rgba(102,126,234,0.2)')}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = 'transparent')}
                    >
                      ✈️ {s}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div style={{ flex: '1 1 150px' }}>
              <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 11, marginBottom: 6, textTransform: 'uppercase', letterSpacing: 1 }}>
                Длительность
              </div>
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                style={{
                  width: '100%',
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: 10,
                  padding: '10px 14px',
                  color: '#fff',
                  fontSize: 15,
                  outline: 'none',
                  cursor: 'pointer',
                  boxSizing: 'border-box',
                }}
              >
                <option value="7" style={{ background: '#1a1f35' }}>1 неделя</option>
                <option value="10" style={{ background: '#1a1f35' }}>10 дней</option>
                <option value="14" style={{ background: '#1a1f35' }}>2 недели</option>
                <option value="21" style={{ background: '#1a1f35' }}>3 недели</option>
              </select>
            </div>

            <div style={{ flex: '1 1 140px' }}>
              <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 11, marginBottom: 6, textTransform: 'uppercase', letterSpacing: 1 }}>
                Туристы
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 10, padding: '8px 14px' }}>
                <button type="button" onClick={() => setTourists(Math.max(1, tourists - 1))} style={{ background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: 6, width: 28, height: 28, color: '#fff', cursor: 'pointer', fontSize: 18 }}>
                  −
                </button>
                <span style={{ color: '#fff', fontWeight: 600, flex: 1, textAlign: 'center' }}>👤 {tourists}</span>
                <button type="button" onClick={() => setTourists(Math.min(10, tourists + 1))} style={{ background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: 6, width: 28, height: 28, color: '#fff', cursor: 'pointer', fontSize: 18 }}>
                  +
                </button>
              </div>
            </div>
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '14px',
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              border: 'none',
              borderRadius: 12,
              color: '#fff',
              fontSize: 16,
              fontWeight: 700,
              cursor: 'pointer',
              boxShadow: '0 8px 25px rgba(102,126,234,0.5)',
              transition: 'all 0.2s',
              letterSpacing: 0.5,
            }}
          >
            🔍 Найти лучшую цену — {tourists} {tourists === 1 ? 'турист' : tourists < 5 ? 'туриста' : 'туристов'} · {dateRange} дней
          </button>
        </form>

        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 24 }}>
          <button
            onClick={() => window.open(TRAVELATA_AFFILIATE, '_blank', 'noopener,noreferrer')}
            style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 100, padding: '8px 16px', color: 'rgba(255,255,255,0.8)', cursor: 'pointer', fontSize: 13 }}
          >
            🔥 Туры
          </button>
          <button
            onClick={() => window.open(TUTU_AFFILIATE, '_blank', 'noopener,noreferrer')}
            style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 100, padding: '8px 16px', color: 'rgba(255,255,255,0.8)', cursor: 'pointer', fontSize: 13 }}
          >
            🚆 Ж/д по России
          </button>
          {['🏖️ Пляжный отдых', '🏔️ Горы', '🌆 Города', '💑 Романтика'].map((tag) => (
            <button
              key={tag}
              onClick={() => openAviasales(search || slides[slide].city)}
              style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 100, padding: '8px 16px', color: 'rgba(255,255,255,0.8)', cursor: 'pointer', fontSize: 13 }}
            >
              {tag}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 8 }}>
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              style={{
                width: i === slide ? 28 : 8,
                height: 8,
                borderRadius: 4,
                background: i === slide ? '#667eea' : 'rgba(255,255,255,0.3)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s',
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
