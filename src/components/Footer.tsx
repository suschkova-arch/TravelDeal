import { useState } from 'react';
import type { FormEvent } from 'react';

const groups = {
  flights: [
    { name: 'Aviasales', url: 'https://aviasales.tpk.lu/u9lFIAmF' },
  ],
  hotels: [
    { name: 'Ostrovok', url: 'https://ostrovok.tpk.lu/qm3uUcuL' },
    { name: 'Яндекс Путешествия', url: 'https://yandex.tpk.lu/n2k5ulFQ' },
    { name: 'Sutochno', url: 'https://sutochno.tpk.lu/uTSAebHB' },
    { name: 'Avito Путешествия', url: 'https://avito.tpk.lu/vQaFIi9P' },
    { name: 'МирТурБаз', url: 'https://mirturbaz.tpk.lu/UW7Z9Iw1' },
  ],
  rail: [
    { name: 'Туту', url: 'https://tutu.tpk.lu/35nYuIo5' },
    { name: '12Go (Промокод: TP10)', url: 'https://12go.tpk.lu/uTSAebHB' },
  ],
  tours: [
    { name: 'Travelata', url: 'https://travelata.tpk.lu/iXthmQlV' },
    { name: 'Level.Travel', url: 'https://level.tpk.lu/pEKE6u4T' },
    { name: 'Onlinetours', url: 'https://onlinetours.tpk.lu/9gx8uXiK' },
    { name: 'Слетать', url: 'https://sletat.tpk.lu/qOge5Itj' },
    { name: 'Большая Страна', url: 'https://bolshayastrana.tpk.lu/tDKbPrzA' },
    { name: 'МирТурБаз', url: 'https://mirturbaz.tpk.lu/UW7Z9Iw1' },
    { name: 'Путёвка', url: 'https://putevka.tpk.lu/LLOG5aJa' },
    { name: 'Sanatoriums', url: 'https://sanatoriums.tpk.lu/9jud9LjB' },
  ],
  cruises: [
    { name: 'Круиз-Онлайн', url: 'https://kruiz-online.tpk.lu/ctXuG3FL' },
  ],
  cars: [
    { name: 'Localrent', url: 'https://localrent.tpk.lu/axWJbRm1' },
    { name: 'EconomyBookings', url: 'https://economybookings.tpk.lu/ANU2xTqv' },
    { name: 'QEEQ', url: 'https://qeeq.tpk.lu/z8sf6b95' },
    { name: 'BikesBooking', url: 'https://bikesbooking.tpk.lu/UHyVjzq5' },
  ],
  services: [
    { name: 'SeaRadar', url: 'https://searadar.tpk.lu/pus6EpES' },
    { name: 'Radical Storage', url: 'https://radicalstorage.tpk.lu/lkM8cN3r' },
    { name: 'VIP-Зал', url: 'https://vip-zal.tpk.lu/gQ8g0epq' },
    { name: 'EKTA Traveling', url: 'https://ektatraveling.tpk.lu/9aHvFarq' },
    { name: 'La Voyage', url: 'https://lavoyage.tpk.lu/PC4ITkPJ' },
  ],
};

const Footer = () => {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email) setSent(true);
  };

  return (
    <footer
      style={{
        background: 'rgba(5,8,20,1)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '60px 24px 24px',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(102,126,234,0.15), rgba(167,139,250,0.1))',
            border: '1px solid rgba(102,126,234,0.25)',
            borderRadius: 20,
            padding: '40px',
            textAlign: 'center',
            marginBottom: 60,
          }}
        >
          <h3 style={{ color: '#fff', fontSize: 24, fontWeight: 700, marginBottom: 8 }}>✉️ Подписка на лучшие предложения</h3>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, marginBottom: 24 }}>
            Получайте свежие подборки 2026–2027 по России, Турции, Таиланду, Европе, островам и речным маршрутам.
          </p>
          {sent ? (
            <div style={{ color: '#34d399', fontWeight: 700, fontSize: 16 }}>✅ Вы подписаны! Ждите лучшие предложения на {email}</div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 12, maxWidth: 440, margin: '0 auto', flexWrap: 'wrap' }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ваш email"
                required
                style={{
                  flex: 1,
                  padding: '14px 18px',
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: 12,
                  color: '#fff',
                  fontSize: 15,
                  outline: 'none',
                  minWidth: 200,
                }}
              />
              <button
                type="submit"
                style={{
                  padding: '14px 24px',
                  background: 'linear-gradient(135deg, #667eea, #764ba2)',
                  border: 'none',
                  borderRadius: 12,
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: 15,
                  cursor: 'pointer',
                  boxShadow: '0 4px 15px rgba(102,126,234,0.4)',
                }}
              >
                Подписаться
              </button>
            </form>
          )}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 32, marginBottom: 48 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  background: 'linear-gradient(135deg, #667eea, #764ba2)',
                  borderRadius: 10,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 18,
                }}
              >
                ✈️
              </div>
              <span
                style={{
                  fontSize: 20,
                  fontWeight: 800,
                  background: 'linear-gradient(135deg, #667eea, #a78bfa)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                TravelDeal
              </span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, lineHeight: 1.6 }}>
              Агрегатор путешествий — сравниваем отели, авиа, ж/д, туры, круизы и дополнительные сервисы для поездок.
            </p>
          </div>

          <div>
            <h4 style={{ color: '#fff', fontWeight: 700, marginBottom: 16, fontSize: 14 }}>✈️ Перелёты</h4>
            {groups.flights.map((p) => (
              <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" style={{ display: 'block', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: 13, marginBottom: 10 }}>{p.name}</a>
            ))}
            <h4 style={{ color: '#fff', fontWeight: 700, marginBottom: 16, marginTop: 18, fontSize: 14 }}>🏨 Отели</h4>
            {groups.hotels.map((p) => (
              <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" style={{ display: 'block', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: 13, marginBottom: 10 }}>{p.name}</a>
            ))}
          </div>

          <div>
            <h4 style={{ color: '#fff', fontWeight: 700, marginBottom: 16, fontSize: 14 }}>🚆 Ж/д</h4>
            {groups.rail.map((p) => (
              <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" style={{ display: 'block', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: 13, marginBottom: 10 }}>{p.name}</a>
            ))}
            <h4 style={{ color: '#fff', fontWeight: 700, marginBottom: 16, marginTop: 18, fontSize: 14 }}>🛳️ Круизы</h4>
            {groups.cruises.map((p) => (
              <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" style={{ display: 'block', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: 13, marginBottom: 10 }}>{p.name}</a>
            ))}
            <h4 style={{ color: '#fff', fontWeight: 700, marginBottom: 16, marginTop: 18, fontSize: 14 }}>🚗 Авто / транспорт</h4>
            {groups.cars.map((p) => (
              <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" style={{ display: 'block', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: 13, marginBottom: 10 }}>{p.name}</a>
            ))}
          </div>

          <div>
            <h4 style={{ color: '#fff', fontWeight: 700, marginBottom: 16, fontSize: 14 }}>🌴 Туры</h4>
            {groups.tours.map((p) => (
              <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" style={{ display: 'block', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: 13, marginBottom: 10 }}>{p.name}</a>
            ))}
            <h4 style={{ color: '#fff', fontWeight: 700, marginBottom: 16, marginTop: 18, fontSize: 14 }}>🧳 Сервисы</h4>
            {groups.services.map((p) => (
              <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" style={{ display: 'block', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: 13, marginBottom: 10 }}>{p.name}</a>
            ))}
          </div>
        </div>

        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.06)',
            paddingTop: 24,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 12,
          }}
        >
          <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: 13 }}>© 2026 TravelDeal. Все права защищены.</div>
          <div style={{ display: 'flex', gap: 16 }}>
            {['Политика конфиденциальности', 'Условия использования', 'Cookie'].map((item) => (
              <a key={item} href="#" style={{ color: 'rgba(255,255,255,0.3)', textDecoration: 'none', fontSize: 12 }}>
                {item}
              </a>
            ))}
          </div>
          <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: 12 }}>Живой каталог направлений 2026–2027 • build 07-07-v3</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
