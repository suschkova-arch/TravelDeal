import { stats } from '../data/travelData';

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700" />
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-white/90 text-sm font-medium">LIVE-цены обновляются в реальном времени</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Найдите лучшие цены на
          <br />
          <span className="text-amber-300">путешествия по всему миру</span>
        </h1>

        <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-8">
          Сравниваем цены от 23 партнёров: отели, авиабилеты, Ж/Д билеты, туры и аренда авто.
          Экономия до <span className="text-amber-300 font-bold">60%</span> на каждом бронировании.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a href="#hotels" className="px-8 py-3.5 bg-white text-indigo-700 font-semibold rounded-xl hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            🏨 Найти отель
          </a>
          <a href="#flights" className="px-8 py-3.5 bg-amber-400 text-gray-900 font-semibold rounded-xl hover:bg-amber-300 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            ✈️ Найти билеты
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {stats.map(s => (
            <div key={s.label} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-2xl sm:text-3xl font-bold text-white">{s.value}</div>
              <div className="text-sm text-white/70 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
