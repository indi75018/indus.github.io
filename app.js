var map = L.map('map')setView([48.8931487, 2.3525155], 6);

L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
    maxZoom: 20
}).addTo(map)
