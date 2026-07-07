import { useState, useEffect } from 'react';
import type { FormEvent } from 'react';

const slides = [
  {
    bg: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80',
    city: 'Дубай',
    country: 'ОАЭ',
    tagline: 'Город золота и небоскрёбов',
    price: '45 000₽',
  },
  {
    bg: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1600&q=80',
    city: 'Бали',
    country: 'Индонезия',
    tagline: 'Остров богов и рисовых террас',
    price: '38 000₽',
  },
  {
    bg: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1600&q=80',
    city: 'Париж',
    country: 'Франция',
    tagline: 'Вечная романтика на берегах Сены',
    price: '52 000₽',
  },
  {
    bg: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1600&q=80',
    city: 'Токио',
    country: 'Япония',
    tagline: 'Будущее и традиции в одном городе',
    price: '65 000₽',
  },
];

const suggestions = ['Дубай', 'Бали', 'Париж', 'Токио', 'Барселона', 'Мальдивы', 'Рим', 'Нью-Йорк', 'Бангкок', 'Амстердам'];

const notifications = [
  { text: 'Анна из Москвы купила тур на Бали', time: '2 мин назад', icon: '🎉' },
  { text: 'Цена на Дубай снизилась на 15%', time: '5 мин назад', icon: '📉' },
  { text: 'Михаил забронировал отель в Париже', time: '8 мин назад', icon: '🏨' },
  { text: '47 человек смотрят Токио прямо сейчас', time: '1 мин назад', icon: '👀' },
];

const Hero = () => {
  const [slide, setSlide] = useState(0);
  const [search, setSearch] = useState('');
  const [showSugg, setShowSugg] = useState(false);
  const [tourists, setTourists] = useState(2);
  const [dateRange, setDateRange] = useState('7');
  const [notif, setNotif] = useState(0);
  const [showNotif, setShowNotif] = useState(true);

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    // 40 секунд между показами — не мельтешит и не отвлекает
    const t = setInterval(() => {
      setShowNotif(false);
      setTimeout(() => {
        setNotif((n) => (n + 1) % notifications.length);
        setShowNotif(true);
      }, 800);
    }, 40000);
    return () => clearInterval(t);
  }, []);

  const filtered = suggestions.filter(
    (s) => s.toLowerCase().includes(search.toLowerCase()) && search.length > 0,
  );

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    const q = search || slides[slide].city;
    window.open(`https://aviasales.ru/search/${encodeURIComponent(q)}`, '_blank');
  };

  return (
    <section style={{ position: 'relative', height: '100vh', minHeight: 600, overflow: 'hidden' }}>
      {slides.map((s, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${s.bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: i === slide ? 1 : 0,
            transition: 'opacity 1.2s ease',
            zIndex: 0,
          }}
        />
      ))}

      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background:
            'linear-gradient(to bottom, rgba(10,15,30,0.5) 0%, rgba(10,15,30,0.3) 40%, rgba(10,15,30,0.85) 100%)',
        }}
      />

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
            background: 'rgba(10,15,30,0.9)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(102,126,234,0.3)',
            borderRadius: 12,
            padding: '12px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            maxWidth: 280,
          }}
        >
          <span style={{ fontSize: 24 }}>{notifications[notif].icon}</span>
          <div>
            <div style={{ color: '#fff', fontSize: 13, fontWeight: 500 }}>{notifications[notif].text}</div>
            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 11 }}>{notifications[notif].time}</div>
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
          <span style={{ color: '#a78bfa', fontSize: 13, fontWeight: 600 }}>Экономьте до 60% на путешествиях</span>
        </div>

        <h1
          style={{
            fontSize: 'clamp(36px, 7vw, 80px)',
            fontWeight: 900,
            color: '#fff',
            marginBottom: 8,
            lineHeight: 1.1,
            textShadow: '0 2px 30px rgba(0,0,0,0.5)',
          }}
        >
          {slides[slide].city}
        </h1>
        <p style={{ fontSize: 'clamp(14px, 2vw, 20px)', color: 'rgba(255,255,255,0.8)', marginBottom: 4 }}>
          {slides[slide].country}
        </p>
        <p style={{ fontSize: 'clamp(14px, 1.5vw, 18px)', color: 'rgba(255,255,255,0.6)', marginBottom: 16 }}>
          {slides[slide].tagline}
        </p>

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 32 }}>
          <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16, textDecoration: 'line-through' }}>
            от 68 000₽
          </span>
          <span
            style={{
              background: 'linear-gradient(135deg, #667eea, #a78bfa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: 28,
              fontWeight: 800,
            }}
          >
            от {slides[slide].price}
          </span>
        </div>

        <form
          onSubmit={handleSearch}
          style={{
            background: 'rgba(10,15,30,0.8)',
            backdropFilter: 'blur(30px)',
            border: '1px solid rgba(102,126,234,0.3)',
            borderRadius: 20,
            padding: 20,
            width: '100%',
            maxWidth: 720,
            marginBottom: 24,
          }}
        >
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 16 }}>
            <div style={{ flex: '1 1 200px', position: 'relative' }}>
              <div
                style={{
                  color: 'rgba(255,255,255,0.5)',
                  fontSize: 11,
                  marginBottom: 6,
                  textTransform: 'uppercase',
                  letterSpacing: 1,
                }}
              >
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
                placeholder={`🔍 ${slides[slide].city}`}
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
                  }}
                >
                  {filtered.map((s) => (
                    <div
                      key={s}
                      onMouseDown={() => {
                        setSearch(s);
                        setShowSugg(false);
                      }}
                      style={{
                        padding: '10px 14px',
                        color: '#fff',
                        cursor: 'pointer',
                        fontSize: 14,
                        transition: 'background 0.15s',
                      }}
                      onMouseEnter={(e) =>
                        ((e.currentTarget as HTMLElement).style.background = 'rgba(102,126,234,0.2)')
                      }
                      onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLElement).style.background = 'transparent')
                      }
                    >
                      ✈️ {s}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div style={{ flex: '1 1 150px' }}>
              <div
                style={{
                  color: 'rgba(255,255,255,0.5)',
                  fontSize: 11,
                  marginBottom: 6,
                  textTransform: 'uppercase',
                  letterSpacing: 1,
                }}
              >
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
                <option value="7" style={{ background: '#1a1f35' }}>
                  1 неделя
                </option>
                <option value="14" style={{ background: '#1a1f35' }}>
                  2 недели
                </option>
                <option value="21" style={{ background: '#1a1f35' }}>
                  3 недели
                </option>
                <option value="30" style={{ background: '#1a1f35' }}>
                  Месяц
                </option>
              </select>
            </div>

            <div style={{ flex: '1 1 140px' }}>
              <div
                style={{
                  color: 'rgba(255,255,255,0.5)',
                  fontSize: 11,
                  marginBottom: 6,
                  textTransform: 'uppercase',
                  letterSpacing: 1,
                }}
              >
                Туристы
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: 10,
                  padding: '8px 14px',
                }}
              >
                <button
                  type="button"
                  onClick={() => setTourists(Math.max(1, tourists - 1))}
                  style={{
                    background: 'rgba(255,255,255,0.1)',
                    border: 'none',
                    borderRadius: 6,
                    width: 28,
                    height: 28,
                    color: '#fff',
                    cursor: 'pointer',
                    fontSize: 18,
                  }}
                >
                  −
                </button>
                <span style={{ color: '#fff', fontWeight: 600, flex: 1, textAlign: 'center' }}>
                  👤 {tourists}
                </span>
                <button
                  type="button"
                  onClick={() => setTourists(Math.min(10, tourists + 1))}
                  style={{
                    background: 'rgba(255,255,255,0.1)',
                    border: 'none',
                    borderRadius: 6,
                    width: 28,
                    height: 28,
                    color: '#fff',
                    cursor: 'pointer',
                    fontSize: 18,
                  }}
                >
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
            🔍 Найти лучшую цену — {tourists} {tourists === 1 ? 'турист' : tourists < 5 ? 'туриста' : 'туристов'} ·{' '}
            {dateRange} дней
          </button>
        </form>

        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 24 }}>
          {['🔥 Горящие туры', '🏖️ Пляжный отдых', '🏔️ Горы', '🌆 Города', '💑 Романтика'].map((tag) => (
            <button
              key={tag}
              onClick={() => window.open('https://aviasales.ru', '_blank')}
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: 100,
                padding: '8px 16px',
                color: 'rgba(255,255,255,0.8)',
                cursor: 'pointer',
                fontSize: 13,
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(102,126,234,0.3)';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(102,126,234,0.5)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.08)';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.2)';
              }}
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
