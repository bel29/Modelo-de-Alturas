function leerArchivo2(evt) {
    
    console.log("llega")
    let file = evt.target.files[0];
    let reader = new FileReader();
    
    reader.onload = (e)=> {
        //cuando el archivo se termino de cargar 
        crearArreglosDeDatos2(e.target.result)
    };
    //leemos el contenido del archivo seleccionado 
        reader.readAsText(file);

           
}
//console.log("llefga")
document.querySelector('#file2').addEventListener('change',leerArchivo2,false);

function crearArreglosDeDatos2(data){
 
    const todasLasFilas = data.split("\r");
    // console.log("xd")
    var a_mostrar = []
    stack.push ("ID, latitud,longitud,altura_elipsoidal,altura_ortométrica,altura_oficial,altura_PRH(Wharton) ") //cargo la primer fija a mano ya que no la agrego al nuevo_array y como al generar el csv me queda a partir de la segunda columna le agrego un espacio 
    for (let fila = 1; fila < todasLasFilas.length-1; fila++){
        a_mostrar = todasLasFilas[fila].split(",");
        console.log(a_mostrar)
      
            var altura_oficial = coordsToRad2(parseFloat(a_mostrar[1]),parseFloat(a_mostrar[2]),parseFloat(a_mostrar[3]),parseFloat(a_mostrar[4]))
            if (altura_oficial == "false"){
                a_mostrar[5]=a_mostrar[6]= "punto_invalido"
            }
            else {
                altura_oficial = parseFloat(altura_oficial)
                altutura_prh = altura_oficial + 0.91;
                a_mostrar[5]=(altura_oficial).toFixed(4); //agrego la altura oficial al arreglo y solo hago push del arreglo, es lo mismo, no cambia nada
                a_mostrar[6] = (altutura_prh).toFixed(4);
            }
            stack.push(a_mostrar)
            //stack.push(altura_oficial)    
        
   
    }
    crearCSV(stack)
    
   // document.getElementById("btn_file").reload();
    
}
function coordsToRad2(latitud,longitud,alt_elip,alt_ort) {
  
    console.log(point)
    controlarLimites(latitud,longitud);

    var lat_rad = parseFloat(latitud*pi/180);
    
    var long_rad = parseFloat(longitud*pi/180);
    
    
    var altura_elipsoidal = alt_elip;
    var altura_ortometrica = alt_ort;
    
    //console.log(lat_rad,long_rad,altura_elipsoidal,altura_ortometrica);
    
    //llama a la funcion que hace el calculo de altura oficial 
        var alt_oficial = calculoAlturaCeroOficial(lat_rad,long_rad,altura_elipsoidal,altura_ortometrica); //cambie elip por elipsoidal
        console.log(altura_oficial)
        point.bindPopup(" (" + latitud + ", " + longitud + ")" + "<br>Altura Cero Oficial: " + alt_oficial.toFixed(2) + "<br>Altura PRH: " + (alt_oficial+0.91).toFixed(2))
        return alt_oficial; //bien
}

// function CalculoAlturaCeroOficial2(lat_rad,long_rad,h,alt_ort){
//     //console.log(lat_rad,long_rad,h,alt_ort);
//     var W = Math.sqrt(1-(e_cuadrado)*(Math.pow(Math.sin(lat_rad),2)));  
    
//     let arr_1 = [ 1, 
//                 (Math.cos(lat_rad) * Math.cos(long_rad)),
//                 (Math.cos(lat_rad) * Math.sin(long_rad)),
//                 (Math.sin(lat_rad)),
//                 ((Math.cos(lat_rad) * Math.sin(long_rad))*(Math.sin(lat_rad)))/W,
//                 (Math.cos(lat_rad) * Math.sin(lat_rad) * Math.cos(long_rad) / W),
//                 a*W+h
                
//                 ];
                
//     var correccion = 0;
    
//     for (let i=0; i< arr_1.length; i++) {
//         correccion = correccion + (arr_1[i]*arr_2[i]);
//     }
//     //console.log(correccion);
    
//     var correc = correccion + corr_medio;
//     //console.log(correc);

    
    
//     altura_oficial = (alt_ort - correc).toFixed(3);
//     //console.log("ALTURA OFICIAL: ",altura_oficial);
    
//     return altura_oficial;
// }