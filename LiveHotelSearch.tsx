import { useState } from 'react';

const CITIES = [
  // Россия
  { name: 'Москва', code: 'MOW', flag: '🇷🇺' },
  { name: 'Санкт-Петербург', code: 'LED', flag: '🇷🇺' },
  { name: 'Сочи', code: 'AER', flag: '🇷🇺' },
  { name: 'Калининград', code: 'KGD', flag: '🇷🇺' },
  { name: 'Казань', code: 'KZN', flag: '🇷🇺' },
  { name: 'Екатеринбург', code: 'SVX', flag: '🇷🇺' },
  { name: 'Новосибирск', code: 'OVB', flag: '🇷🇺' },
  { name: 'Иркутск', code: 'IKT', flag: '🇷🇺' },
  { name: 'Владивосток', code: 'VVO', flag: '🇷🇺' },
  { name: 'Краснодар', code: 'KRR', flag: '🇷🇺' },
  // Кавказ
  { name: 'Махачкала', code: 'MCX', flag: '🇷🇺' },
  { name: 'Грозный', code: 'GRV', flag: '🇷🇺' },
  { name: 'Кисловодск', code: 'MRV', flag: '🇷🇺' },
  // Курорты
  { name: 'Анталья', code: 'AYT', flag: '🇹🇷' },
  { name: 'Стамбул', code: 'IST', flag: '🇹🇷' },
  { name: 'Бодрум', code: 'BJV', flag: '🇹🇷' },
  { name: 'Хургада', code: 'HRG', flag: '🇪🇬' },
  { name: 'Шарм-эль-Шейх', code: 'SSH', flag: '🇪🇬' },
  { name: 'Дубай', code: 'DXB', flag: '🇦🇪' },
  { name: 'Абу-Даби', code: 'AUH', flag: '🇦🇪' },
  { name: 'Пхукет', code: 'HKT', flag: '🇹🇭' },
  { name: 'Бангкок', code: 'BKK', flag: '🇹🇭' },
  { name: 'Паттайя', code: 'UTP', flag: '🇹🇭' },
  { name: 'Бали', code: 'DPS', flag: '🇮🇩' },
  { name: 'Мале', code: 'MLE', flag: '🇲🇻' },
  { name: 'Варадеро', code: 'VRA', flag: '🇨🇺' },
  { name: 'Гавана', code: 'HAV', flag: '🇨🇺' },
  // Европа
  { name: 'Рим', code: 'FCO', flag: '🇮🇹' },
  { name: 'Венеция', code: 'VCE', flag: '🇮🇹' },
  { name: 'Барселона', code: 'BCN', flag: '🇪🇸' },
  { name: 'Мадрид', code: 'MAD', flag: '🇪🇸' },
  { name: 'Тенерифе', code: 'TFS', flag: '🇪🇸' },
  { name: 'Айя-Напа', code: 'LCA', flag: '🇨🇾' },
  // Азия
  { name: 'Пекин', code: 'PEK', flag: '🇨🇳' },
  { name: 'Токио', code: 'NRT', flag: '🇯🇵' },
  { name: 'Себу', code: 'CEB', flag: '🇵🇭' },
  // Абхазия
  { name: 'Сухум', code: 'SUI', flag: '🏳️' },
  { name: 'Гагра', code: 'GGR', flag: '🏳️' },
];

function getCheckinDate(daysFromNow = 14) {
  const d = new Date();
  d.setDate(d.getDate() + daysFromNow);
  return d.toISOString().slice(0, 10);
}

function getCheckoutDate(daysFromNow = 21) {
  const d = new Date();
  d.setDate(d.getDate() + daysFromNow);
  return d.toISOString().slice(0, 10);
}

export default function LiveHotelSearch() {
  const [city, setCity] = useState(CITIES[18]); // Дубай
  const [checkin, setCheckin] = useState(getCheckinDate());
  const [checkout, setCheckout] = useState(getCheckoutDate());
  const [nights, setNights] = useState(7);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [search, setSearch] = useState('');

  const filtered = CITIES.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));

  const handleSearch = () => {
    const url = `https://tp.media/r?marker=547188&trs=189015&p=4114&u=https%3A%2F%2Fhotels.aviasales.ru%2F${city.code}%3FcheckIn%3D${checkin}%26checkOut%3D${checkout}%26adults%3D2`;
    window.open(url, '_blank');
  };

  const updateNights = (n: number) => {
    setNights(n);
    const co = new Date(checkin);
    co.setDate(co.getDate() + n);
    setCheckout(co.toISOString().slice(0, 10));
  };

  return (
    <section id="hotel-search" style={{ padding: '80px 24px', background: 'linear-gradient(180deg, rgba(13,18,40,1) 0%, rgba(10,15,30,1) 100%)' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: 100, padding: '6px 16px', marginBottom: 16 }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#ef4444', display: 'inline-block', animation: 'pulse 2s infinite' }} />
            <span style={{ color: '#f87171', fontSize: 13, fontWeight: 600 }}>🔴 Живой поиск отелей — 63+ города</span>
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, color: '#fff', marginBottom: 12 }}>
            Найдите отель прямо сейчас
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16 }}>
            Реальные цены из базы Hotellook (Aviasales Group) — вся Россия, Турция, Египет, ОАЭ и ещё 60 направлений
          </p>
        </div>

        {/* Search Card */}
        <div style={{
          background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: 24, padding: '32px',
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 20 }}>
            {/* City select */}
            <div style={{ position: 'relative', gridColumn: '1 / -1' }}>
              <label style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12, fontWeight: 600, display: 'block', marginBottom: 6 }}>📍 Город / курорт</label>
              <button onClick={() => setDropdownOpen(!dropdownOpen)} style={{
                width: '100%', padding: '14px 18px', borderRadius: 12, textAlign: 'left',
                background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)',
                color: '#fff', fontSize: 15, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8,
              }}>
                <span>{city.flag}</span> <span>{city.name}</span>
                <span style={{ marginLeft: 'auto', opacity: 0.5 }}>▼</span>
              </button>

              {dropdownOpen && (
                <div style={{
                  position: 'absolute', top: '100%', left: 0, right: 0, zIndex: 100, marginTop: 4,
                  background: '#1a1f35', border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 12, overflow: 'hidden',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                }}>
                  <div style={{ padding: '8px' }}>
                    <input
                      type="text"
                      placeholder="Поиск города..."
                      value={search}
                      onChange={e => setSearch(e.target.value)}
                      style={{
                        width: '100%', padding: '10px 12px', borderRadius: 8,
                        background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
                        color: '#fff', fontSize: 14, outline: 'none',
                      }}
                    />
                  </div>
                  <div style={{ maxHeight: 240, overflowY: 'auto' }}>
                    {filtered.map(c => (
                      <button key={c.code} onClick={() => { setCity(c); setDropdownOpen(false); setSearch(''); }} style={{
                        width: '100%', padding: '10px 16px', textAlign: 'left', cursor: 'pointer',
                        background: c.code === city.code ? 'rgba(102,126,234,0.2)' : 'transparent',
                        border: 'none', color: '#fff', fontSize: 14, display: 'flex', alignItems: 'center', gap: 8,
                        transition: 'background 0.15s',
                      }}
                        onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.06)')}
                        onMouseLeave={e => (e.currentTarget.style.background = c.code === city.code ? 'rgba(102,126,234,0.2)' : 'transparent')}
                      >
                        <span>{c.flag}</span> {c.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Checkin */}
            <div>
              <label style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12, fontWeight: 600, display: 'block', marginBottom: 6 }}>📅 Заезд</label>
              <input type="date" value={checkin} onChange={e => setCheckin(e.target.value)} style={{
                width: '100%', padding: '14px 18px', borderRadius: 12,
                background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)',
                color: '#fff', fontSize: 15, outline: 'none', colorScheme: 'dark',
              }} />
            </div>

            {/* Checkout */}
            <div>
              <label style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12, fontWeight: 600, display: 'block', marginBottom: 6 }}>📅 Выезд</label>
              <input type="date" value={checkout} onChange={e => setCheckout(e.target.value)} style={{
                width: '100%', padding: '14px 18px', borderRadius: 12,
                background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)',
                color: '#fff', fontSize: 15, outline: 'none', colorScheme: 'dark',
              }} />
            </div>
          </div>

          {/* Nights quick select */}
          <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap', alignItems: 'center' }}>
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13 }}>Ночей:</span>
            {[3, 5, 7, 10, 14, 21].map(n => (
              <button key={n} onClick={() => updateNights(n)} style={{
                padding: '6px 14px', borderRadius: 8, cursor: 'pointer', fontSize: 13, fontWeight: 600,
                background: nights === n ? 'rgba(102,126,234,0.2)' : 'rgba(255,255,255,0.04)',
                border: nights === n ? '1px solid rgba(102,126,234,0.4)' : '1px solid rgba(255,255,255,0.1)',
                color: nights === n ? '#a78bfa' : 'rgba(255,255,255,0.6)',
              }}>{n}</button>
            ))}
          </div>

          <button onClick={handleSearch} style={{
            width: '100%', padding: '16px', borderRadius: 14,
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            border: 'none', color: '#fff', fontWeight: 800, fontSize: 16, cursor: 'pointer',
            boxShadow: '0 8px 25px rgba(102,126,234,0.4)', transition: 'transform 0.2s',
          }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-2px)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
          >
            🔍 Найти отели в {city.name} — от {nights} ночей
          </button>

          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: 12, textAlign: 'center', marginTop: 12 }}>
            Цены обновляются в реальном времени из базы Hotellook · Более 30 систем бронирования
          </p>
        </div>
      </div>
    </section>
  );
}
