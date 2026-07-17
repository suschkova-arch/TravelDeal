<?php
// ============================================================
// TravelDeal API config
// ВАЖНО: этот файл должен выполняться PHP, а не отдаваться как текст.
// На Timeweb PHP уже включён, поэтому токен посетители не увидят.
// ============================================================

declare(strict_types=1);

// Ваш Travelpayouts API token.
// Если позже захотите хранить токен в переменной окружения, замените строку ниже на getenv('TRAVELPAYOUTS_TOKEN').
const TRAVELPAYOUTS_TOKEN = 'e097ecc2ea2af56d7bd73fc527237d9b';

// Кэш ответов API, чтобы не тратить лимиты и быстрее отвечать.
const CACHE_TTL_SECONDS = 3600; // 1 час

function json_response(array $payload, int $status = 200): void
{
    http_response_code($status);
    header('Content-Type: application/json; charset=utf-8');
    header('Access-Control-Allow-Origin: https://sushkova-emma.ru');
    header('Access-Control-Allow-Methods: GET, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function cache_dir(): string
{
    $dir = __DIR__ . '/cache';
    if (!is_dir($dir)) {
        @mkdir($dir, 0755, true);
    }
    return $dir;
}

function cache_key(string $url): string
{
    return cache_dir() . '/' . sha1($url) . '.json';
}

function fetch_json(string $url): array
{
    $cacheFile = cache_key($url);
    if (is_file($cacheFile) && (time() - filemtime($cacheFile) < CACHE_TTL_SECONDS)) {
        $cached = file_get_contents($cacheFile);
        $decoded = json_decode((string)$cached, true);
        if (is_array($decoded)) {
            return $decoded;
        }
    }

    if (function_exists('curl_init')) {
        $ch = curl_init($url);
        curl_setopt_array($ch, [
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_TIMEOUT => 12,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTPHEADER => [
                'Accept: application/json',
                'X-Access-Token: ' . TRAVELPAYOUTS_TOKEN,
            ],
        ]);
        $body = curl_exec($ch);
        $http = (int)curl_getinfo($ch, CURLINFO_HTTP_CODE);
        $err = curl_error($ch);
        curl_close($ch);

        if ($body === false || $http >= 400) {
            throw new RuntimeException('API request failed: ' . ($err ?: 'HTTP ' . $http));
        }
    } else {
        $context = stream_context_create([
            'http' => [
                'timeout' => 12,
                'header' => "Accept: application/json\r\nX-Access-Token: " . TRAVELPAYOUTS_TOKEN . "\r\n",
            ],
        ]);
        $body = file_get_contents($url, false, $context);
        if ($body === false) {
            throw new RuntimeException('API request failed');
        }
    }

    $decoded = json_decode((string)$body, true);
    if (!is_array($decoded)) {
        throw new RuntimeException('Invalid JSON from API');
    }

    @file_put_contents($cacheFile, json_encode($decoded, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES));
    return $decoded;
}

function param(string $name, string $default = ''): string
{
    return trim((string)($_GET[$name] ?? $default));
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    json_response(['ok' => true]);
}
