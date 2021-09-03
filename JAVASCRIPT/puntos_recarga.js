var puntoRecarga = {
    "type": "FeatureCollection",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
                                                                                    
    "features": [
        { "type": "Feature", "properties": {"Nombre_PR": "PagoFacil (Supermercado Vea)", "Direccion_PR": "Avenida Mitre N° 679"}, "geometry": { "type": "Point", "coordinates": [ -65.46357973068709 , -33.68073520653438] } },
        { "type": "Feature", "properties": {"Nombre_PR": "Terminal de Ómnibus", "Direccion_PR": "Local 2 (1° piso)"}, "geometry": { "type": "Point", "coordinates": [ -65.46654224395752 , -33.66503232328808] } },
        { "type": "Feature", "properties": {"Nombre_PR": "Saibene II", "Direccion_PR": "Avenida Mitre N° 1690"}, "geometry": { "type": "Point", "coordinates": [ -65.458453 , -33.662738] } },
        { "type": "Feature", "properties": {"Nombre_PR": "Kiosco Paccu", "Direccion_PR": "Avenida Mitre N° 908"}, "geometry": { "type": "Point", "coordinates": [ -65.46257284895394 , -33.67655673479482 ] } },
        { "type": "Feature", "properties": {"Nombre_PR": "Librería Saibene", "Direccion_PR": "Gral. Paz N° 495"}, "geometry": { "type": "Point", "coordinates": [ -65.46372977301547 , -33.68417036765539 ] } },
        { "type": "Feature", "properties": {"Nombre_PR": "After", "Direccion_PR": "Urquiza N° 8"}, "geometry": { "type": "Point", "coordinates": [ -65.46556920333748 , -33.68284518702354 ] } },
        { "type": "Feature", "properties": {"Nombre_PR": "Regaleria", "Direccion_PR": "Marconi N° 13"}, "geometry": { "type": "Point", "coordinates": [ -65.46591077301542 , -33.68333098350197  ] } },
        { "type": "Feature", "properties": {"Nombre_PR": "Kiosco Mauro", "Direccion_PR": "Pedernera N° 378"}, "geometry": { "type": "Point", "coordinates": [ -65.46649333771643 , -33.68575983660215 ] } },
        { "type": "Feature", "properties": {"Nombre_PR": "Drugstore Open", "Direccion_PR": "Belgrano y Junín"}, "geometry": { "type": "Point", "coordinates": [ -65.46845563921511 , -33.68583680651172 ] } },
        { "type": "Feature", "properties": {"Nombre_PR": "Locutorio Central", "Direccion_PR": "Pedernera N° 288"}, "geometry": { "type": "Point", "coordinates": [ -65.46687063075808 , -33.68733918246208  ] } },
        { "type": "Feature", "properties": {"Nombre_PR": "Autoservicio Casi-Todo", "Direccion_PR": "B° F. Sarmiento"}, "geometry": { "type": "Point", "coordinates": [ -65.42790369815025 , -33.705014156935974  ] } },
        { "type": "Feature", "properties": {"Nombre_PR": "JOS-MAR", "Direccion_PR": "Maipú N° 447"}, "geometry": { "type": "Point", "coordinates": [ -65.45350856857955 , -33.676878531719474 ] } },
        { "type": "Feature", "properties": {"Nombre_PR": "Facultad UNSL", "Direccion_PR": "Campus Universitario"}, "geometry": { "type": "Point", "coordinates": [ -65.44833107892265 , -33.64400001762763 ] } },
        { "type": "Feature", "properties": {"Nombre_PR": "Agencia N° 427", "Direccion_PR": "Sallorenzo 1084"}, "geometry": { "type": "Point", "coordinates": [ -65.48259483542263 , -33.66889081043117 ] } },
        { "type": "Feature", "properties": {"Nombre_PR": "La Ribera 24", "Direccion_PR": "B° La Ribera Mzna. 7213 - Casa 16"}, "geometry": { "type": "Point", "coordinates": [ -65.50458759096894 , -33.689069596159385 ] } },
        { "type": "Feature", "properties": {"Nombre_PR": "Multiventas La Marta", "Direccion_PR": "B° La Ribera Mzna. 7099 - Casa 20"}, "geometry": { "type": "Point", "coordinates": [ -65.50095821098418 , -33.695964928816515  ] } },
        { "type": "Feature", "properties": {"Nombre_PR": "PagoFacil (Supermercado Europa)", "Direccion_PR": "B° La Ribera"}, "geometry": { "type": "Point", "coordinates": [-65.50209881669446 , -33.69077990326926 ] } },
        { "type": "Feature", "properties": {"Nombre_PR": "PagoFacil (Supermercado Europa)", "Direccion_PR": "Europa e Irigoyen"}, "geometry": { "type": "Point", "coordinates": [-65.45593918835841 , -33.68965722228427] } }

    ]
}


//PUNTOS DE RECARGAS
//Capas contenedoras
var capaPtoRecarga = new L.layerGroup();

var pto_recarga = new L.geoJson(puntoRecarga, {onEachFeature: popUpInfo1});

//cargamos los datos del marcadores
function popUpInfo1(feature, layer) {
        if (feature.properties && feature.properties.Nombre_PR) {
                layer.bindPopup(`
                <li class='li-TituloPri'>INFORMACIÓN</li>
                <li class='li-Titulo'>Nombre:</li>
                <li class='li-Dato'>${feature.properties.Nombre_PR}</li>
                <li class='li-Titulo'>Dirección:</li>
                <li class='li-Dato'>${feature.properties.Direccion_PR}`);
        }
}

//agregamos las distintas capas
capaPtoRecarga.addLayer(pto_recarga);

var overlayMaps1 = {
        "Puntos de Recarga": capaPtoRecarga
};

L.control.layers(null,overlayMaps1,{
        position: 'bottomright', 
        collapsed: false
}).addTo(map);

$(".leaflet-bottom" + ".leaflet-right").children().prepend('<div id="mapTitle" style="text-align: center;"><span style="font-size:16pt">Recargas</div><hr>');

