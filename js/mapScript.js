
let map = L.map('map').setView([51.23009, 4.41616], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
// define rectangle geographical bounds
let bounds = [[51.23041, 4.4155], [51.22991, 4.41675]];

// create an orange rectangle
L.rectangle(bounds, {color: "#ff7800", weight: 1}).addTo(map);

// zoom the map to the rectangle bounds
map.fitBounds(bounds);




L.marker([51.23009, 4.41616]).addTo(map);

