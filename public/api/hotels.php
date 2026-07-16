<?php
require_once 'config.php';

$city = isset($_GET['city']) ? $_GET['city'] : 'Dubai';
$adults = isset($_GET['adults']) ? (int)$_GET['adults'] : 2;

// Используем cache.json для получения реальных цен из кэша поиска
$url = "http://engine.hotellook.com/api/v2/cache.json?location=" . urlencode($city) . "&currency=rub&limit=10&token=" . TP_TOKEN;

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);

$data = json_decode($response, true);
$result = [];

if (is_array($data)) {
    foreach ($data as $hotel) {
        $result[] = [
            'name' => $hotel['hotelName'] ?? 'Отель',
            'price' => $hotel['priceAvg'] ?? 0,
            'priceRUB' => $hotel['priceAvg'] ?? 0,
            'stars' => $hotel['stars'] ?? 5,
            'location' => $hotel['locationName'] ?? $city
        ];
    }
}

echo json_encode(['hotels' => $result, 'total' => count($result)]);
