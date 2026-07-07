import { priceTrends } from '../data/travelData';

export default function PriceTrendSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            📈 График цен по направлениям
          </h2>
          <p className="text-gray-600 text-lg">
            Когда выгоднее всего бронировать? Лучший месяц для покупки подсвечен 🟢
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {priceTrends.map(trend => {
            const maxPrice = Math.max(...trend.prices);
            const minPrice = Math.min(...trend.prices);
            const bestIdx = trend.prices.indexOf(minPrice);

            return (
              <div key={trend.destination} className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-gray-900 text-lg">{trend.destination}</h3>
                  <span className="text-xs bg-green-100 text-green-700 font-semibold px-2 py-1 rounded">
                    🟢 Лучший месяц: {trend.bestMonth}
                  </span>
                </div>

                {/* SVG Chart */}
                <svg viewBox="0 0 400 160" className="w-full h-40" preserveAspectRatio="none">
                  {/* Grid lines */}
                  {[0, 40, 80, 120, 160].map(y => (
                    <line key={y} x1="30" y1={y} x2="390" y2={y} stroke="#f3f4f6" strokeWidth="1" />
                  ))}

                  {/* Area fill */}
                  <path
                    d={`M 30 ${160 - ((trend.prices[0] - minPrice) / (maxPrice - minPrice)) * 130 - 10} ` +
                      trend.prices.map((p, i) =>
                        `L ${30 + i * (360 / (trend.prices.length - 1))} ${160 - ((p - minPrice) / (maxPrice - minPrice)) * 130 - 10}`
                      ).join(' ') +
                      ` L ${30 + (trend.prices.length - 1) * (360 / (trend.prices.length - 1))} 160 L 30 160 Z`
                    }
                    fill="url(#gradient)"
                    opacity="0.3"
                  />

                  {/* Line */}
                  <path
                    d={`M 30 ${160 - ((trend.prices[0] - minPrice) / (maxPrice - minPrice)) * 130 - 10} ` +
                      trend.prices.map((p, i) =>
                        `L ${30 + i * (360 / (trend.prices.length - 1))} ${160 - ((p - minPrice) / (maxPrice - minPrice)) * 130 - 10}`
                      ).join(' ')
                    }
                    fill="none"
                    stroke="#6366f1"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Dots */}
                  {trend.prices.map((p, i) => (
                    <circle
                      key={i}
                      cx={30 + i * (360 / (trend.prices.length - 1))}
                      cy={160 - ((p - minPrice) / (maxPrice - minPrice)) * 130 - 10}
                      r={i === bestIdx ? 6 : 4}
                      fill={i === bestIdx ? '#10b981' : '#6366f1'}
                      stroke="white"
                      strokeWidth="2"
                    />
                  ))}

                  {/* Month labels */}
                  {trend.months.map((m, i) => (
                    <text
                      key={m}
                      x={30 + i * (360 / (trend.prices.length - 1))}
                      y="155"
                      textAnchor="middle"
                      fontSize="9"
                      fill={i === bestIdx ? '#10b981' : '#9ca3af'}
                      fontWeight={i === bestIdx ? 'bold' : 'normal'}
                    >
                      {m}
                    </text>
                  ))}

                  {/* Best price label */}
                  <text
                    x={30 + bestIdx * (360 / (trend.prices.length - 1))}
                    y={160 - ((trend.prices[bestIdx] - minPrice) / (maxPrice - minPrice)) * 130 - 20}
                    textAnchor="middle"
                    fontSize="10"
                    fill="#10b981"
                    fontWeight="bold"
                  >
                    {trend.bestPrice.toLocaleString('ru-RU')} ₽
                  </text>

                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#6366f1" />
                      <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>

                <div className="flex justify-between mt-2 text-xs text-gray-400">
                  <span>Мин: {minPrice.toLocaleString('ru-RU')} ₽</span>
                  <span>Макс: {maxPrice.toLocaleString('ru-RU')} ₽</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
