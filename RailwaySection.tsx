import { railwayRoutes } from '../data/travelData';

const typeLabels: Record<string, string> = {
  platzkart: 'Плацкарт',
  coupe: 'Купе',
  lux: 'Люкс',
  sitting: 'Сидячий',
};

export default function RailwaySection() {
  return (
    <section id="railway" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            🚆 Железнодорожные билеты
          </h2>
          <p className="text-gray-600 text-lg">
            {railwayRoutes.length} направлений по России и Европе — Сапсаны, Стрижи, Ласточки
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {railwayRoutes.map(route => (
            <a
              key={route.id}
              href="https://www.tutu.ru/poezda/?utm_source=tp&utm_medium=ref"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:border-green-200 transition-all group"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg">🚄</span>
                <span className="text-sm font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded">
                  {route.train}
                </span>
                <span className="text-xs text-gray-400 ml-auto">{route.duration}</span>
              </div>

              <p className="font-semibold text-gray-900 text-lg">
                {route.from} → {route.to}
              </p>

              <div className="flex items-center justify-between mt-3">
                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                  {typeLabels[route.type]}
                </span>
                <span className="text-xl font-bold text-green-600 group-hover:text-green-700">
                  от {route.price.toLocaleString('ru-RU')} ₽
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://www.tutu.ru/poezda/?utm_source=tp&utm_medium=ref"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-colors shadow-lg"
          >
            Все Ж/Д направления на Туту.ру
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
