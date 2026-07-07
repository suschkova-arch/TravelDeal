import { useState } from 'react';

interface Cruise {
  id: number;
  name: string;
  route: string;
  days: number;
  price: number;
  oldPrice: number;
  shipClass: string;
  departDate: string;
  highlights: string[];
  url: string;
}

const CRUISES: Cruise[] = [
  {
    id: 1,
    name: 'Волга-матушка: Москва — Астрахань',
    route: 'Москва → Углич → Ярославль → Кострома → Нижний Новгород → Казань → Самара → Саратов → Волгоград → Астрахань',
    days: 14,
    price: 78900,
    oldPrice: 112000,
    shipClass: '4★ теплоход',
    departDate: '10 авг 2026',
    highlights: ['10 городов', 'Казанский кремль', 'Волгоград-Мамаев курган', 'Астраханский кремль'],
    url: 'https://kruiz-online.tpk.lu/ctXuG3FL',
  },
  {
    id: 2,
    name: 'Золотое кольцо (короткий)',
    route: 'Москва → Углич → Мышкин → Кострома → Ярославль → Москва',
    days: 5,
    price: 32400,
    oldPrice: 45000,
    shipClass: '3★ теплоход',
    departDate: '5 июл 2026',
    highlights: ['5 городов', 'Ипатьевский монастырь', 'Музей мыши в Мышкине'],
    url: 'https://kruiz-online.tpk.lu/ctXuG3FL',
  },
  {
    id: 3,
    name: 'Москва-река: короткий круиз',
    route: 'Москва (Киевский вокзал) → Москва-Сити → парк Горького → Воробьёвы горы → Москва',
    days: 1,
    price: 2900,
    oldPrice: 4200,
    shipClass: 'Прогулочный теплоход',
    departDate: 'Ежедневно',
    highlights: ['3 часа', 'Виды на Москва-Сити', 'Стадион Лужники', 'МГУ'],
    url: 'https://kruiz-online.tpk.lu/ctXuG3FL',
  },
  {
    id: 4,
    name: 'Казань — Самара — Казань',
    route: 'Казань → Самара → Ульяновск → Чебоксары → Казань',
    days: 6,
    price: 41200,
    oldPrice: 58000,
    shipClass: '4★ теплоход',
    departDate: '20 июл 2026',
    highlights: ['4 города', 'Дом-музей Ленина в Ульяновске', 'Кремль в Чебоксарах'],
    url: 'https://kruiz-online.tpk.lu/ctXuG3FL',
  },
  {
    id: 5,
    name: 'Белое море: Архангельск — Соловки',
    route: 'Архангельск → Северодвинск → Соловецкие острова → Архангельск',
    days: 5,
    price: 48600,
    oldPrice: 65000,
    shipClass: '4★ экспедиционный',
    departDate: '15 июл 2026',
    highlights: ['Соловецкий монастырь', 'Киты Белушьего полуострова'],
    url: 'https://kruiz-online.tpk.lu/ctXuG3FL',
  },
  {
    id: 6,
    name: 'Москва — Санкт-Петербург (на теплоходе)',
    route: 'Москва → Углич → Горицы → Кижи → Валаам → Санкт-Петербург',
    days: 8,
    price: 64500,
    oldPrice: 89000,
    shipClass: '4★ премиум',
    departDate: '1 авг 2026',
    highlights: ['Остров Кижи (UNESCO)', 'Валаамский монастырь', 'Санкт-Петербург'],
    url: 'https://kruiz-online.tpk.lu/ctXuG3FL',
  },
];

const CruisesSection = () => {
  const [tab, setTab] = useState<'all' | 'volga' | 'moscow'>('all');

  const filtered = CRUISES.filter((c) => {
    if (tab === 'all') return true;
    if (tab === 'volga') return c.route.includes('Казань') || c.route.includes('Астрахань') || c.route.includes('Самар') || c.route.includes('Саратов') || c.route.includes('Волгоград');
    if (tab === 'moscow') return c.route.includes('Москва') && !c.route.includes('Санкт-Петербург');
    return true;
  });

  return (
    <section
      id="cruises"
      style={{ padding: '80px 24px', background: 'rgba(10,15,30,1)' }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'rgba(2,119,189,0.15)',
              border: '1px solid rgba(2,119,189,0.3)',
              borderRadius: 100,
              padding: '6px 16px',
              marginBottom: 16,
            }}
          >
            <span style={{ color: '#4fc3f7', fontSize: 13, fontWeight: 600 }}>🚢 Речные круизы по России</span>
          </div>
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 800,
              color: '#fff',
              marginBottom: 12,
            }}
          >
            Круизы по Волге и Москве-реке
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 15, maxWidth: 600, margin: '0 auto' }}>
            Теплоходные круизы от 1 дня до 2 недель — от коротких прогулок по Москве-реке до полноценных путешествий
            от истока до устья Волги.
          </p>
        </div>

        {/* Табы */}
        <div
          style={{
            display: 'flex',
            gap: 8,
            justifyContent: 'center',
            marginBottom: 24,
            flexWrap: 'wrap',
          }}
        >
          {[
            { id: 'all', label: 'Все круизы' },
            { id: 'volga', label: 'По Волге' },
            { id: 'moscow', label: 'По Москве-реке' },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id as 'all' | 'volga' | 'moscow')}
              style={{
                padding: '10px 20px',
                borderRadius: 100,
                border: `1px solid ${tab === t.id ? '#4fc3f7' : 'rgba(255,255,255,0.15)'}`,
                background: tab === t.id ? 'rgba(2,119,189,0.25)' : 'transparent',
                color: tab === t.id ? '#4fc3f7' : 'rgba(255,255,255,0.6)',
                cursor: 'pointer',
                fontWeight: tab === t.id ? 700 : 400,
                fontSize: 13,
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Список круизов */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {filtered.map((c) => {
            const discount = Math.round((1 - c.price / c.oldPrice) * 100);
            return (
              <div
                key={c.id}
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 16,
                  overflow: 'hidden',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(2,119,189,0.5)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 10px 40px rgba(2,119,189,0.2)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                }}
              >
                <div
                  style={{
                    padding: 24,
                    background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #4fc3f7 100%)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      right: 20,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      fontSize: 140,
                      opacity: 0.25,
                    }}
                  >
                    🚢
                  </div>
                  <div
                    style={{
                      display: 'inline-block',
                      background: 'rgba(239,68,68,0.9)',
                      borderRadius: 8,
                      padding: '4px 10px',
                      color: '#fff',
                      fontSize: 12,
                      fontWeight: 700,
                      marginBottom: 12,
                    }}
                  >
                    -{discount}%
                  </div>
                  <h3
                    style={{
                      color: '#fff',
                      fontSize: 22,
                      fontWeight: 800,
                      marginBottom: 8,
                      maxWidth: '80%',
                      textShadow: '0 2px 10px rgba(0,0,0,0.4)',
                    }}
                  >
                    {c.name}
                  </h3>
                  <div
                    style={{
                      color: 'rgba(255,255,255,0.85)',
                      fontSize: 14,
                      maxWidth: '80%',
                    }}
                  >
                    🗓 {c.days} {c.days === 1 ? 'день' : c.days < 5 ? 'дня' : 'дней'} · 🚢 {c.shipClass} · 📅 {c.departDate}
                  </div>
                </div>

                <div style={{ padding: 24 }}>
                  <div style={{ marginBottom: 16 }}>
                    <div
                      style={{
                        color: 'rgba(255,255,255,0.5)',
                        fontSize: 11,
                        textTransform: 'uppercase',
                        letterSpacing: 1,
                        marginBottom: 8,
                      }}
                    >
                      Маршрут
                    </div>
                    <div
                      style={{
                        color: 'rgba(255,255,255,0.85)',
                        fontSize: 14,
                        lineHeight: 1.6,
                      }}
                    >
                      {c.route}
                    </div>
                  </div>

                  <div style={{ marginBottom: 16 }}>
                    <div
                      style={{
                        color: 'rgba(255,255,255,0.5)',
                        fontSize: 11,
                        textTransform: 'uppercase',
                        letterSpacing: 1,
                        marginBottom: 8,
                      }}
                    >
                      Что увидите
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                      {c.highlights.map((h) => (
                        <span
                          key={h}
                          style={{
                            background: 'rgba(79,195,247,0.15)',
                            border: '1px solid rgba(79,195,247,0.3)',
                            borderRadius: 100,
                            padding: '4px 12px',
                            color: '#4fc3f7',
                            fontSize: 12,
                            fontWeight: 500,
                          }}
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: 16,
                    }}
                  >
                    <div>
                      <div
                        style={{
                          color: 'rgba(255,255,255,0.4)',
                          fontSize: 13,
                          textDecoration: 'line-through',
                        }}
                      >
                        от {c.oldPrice.toLocaleString()}₽
                      </div>
                      <div
                        style={{
                          fontSize: 26,
                          fontWeight: 800,
                          background: 'linear-gradient(135deg, #4fc3f7, #0288d1)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                        }}
                      >
                        от {c.price.toLocaleString()}₽
                      </div>
                      <div
                        style={{
                          color: 'rgba(255,255,255,0.4)',
                          fontSize: 11,
                        }}
                      >
                        за человека
                      </div>
                    </div>
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: '14px 32px',
                        background: 'linear-gradient(135deg, #4fc3f7, #0288d1)',
                        borderRadius: 12,
                        color: '#fff',
                        textDecoration: 'none',
                        fontWeight: 700,
                        fontSize: 15,
                        boxShadow: '0 4px 15px rgba(2,119,189,0.4)',
                      }}
                    >
                      Забронировать круиз →
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 12, marginTop: 20, textAlign: 'center' }}>
          * Цены на одного человека в двухместной каюте. Бронирование через партнёра Круиз-Онлайн с вашей скидкой.
        </p>
      </div>
    </section>
  );
};

export default CruisesSection;
