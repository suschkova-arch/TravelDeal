const cruises = [
  {
    id: 1,
    icon: '🛳️',
    name: 'Волга-матушка: Москва → Астрахань',
    meta: '14 дней · 4★ теплоход',
    oldPrice: 'от 102 570₽',
    price: 'от 78 900₽',
    url: 'https://kruiz-online.tpk.lu/ctXuG3FL',
  },
  {
    id: 2,
    icon: '🛥️',
    name: 'Золотое кольцо (короткий)',
    meta: '5 дней · 3★ теплоход',
    oldPrice: 'от 42 120₽',
    price: 'от 32 400₽',
    url: 'https://kruiz-online.tpk.lu/ctXuG3FL',
  },
  {
    id: 3,
    icon: '🚢',
    name: 'Москва-река: короткий круиз',
    meta: '1 день · Прогулочный теплоход',
    oldPrice: 'от 3 770₽',
    price: 'от 2 900₽',
    url: 'https://kruiz-online.tpk.lu/ctXuG3FL',
  },
  {
    id: 4,
    icon: '🛳️',
    name: 'Казань — Самара — Казань',
    meta: '6 дней · 4★ теплоход',
    oldPrice: 'от 53 560₽',
    price: 'от 41 200₽',
    url: 'https://kruiz-online.tpk.lu/ctXuG3FL',
  },
  {
    id: 5,
    icon: '⚓',
    name: 'Белое море: Архангельск — Соловки',
    meta: '5 дней · 4★ экспедиционный',
    oldPrice: 'от 63 180₽',
    price: 'от 48 600₽',
    url: 'https://kruiz-online.tpk.lu/ctXuG3FL',
  },
  {
    id: 6,
    icon: '🛥️',
    name: 'Москва — Санкт-Петербург (на теплоходе)',
    meta: '8 дней · 4★ премиум',
    oldPrice: 'от 83 850₽',
    price: 'от 64 500₽',
    url: 'https://kruiz-online.tpk.lu/ctXuG3FL',
  },
];

const CruisesSection = () => (
  <section id="cruises" style={{ padding: '90px 24px', background: 'rgba(10,15,30,1)' }}>
    <div style={{ maxWidth: 1320, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 36 }}>
        <h2
          style={{
            fontSize: 'clamp(34px, 5vw, 64px)',
            fontWeight: 900,
            color: '#fff',
            marginBottom: 10,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 14,
            flexWrap: 'wrap',
          }}
        >
          <span>🛳️</span>
          <span>Круизы по России</span>
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.62)', fontSize: 16 }}>
          Волга-матушка, Москва-река, Белое море. Теплоходные туры от 1 дня
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: 26,
        }}
      >
        {cruises.map((cruise) => (
          <div
            key={cruise.id}
            style={{
              borderRadius: 26,
              padding: 28,
              background:
                'linear-gradient(135deg, rgba(69,109,199,0.92) 0%, rgba(50,78,164,0.92) 52%, rgba(63,195,255,0.92) 100%)',
              border: '1px solid rgba(255,255,255,0.14)',
              boxShadow: '0 20px 50px rgba(0,0,0,0.28)',
            }}
          >
            <div style={{ display: 'flex', gap: 18, alignItems: 'flex-start', marginBottom: 22 }}>
              <div style={{ fontSize: 58, lineHeight: 1 }}>{cruise.icon}</div>
              <div>
                <div style={{ color: '#fff', fontSize: 20, fontWeight: 800, lineHeight: 1.35, marginBottom: 6 }}>{cruise.name}</div>
                <div style={{ color: 'rgba(255,255,255,0.82)', fontSize: 14 }}>{cruise.meta}</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'end', justifyContent: 'space-between', gap: 18, flexWrap: 'wrap' }}>
              <div>
                <div style={{ color: 'rgba(255,255,255,0.72)', fontSize: 13, textDecoration: 'line-through', marginBottom: 8 }}>
                  {cruise.oldPrice}
                </div>
                <div
                  style={{
                    fontSize: 'clamp(28px, 4vw, 46px)',
                    fontWeight: 900,
                    background: 'linear-gradient(135deg, #c4b5fd, #a78bfa)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    lineHeight: 1,
                  }}
                >
                  {cruise.price}
                </div>
              </div>

              <a
                href={cruise.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: 230,
                  padding: '18px 28px',
                  borderRadius: 20,
                  color: '#fff',
                  textDecoration: 'none',
                  fontWeight: 800,
                  fontSize: 18,
                  background: 'linear-gradient(135deg, rgba(43,195,255,0.94), rgba(0,132,255,0.95))',
                  boxShadow: '0 12px 28px rgba(0,132,255,0.28)',
                }}
              >
                Забронировать →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CruisesSection;
