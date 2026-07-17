<?php
require_once __DIR__ . '/config.php';

try {
    $query = param('query', 'Sochi');
    $checkIn = param('checkIn', date('Y-m-d', strtotime('+14 days')));
    $checkOut = param('checkOut', date('Y-m-d', strtotime('+21 days')));
    $currency = strtolower(param('currency', 'rub'));
    $limit = max(1, min(30, (int)param('limit', '20')));
    $minStars = (int)param('stars', '0');

    // Публичный Hotellook cache endpoint: реальные кэшированные цены по городу/локации.
    $url = 'https://engine.hotellook.com/api/v2/cache.json?location=' . rawurlencode($query)
        . '&checkIn=' . rawurlencode($checkIn)
        . '&checkOut=' . rawurlencode($checkOut)
        . '&currency=' . rawurlencode($currency)
        . '&limit=' . $limit;

    $raw = fetch_json($url);
    $hotels = [];
    if (is_array($raw)) {
        foreach ($raw as $hotel) {
            if (!is_array($hotel)) continue;
            $stars = (int)($hotel['stars'] ?? 0);
            if ($minStars > 0 && $stars < $minStars) continue;
            $priceFrom = (float)($hotel['priceFrom'] ?? 0);
            if ($priceFrom <= 0) continue;
            $hotels[] = [
                'hotelId' => $hotel['hotelId'] ?? null,
                'name' => $hotel['hotelName'] ?? 'Отель',
                'stars' => $stars,
                'priceFrom' => round($priceFrom),
                'priceAvg' => round((float)($hotel['priceAvg'] ?? $priceFrom)),
                'location' => $hotel['location']['name'] ?? $query,
                'country' => $hotel['location']['country'] ?? '',
                'currency' => strtoupper($currency),
                'bookingUrl' => 'https://search.hotellook.com/hotels?hotelId=' . rawurlencode((string)($hotel['hotelId'] ?? ''))
                    . '&checkIn=' . rawurlencode($checkIn)
                    . '&checkOut=' . rawurlencode($checkOut)
                    . '&adults=2&currency=' . rawurlencode($currency)
                    . '&language=ru',
            ];
        }
    }

    usort($hotels, fn($a, $b) => $a['priceFrom'] <=> $b['priceFrom']);

    json_response([
        'success' => true,
        'source' => 'hotellook-cache',
        'query' => $query,
        'checkIn' => $checkIn,
        'checkOut' => $checkOut,
        'currency' => $currency,
        'count' => count($hotels),
        'hotels' => $hotels,
        'note' => 'Это реальные кэшированные цены Hotellook. Если по редким датам пусто — откройте поиск партнёра.',
    ]);
} catch (Throwable $e) {
    json_response([
        'success' => false,
        'error' => $e->getMessage(),
    ], 502);
}
