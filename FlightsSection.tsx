import { flights } from '../data/travelData';

export default function FlightsSection() {
  return (
    <section id="flights" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            ✈️ Авиабилеты — LIVE-цены
          </h2>
          <p className="text-gray-600 text-lg">
            {flights.length} популярных маршрутов с актуальными ценами из базы Aviasales
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {flights.map(flight => (
            <a
              key={flight.id}
              href={`https://www.aviasales.ru/search/${flight.fromCode}0104${flight.toCode}2${flight.date?.replace(' ', '')}?marker=547188`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:border-indigo-200 transition-all group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded">
                    {flight.fromCode}
                  </span>
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <span className="text-xs font-bold bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded">
                    {flight.toCode}
                  </span>
                </div>
                <span className="text-xs text-gray-400">{flight.date}</span>
              </div>

              <div className="flex items-end justify-between">
                <div>
                  <p className="font-semibold text-gray-900">{flight.from} → {flight.to}</p>
                  <p className="text-sm text-gray-500 mt-1">
                    {flight.airline} • {flight.duration} • {flight.stops === 0 ? 'Прямой' : `${flight.stops} пересадка`}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-indigo-600 group-hover:text-indigo-700">
                    {flight.price.toLocaleString('ru-RU')} ₽
                  </p>
                  <p className="text-xs text-gray-400">туда</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://www.aviasales.ru/?marker=547188"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors shadow-lg"
          >
            Найти все билеты на Aviasales
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
