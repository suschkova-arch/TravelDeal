const stats = [
  { icon: '🏨', num: '2 000 000+', label: 'Отелей по всему миру', sub: 'от Hotellook и партнёров' },
  { icon: '✈️', num: '1000+', label: 'Авиакомпаний', sub: 'Aviasales и агрегаторы' },
  { icon: '💰', num: 'до 60%', label: 'Экономия', sub: 'по сравнению с ценами сайтов' },
  { icon: '🌍', num: '220+', label: 'Стран', sub: 'доступны для бронирования' },
  { icon: '🤝', num: '23', label: 'Партнёра', sub: 'надёжные сервисы бронирования' },
  { icon: '⭐', num: '4.9', label: 'Рейтинг', sub: 'на основе 14 000+ отзывов' },
];

export default function StatsSection() {
  return (
    <section style={{ padding: '80px 24px', background: 'rgba(13,18,40,1)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#fff', marginBottom: 12 }}>
            TravelDeal в цифрах
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16 }}>
            Работаем для 2.4 млн путешественников по всему миру
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 20 }}>
          {stats.map(s => (
            <div key={s.label} style={{
              background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 20, padding: '28px 24px', textAlign: 'center',
              transition: 'all 0.3s',
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(102,126,234,0.3)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
              }}
            >
              <div style={{ fontSize: 40, marginBottom: 12 }}>{s.icon}</div>
              <div style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 900, background: 'linear-gradient(135deg, #667eea, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: 6 }}>{s.num}</div>
              <div style={{ color: '#fff', fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{s.label}</div>
              <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12 }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
