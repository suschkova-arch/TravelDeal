import { partners } from '../data/travelData';

const steps = [
  { icon: '🔍', title: 'Выбираете', desc: 'Страну, город, отель, перелёт или ж/д-маршрут' },
  { icon: '📊', title: 'Сравниваем', desc: 'Площадки по категориям: отели, авиа, ж/д, круизы, авто, туры' },
  { icon: '💸', title: 'Переходите', desc: 'Открываете нужного партнёра уже по монетизируемой ссылке' },
];

const sections = [
  {
    title: '✈️ Билеты и транспорт',
    categories: ['Авиабилеты', 'Ж/д', 'Авто', 'Прокат авто', 'Страхование', 'Премиум', 'Сервис'],
  },
  {
    title: '🏨 Отели, апартаменты и отдых по России',
    categories: ['Отели', 'Апартаменты', 'Россия', 'Оздоровление', 'Санатории'],
  },
  {
    title: '🌴 Туры, круизы и маршруты',
    categories: ['Туры', 'Пакеты', 'Экспедиции', 'Круизы', 'Яхты', 'Путешествия'],
  },
];

const PartnersSection = () => (
  <section id="partners" style={{ padding: '80px 24px', background: 'rgba(10,15,30,1)' }}>
    <div style={{ maxWidth: 1220, margin: '0 auto' }}>
      <style>{`
        .partner-grid-center {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 18px;
          justify-content: center;
        }
        @media (min-width: 1024px) {
          .partner-grid-center {
            grid-template-columns: repeat(3, minmax(280px, 340px));
            justify-content: center;
          }
        }
        .partner-card-content {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}</style>
      <div style={{ textAlign: 'center', marginBottom: 56 }}>
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
          <span style={{ color: '#a78bfa', fontSize: 13, fontWeight: 600 }}>🤝 Партнёры и монетизация</span>
        </div>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, color: '#fff', marginBottom: 12 }}>
          Всё сгруппировано по типу сервиса
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16, maxWidth: 720, margin: '0 auto' }}>
          Теперь блок партнёров не разваливается по вертикали: авиа, отели, ж/д, круизы, авто, туры и полезные сервисы собраны в компактные секции и заполняют ширину экрана.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 24,
          marginBottom: 52,
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

      {sections.map((section) => {
        const items = partners.filter((p) => section.categories.includes(p.category));
        if (items.length === 0) return null;

        return (
          <div key={section.title} style={{ marginBottom: 34 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
              <h3 style={{ color: '#fff', fontSize: 24, fontWeight: 800 }}>{section.title}</h3>
              <div style={{ height: 1, flex: 1, background: 'linear-gradient(to right, rgba(102,126,234,0.5), transparent)' }} />
            </div>

            <div className="partner-grid-center">
              {items.map((p) => (
                <div
                  key={p.id}
                  className="partner-card-content"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 20,
                    padding: 24,
                    transition: 'all 0.3s',
                    width: '100%',
                    boxSizing: 'border-box'
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
                  {/* Иконка и значок по центру */}
                  <div style={{
                    width: 64,
                    height: 64,
                    background: `${p.color}22`,
                    border: `1px solid ${p.color}44`,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 30,
                    marginBottom: 14,
                    boxShadow: `0 8px 20px ${p.color}15`
                  }}>
                    {p.logo}
                  </div>

                  <div style={{ color: '#fff', fontWeight: 800, fontSize: 19, marginBottom: 6 }}>
                    {p.name}
                  </div>

                  {/* Теги по центру */}
                  <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 14, alignItems: 'center' }}>
                    <span
                      style={{
                        background: `${p.color}18`,
                        border: `1px solid ${p.color}35`,
                        borderRadius: 100,
                        padding: '3px 12px',
                        color: p.color,
                        fontSize: 12,
                        fontWeight: 700,
                      }}
                    >
                      {p.category}
                    </span>
                    <span
                      style={{
                        background: 'linear-gradient(135deg, #f97316, #ef4444)',
                        borderRadius: 100,
                        padding: '3px 12px',
                        color: '#fff',
                        fontSize: 12,
                        fontWeight: 800,
                      }}
                    >
                      {p.discount}
                    </span>
                  </div>

                  <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 13, lineHeight: 1.6, marginBottom: 20, minHeight: 60 }}>
                    {p.description}
                  </p>

                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 8,
                      width: '100%',
                      padding: '12px',
                      background: `${p.color}22`,
                      border: `1px solid ${p.color}44`,
                      borderRadius: 12,
                      color: p.color,
                      textDecoration: 'none',
                      fontWeight: 700,
                      fontSize: 13,
                      transition: 'all 0.2s'
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.background = `${p.color}33`;
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.background = `${p.color}22`;
                    }}
                  >
                    Перейти в раздел {p.name} →
                  </a>
                </div>
              ))}
            </div>
          </div>
        );
      })}

      <div
        style={{
          marginTop: 56,
          background: 'linear-gradient(135deg, rgba(102,126,234,0.15), rgba(167,139,250,0.15))',
          border: '1px solid rgba(102,126,234,0.3)',
          borderRadius: 20,
          padding: '40px',
          textAlign: 'center',
        }}
      >
        <h3 style={{ color: '#fff', fontSize: 24, fontWeight: 700, marginBottom: 12 }}>Круизы, ж/д, отели и туры — всё рядом</h3>
        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 15, marginBottom: 24, maxWidth: 760, marginInline: 'auto' }}>
          Эта версия блока собрана компактно: карточки ложатся по 3 в ряд или столько, сколько помещается по ширине экрана. Больше не будет длинных пустых вертикальных зон между категориями.
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
