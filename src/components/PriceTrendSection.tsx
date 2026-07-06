import { useState } from 'react';
import type { FormEvent } from 'react';
import { priceData } from '../data/travelData';

const destinations = [
  { key: 'dubai', label: 'Дубай', color: '#667eea' },
  { key: 'bali', label: 'Бали', color: '#10b981' },
  { key: 'paris', label: 'Париж', color: '#f59e0b' },
  { key: 'tokyo', label: 'Токио', color: '#ef4444' },
];

const PriceTrendSection = () => {
  const [active, setActive] = useState('dubai');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [tooltip, setTooltip] = useState<{ x: number; y: number; value: number; month: string } | null>(null);

  const dest = destinations.find((d) => d.key === active)!;
  const data = priceData[active as keyof typeof priceData] as number[];
  const months = priceData.months;

  const maxVal = Math.max(...data);
  const minVal = Math.min(...data);
  const minIdx = data.indexOf(minVal);

  const W = 700,
    H = 200,
    PAD = 40;
  const points = data.map((v, i) => ({
    x: PAD + (i / (data.length - 1)) * (W - PAD * 2),
    y: PAD + (1 - (v - minVal) / (maxVal - minVal || 1)) * (H - PAD * 2),
    v,
  }));

  const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
  const areaD = `${pathD} L ${points[points.length - 1].x} ${H} L ${points[0].x} ${H} Z`;

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <section id="prices" style={{ padding: '80px 24px', background: 'rgba(13,18,38,1)' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'rgba(245,158,11,0.15)',
              border: '1px solid rgba(245,158,11,0.3)',
              borderRadius: 100,
              padding: '6px 16px',
              marginBottom: 16,
            }}
          >
            <span style={{ color: '#fbbf24', fontSize: 13, fontWeight: 600 }}>📈 График цен</span>
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, color: '#fff', marginBottom: 12 }}>
            Когда летать дешевле?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16 }}>Интерактивный график цен по месяцам</p>
        </div>

        <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginBottom: 32, flexWrap: 'wrap' }}>
          {destinations.map((d) => (
            <button
              key={d.key}
              onClick={() => setActive(d.key)}
              style={{
                padding: '10px 24px',
                borderRadius: 100,
                border: `1px solid ${active === d.key ? d.color : 'rgba(255,255,255,0.15)'}`,
                background: active === d.key ? `${d.color}22` : 'transparent',
                color: active === d.key ? d.color : 'rgba(255,255,255,0.6)',
                cursor: 'pointer',
                fontWeight: active === d.key ? 700 : 400,
                transition: 'all 0.2s',
              }}
            >
              {d.label}
            </button>
          ))}
        </div>

        <div
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 20,
            padding: 24,
            marginBottom: 32,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 16,
              right: 16,
              background: 'rgba(16,185,129,0.2)',
              border: '1px solid rgba(16,185,129,0.4)',
              borderRadius: 10,
              padding: '8px 14px',
            }}
          >
            <div style={{ color: '#34d399', fontSize: 12, fontWeight: 600 }}>💡 Лучший месяц</div>
            <div style={{ color: '#fff', fontWeight: 700, fontSize: 15 }}>
              {months[minIdx]} — {minVal.toLocaleString()}₽
            </div>
          </div>

          <svg
            viewBox={`0 0 ${W} ${H}`}
            style={{ width: '100%', height: 'auto' }}
            onMouseLeave={() => setTooltip(null)}
          >
            <defs>
              <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={dest.color} stopOpacity="0.3" />
                <stop offset="100%" stopColor={dest.color} stopOpacity="0" />
              </linearGradient>
            </defs>

            {[0, 1, 2, 3].map((i) => (
              <line
                key={i}
                x1={PAD}
                y1={PAD + i * (H - PAD * 2) / 3}
                x2={W - PAD}
                y2={PAD + i * (H - PAD * 2) / 3}
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="1"
              />
            ))}

            <path d={areaD} fill="url(#areaGrad)" />
            <path d={pathD} fill="none" stroke={dest.color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

            <circle cx={points[minIdx].x} cy={points[minIdx].y} r="8" fill={dest.color} opacity="0.3" />
            <circle cx={points[minIdx].x} cy={points[minIdx].y} r="5" fill={dest.color} />

            {points.map((p, i) => (
              <g key={i}>
                <circle
                  cx={p.x}
                  cy={p.y}
                  r="12"
                  fill="transparent"
                  onMouseEnter={() => setTooltip({ x: p.x, y: p.y, value: p.v, month: months[i] })}
                  style={{ cursor: 'pointer' }}
                />
                <circle
                  cx={p.x}
                  cy={p.y}
                  r="4"
                  fill={tooltip?.month === months[i] ? '#fff' : dest.color}
                  opacity={tooltip?.month === months[i] ? 1 : 0.7}
                />
              </g>
            ))}

            {months.map((m, i) => (
              <text
                key={m}
                x={PAD + (i / (months.length - 1)) * (W - PAD * 2)}
                y={H - 8}
                textAnchor="middle"
                fill="rgba(255,255,255,0.4)"
                fontSize="11"
              >
                {m}
              </text>
            ))}

            {tooltip && (
              <g>
                <rect
                  x={tooltip.x - 55}
                  y={tooltip.y - 46}
                  width={110}
                  height={38}
                  rx={8}
                  fill="rgba(10,15,40,0.95)"
                  stroke={dest.color}
                  strokeWidth="1"
                />
                <text x={tooltip.x} y={tooltip.y - 26} textAnchor="middle" fill="#fff" fontSize="12" fontWeight="700">
                  {tooltip.month}
                </text>
                <text x={tooltip.x} y={tooltip.y - 14} textAnchor="middle" fill={dest.color} fontSize="13" fontWeight="800">
                  {tooltip.value.toLocaleString()}₽
                </text>
              </g>
            )}
          </svg>
        </div>

        <div
          style={{
            background: 'linear-gradient(135deg, rgba(102,126,234,0.15), rgba(167,139,250,0.15))',
            border: '1px solid rgba(102,126,234,0.3)',
            borderRadius: 20,
            padding: 32,
            textAlign: 'center',
          }}
        >
          <div style={{ fontSize: 32, marginBottom: 12 }}>🔔</div>
          <h3 style={{ color: '#fff', fontSize: 22, fontWeight: 700, marginBottom: 8 }}>Подписка на снижение цен</h3>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, marginBottom: 24 }}>
            Получайте уведомления, когда цена на {dest.label} упадёт ниже {Math.round(minVal * 0.95).toLocaleString()}₽
          </p>

          {subscribed ? (
            <div
              style={{
                background: 'rgba(16,185,129,0.2)',
                border: '1px solid rgba(16,185,129,0.4)',
                borderRadius: 12,
                padding: '16px 32px',
                color: '#34d399',
                fontWeight: 700,
                fontSize: 16,
                display: 'inline-block',
              }}
            >
              ✅ Подписка оформлена! Мы пришлём письмо при снижении цены
            </div>
          ) : (
            <form
              onSubmit={handleSubscribe}
              style={{ display: 'flex', gap: 12, maxWidth: 480, margin: '0 auto', flexWrap: 'wrap' }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                style={{
                  flex: 1,
                  padding: '14px 18px',
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: 12,
                  color: '#fff',
                  fontSize: 15,
                  outline: 'none',
                  minWidth: 200,
                }}
              />
              <button
                type="submit"
                style={{
                  padding: '14px 24px',
                  background: 'linear-gradient(135deg, #667eea, #764ba2)',
                  border: 'none',
                  borderRadius: 12,
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: 15,
                  cursor: 'pointer',
                  boxShadow: '0 4px 20px rgba(102,126,234,0.4)',
                  whiteSpace: 'nowrap',
                }}
              >
                🔔 Подписаться
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default PriceTrendSection;
