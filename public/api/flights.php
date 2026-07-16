<?php
require_once 'config.php';

// Получаем параметры
$from = isset($_GET['from']) ? strtoupper($_GET['from']) : 'MOW';
$to = isset($_GET['to']) ? strtoupper($_GET['to']) : '';

if (!$to) {
    echo json_encode(['flights' => [], 'error' => 'No destination']);
    exit;
}

// Запрос к Aviasales API (цены за год)
$url = "https://api.travelpayouts.com/v2/prices/latest?origin={$from}&destination={$to}&period_type=year&currency=RUB&token=" . TP_TOKEN . "&marker=" . TP_MARKER . "&limit=10";

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_TIMEOUT, 10);
$response = curl_exec($ch);
curl_close($ch);

$data = json_decode($response, true);
$flights = [];

if (isset($data['data'])) {
    foreach ($data['data'] as $f) {
        $flights[] = [
            'from' => $f['origin'],
            'to' => $f['destination'],
            'price' => $f['value'],
            'airline' => $f['airline'],
            'date' => $f['departure_at'],
            'partnerUrl' => $f['link']
        ];
    }
}

echo json_encode(['flights' => $flights, 'total' => count($flights)]);
