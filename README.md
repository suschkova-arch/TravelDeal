# ✈️ TravelDeal

Агрегатор путешествий с подборками отелей, авиабилетов, ж/д-маршрутов и партнёрских переходов для монетизации через Travelpayouts.

## Ссылки

- **GitHub Pages:** https://suschkova-arch.github.io/TravelDeal/
- **Основной сайт:** https://sushkova-emma.ru/TravelDeal/
- **Контактный email:** MILEDI_HR@mail.ru

## Что есть в проекте

- подборки популярных направлений;
- карточки отелей с фотографиями и сравнением систем бронирования;
- авиабилеты с актуальными датами начиная с июля 2026;
- ж/д как альтернатива авиаперелётам по России;
- блоки с отзывами 2025–2026;
- партнёрские ссылки Travelpayouts;
- backend для live-поиска по API.

## Основные монетизируемые партнёры

- Aviasales
- Ostrovok
- Туту
- Яндекс Путешествия
- Travelata
- Level.Travel
- Onlinetours
- Sutochno
- Localrent
- Большая Страна
- Cruise Online
- EconomyBookings
- SeaRadar
- QEEQ
- Radical Storage
- VIP-Зал
- EKTA Traveling
- Sanatoriums
- Слетать
- Путёвка

## Структура

- `src/` — исходный код React-приложения
- `public/` — публичные файлы
- `server.js` — backend для live-поиска
- `.github/workflows/deploy.yml` — деплой на GitHub Pages

## Локальный запуск

```bash
npm install
npm run dev
```

## Сборка

```bash
npm run build
```

## Сервер live-поиска

```bash
npm run server
```

## Важно

Файл `.env` в репозиторий не загружается. Для локальной работы используйте свой `.env` на основе `.env.example`.

## Примечание по Agoda

Agoda пока не подключена в проект как монетизируемый партнёр, потому что отдельная рабочая партнёрская ссылка для неё не была передана. Если она появится, её можно будет добавить в данные партнёров и карточки отелей.
