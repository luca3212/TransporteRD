var map = L.map("map", { attributionControl: false,center: [-33.67492567436574, -65.46117782592773], zoom: 13, zoomControl: false}); //VM
L.control.zoom({position: "topleft"}).addTo(map);

var osmLayer = L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap<\/a> contributors',
        minZoom: 10,
        zoomControl: false
});

L.control.attribution({
        position: 'bottomleft'
}).addTo(map);

var capaBN = L.tileLayer('https://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        minZoom: 10,
        zoomControl: false
});
capaBN.addTo(map);

var baseMaps = {
        "Mapa BN": capaBN,
        "Mapa Base": osmLayer
}        
   

L.control.layers(baseMaps,null,{
        position: 'bottomleft', // 'topleft', 'bottomleft', 'bottomright'
        collapsed: false // true
}).addTo(map);

//capa principal
var capaPrincipal = L.layerGroup().addTo(map);