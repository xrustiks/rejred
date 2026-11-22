<?php
$envPath = dirname(__DIR__, 2) . '/.env';

if (is_readable($envPath)) {
    $lines = file($envPath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);

    foreach ($lines as $line) {
        $line = trim($line);

        if ($line === '' || str_starts_with($line, '#') || !str_contains($line, '=')) {
            continue;
        }

        [$name, $value] = explode('=', $line, 2);
        $name = trim($name);
        $value = trim($value);

        if (
            strlen($value) >= 2
            && (($value[0] === '"' && $value[strlen($value) - 1] === '"')
                || ($value[0] === "'" && $value[strlen($value) - 1] === "'"))
        ) {
            $value = substr($value, 1, -1);
        }

        if (!array_key_exists($name, $_ENV) && getenv($name) === false) {
            $_ENV[$name] = $value;
            putenv($name . '=' . $value);
        }
    }
}

$password = $_ENV['ADMIN_PASSWORD'] ?? getenv('ADMIN_PASSWORD');

if (!is_string($password) || $password === '') {
    throw new RuntimeException('ADMIN_PASSWORD is not configured.');
}

return [
    'password' => $password,
    'events_file' => __DIR__ . '/data/events.json',
];
