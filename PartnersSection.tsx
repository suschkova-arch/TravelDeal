import { partners } from '../data/travelData';

const HOW_IT_WORKS = [
  { icon: '🔍', title: 'Ищете тур', desc: 'Выбираете направление и даты на TravelDeal' },
  { icon: '📊', title: 'Сравниваем цены', desc: 'Агрегируем предложения от 23+ партнёров' },
  { icon: '💸', title: 'Экономите', desc: 'Переходите на сайт партнёра и бронируете' },
];

export default function PartnersSection() {
  return (
    <section id="partners" style={{ padding: '80px 24px', background: 'rgba(10,15,30,1)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(102,126,234,0.15)', border: '1px solid rgba(102,126,234,0.3)', borderRadius: 100, padding: '6px 16px', marginBottom: 16 }}>
            <span style={{ color: '#a78bfa', fontSize: 13, fontWeight: 600 }}>🤝 Наши партнёры</span>
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, color: '#fff', marginBottom: 12 }}>
            Работаем с лучшими
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16, maxWidth: 500, margin: '0 auto' }}>
            Прямые ссылки на сайты партнёров без скрытых наценок
          </p>
        </div>

        {/* How it works */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24, marginBottom: 60 }}>
          {HOW_IT_WORKS.map((step, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: '28px', textAlign: 'center', position: 'relative' }}>
              <div style={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', width: 28, height: 28, background: 'linear-gradient(135deg, #667eea, #764ba2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: 13 }}>{i + 1}</div>
              <div style={{ fontSize: 40, marginBottom: 12, marginTop: 8 }}>{step.icon}</div>
              <div style={{ color: '#fff', fontWeight: 700, fontSize: 16, marginBottom: 8 }}>{step.title}</div>
              <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, lineHeight: 1.5 }}>{step.desc}</div>
            </div>
          ))}
        </div>

        {/* Partners grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
          {partners.map(p => (
            <div key={p.id} style={{
              background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 20, padding: '24px', transition: 'all 0.3s',
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
                (e.currentTarget as HTMLElement).style.borderColor = `${p.color}44`;
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)';
              }}
            >
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
                <div style={{ width: 52, height: 52, background: `${p.color}22`, border: `1px solid ${p.color}44`, borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26 }}>{p.logo}</div>
                <div>
                  <div style={{ color: '#fff', fontWeight: 700, fontSize: 16 }}>{p.name}</div>
                  <div style={{ background: `${p.color}22`, border: `1px solid ${p.color}44`, borderRadius: 100, padding: '2px 10px', color: p.color, fontSize: 11, fontWeight: 600, display: 'inline-block' }}>{p.category}</div>
                </div>
                <div style={{ marginLeft: 'auto' }}>
                  <div style={{ background: 'linear-gradient(135deg, #f97316, #ef4444)', borderRadius: 10, padding: '4px 12px', color: '#fff', fontSize: 13, fontWeight: 700 }}>{p.discount}</div>
                </div>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, lineHeight: 1.6, marginBottom: 16 }}>{p.description}</p>
              <a href={p.url} target="_blank" rel="noopener noreferrer" style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                padding: '10px', background: `${p.color}22`, border: `1px solid ${p.color}44`,
                borderRadius: 10, color: p.color, textDecoration: 'none', fontWeight: 700, fontSize: 13,
                transition: 'all 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.background = `${p.color}33`)}
                onMouseLeave={e => (e.currentTarget.style.background = `${p.color}22`)}
              >Перейти на {p.name} →</a>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ marginTop: 60, background: 'linear-gradient(135deg, rgba(102,126,234,0.15), rgba(167,139,250,0.15))', border: '1px solid rgba(102,126,234,0.3)', borderRadius: 20, padding: '40px', textAlign: 'center' }}>
          <h3 style={{ color: '#fff', fontSize: 24, fontWeight: 700, marginBottom: 12 }}>Хотите стать партнёром?</h3>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 15, marginBottom: 24 }}>
            Разместите свои предложения на TravelDeal и получите доступ к 2.4 млн путешественников
          </p>
          <a href="mailto:MILEDI_HR@mail.ru" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 32px',
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            borderRadius: 12, color: '#fff', textDecoration: 'none', fontWeight: 700, fontSize: 15,
            boxShadow: '0 8px 25px rgba(102,126,234,0.4)',
          }}>📧 MILEDI_HR@mail.ru</a>
        </div>
      </div>
    </section>
  );
}
