const CACHE_NAME = 'krzysztof-v1';
const ASSETS = [
    './',
    './index.html',
    './style.css',
    './script.js',
    'https://ziggy83pl.github.io/zasoby/portfolio-logos.js',
    'https://ziggy83pl.github.io/zasoby/magnifier.js'
];

self.addEventListener('install', (e) => {
    e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
    e.respondWith(caches.match(e.request).then((response) => response || fetch(e.request)));
});