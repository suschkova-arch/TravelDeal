import { useState } from 'react';
import { hotels } from '../data/travelData';

export default function HotelsSection() {
  const [filterStars, setFilterStars] = useState<number | null>(null);
  const [filterCountry, setFilterCountry] = useState<string>('');
  const [expandedHotel, setExpandedHotel] = useState<string | null>(null);

  const countries = [...new Set(hotels.map(h => h.country))];

  const filtered = hotels.filter(h => {
    if (filterStars && h.stars !== filterStars) return false;
    if (filterCountry && h.country !== filterCountry) return false;
    return true;
  });

  return (
    <section id="hotels" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            🏨 Подборка популярных отелей
          </h2>
          <p className="text-gray-600 text-lg">
            Сравнение цен у 3-4 партнёров в каждой карточке — лучшая цена подсвечена 🏆
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          <button
            onClick={() => setFilterStars(null)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${!filterStars ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            Все звёзды
          </button>
          {[5, 4, 3].map(s => (
            <button
              key={s}
              onClick={() => setFilterStars(s)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filterStars === s ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              {'⭐'.repeat(s)}
            </button>
          ))}
          <div className="w-px bg-gray-200 mx-2" />
          <button
            onClick={() => setFilterCountry('')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${!filterCountry ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            Все страны
          </button>
          {countries.map(c => (
            <button
              key={c}
              onClick={() => setFilterCountry(c)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filterCountry === c ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Hotel cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(hotel => {
            const isExpanded = expandedHotel === hotel.id;

            return (
              <div key={hotel.id} className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 bg-gradient-to-br from-indigo-100 to-violet-100">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 text-sm font-bold text-indigo-600">
                    {'⭐'.repeat(hotel.stars)}
                  </div>
                  {hotel.oldPrice && (
                    <div className="absolute top-3 left-3 bg-red-500 text-white rounded-lg px-2 py-1 text-xs font-bold">
                      -{Math.round((1 - hotel.price / hotel.oldPrice) * 100)}%
                    </div>
                  )}
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-gray-900 text-lg">{hotel.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">📍 {hotel.city}, {hotel.country}</p>

                  <div className="flex items-center gap-2 mt-2">
                    <span className="bg-indigo-100 text-indigo-700 text-xs font-semibold px-2 py-0.5 rounded">
                      {hotel.rating}/10
                    </span>
                    <span className="text-xs text-gray-400">{hotel.reviews} отзывов</span>
                    {hotel.meal && (
                      <span className="text-xs text-green-600 font-medium">{hotel.meal}</span>
                    )}
                  </div>

                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-gray-900">
                      {hotel.price.toLocaleString('ru-RU')} ₽
                    </span>
                    {hotel.oldPrice && (
                      <span className="text-sm text-gray-400 line-through">
                        {hotel.oldPrice.toLocaleString('ru-RU')} ₽
                      </span>
                    )}
                    <span className="text-xs text-gray-500">/ ночь</span>
                  </div>

                  {/* Partner prices toggle */}
                  <button
                    onClick={() => setExpandedHotel(isExpanded ? null : hotel.id)}
                    className="mt-3 text-sm text-indigo-600 hover:text-indigo-800 font-medium flex items-center gap-1"
                  >
                    {isExpanded ? '▲ Скрыть цены' : '▼ Сравнить цены у партнёров'}
                  </button>

                  {isExpanded && (
                    <div className="mt-3 space-y-2 animate-fade-in">
                      {hotel.prices.sort((a, b) => a.price - b.price).map((p, i) => (
                        <a
                          key={p.partner}
                          href={p.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center justify-between p-2.5 rounded-lg text-sm transition-colors ${
                            i === 0
                              ? 'bg-green-50 border border-green-200 hover:bg-green-100'
                              : 'bg-gray-50 hover:bg-gray-100'
                          }`}
                        >
                          <span className="flex items-center gap-2">
                            {i === 0 && <span>🏆</span>}
                            <span className="font-medium text-gray-700">{p.partner}</span>
                          </span>
                          <span className={`font-bold ${i === 0 ? 'text-green-700' : 'text-gray-900'}`}>
                            {p.price.toLocaleString('ru-RU')} ₽
                          </span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
