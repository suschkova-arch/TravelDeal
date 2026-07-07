import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 2400000, label: 'Довольных путешественников', suffix: '+', icon: '👥', color: '#667eea' },
  { value: 60, label: 'Максимальная экономия', suffix: '%', icon: '💰', color: '#10b981' },
  { value: 500, label: 'Направлений по всему миру', suffix: '+', icon: '🌍', color: '#f59e0b' },
  { value: 6, label: 'Надёжных партнёров', suffix: '', icon: '🤝', color: '#a78bfa' },
];

function useCounter(target: number, duration: number, started: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, started]);
  return count;
}

type StatType = (typeof stats)[number];

const StatCard = ({ stat, started }: { stat: StatType; started: boolean }) => {
  const count = useCounter(stat.value, 2000, started);
  return (
    <div
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 20,
        padding: '32px 24px',
        textAlign: 'center',
        transition: 'all 0.3s',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
        (e.currentTarget as HTMLElement).style.borderColor = `${stat.color}44`;
        (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 40px rgba(0,0,0,0.3), 0 0 30px ${stat.color}22`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
        (e.currentTarget as HTMLElement).style.boxShadow = 'none';
      }}
    >
      <div style={{ fontSize: 48, marginBottom: 12 }}>{stat.icon}</div>
      <div
        style={{
          fontSize: 'clamp(32px, 5vw, 52px)',
          fontWeight: 900,
          color: stat.color,
          marginBottom: 8,
          fontVariantNumeric: 'tabular-nums',
        }}
      >
        {count >= 1000000
          ? `${(count / 1000000).toFixed(1)}M`
          : count >= 1000
          ? `${(count / 1000).toFixed(0)}K`
          : count}
        {stat.suffix}
      </div>
      <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14 }}>{stat.label}</div>
    </div>
  );
};

const StatsSection = () => {
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} style={{ padding: '80px 24px', background: 'rgba(10,15,30,1)' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, color: '#fff', marginBottom: 12 }}>
            TravelDeal в цифрах
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16 }}>
            Миллионы путешественников доверяют нам поиск лучших цен
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24 }}>
          {stats.map((s) => (
            <StatCard key={s.label} stat={s} started={started} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
