import { useState, useMemo } from 'react';
import { cities } from '../data/travelData';

export default function LiveHotelSearch() {
  const [query, setQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);

  const filteredCities = useMemo(() => {
    if (!query) return [];
    const q = query.toLowerCase();
    return cities.filter(c =>
      c.name.toLowerCase().includes(q) ||
      c.region.toLowerCase().includes(q) ||
      c.country.toLowerCase().includes(q)
    ).slice(0, 10);
  }, [query]);

  const groupedCities = useMemo(() => {
    const groups: Record<string, typeof cities> = {};
    filteredCities.forEach(c => {
      if (!groups[c.country]) groups[c.country] = [];
      groups[c.country].push(c);
    });
    return groups;
  }, [filteredCities]);

  const handleSearch = () => {
    const city = selectedCity || query;
    if (!city) return;
    window.open(`https://hotellook.ru/?marker=547188&location=${encodeURIComponent(city)}`, '_blank');
  };

  return (
    <section id="search" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            🔴 Живой поиск отелей
          </h2>
          <p className="text-gray-600 text-lg">
            Реальные цены из базы Hotellook для {cities.length}+ городов мира
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8">
          {/* City search */}
          <div className="relative mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Куда вы хотите поехать?</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
              <input
                type="text"
                value={query}
                onChange={e => { setQuery(e.target.value); setSelectedCity(''); }}
                placeholder="Введите город: Казань, Камчатка, Венеция..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none text-gray-900"
              />
            </div>

            {/* Dropdown */}
            {Object.keys(groupedCities).length > 0 && (
              <div className="absolute z-20 left-0 right-0 mt-1 bg-white rounded-xl shadow-2xl border border-gray-100 max-h-72 overflow-y-auto">
                {Object.entries(groupedCities).map(([country, countryCities]) => (
                  <div key={country}>
                    <div className="px-4 py-2 bg-gray-50 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      {country}
                    </div>
                    {countryCities.map(city => (
                      <button
                        key={city.name}
                        className="w-full text-left px-4 py-2.5 hover:bg-indigo-50 flex items-center justify-between transition-colors"
                        onClick={() => {
                          setSelectedCity(city.name);
                          setQuery(city.name);
                        }}
                      >
                        <span className="text-gray-800">{city.name}</span>
                        <span className="text-xs text-gray-400">{city.region}</span>
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Dates & Guests */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Заезд</label>
              <input
                type="date"
                value={checkIn}
                onChange={e => setCheckIn(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Выезд</label>
              <input
                type="date"
                value={checkOut}
                onChange={e => setCheckOut(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Гости</label>
              <select
                value={guests}
                onChange={e => setGuests(Number(e.target.value))}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
              >
                {[1,2,3,4,5,6].map(n => (
                  <option key={n} value={n}>{n} {n === 1 ? 'гость' : n < 5 ? 'гостя' : 'гостей'}</option>
                ))}
              </select>
            </div>
          </div>

          <button
            onClick={handleSearch}
            className="w-full py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-violet-700 transition-all shadow-lg hover:shadow-xl text-lg pulse-glow"
          >
            🏨 Найти отели в {selectedCity || query || '...'}
          </button>

          {/* Popular cities */}
          <div className="mt-6">
            <p className="text-sm text-gray-500 mb-2">Популярные направления:</p>
            <div className="flex flex-wrap gap-2">
              {['Сочи', 'Казань', 'Камчатка', 'Дубай', 'Анталья', 'Бали', 'Венеция', 'Кипр', 'Алтай', 'Кавказ', 'Абхазия', 'Мальдивы'].map(city => (
                <button
                  key={city}
                  onClick={() => { setQuery(city); setSelectedCity(city); }}
                  className="px-3 py-1.5 bg-gray-100 hover:bg-indigo-100 hover:text-indigo-700 text-gray-600 text-sm rounded-lg transition-colors"
                >
                  {city}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
