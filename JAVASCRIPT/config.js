//Configuracion de leyenda derecha
var info = L.control();

info.onAdd = function (map) {
this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
this.update();
return this._div;
};


info.update = function (obj) {
    //alert("entro"+ obj.properties.name);
    if(obj){
            switch(obj.properties.id){
                    case("0"):{
                        //linea A
                        this._div.innerHTML = `
                        <div class="bloque1">
                            <div class="SupLeft"><span class="txt"><h3>Recorrido</h3></span><span class="number"><h2>LINEA A</h2></span></div>
                            <div class="SupRight">
                            Ida 
                            <hr style="border: 2px solid #64d637;opacity:0.8;" />
                            Vuelta 
                            <hr style="border: 2px dashed #4cb224;" />
                            </div>
                        </div>
                        <div class="bloque2">
                            <div class="filaInferior"><span class="txt"><h3>Frecuencia</h3></span><span class="number"><h2>${obj.properties.frecuencia}</h2>min.</span></div>
                            <div id="medio" class="filaInferior"><span class="txt"><h3>Recorrido total</h3></span><span class="number"><h2>${obj.properties.km}</h2>km.</span></div>
                            <div class="filaInferior"><span class="txt"><h3>Cant. de unidades</h3></span><span class="number"><h2>${obj.properties.unid}</h2>unid.</span></div>
                        </div>`;
                        break;        
                    }
                    case("1"):{
                            //linea E
                            this._div.innerHTML = `
                            <div class="bloque1">
                                <div class="SupLeft"><span class="txt"><h3>Recorrido</h3></span><span class="number"><h2>LINEA E</h2></span></div>
                                <div class="SupRight">
                                Ida 
                                <hr style="border: 2px solid #37b3d6;opacity:0.8;" />
                                Vuelta 
                                <hr style="border: 2px dashed #2493b2;" />
                                </div>
                            </div>
                            <div class="bloque2">
                                <div class="filaInferior"><span class="txt"><h3>Frecuencia</h3></span><span class="number"><h2>${obj.properties.frecuencia}</h2>min.</span></div>
                                <div id="medio" class="filaInferior"><span class="txt"><h3>Recorrido total</h3></span><span class="number"><h2>${obj.properties.km}</h2>km.</span></div>
                                <div class="filaInferior"><span class="txt"><h3>Cant. de unidades</h3></span><span class="number"><h2>${obj.properties.unid}</h2>unid.</span></div>
                            </div>`;
                            break;        
                    }
                    case("2"):{
                            //linea Zona Este
                            this._div.innerHTML = `
                            <div class="bloque1">
                                <div class="SupLeft"><span class="txt"><h3>Recorrido</h3></span><span class="number EO"><h2>LINEA ZONA ESTE</h2></span></div>
                                <div class="SupRight">
                                Ida 
                                <hr style="border: 2px solid #d65b37;opacity:0.8;" />
                                Vuelta 
                                <hr style="border: 2px dashed #b24424;" />
                                </div>
                            </div>
                            <div class="bloque2">
                                <div class="filaInferior"><span class="txt"><h3>Frecuencia</h3></span><span class="number"><h2>${obj.properties.frecuencia}</h2>min.</span></div>
                                <div id="medio" class="filaInferior"><span class="txt"><h3>Recorrido total</h3></span><span class="number"><h2>${obj.properties.km}</h2>km.</span></div>
                                <div class="filaInferior"><span class="txt"><h3>Cant. de unidades</h3></span><span class="number"><h2>${obj.properties.unid}</h2>unid.</span></div>
                            </div>`;
                            break;        
                    }
                    case("3"):{
                            //linea Zona Oeste
                            this._div.innerHTML = `
                            <div class="bloque1">
                                <div class="SupLeft"><span class="txt"><h3>Recorrido</h3></span><span class="number EO"><h2>LINEA ZONA OESTE</h2></span></div>
                                <div class="SupRight">
                                Ida 
                                <hr style="border: 2px solid #aa37d6;opacity:0.8;" />
                                Vuelta 
                                <hr style="border: 2px dashed #8b24b2;" />
                                </div>
                            </div>
                            <div class="bloque2">
                                <div class="filaInferior"><span class="txt"><h3>Frecuencia</h3></span><span class="number"><h2>${obj.properties.frecuencia}</h2>min.</span></div>
                                <div id="medio" class="filaInferior"><span class="txt"><h3>Recorrido total</h3></span><span class="number"><h2>${obj.properties.km}</h2>km.</span></div>
                                <div class="filaInferior"><span class="txt"><h3>Cant. de unidades</h3></span><span class="number"><h2>${obj.properties.unid}</h2>unid.</span></div>
                            </div>`;
                            break;        
                    }
            }
    }else{
        this._div.innerHTML = `
                        <div id="bloqueInicio">
                            <div class="fila1">
                                <div class="Cuadro1">
                                    <span class="txt"><h3>Recorrido</h3></span>
                                    <span class="number"><h2>LINEA A</h2></span>
                                    Ida 
                                    <hr style="border: 2px solid #64d637;opacity:0.8;" />
                                    Vuelta 
                                    <hr style="border: 2px dashed #4cb224;" />
                                </div>
                                <div class="Cuadro1 Cuadro2">
                                    <span class="txt"><h3>Recorrido</h3></span>
                                    <span class="number"><h2>LINEA E</h2></span>
                                    Ida 
                                    <hr style="border: 2px solid #37b3d6;opacity:0.8;" />
                                    Vuelta 
                                    <hr style="border: 2px dashed #2493b2;" />
                                </div>
                            </div>
                            <div class="fila2">
                                <div class="Cuadro1">
                                    <span class="txt"><h3>Recorrido</h3></span>
                                    <span class="number EO"><h2>LINEA ZONA ESTE</h2></span>
                                    Ida 
                                    <hr style="border: 2px solid #d65b37;opacity:0.8;" />
                                    Vuelta 
                                    <hr style="border: 2px dashed #b24424;" />
                                </div>
                                <div class="Cuadro1 Cuadro2">
                                    <span class="txt"><h3>Recorrido</h3></span>
                                    <span class="number EO"><h2>LINEA ZONA OESTE</h2></span>
                                    Ida 
                                    <hr style="border: 2px solid #aa37d6;opacity:0.8;" />
                                    Vuelta 
                                    <hr style="border: 2px dashed #8b24b2;" />
                                </div>
                            </div>
                        </div>
                        `;
    }
};


info.addTo(map);

//funcion select Recorrido a mostrar
function recorridoSelect(){
    //linea seleccionada
    var miSelect = document.getElementById("selectR").value;
    //limpia las capas
    capaPrincipal.clearLayers();
    //muestra las lineas segun la seleccion
    cargaLineas(miSelect);
}

//Agregamos todas las lineas al mapa
cargaLineas("Todas");

function cargaLineas(dat){
    if(dat=="Todas"){
            capaPrincipal.addLayer(LineaA_IDA);
            capaPrincipal.addLayer(LineaA_VUELTA);
            capaPrincipal.addLayer(LineaA_marca);

            capaPrincipal.addLayer(LineaE_IDA);
            capaPrincipal.addLayer(LineaE_VUELTA);
            capaPrincipal.addLayer(LineaE_marca);

            capaPrincipal.addLayer(LineaZONAOESTE_IDA);
            capaPrincipal.addLayer(LineaZONAOESTE_VUELTA);
            capaPrincipal.addLayer(LineaZONAOESTE_marca);

            capaPrincipal.addLayer(LineaZONAESTE_IDA);
            capaPrincipal.addLayer(LineaZONAESTE_VUELTA);
            capaPrincipal.addLayer(LineaZONAESTE_marca);
            info.update();
    }else{
            capaPrincipal.addLayer(window[dat+"_IDA"]);
            capaPrincipal.addLayer(window[dat+"_VUELTA"]);
            capaPrincipal.addLayer(window[dat+"_marca"]);
            info.update(window[dat+"_RI"]);        
    }
}




    