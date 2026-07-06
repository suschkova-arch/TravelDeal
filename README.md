# ✈️ TravelDeal — Агрегатор путешествий с реальными ценами

**[🌍 Открыть сайт]([https://github.com/suschkova-arch/TravelDeal.git/])** | **[📧 Контакты](mailto:MILEDI_HR@mail.ru)**

---

## 🎯 Возможности

- 🏨 **Реальные цены на отели** от Booking.com, Ostrovok, Agoda, Hotels.com
- ✈️ **Реальные цены на авиабилеты** от Aviasales, Skyscanner, KAYAK, Trip.com
- 🔍 **Сравнение цен** — показывает самого дешёвого партнёра
- 🔴 **LIVE API** — подключается к Amadeus API для живых цен (бесплатно!)
- 🌍 **16 отелей** в 6 странах + **6 рейсов**
- 🎨 **Современный дизайн** — тёмная тема, анимации, адаптивность
- 🛡️ **Защита от ботов** — rate limiting, helmet, CORS
- 📧 **Email-уведомления** — заявки на почту

---

## 🚀 Быстрый старт

### 1. Установка

```bash
git clone https://github.com/sushkova-emma/TravelDeal.git
cd TravelDeal
npm install
```

### 2. Запуск (без реальных цен)

```bash
npm run dev
```

Открыть: **http://localhost:5173**

### 3. Запуск с реальными ценами (Amadeus API)

**Получите бесплатный API ключ:**
1. Зайдите на https://developers.amadeus.com/
2. Sign Up → Create App → Self-Service план
3. Скопируйте API Key и API Secret

**Добавьте в файл `.env`:**
```env
AMADEUS_API_KEY=ваш_api_key
AMADEUS_API_SECRET=ваш_api_secret
AMADEUS_HOSTNAME=test
```

**Запустите сервер:**
```bash
npm run server
```

Открыть: **http://localhost:3001**

---

## 📊 Структура проекта

```
TravelDeal/
├── src/
│   ├── components/        # React компоненты
│   │   ├── Navbar.tsx     # Навигация
│   │   ├── Hero.tsx       # Главный экран + поиск
│   │   ├── DestinationsSection.tsx  # Направления
│   │   ├── HotelsSection.tsx        # Отели + сравнение цен
│   │   ├── FlightsSection.tsx       # Авиабилеты
│   │   ├── PriceTrendSection.tsx    # График цен
│   │   ├── StatsSection.tsx         # Статистика
│   │   ├── ReviewsSection.tsx       # Отзывы
│   │   ├── PartnersSection.tsx      # Партнёры
│   │   └── Footer.tsx              # Подписка + ссылки
│   ├── data/
│   │   └── travelData.ts   # Данные (отели, рейсы, партнёры)
│   ├── App.tsx             # Главный компонент
│   ├── main.tsx            # Точка входа React
│   └── index.css           # Стили + анимации
├── public/
│   └── TravelDeal-website.html  # Самодостаточный сайт (CDN)
├── server.js               # Backend API сервер
├── package.json            # Зависимости и скрипты
├── vite.config.ts          # Конфигурация Vite
├── .env.example            # Шаблон переменных окружения
├── .gitignore              # Исключения Git
└── README.md               # Документация
```

---

## 🔌 API Endpoints

| Метод | Путь | Описание |
|-------|------|----------|
| `GET` | `/api/hotels?city=Paris&stars=5` | Реальные цены отелей |
| `GET` | `/api/flights?from=Moscow&to=Dubai` | Реальные цены рейсов |
| `GET` | `/api/search?destination=Dubai` | Быстрый поиск (отели + рейсы) |
| `GET` | `/api/health` | Статус сервера |

---

## 🛡️ Безопасность

- ✅ **Helmet** — защита HTTP заголовков
- ✅ **Rate Limiting** — 100 запросов / 15 минут
- ✅ **CORS** — ограниченный доступ
- ✅ **Compression** — gzip
- ✅ **Кэширование** — 15 минут (экономия API лимитов)
- ✅ `.env` в `.gitignore` — ключи не попадают в репозиторий

---

## 📦 Скрипты

| Команда | Описание |
|---------|----------|
| `npm run dev` | Dev-сервер Vite (фронтенд) |
| `npm run build` | Сборка в `dist/` |
| `npm run preview` | Превью сборки |
| `npm run server` | Backend API сервер |
| `npm run server:dev` | Сервер с авто-перезагрузкой |
| `npm start` | Сборка + запуск сервера |

---

## 📧 Контакты

- **Email:** [MILEDI_HR@mail.ru](mailto:MILEDI_HR@mail.ru)
- **Сайт:** [suschkova-arch.github.io/TravelDeal](https://github.com/suschkova-arch/TravelDeal.git/]/)

---

## 📄 Лицензия

MIT License © 2026 TravelDeal
