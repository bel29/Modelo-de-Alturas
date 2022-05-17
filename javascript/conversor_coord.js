function Convertir() {

    var latitud = document.getElementById("latitud_decimal").value;
    var longitud = document.getElementById("longitud_decimal").value;
    coord_lat= dec2gms(latitud,"LATITUD")
    coord_long = dec2gms(longitud,"LONGITUD")
    latitud = Math.abs(latitud);
    longitud = Math.abs(longitud)

    var grados_lat;
    var minutos_lat;
    var segundos_lat;

    var grados_long;
    var minutos_long;
    var segundos_long;

    grados_lat = Math.trunc(latitud);
    minutos_lat = ((latitud-grados_lat)*60);
    var parte_entera_min_lat = Math.trunc(minutos_lat);
    segundos_lat = (minutos_lat-parte_entera_min_lat)*60;

    grados_long = Math.trunc(longitud);
    minutos_long = (longitud-grados_long)*60;
    var parte_entera_min_long = Math.trunc(minutos_long);
    segundos_long = (minutos_long-parte_entera_min_long)*60;
    
    document.getElementById("agregarResultado").innerHTML +=grados_lat+"° "+ Math.trunc(minutos_lat)+"' " + segundos_lat.toFixed(1)+"'' "+coord_lat+"\n"+ grados_long+"° "+ Math.trunc(minutos_long)+"' " + segundos_long.toFixed(1)+"'' "+coord_long+"\r"
}

function Limpiar(){
    document.getElementById("longitud_decimal").value = "";
    document.getElementById("latitud_decimal").value = "";
    document.getElementById("agregarResultado").value="";
}


 function dec2gms(valor,tipo) {
     signo = (valor < 0 ) ? -1: 1; direccion = (tipo == "LATITUD") ?
        ((signo > 0) ? 'N' : 'S'):
        ((signo > 0) ? 'E' : 'W');
        return direccion
 }
