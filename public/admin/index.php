<?php
session_start();
$config = require __DIR__ . '/config.php';
$dataDirectory = dirname($config['events_file']);

if (!is_dir($dataDirectory)) {
  mkdir($dataDirectory, 0755, true);
}

if (isset($_POST['logout'])) {
    session_destroy();
    header('Location: /admin/');
    exit;
}

if (!isset($_SESSION['admin_logged_in'])) {
    $error = '';
    if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['password'])) {
        if (password_verify($_POST['password'], $config['password_hash'])) {
            $_SESSION['admin_logged_in'] = true;
            header('Location: /admin/');
            exit;
        }
        $error = 'Invalid password.';
    }
    ?>
    <!doctype html>
    <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Admin Login</title>
      <style>
        body { font-family: Arial, sans-serif; background: #e0f2fe; margin: 0; padding: 40px; }
        .card { max-width: 420px; margin: 0 auto; background: #fff; padding: 24px; border-radius: 16px; box-shadow: 0 10px 30px rgba(0,0,0,.08); }
        input, button, textarea { width: 100%; box-sizing: border-box; padding: 12px; margin-top: 10px; border-radius: 10px; border: 1px solid #cbd5e1; font: inherit; }
        button { background: #0284c7; color: white; border: 0; cursor: pointer; }
        .error { color: #b91c1c; margin-top: 10px; }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>Admin Login</h1>
        <form method="post">
          <input type="password" name="password" placeholder="Admin password" autofocus />
          <button type="submit">Sign in</button>
        </form>
        <?php if ($error): ?>
          <p class="error"><?php echo htmlspecialchars($error, ENT_QUOTES, 'UTF-8'); ?></p>
        <?php endif; ?>
      </div>
    </body>
    </html>
    <?php
    exit;
}

$eventsFile = $config['events_file'];
$eventsData = [
    'title' => 'Events',
    'description' => 'Upcoming events and appearances.',
    'intro' => 'This page will list upcoming events, meetups, live recordings and public appearances. If you want to invite the host to speak or collaborate, please contact us via the Contact link on the About page.',
    'emptyState' => 'No events scheduled yet. Check back soon or follow us on Instagram for updates.',
    'events' => [],
];

if (file_exists($eventsFile)) {
    $decoded = json_decode(file_get_contents($eventsFile), true);
    if (is_array($decoded)) {
        $eventsData = array_merge($eventsData, $decoded);
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['save_events'])) {
    $events = [];
  $titles = $_POST['event_title'] ?? [];
  $dates = $_POST['event_date'] ?? [];
  $locations = $_POST['event_location'] ?? [];
  $descriptions = $_POST['event_description'] ?? [];
  $links = $_POST['event_link'] ?? [];

  $count = max(count($titles), count($dates), count($locations), count($descriptions), count($links));
  for ($i = 0; $i < $count; $i++) {
    $title = trim($titles[$i] ?? '');
    $date = trim($dates[$i] ?? '');
    $location = trim($locations[$i] ?? '');
    $description = trim($descriptions[$i] ?? '');
    $link = trim($links[$i] ?? '');

        if ($title === '' && $date === '' && $location === '' && $description === '' && $link === '') {
            continue;
        }

        $event = ['title' => $title ?: 'Untitled event'];
        if ($date !== '') { $event['date'] = $date; }
        if ($location !== '') { $event['location'] = $location; }
        if ($description !== '') { $event['description'] = $description; }
        if ($link !== '') { $event['link'] = $link; }
        $events[] = $event;
    }

    $eventsData['events'] = $events;

    file_put_contents($eventsFile, json_encode($eventsData, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES) . PHP_EOL);
    if (file_exists(__DIR__ . '/../index.php')) {
      @touch(__DIR__ . '/../index.php');
    }
    $savedMessage = 'Events updated successfully.';
}

$events = $eventsData['events'] ?? [];
$count = max(1, count($events));
?>
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Admin - Events</title>
  <style>
    body { font-family: Arial, sans-serif; background: #f8fafc; margin: 0; padding: 24px; color: #0f172a; }
    .wrap { max-width: 1100px; margin: 0 auto; }
    .header { display: flex; justify-content: space-between; align-items: center; gap: 16px; margin-bottom: 24px; }
    .card { background: #fff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 20px; box-shadow: 0 10px 25px rgba(15, 23, 42, 0.05); margin-bottom: 20px; }
    .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
    input, textarea, button { width: 100%; box-sizing: border-box; font: inherit; }
    input, textarea { padding: 12px; border: 1px solid #cbd5e1; border-radius: 10px; margin-top: 6px; }
    textarea { min-height: 100px; resize: vertical; }
    button { padding: 12px 16px; border: 0; border-radius: 10px; background: #0284c7; color: #fff; font-weight: 700; cursor: pointer; }
    .secondary { background: #0f172a; }
    .danger { background: #b91c1c; }
    .message { padding: 12px 14px; border-radius: 10px; background: #dcfce7; color: #166534; margin-bottom: 16px; }
    .event { border: 1px dashed #cbd5e1; border-radius: 14px; padding: 16px; margin-top: 16px; }
    .event-header { display: flex; justify-content: space-between; align-items: center; gap: 12px; margin-bottom: 8px; }
    .event-actions { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 16px; }
    .small { color: #475569; font-size: 14px; }
    .add-button { background: #0f172a; }
    @media (max-width: 768px) { .grid { grid-template-columns: 1fr; } .header { flex-direction: column; align-items: flex-start; } }
  </style>
</head>
<body>
  <div class="wrap">
    <div class="header">
      <div>
        <h1>Events Admin</h1>
        <p class="small">Edit the Events section content from one protected page.</p>
      </div>
      <form method="post">
        <button type="submit" name="logout" value="1" class="secondary">Log out</button>
      </form>
    </div>

    <?php if (!empty($savedMessage)): ?>
      <div class="message"><?php echo htmlspecialchars($savedMessage, ENT_QUOTES, 'UTF-8'); ?></div>
    <?php endif; ?>

    <form method="post">
      <input type="hidden" name="save_events" value="1" />

      <div class="card">
        <h2>Events</h2>
        <p class="small">Add, edit, or delete individual events here. The changes save into the shared Events JSON file.</p>
        <div id="events-list">
          <?php for ($i = 0; $i < $count; $i++):
            $event = $events[$i] ?? [];
          ?>
            <div class="event">
              <div class="event-header">
                <h3>Event <?php echo $i + 1; ?></h3>
                <button type="button" class="danger remove-event">Delete</button>
              </div>
              <div class="grid">
                <label>
                  Title
                  <input type="text" name="event_title[]" value="<?php echo htmlspecialchars($event['title'] ?? '', ENT_QUOTES, 'UTF-8'); ?>" />
                </label>
                <label>
                  Date
                  <input type="date" name="event_date[]" value="<?php echo htmlspecialchars($event['date'] ?? '', ENT_QUOTES, 'UTF-8'); ?>" />
                </label>
                <label>
                  Location
                  <input type="text" name="event_location[]" value="<?php echo htmlspecialchars($event['location'] ?? '', ENT_QUOTES, 'UTF-8'); ?>" />
                </label>
                <label>
                  Link
                  <input type="url" name="event_link[]" value="<?php echo htmlspecialchars($event['link'] ?? '', ENT_QUOTES, 'UTF-8'); ?>" />
                </label>
              </div>
              <label>
                Description
                <textarea name="event_description[]"><?php echo htmlspecialchars($event['description'] ?? '', ENT_QUOTES, 'UTF-8'); ?></textarea>
              </label>
            </div>
          <?php endfor; ?>
        </div>
      </div>

      <div class="event-actions">
        <button type="button" class="add-button" id="add-event">Add event</button>
        <button type="submit">Save events</button>
      </div>
    </form>
  </div>

  <template id="event-template">
    <div class="event">
      <div class="event-header">
        <h3>Event</h3>
        <button type="button" class="danger remove-event">Delete</button>
      </div>
      <div class="grid">
        <label>
          Title
          <input type="text" name="event_title[]" value="" />
        </label>
        <label>
          Date
          <input type="date" name="event_date[]" value="" />
        </label>
        <label>
          Location
          <input type="text" name="event_location[]" value="" />
        </label>
        <label>
          Link
          <input type="url" name="event_link[]" value="" />
        </label>
      </div>
      <label>
        Description
        <textarea name="event_description[]"></textarea>
      </label>
    </div>
  </template>

  <script>
    const eventsList = document.getElementById('events-list');
    const addButton = document.getElementById('add-event');
    const template = document.getElementById('event-template');

    function refreshTitles() {
      const events = eventsList.querySelectorAll('.event');
      events.forEach((event, index) => {
        const heading = event.querySelector('h3');
        if (heading) {
          heading.textContent = `Event ${index + 1}`;
        }
      });
    }

    function bindRemoveButtons() {
      eventsList.querySelectorAll('.remove-event').forEach((button) => {
        button.onclick = () => {
          const eventCard = button.closest('.event');
          if (eventCard) {
            eventCard.remove();
            if (!eventsList.querySelector('.event')) {
              addEvent();
            }
            refreshTitles();
          }
        };
      });
    }

    function addEvent() {
      const fragment = template.content.cloneNode(true);
      eventsList.appendChild(fragment);
      bindRemoveButtons();
      refreshTitles();
    }

    addButton.addEventListener('click', addEvent);
    bindRemoveButtons();
    refreshTitles();
  </script>
</body>
</html>
