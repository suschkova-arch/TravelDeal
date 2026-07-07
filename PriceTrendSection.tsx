import { useState } from 'react';
import { priceTrends, MONTHS } from '../data/travelData';

export default function PriceTrendSection() {
  const [active, setActive] = useState(0);
  const trend = priceTrends[active];

  const maxPrice = Math.max(...trend.months);
  const minPrice = Math.min(...trend.months);
  const minIdx = trend.months.indexOf(minPrice);

  const svgWidth = 700;
  const svgHeight = 200;
  const padX = 40;
  const padY = 20;
  const innerW = svgWidth - padX * 2;
  const innerH = svgHeight - padY * 2;

  const pts = trend.months.map((price, i) => {
    const x = padX + (i / 11) * innerW;
    const y = padY + innerH - ((price - minPrice) / (maxPrice - minPrice + 1)) * innerH;
    return { x, y, price };
  });

  const polyline = pts.map(p => `${p.x},${p.y}`).join(' ');
  const fill = `${pts.map(p => `${p.x},${p.y}`).join(' ')} ${pts[pts.length - 1].x},${padY + innerH} ${pts[0].x},${padY + innerH}`;

  return (
    <section id="price-trends" style={{ padding: '80px 24px', background: 'rgba(10,15,30,1)' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(102,126,234,0.15)', border: '1px solid rgba(102,126,234,0.3)', borderRadius: 100, padding: '6px 16px', marginBottom: 16 }}>
            <span style={{ color: '#a78bfa', fontSize: 13, fontWeight: 600 }}>📈 График цен</span>
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, color: '#fff', marginBottom: 12 }}>
            Когда лучше покупать?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16, maxWidth: 500, margin: '0 auto' }}>
            Динамика цен по месяцам — лучшее время для покупки выделено зелёным
          </p>
        </div>

        {/* Route tabs */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 32 }}>
          {priceTrends.map((t, i) => (
            <button key={i} onClick={() => setActive(i)} style={{
              padding: '8px 18px', borderRadius: 100, cursor: 'pointer', fontSize: 13, fontWeight: 600,
              background: active === i ? 'rgba(102,126,234,0.2)' : 'rgba(255,255,255,0.04)',
              border: active === i ? `1px solid ${t.color}` : '1px solid rgba(255,255,255,0.1)',
              color: active === i ? '#fff' : 'rgba(255,255,255,0.6)',
              transition: 'all 0.2s',
            }}>{t.route}</button>
          ))}
        </div>

        {/* Chart */}
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: '28px 20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16, flexWrap: 'wrap', gap: 8 }}>
            <div style={{ color: '#fff', fontWeight: 700 }}>{trend.route}</div>
            <div style={{ display: 'flex', gap: 16 }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ color: '#4ade80', fontWeight: 800, fontSize: 18 }}>{minPrice.toLocaleString('ru')}₽</div>
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11 }}>🏆 Лучшая цена ({MONTHS[minIdx]})</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ color: '#ef4444', fontWeight: 800, fontSize: 18 }}>{maxPrice.toLocaleString('ru')}₽</div>
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11 }}>📈 Пик сезона</div>
              </div>
            </div>
          </div>

          {/* SVG Chart */}
          <div style={{ overflowX: 'auto' }}>
            <svg viewBox={`0 0 ${svgWidth} ${svgHeight + 30}`} style={{ width: '100%', minWidth: 400 }}>
              {/* Fill */}
              <defs>
                <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={trend.color} stopOpacity="0.3" />
                  <stop offset="100%" stopColor={trend.color} stopOpacity="0.02" />
                </linearGradient>
              </defs>
              <polygon points={fill} fill="url(#chartGrad)" />

              {/* Grid lines */}
              {[0, 0.25, 0.5, 0.75, 1].map(t => {
                const y = padY + innerH * (1 - t);
                const price = Math.round(minPrice + (maxPrice - minPrice) * t);
                return (
                  <g key={t}>
                    <line x1={padX} y1={y} x2={svgWidth - padX} y2={y} stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                    <text x={padX - 4} y={y + 4} textAnchor="end" fill="rgba(255,255,255,0.3)" fontSize="10">{(price / 1000).toFixed(0)}k</text>
                  </g>
                );
              })}

              {/* Line */}
              <polyline points={polyline} fill="none" stroke={trend.color} strokeWidth="2.5" strokeLinejoin="round" />

              {/* Points */}
              {pts.map((p, i) => (
                <g key={i}>
                  <circle cx={p.x} cy={p.y} r={i === minIdx ? 7 : 4}
                    fill={i === minIdx ? '#4ade80' : trend.color}
                    stroke={i === minIdx ? '#fff' : 'rgba(255,255,255,0.2)'} strokeWidth={i === minIdx ? 2 : 1}
                  />
                  {/* Month label */}
                  <text x={p.x} y={svgHeight + 15} textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="11">{MONTHS[i]}</text>
                  {/* Price tooltip on min */}
                  {i === minIdx && (
                    <text x={p.x} y={p.y - 14} textAnchor="middle" fill="#4ade80" fontSize="11" fontWeight="700">
                      {p.price.toLocaleString('ru')}₽
                    </text>
                  )}
                </g>
              ))}
            </svg>
          </div>

          <div style={{ textAlign: 'center', marginTop: 16 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(74,222,128,0.25)', borderRadius: 10, padding: '8px 16px' }}>
              <span style={{ color: '#4ade80', fontWeight: 700, fontSize: 14 }}>💡 Лучший месяц: {trend.best}</span>
              <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13 }}>— экономия до {Math.round((1 - minPrice / maxPrice) * 100)}%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
