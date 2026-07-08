import { partners } from '../data/travelData';

const steps = [
  { icon: '🔍', title: 'Ищете направление', desc: 'Выбираете страну, город, отель или маршрут прямо на TravelDeal' },
  { icon: '📊', title: 'Сравниваем цены', desc: 'Показываем системы бронирования, авиа, ж/д, круизы и сервисы в одном месте' },
  { icon: '💸', title: 'Переходите по лучшей ссылке', desc: 'Открываете нужную категорию партнёра и бронируете уже по монетизируемой ссылке' },
];

const groupOrder = [
  'Авиабилеты',
  'Отели',
  'Ж/д',
  'Туры',
  'Круизы',
  'Авто',
  'Россия',
  'Экспедиции',
  'Апартаменты',
  'Страхование',
  'Оздоровление',
  'Премиум',
  'Сервис',
  'Пакеты',
  'Санатории',
  'Путешествия',
];

const groupedPartners = groupOrder
  .map((group) => ({
    group,
    items: partners.filter((p) => p.category === group),
  }))
  .filter((section) => section.items.length > 0);

const groupTitles: Record<string, string> = {
  'Авиабилеты': '✈️ Перелёты и авиабилеты',
  'Отели': '🏨 Отели и размещение',
  'Ж/д': '🚆 Ж/д и наземные перевозки',
  'Туры': '🌴 Туроператоры и пакетные туры',
  'Круизы': '🛳️ Круизы и речные маршруты',
  'Авто': '🚗 Аренда авто и road-trip',
  'Россия': '🧭 Россия и внутренний туризм',
  'Экспедиции': '🏔️ Экспедиции и маршруты по природе',
  'Апартаменты': '🛏️ Квартиры и посуточная аренда',
  'Страхование': '🛡️ Страхование',
  'Оздоровление': '♨️ Оздоровительный отдых',
  'Премиум': '🥂 Премиальные сервисы',
  'Сервис': '🧳 Полезные сервисы в поездке',
  'Пакеты': '🌍 Дополнительные пакетные предложения',
  'Санатории': '🏥 Санатории и путёвки',
  'Путешествия': '🎒 Дополнительные travel-продукты',
};

const PartnersSection = () => (
  <section id="partners" style={{ padding: '80px 24px', background: 'rgba(10,15,30,1)' }}>
    <div style={{ maxWidth: 1180, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 60 }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'rgba(102,126,234,0.15)',
            border: '1px solid rgba(102,126,234,0.3)',
            borderRadius: 100,
            padding: '6px 16px',
            marginBottom: 16,
          }}
        >
          <span style={{ color: '#a78bfa', fontSize: 13, fontWeight: 600 }}>🤝 Партнёрские программы Travelpayouts</span>
        </div>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, color: '#fff', marginBottom: 12 }}>
          Партнёры по категориям
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16, maxWidth: 680, margin: '0 auto' }}>
          Разделили партнёрские ссылки по смыслу: отдельно отели, отдельно перелёты, ж/д, такси/авто, круизы, туры, страхование и сервисы в поездке.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 24,
          marginBottom: 60,
        }}
      >
        {steps.map((s, i) => (
          <div
            key={i}
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 20,
              padding: 28,
              textAlign: 'center',
              position: 'relative',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: -14,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 28,
                height: 28,
                background: 'linear-gradient(135deg, #667eea, #764ba2)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontWeight: 800,
                fontSize: 13,
              }}
            >
              {i + 1}
            </div>
            <div style={{ fontSize: 40, marginBottom: 12, marginTop: 8 }}>{s.icon}</div>
            <div style={{ color: '#fff', fontWeight: 700, fontSize: 16, marginBottom: 8 }}>{s.title}</div>
            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, lineHeight: 1.5 }}>{s.desc}</div>
          </div>
        ))}
      </div>

      {groupedPartners.map((section) => (
        <div key={section.group} style={{ marginBottom: 36 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
            <h3 style={{ color: '#fff', fontSize: 22, fontWeight: 800 }}>{groupTitles[section.group] ?? section.group}</h3>
            <div style={{ height: 1, flex: 1, background: 'linear-gradient(to right, rgba(102,126,234,0.5), transparent)' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 18 }}>
            {section.items.map((p) => (
              <div
                key={p.id}
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 20,
                  padding: 22,
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
                  (e.currentTarget as HTMLElement).style.borderColor = `${p.color}44`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      background: `${p.color}22`,
                      border: `1px solid ${p.color}44`,
                      borderRadius: 14,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 26,
                    }}
                  >
                    {p.logo}
                  </div>
                  <div>
                    <div style={{ color: '#fff', fontWeight: 700, fontSize: 16 }}>{p.name}</div>
                    <div
                      style={{
                        background: `${p.color}22`,
                        border: `1px solid ${p.color}44`,
                        borderRadius: 100,
                        padding: '2px 10px',
                        color: p.color,
                        fontSize: 11,
                        fontWeight: 600,
                        display: 'inline-block',
                      }}
                    >
                      {p.category}
                    </div>
                  </div>
                  <div style={{ marginLeft: 'auto' }}>
                    <div
                      style={{
                        background: 'linear-gradient(135deg, #f97316, #ef4444)',
                        borderRadius: 10,
                        padding: '4px 12px',
                        color: '#fff',
                        fontSize: 13,
                        fontWeight: 700,
                      }}
                    >
                      {p.discount}
                    </div>
                  </div>
                </div>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, lineHeight: 1.6, marginBottom: 16 }}>{p.description}</p>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                    padding: '10px',
                    background: `${p.color}22`,
                    border: `1px solid ${p.color}44`,
                    borderRadius: 10,
                    color: p.color,
                    textDecoration: 'none',
                    fontWeight: 700,
                    fontSize: 13,
                  }}
                >
                  Перейти в раздел {p.name} →
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div
        style={{
          marginTop: 60,
          background: 'linear-gradient(135deg, rgba(102,126,234,0.15), rgba(167,139,250,0.15))',
          border: '1px solid rgba(102,126,234,0.3)',
          borderRadius: 20,
          padding: '40px',
          textAlign: 'center',
        }}
      >
        <h3 style={{ color: '#fff', fontSize: 24, fontWeight: 700, marginBottom: 12 }}>Как использовать эти разделы</h3>
        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 15, marginBottom: 24, maxWidth: 760, marginInline: 'auto' }}>
          Если пользователь ищет перелёт — ведём в авиа. Если поездку по России — показываем ж/д и внутренний туризм. Если нужна машина — открываем авто, если речной отдых — круизы. Так структура становится понятной и лучше конвертирует.
        </p>
        <a
          href="mailto:partners@traveldeal.ru"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '14px 32px',
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            borderRadius: 12,
            color: '#fff',
            textDecoration: 'none',
            fontWeight: 700,
            fontSize: 15,
            boxShadow: '0 8px 25px rgba(102,126,234,0.4)',
          }}
        >
          📧 partners@traveldeal.ru
        </a>
      </div>
    </div>
  </section>
);

export default PartnersSection;
