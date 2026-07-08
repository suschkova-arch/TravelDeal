import { trainRoutes } from '../data/travelData';

const RailwaySection = () => (
  <section id="railway" style={{ padding: '80px 24px', background: 'rgba(13,18,38,1)' }}>
    <div style={{ maxWidth: 1000, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'rgba(34,197,94,0.14)',
            border: '1px solid rgba(34,197,94,0.3)',
            borderRadius: 100,
            padding: '6px 16px',
            marginBottom: 16,
          }}
        >
          <span style={{ color: '#4ade80', fontSize: 13, fontWeight: 600 }}>🚆 Ж/д как альтернатива самолёту</span>
        </div>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, color: '#fff', marginBottom: 12 }}>
          Поезда по России и ближним маршрутам
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16, maxWidth: 640, margin: '0 auto' }}>
          Для внутренних поездок добавлен отдельный сценарий монетизации через Туту и Яндекс Путешествия — удобно там, где поезд выгоднее или стабильнее рейса.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {trainRoutes.map((route) => {
          const discount = Math.round((1 - route.price / route.oldPrice) * 100);
          return (
            <div
              key={route.id}
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 18,
                padding: '20px 22px',
              }}
            >
              <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 160 }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'linear-gradient(135deg, rgba(34,197,94,0.16), rgba(20,184,166,0.16))',
                      border: '1px solid rgba(34,197,94,0.3)',
                      fontSize: 22,
                    }}
                  >
                    🚆
                  </div>
                  <div>
                    <div style={{ color: '#fff', fontWeight: 700, fontSize: 14 }}>{route.operator}</div>
                    <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: 12 }}>{route.className}</div>
                  </div>
                </div>

                <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 12, minWidth: 240 }}>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ color: '#fff', fontSize: 22, fontWeight: 700 }}>{route.departTime}</div>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12 }}>{route.stationFrom}</div>
                  </div>
                  <div style={{ flex: 1, textAlign: 'center' }}>
                    <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11, marginBottom: 4 }}>{route.duration}</div>
                    <div style={{ height: 1, background: 'linear-gradient(to right, transparent, rgba(34,197,94,0.7), transparent)', position: 'relative' }}>
                      <div style={{ position: 'absolute', right: -6, top: -7, fontSize: 12 }}>🚆</div>
                    </div>
                    <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11, marginTop: 4 }}>без аэропорта и досмотра</div>
                  </div>
                  <div>
                    <div style={{ color: '#fff', fontSize: 22, fontWeight: 700 }}>{route.arriveTime}</div>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12 }}>{route.stationTo}</div>
                  </div>
                </div>

                <div style={{ textAlign: 'right', marginLeft: 'auto' }}>
                  <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 4 }}>
                    <span
                      style={{
                        background: '#16a34a',
                        color: '#fff',
                        borderRadius: 6,
                        padding: '2px 8px',
                        fontSize: 11,
                        fontWeight: 700,
                      }}
                    >
                      -{discount}%
                    </span>
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, textDecoration: 'line-through' }}>
                    {route.oldPrice.toLocaleString()}₽
                  </div>
                  <div
                    style={{
                      fontSize: 24,
                      fontWeight: 800,
                      background: 'linear-gradient(135deg, #34d399, #22c55e)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {route.price.toLocaleString()}₽
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 14, flexWrap: 'wrap', marginTop: 16, alignItems: 'center' }}>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13 }}>
                  📅 {route.date} • Партнёр: <strong style={{ color: '#fff' }}>{route.partner}</strong>
                </div>
                <a
                  href={route.partnerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '11px 20px',
                    background: 'linear-gradient(135deg, #22c55e, #14b8a6)',
                    borderRadius: 12,
                    color: '#fff',
                    textDecoration: 'none',
                    fontWeight: 700,
                    fontSize: 14,
                    boxShadow: '0 4px 18px rgba(34,197,94,0.28)',
                  }}
                >
                  Открыть поезд на {route.partner}
                </a>
              </div>
            </div>
          );
        })}
      </div>

      <div
        style={{
          marginTop: 28,
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 18,
          padding: 22,
          color: 'rgba(255,255,255,0.7)',
          fontSize: 14,
          lineHeight: 1.7,
        }}
      >
        <strong style={{ color: '#fff' }}>Что ещё добавить для монетизации ж/д-направления:</strong> Туту уже закрывает поезда, но дополнительно хорошо работают Яндекс Путешествия для отелей рядом с вокзалами, Sutochno и Avito Путешествия для квартир, а также Localrent для самостоятельных авто-маршрутов после прибытия.
      </div>
    </div>
  </section>
);

export default RailwaySection;
