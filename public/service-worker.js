const CACHE_NAME = 'dcc-companion-v1'

// On install, cache the app shell
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      cache.addAll([
        '/dcc-companion/',
        '/dcc-companion/index.html',
        '/dcc-companion/manifest.json',
        '/dcc-companion/icon.svg',
      ])
    )
  )
  self.skipWaiting()
})

// On activate, clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  )
  self.clients.claim()
})

// Fetch: cache-first for assets, network-first for navigation
self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)

  // Only handle same-origin requests
  if (url.origin !== self.location.origin) return

  if (request.mode === 'navigate') {
    // Navigation: try network, fall back to cached index
    event.respondWith(
      fetch(request).catch(() =>
        caches.match('/dcc-companion/index.html')
      )
    )
  } else {
    // Assets: cache-first, populate cache on miss
    event.respondWith(
      caches.match(request).then(
        (cached) =>
          cached ||
          fetch(request).then((response) => {
            const clone = response.clone()
            caches.open(CACHE_NAME).then((cache) => cache.put(request, clone))
            return response
          })
      )
    )
  }
})
