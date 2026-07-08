const cruises = [
  {
    id: 1,
    name: 'Круиз по Волге: Москва → Углич → Ярославль',
    route: 'Волга',
    duration: '4 дня / 3 ночи',
    price: 'от 28 900₽',
    oldPrice: 'от 36 500₽',
    description: 'Короткий речной маршрут для семейных и экскурсионных поездок с летней навигацией 2026.',
    image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1200&q=80&auto=format&fit=crop',
    url: 'https://kruiz-online.tpk.lu/ctXuG3FL',
  },
  {
    id: 2,
    name: 'Прогулочный круиз по Москве-реке',
    route: 'Москва-река',
    duration: '2–3 часа',
    price: 'от 2 900₽',
    oldPrice: 'от 4 200₽',
    description: 'Вечерние прогулки по Москве-реке как дополнительный городской продукт для монетизации.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80&auto=format&fit=crop',
    url: 'https://kruiz-online.tpk.lu/ctXuG3FL',
  },
  {
    id: 3,
    name: 'Большой круиз по Волге: Нижний Новгород → Казань → Самара',
    route: 'Волга',
    duration: '7 дней / 6 ночей',
    price: 'от 54 000₽',
    oldPrice: 'от 68 900₽',
    description: 'Подходит для длинного отпуска и связки с отелями/поездами по российским городам.',
    image: 'https://images.unsplash.com/photo-1493558103817-58b2924bce98?w=1200&q=80&auto=format&fit=crop',
    url: 'https://kruiz-online.tpk.lu/ctXuG3FL',
  },
];

const CruisesSection = () => (
  <section id="cruises" style={{ padding: '80px 24px', background: 'rgba(10,15,30,1)' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'rgba(14,165,233,0.14)',
            border: '1px solid rgba(14,165,233,0.3)',
            borderRadius: 100,
            padding: '6px 16px',
            marginBottom: 16,
          }}
        >
          <span style={{ color: '#38bdf8', fontSize: 13, fontWeight: 600 }}>🛳️ Круизы по Волге и Москве-реке</span>
        </div>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, color: '#fff', marginBottom: 12 }}>
          Речные маршруты как отдельное направление
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16, maxWidth: 680, margin: '0 auto' }}>
          Добавили отдельный блок под круизы: это ещё один понятный источник монетизации для российского трафика и хороший кросс-продукт рядом с отелями и ж/д.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 24 }}>
        {cruises.map((cruise) => (
          <div
            key={cruise.id}
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 20,
              overflow: 'hidden',
            }}
          >
            <div style={{ height: 210, position: 'relative' }}>
              <img src={cruise.image} alt={cruise.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,15,30,0.88), transparent 65%)' }} />
              <div style={{ position: 'absolute', top: 12, left: 12, background: 'rgba(14,165,233,0.18)', border: '1px solid rgba(14,165,233,0.35)', borderRadius: 100, padding: '4px 10px', color: '#7dd3fc', fontSize: 12, fontWeight: 700 }}>
                {cruise.route}
              </div>
            </div>
            <div style={{ padding: 20 }}>
              <h3 style={{ color: '#fff', fontSize: 20, fontWeight: 700, marginBottom: 8 }}>{cruise.name}</h3>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, marginBottom: 10 }}>{cruise.description}</p>
              <div style={{ color: '#38bdf8', fontSize: 13, fontWeight: 700, marginBottom: 12 }}>⏱ {cruise.duration}</div>
              <div style={{ display: 'flex', alignItems: 'end', justifyContent: 'space-between', marginBottom: 16 }}>
                <div>
                  <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: 12, textDecoration: 'line-through' }}>{cruise.oldPrice}</div>
                  <div style={{ fontSize: 24, fontWeight: 800, background: 'linear-gradient(135deg, #38bdf8, #60a5fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{cruise.price}</div>
                </div>
              </div>
              <a
                href={cruise.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'block',
                  textAlign: 'center',
                  textDecoration: 'none',
                  padding: '12px',
                  borderRadius: 12,
                  color: '#fff',
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, #0ea5e9, #2563eb)',
                  boxShadow: '0 8px 20px rgba(37,99,235,0.25)',
                }}
              >
                Открыть круиз →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CruisesSection;
