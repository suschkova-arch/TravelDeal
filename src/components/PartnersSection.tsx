import { partners, type Partner } from '../data/travelData';

const CATEGORIES = [
  { id: 'air', title: 'Авиабилеты', emoji: '✈️', desc: 'Сравниваем цены 100+ авиакомпаний и агентств', color: '#ff6d00' },
  { id: 'train', title: 'Ж/Д билеты', emoji: '🚆', desc: 'Поезда по России и Европе — без наценок', color: '#00acc1' },
  { id: 'hotels', title: 'Отели', emoji: '🏨', desc: 'Сравнение систем бронирования, лучшая цена', color: '#00b4d8' },
  { id: 'tours', title: 'Туры и экскурсии', emoji: '🏖️', desc: 'Пакетные туры, авторские маршруты, экскурсии', color: '#ffa000' },
  { id: 'water', title: 'Круизы, яхты, авто', emoji: '⛵', desc: 'Вода, лодки, прокат машин и байков', color: '#1976d2' },
  { id: 'housing', title: 'Жильё посуточно', emoji: '🏠', desc: 'Квартиры и дома от собственников', color: '#26a69a' },
];

const categoryMatches = (cat: string, categoryId: string): boolean => {
  const c = cat.toLowerCase();
  if (categoryId === 'air') return c.includes('авиа');
  if (categoryId === 'train') return c.includes('ж/д');
  if (categoryId === 'hotels') return c === 'отели' || c === 'всё включено';
  if (categoryId === 'tours')
    return (
      c.includes('тур') ||
      c.includes('экскурс') ||
      c.includes('здоровь') ||
      c.includes('комфорт') ||
      c.includes('жиль')
    );
  if (categoryId === 'water') return c.includes('круиз') || c.includes('яхт') || c.includes('авто') || c.includes('байк');
  return false;
};

const PartnersSection = () => {
  const grouped = CATEGORIES.map((cat) => ({
    ...cat,
    items: partners.filter((p: Partner) => categoryMatches(p.category, cat.id)),
  })).filter((g) => g.items.length > 0);

  return (
    <section id="partners" style={{ padding: '80px 24px', background: 'rgba(10,15,30,1)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
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
            <span style={{ color: '#a78bfa', fontSize: 13, fontWeight: 600 }}>🤝 Наши партнёры</span>
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, color: '#fff', marginBottom: 12 }}>
            Все перевозчики и сервисы — в одном месте
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16, maxWidth: 600, margin: '0 auto' }}>
            Авиа, Ж/Д, отели, туры, круизы, авто — выберите, что нужно, и переходите на сайт партнёра с лучшей ценой
          </p>
        </div>

        {grouped.map((group) => (
          <div key={group.id} style={{ marginBottom: 48 }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                marginBottom: 20,
                paddingBottom: 12,
                borderBottom: `2px solid ${group.color}33`,
              }}
            >
              <div
                style={{
                  fontSize: 28,
                  background: `${group.color}22`,
                  border: `1px solid ${group.color}44`,
                  borderRadius: 12,
                  padding: '6px 14px',
                }}
              >
            {group.emoji}
              </div>
              <div>
                <div style={{ color: '#fff', fontSize: 22, fontWeight: 800 }}>{group.title}</div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13 }}>{group.desc}</div>
              </div>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: 16,
              }}
            >
              {group.items.map((p) => (
                <div
                  key={p.id}
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 16,
                    padding: 20,
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 15px 30px rgba(0,0,0,0.3)';
                    (e.currentTarget as HTMLElement).style.borderColor = `${p.color}55`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                    (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        background: `${p.color}22`,
                        border: `1px solid ${p.color}44`,
                        borderRadius: 12,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 22,
                      }}
                    >
                      {p.logo}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ color: '#fff', fontWeight: 700, fontSize: 15 }}>{p.name}</div>
                    </div>
                    <div
                      style={{
                        background: 'linear-gradient(135deg, #f97316, #ef4444)',
                        borderRadius: 8,
                        padding: '3px 8px',
                        color: '#fff',
                        fontSize: 11,
                        fontWeight: 700,
                        flexShrink: 0,
                      }}
                    >
                      {p.discount}
                    </div>
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 12, lineHeight: 1.5, marginBottom: 12 }}>
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
                      gap: 6,
                      padding: '9px',
                      background: `${p.color}22`,
                      border: `1px solid ${p.color}44`,
                      borderRadius: 10,
                      color: p.color,
                      textDecoration: 'none',
                      fontWeight: 700,
                      fontSize: 12,
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = `${p.color}33`)}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = `${p.color}22`)}
                  >
                    Перейти →
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
          <h3 style={{ color: '#fff', fontSize: 24, fontWeight: 700, marginBottom: 12 }}>
            Хотите стать партнёром?
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 15, marginBottom: 24 }}>
            Разместите свои предложения на TravelDeal и получите доступ к 2.4 млн путешественников
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
};

export default PartnersSection;
