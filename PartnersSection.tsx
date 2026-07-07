import { useState } from 'react';
import { partners } from '../data/travelData';

type Category = 'all' | 'hotel' | 'flight' | 'railway' | 'taxi' | 'tour' | 'search';

const categoryLabels: Record<Category, string> = {
  all: 'Все партнёры',
  search: '🔍 Поисковые системы',
  hotel: '🏨 Бронирование отелей',
  flight: '✈️ Авиаперевозчики',
  railway: '🚆 Ж/Д перевозки',
  taxi: '🚗 Аренда авто',
  tour: '🌍 Туры и экскурсии',
};

const categoryColors: Record<string, string> = {
  search: 'bg-purple-100 text-purple-700 border-purple-200',
  hotel: 'bg-blue-100 text-blue-700 border-blue-200',
  flight: 'bg-sky-100 text-sky-700 border-sky-200',
  railway: 'bg-green-100 text-green-700 border-green-200',
  taxi: 'bg-amber-100 text-amber-700 border-amber-200',
  tour: 'bg-rose-100 text-rose-700 border-rose-200',
};

export default function PartnersSection() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const filtered = activeCategory === 'all'
    ? partners
    : partners.filter(p => p.category === activeCategory);

  const categories = Object.keys(categoryLabels) as Category[];

  return (
    <section id="partners" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            🤝 Наши партнёры
          </h2>
          <p className="text-gray-600 text-lg">
            {partners.length} проверенных партнёров — нажмите для перехода на сайт
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {categoryLabels[cat]}
            </button>
          ))}
        </div>

        {/* Partners grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map(partner => (
            <a
              key={partner.id}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-5 border border-gray-100 hover:shadow-lg hover:border-indigo-200 transition-all group"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {partner.name}
                </h3>
                <svg className="w-4 h-4 text-gray-300 group-hover:text-indigo-400 transition-colors mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>

              <p className="text-sm text-gray-500 mb-3">{partner.description}</p>

              <span className={`inline-block text-xs font-semibold px-2 py-0.5 rounded border ${categoryColors[partner.category]}`}>
                {categoryLabels[partner.category]}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
