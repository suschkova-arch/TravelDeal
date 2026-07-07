export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">✈️</span>
              <span className="text-xl font-bold">TravelDeal</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Агрегатор путешествий с актуальными ценами на отели, авиабилеты и Ж/Д билеты.
              Экономьте до 60% на каждом бронировании.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Разделы</h4>
            <div className="space-y-2">
              <a href="#hotels" className="block text-sm text-gray-400 hover:text-white transition-colors">🏨 Отели</a>
              <a href="#flights" className="block text-sm text-gray-400 hover:text-white transition-colors">✈️ Авиабилеты</a>
              <a href="#railway" className="block text-sm text-gray-400 hover:text-white transition-colors">🚆 Ж/Д билеты</a>
              <a href="#search" className="block text-sm text-gray-400 hover:text-white transition-colors">🔍 Живой поиск</a>
              <a href="#partners" className="block text-sm text-gray-400 hover:text-white transition-colors">🤝 Партнёры</a>
            </div>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>📧 MILEDI_HR@mail.ru</p>
              <p>🌍 suschkova-arch.github.io/TravelDeal</p>
              <p>🔗 Travelpayouts ID: 747557</p>
              <p>🏷️ Marker: 547188</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © 2026 TravelDeal. Все права защищены.
          </p>
          <p className="text-xs text-gray-600">
            Сайт использует партнёрские ссылки Travelpayouts. Каждый переход = поддержка проекта.
          </p>
        </div>
      </div>
    </footer>
  );
}
