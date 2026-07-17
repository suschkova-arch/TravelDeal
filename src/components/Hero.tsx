import { useState, useEffect } from 'react';
import type { FormEvent } from 'react';

const slides = [
  { city: 'Пхукет', country: 'Таиланд', tagline: 'Тропики, пляжи и длинные зимние бронирования заранее', price: '84 200₽' },
  { city: 'Дубай', country: 'ОАЭ', tagline: 'Город золота и небоскрёбов', price: '67 900₽' },
  { city: 'Алтай', country: 'Россия', tagline: 'Горы, эко-отели и самостоятельные маршруты', price: '54 600₽' },
  { city: 'Камчатка', country: 'Россия', tagline: 'Вулканы, гейзеры и дикая природа', price: '74 000₽' },
];

const Hero = () => {
  const [slide, setSlide] = useState(0);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % slides.length), 8000);
    return () => clearInterval(t);
  }, []);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    window.open(`https://aviasales.ru/search/${encodeURIComponent(search || slides[slide].city)}`, '_blank');
  };

  return (
    <section style={{ 
      position: 'relative', 
      height: '100vh', 
      minHeight: 650, 
      overflow: 'hidden',
      background: '#0a0f1e',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {/* Эффект ночного моря и неба */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(180deg, #0a1230 0%, #132758 35%, #1e4785 65%, #2a5a9e 100%)',
        zIndex: 0
      }} />

      {/* Звезды */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1,
        backgroundImage: 'radial-gradient(1px 1px at 20% 30%, #fff, transparent), radial-gradient(1px 1px at 60% 20%, #fff, transparent), radial-gradient(1px 1px at 80% 40%, #fff, transparent), radial-gradient(1px 1px at 40% 15%, #fff, transparent)',
        opacity: 0.5
      }} />

      {/* Луна */}
      <div style={{
        position: 'absolute',
        top: '15%',
        right: '20%',
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        background: 'radial-gradient(circle at 30% 30%, #fff9e6 0%, #ffd97a 100%)',
        boxShadow: '0 0 50px 10px rgba(255, 217, 122, 0.3)',
        zIndex: 1
      }} />

      {/* Рябь на воде */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '40%',
        background: 'repeating-linear-gradient(180deg, transparent 0px, transparent 10px, rgba(255,255,255,0.03) 11px, transparent 12px)',
        zIndex: 2,
        maskImage: 'linear-gradient(to bottom, transparent, black)'
      }} />

      {/* Затемнение для читаемости текста */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at center, transparent 0%, rgba(10,15,30,0.4) 100%)',
        zIndex: 2
      }} />

      <div style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: '900px', textAlign: 'center', padding: '0 24px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(52, 211, 153, 0.1)', border: '1px solid rgba(52, 211, 153, 0.3)', borderRadius: '100px', padding: '6px 16px', marginBottom: '24px' }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981' }} />
          <span style={{ color: '#34d399', fontSize: '13px', fontWeight: 600 }}>Сезон поиска: июль 2026 → 2027</span>
        </div>

        <h1 style={{ fontSize: 'clamp(40px, 8vw, 84px)', fontWeight: 950, color: '#fff', lineHeight: 1.1, marginBottom: '8px', letterSpacing: '-1px' }}>
          Найдите идеальный тур
        </h1>
        <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>{slides[slide].city} · {slides[slide].country}</h2>
        <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
          {slides[slide].tagline}
        </p>

        <div style={{ marginBottom: '40px' }}>
          <span style={{ fontSize: '20px', color: 'rgba(255,255,255,0.5)', textDecoration: 'line-through', marginRight: '12px' }}>от 94 400₽</span>
          <span style={{ fontSize: '36px', fontWeight: 900, color: '#a78bfa' }}>от {slides[slide].price} <span style={{fontSize: '18px', fontWeight: 500}}>на двоих</span></span>
        </div>

        <form onSubmit={handleSearch} style={{ background: 'rgba(10,15,30,0.7)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '24px', padding: '24px', marginBottom: '32px' }}>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '16px' }}>
            <input 
              type="text" 
              placeholder={`Куда? Например, ${slides[slide].city}`}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ flex: '1 1 300px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '14px 20px', color: '#fff', outline: 'none' }}
            />
            <select style={{ flex: '1 1 150px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '14px 20px', color: '#fff', outline: 'none' }}>
              <option value="7">1 неделя</option>
              <option value="14">2 недели</option>
            </select>
          </div>
          <button type="submit" style={{ width: '100%', background: 'linear-gradient(135deg, #667eea, #764ba2)', border: 'none', borderRadius: '12px', padding: '16px', color: '#fff', fontWeight: 800, fontSize: '18px', cursor: 'pointer', boxShadow: '0 10px 25px rgba(102,126,234,0.3)' }}>
            🔍 Найти лучшую цену — 2 туриста · 7 дней
          </button>
        </form>

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {['🔥 Туры', '🚆 Ж/Д по России', '🏖️ Пляжный отдых', '🏔️ Горы', '💑 Романтика'].map(tag => (
            <span key={tag} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '100px', padding: '6px 16px', fontSize: '13px', color: 'rgba(255,255,255,0.8)' }}>{tag}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
