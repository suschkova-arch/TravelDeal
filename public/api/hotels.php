<?php
require_once 'config.php';

// Получаем параметры
$city = isset($_GET['city']) ? urlencode($_GET['city']) : 'Moscow';
$adults = isset($_GET['adults']) ? (int)$_GET['adults'] : 2;

// Формируем URL для Hotellook API
$url = "https://engine.hotellook.com/api/v2/lookup.json?query={$city}&language=ru&currency=rub&limit=10&adults={$adults}&token=" . TP_TOKEN . "&marker=" . TP_MARKER;

// Делаем запрос
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_TIMEOUT, 10);
$response = curl_exec($ch);
curl_close($ch);

if (!$response) {
    echo json_encode(['hotels' => [], 'error' => 'API Timeout']);
    exit;
}

$data = json_decode($response, true);
$result = [];

if (isset($data['results']['hotels'])) {
    foreach ($data['results']['hotels'] as $hotel) {
        $prices = isset($hotel['price']) ? $hotel['price'] : [];
        $cheapest = 0;
        if (!empty($prices)) {
            $priceValues = array_map(function($p) { return $p['price']; }, $prices);
            $cheapest = min($priceValues);
        }

        $result[] = [
            'id' => $hotel['hotelId'],
            'name' => $hotel['name'],
            'city' => $hotel['locationName'] ?? '',
            'price' => $cheapest,
            'priceRUB' => $cheapest,
            'stars' => (int)$hotel['stars'],
            'rating' => $hotel['rating'] ?? 4.5,
            'image' => $hotel['images'][0] ?? null
        ];
    }
}

echo json_encode(['hotels' => $result, 'total' => count($result)]);
