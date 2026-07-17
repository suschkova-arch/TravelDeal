<?php
require_once __DIR__ . '/config.php';

try {
    $origin = strtoupper(param('origin', 'MOW'));
    $destination = strtoupper(param('destination', 'AYT'));
    $currency = strtolower(param('currency', 'rub'));
    $departDate = param('depart_date', ''); // YYYY-MM или YYYY-MM-DD, необязательно

    // Основной Travelpayouts Data API: дешёвые цены.
    $url = 'https://api.travelpayouts.com/v1/prices/cheap?origin=' . rawurlencode($origin)
        . '&destination=' . rawurlencode($destination)
        . '&currency=' . rawurlencode($currency)
        . '&token=' . rawurlencode(TRAVELPAYOUTS_TOKEN);

    if ($departDate !== '') {
        $url .= '&depart_date=' . rawurlencode($departDate);
    }

    $raw = fetch_json($url);
    $data = $raw['data'] ?? [];
    $routeData = $data[$destination] ?? $data;

    $offers = [];
    if (is_array($routeData)) {
        foreach ($routeData as $period => $item) {
            if (!is_array($item) || empty($item['price'])) continue;
            $offers[] = [
                'period' => (string)$period,
                'price' => (int)$item['price'],
                'airline' => $item['airline'] ?? null,
                'flight_number' => $item['flight_number'] ?? null,
                'departure_at' => $item['departure_at'] ?? null,
                'return_at' => $item['return_at'] ?? null,
                'expires_at' => $item['expires_at'] ?? null,
            ];
        }
    }

    usort($offers, fn($a, $b) => $a['price'] <=> $b['price']);
    $best = $offers[0] ?? null;

    json_response([
        'success' => true,
        'source' => 'travelpayouts',
        'origin' => $origin,
        'destination' => $destination,
        'currency' => $currency,
        'best' => $best,
        'offers' => array_slice($offers, 0, 10),
        'note' => 'Цены кэшируются на 1 час. Точная финальная цена подтверждается на сайте партнёра.',
    ]);
} catch (Throwable $e) {
    json_response([
        'success' => false,
        'error' => $e->getMessage(),
    ], 502);
}
