const MATSUYAMA = [33.839157, 132.765575];

const map = L.map("map", {
  center: MATSUYAMA,
  zoom: 14,
  zoomControl: true,
  scrollWheelZoom: true,
});

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const marker = L.marker(MATSUYAMA).addTo(map);
marker.bindPopup("松山市中心部").openPopup();

// Provide an initial smooth zoom effect.
map.flyTo(MATSUYAMA, 14, {
  duration: 1.4,
});
