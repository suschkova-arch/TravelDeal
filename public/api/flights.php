<?php
require_once 'config.php';

$from = isset($_GET['from']) ? $_GET['from'] : 'MOW';
$to = isset($_GET['to']) ? $_GET['to'] : '';

if (!$to) {
    echo json_encode(['flights' => []]);
    exit;
}

// Запрос самых дешевых билетов по направлению
$url = "https://api.travelpayouts.com/v2/prices/latest?origin=" . urlencode($from) . "&destination=" . urlencode($to) . "&currency=RUB&token=" . TP_TOKEN;

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);

$data = json_decode($response, true);
$flights = [];

if (isset($data['data']) && is_array($data['data'])) {
    foreach ($data['data'] as $f) {
        $flights[] = [
            'price' => $f['value'],
            'airline' => $f['airline'],
            'date' => $f['departure_at']
        ];
    }
}

echo json_encode(['flights' => $flights, 'total' => count($flights)]);
