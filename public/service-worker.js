self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('offline-cache').then((cache) => {
      return cache.addAll([
        '/',
        '/offline.html', // صفحة fallback عندما يكون المستخدم غير متصل
        '/clients/elIte-school.png',
        '/clients/akg.png',
        '/clients/moi.png',
        '/clients/emirates-steel.png',
        '/clients/enoc.png',
        '/clients/alain-uinversity.png',
        '/clients/almanhal-school.png',
        '/clients/allthihad-school.png',
        '/clients/aldar.png',
        '/clients/albashiar-school.png',
        '/clients/afcoop.png',
        '/clients/adnoc.png',
        '/clients/geant-express.png',
        '/clients/coop.png',
        '/clients/best-cup.png',
        '/clients/abu-dhabi-cycling-club.png',
        '/clients/abu-dhabi-chamber.png',
        '/clients/rabdan-academy.png',
        '/clients/three-star-fashion.png',
        '/clients/brunch-bites.png',
        '/clients/header.webp',
        '/about/header.webp',
        '/about/img.webp',
        '/contact/header.webp',
        '/home/header.webp',
        '/home/stuff.webp',
        '/services/food-logistics.png',
        '/services/food-stuff.png',
        '/services/fresh.png',
        '/services/hospitality.png',
        '/services/outlets.png',
      ])
    })
  )
})

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => {
        return response || fetch(event.request)
      })
      .catch(() => {
        return caches.match('/offline.html')
      })
  )
})
