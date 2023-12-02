importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');

const CACHE_NAME = 'my-app-v1.0';

if (workbox) {
    console.log(`Workbox is loaded`);

    workbox.core.setCacheNameDetails({
        prefix: 'my-app',
        suffix: 'v1.0',
        precache: 'install-time',
        runtime: 'run-time',
    });

    // Cache images using CacheFirst strategy
    workbox.routing.registerRoute(
        ({ request }) => request.destination === 'image',
        new workbox.strategies.CacheFirst()
    );

    // Cache scripts using StaleWhileRevalidate strategy
    workbox.routing.registerRoute(
        ({ request }) => request.destination === 'script',
        new workbox.strategies.StaleWhileRevalidate()
    );

    // Clean up old caches during activation
    self.addEventListener('activate', event => {
        event.waitUntil(
            caches.keys().then(cacheNames => {
                return Promise.all(
                    cacheNames
                        .filter(cacheName => cacheName.startsWith('my-app') && cacheName !== CACHE_NAME)
                        .map(cacheName => caches.delete(cacheName))
                );
            }).then(() => {
                // Claim clients and trigger a reload
                return self.clients.claim().then(() => {
                    self.clients.matchAll().then(clients => {
                        clients.forEach(client => {
                            client.postMessage({ action: 'reload' });
                        });
                    });
                });
            })
        );
    });

    // Skip waiting during installation
    self.addEventListener('install', event => {
        event.waitUntil(self.skipWaiting());
    });

    // Ensure that clients are claimed immediately
    workbox.core.clientsClaim();
} else {
    console.log(`Workbox didn't load`);
}