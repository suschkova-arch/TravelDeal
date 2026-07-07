import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <footer style={{ background: 'rgba(5,8,20,1)', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '60px 24px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Newsletter */}
        <div style={{ background: 'linear-gradient(135deg, rgba(102,126,234,0.15), rgba(167,139,250,0.1))', border: '1px solid rgba(102,126,234,0.25)', borderRadius: 20, padding: '40px', textAlign: 'center', marginBottom: 60 }}>
          <h3 style={{ color: '#fff', fontSize: 24, fontWeight: 700, marginBottom: 8 }}>✉️ Подписка на лучшие предложения</h3>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, marginBottom: 24 }}>Первыми узнавайте о горящих турах и эксклюзивных скидках</p>
          {subscribed ? (
            <div style={{ color: '#34d399', fontWeight: 700, fontSize: 16 }}>✅ Вы подписаны! Ждите лучших предложений на {email}</div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 12, maxWidth: 440, margin: '0 auto', flexWrap: 'wrap' }}>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Ваш email" required style={{ flex: 1, padding: '14px 18px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 12, color: '#fff', fontSize: 15, outline: 'none', minWidth: 200 }} />
              <button type="submit" style={{ padding: '14px 24px', background: 'linear-gradient(135deg, #667eea, #764ba2)', border: 'none', borderRadius: 12, color: '#fff', fontWeight: 700, fontSize: 15, cursor: 'pointer', boxShadow: '0 4px 15px rgba(102,126,234,0.4)' }}>Подписаться</button>
            </form>
          )}
        </div>

        {/* Links */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 40, marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{ width: 36, height: 36, background: 'linear-gradient(135deg, #667eea, #764ba2)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>✈️</div>
              <span style={{ fontSize: 20, fontWeight: 800, background: 'linear-gradient(135deg, #667eea, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>TravelDeal</span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, lineHeight: 1.6, marginBottom: 16 }}>Агрегатор путешествий — находим лучшие цены на отели и авиабилеты</p>
            <div style={{ display: 'flex', gap: 10 }}>
              {['📘', '📸', '💬', '🐦'].map((icon, i) => (
                <a key={i} href="#" style={{ width: 36, height: 36, background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, textDecoration: 'none', transition: 'all 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'rgba(102,126,234,0.2)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
                >{icon}</a>
              ))}
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h4 style={{ color: '#fff', fontWeight: 700, marginBottom: 16, fontSize: 14 }}>Направления</h4>
            {['Дубай', 'Бали', 'Париж', 'Токио', 'Барселона', 'Мальдивы'].map(city => (
              <a key={city} href="#destinations" style={{ display: 'block', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: 13, marginBottom: 10, transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#a78bfa')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
              >{city}</a>
            ))}
          </div>

          {/* Partners */}
          <div>
            <h4 style={{ color: '#fff', fontWeight: 700, marginBottom: 16, fontSize: 14 }}>Партнёры</h4>
            {[
              { name: 'Aviasales', url: 'https://tp.media/r?marker=547188&trs=189015&p=4114&u=https%3A%2F%2Fwww.aviasales.ru' },
              { name: 'Hotellook', url: 'https://tp.media/r?marker=547188&trs=189015&p=4114&u=https%3A%2F%2Fhotels.aviasales.ru' },
              { name: 'Ostrovok', url: 'https://ostrovok.ru' },
              { name: 'Яндекс.Путешествия', url: 'https://travel.yandex.ru' },
              { name: 'Level.Travel', url: 'https://level.travel' },
              { name: 'Туту.ру', url: 'https://tutu.ru' },
            ].map(p => (
              <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" style={{ display: 'block', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: 13, marginBottom: 10, transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#a78bfa')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
              >{p.name}</a>
            ))}
          </div>

          {/* Info */}
          <div>
            <h4 style={{ color: '#fff', fontWeight: 700, marginBottom: 16, fontSize: 14 }}>Сервис</h4>
            {['О нас', 'Как работает', 'Блог', 'Помощь', 'Контакты', 'Вакансии'].map(item => (
              <a key={item} href="#" style={{ display: 'block', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: 13, marginBottom: 10, transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#a78bfa')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
              >{item}</a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 24, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: 13 }}>© 2026 TravelDeal. Все права защищены.</div>
          <div style={{ display: 'flex', gap: 16 }}>
            {['Политика конфиденциальности', 'Условия использования', 'Cookie'].map(item => (
              <a key={item} href="#" style={{ color: 'rgba(255,255,255,0.3)', textDecoration: 'none', fontSize: 12, transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.3)')}
              >{item}</a>
            ))}
          </div>
          <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: 12 }}>Сделано с ❤️ для путешественников</div>
        </div>
      </div>
    </footer>
  );
}
