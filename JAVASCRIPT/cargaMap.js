var map = L.map("map", {
  attributionControl: false,
  center: [-33.67492567436574, -65.46117782592773],
  zoom: 13,
  zoomControl: false,
}); //VM
L.control.zoom({ position: "topleft" }).addTo(map);

var osmLayer = L.tileLayer("https://{s}.tile.osm.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors',
  minZoom: 10,
  zoomControl: false,
});
osmLayer.addTo(map);

L.control
  .attribution({
    position: "bottomleft",
  })
  .addTo(map);

var baseMaps = {
  "Mapa Base": osmLayer,
};

L.control
  .layers(baseMaps, null, {
    position: "bottomleft", // 'topleft', 'bottomleft', 'bottomright'
    collapsed: false, // true
  })
  .addTo(map);

//capa principal
var capaPrincipal = L.layerGroup().addTo(map);

const myIcon = L.divIcon({ className: "my-div-icon", iconSize: [15, 15] });

if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(
    (location) => {
      var lat = location.coords.latitude;
      var lng = location.coords.longitude;

      var punto_ubi = L.marker([lat, lng], { icon: myIcon }).addTo(map);

      punto_ubi.bindPopup("Aca se encuentra usted!").openPopup();
    },
    (err) => {
      console.warn(err);
    },
    {
      enableHighAccuracy: false,
      timeout: 1500,
      maximumAge: 0,
    }
  );
}
