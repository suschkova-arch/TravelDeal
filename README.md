
# ✈️ TravelDeal — Агрегатор путешествий с реальными ценами

**[🌍 Открыть сайт]([https://github.com/suschkova-arch/TravelDeal.git/])** | **[📧 Контакты](mailto:MILEDI_HR@mail.ru)**

--
Сайт для поиска отелей и авиабилетов с **реальными живыми ценами** из баз Aviasales и Hotellook (Aviasales Group).

## 🔴 Живые данные

- **Отели** — реальные цены по городу и датам через публичный API Hotellook (`engine.hotellook.com/api/v2/cache.json`), в рублях
- **Перелёты** — реальные минимальные цены через публичный API Aviasales (`min-prices.aviasales.ru/calendar_preload`)
- **Бронирование** — переход на партнёра с минимальной ценой (Hotellook сравнивает Booking, Ostrovok, Agoda и др.)

## 🛠️ Технологии

- React 19 + TypeScript
- Vite 7 (сборка в один HTML-файл через `vite-plugin-singlefile`)
- Tailwind CSS 4

## 🚀 Запуск

### Разработка
```bash
npm install
npm run dev
```
Откроется на http://localhost:5173

### Сборка
```bash
npm run build
```
Результат: `dist/index.html` — **весь сайт в одном файле** (~287 КБ).
Его можно загрузить на любой хостинг или открыть в браузере.

### Просмотр собранной версии
```bash
npm run preview
```

## 📁 Структура

```
src/
├── App.tsx                    # Главный компонент
├── components/
│   ├── Navbar.tsx             # Навигация
│   ├── Hero.tsx               # Слайдер + поиск
│   ├── DestinationsSection.tsx# Направления
│   ├── HotelsSection.tsx      # Отели + фильтры (страна/звёзды/питание)
│   ├── LiveHotelSearch.tsx    # 🔴 Живой поиск отелей (реальные цены)
│   ├── FlightsSection.tsx     # 🔴 Перелёты с LIVE-ценами Aviasales
│   ├── PriceTrendSection.tsx  # График цен по месяцам
│   ├── StatsSection.tsx       # Статистика с анимацией
│   ├── ReviewsSection.tsx     # Отзывы
│   ├── PartnersSection.tsx    # Партнёры
│   └── Footer.tsx             # Подвал
├── services/
│   └── liveApi.ts             # API Aviasales / Hotellook
└── data/
    └── travelData.ts          # Данные подборок
```

## ⚠️ Важно
---

## 📧 Контакты

- **Email:** [MILEDI_HR@mail.ru](mailto:MILEDI_HR@mail.ru)
- **Сайт:** [suschkova-arch.github.io/TravelDeal](https://github.com/suschkova-arch/TravelDeal.git/]/)

---

## 📄 Лицензия

## 💰 Монетизация

Для получения комиссии с бронирований зарегистрируйтесь на [travelpayouts.com](https://www.travelpayouts.com) и добавьте свой `marker` в ссылки в `src/services/liveApi.ts`.
