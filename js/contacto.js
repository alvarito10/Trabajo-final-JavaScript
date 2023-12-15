/*--------JS CONTACTO-----------*/

// Si los servicios de geolocalización están disponibles
if(navigator.geolocation){
    // Para obtener la ubicación actual llama getCurrentPosition.
    navigator.geolocation.getCurrentPosition(sucess, error, options);
}else{
    alert("Los servicios de geolocalización no están disponibles");
}

var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximunAge: 0
};

//Si todo va bien
function sucess(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    // Iniciamos mapa de centro Madrid en las coordenadas del usuario
    let map1 = L.map('map1',{
        center: [latitude, longitude],
        zoom: 12
    });

    //Aplicamos tipo de mapa
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18
    }).addTo(map1);

    //Se traza la ruta
    let control = L.Routing.control({
        waypoints: [
            L.latLng(latitude, longitude),
            L.latLng(40.499694, -3.66062)
        ],
        language: 'es',
        show: false,  //oculto la ruta porque la letra de mi trabajo es blanca y no se ve bien
        //Ponemos Popup con datos de nuestros centros, con image
        createMarker: function(i, wp, nWps){
            switch (i){
                case 0:
                return L.marker(wp.latLng, {
                    draggable: true                
                }).bindPopup('<b>' + 'Ubicación actual' + '</b>');
                case nWps - 1:
                return L.marker(wp.latLng, {
                    draggable: true
                }).bindPopup('<b>' + '<h2>Inetum España, S.A.</h2>' + '<img src="../assets/images/inetum-madrid.jpg">' + '<p><strong>Dirección:</strong> C/ María de Portugal, 9-11, 28050 Madrid</p>' + '<p><strong>Teléfono: 913 87 47 00'  + '</b>');
                default:
                return L.marker(wp.latLng, {
                    draggable: true
                }).bindPopup("<b>" + "Waypoint" + "</b>");
            }
        }
    
    }).addTo(map1);

    // Iniciamos mapa de centro Barcelona en las coordenadas del usuario
    let map2 = L.map('map2',{
        center: [latitude, longitude],
        zoom: 0
    });

    //Aplicamos tipo de mapa
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18
    }).addTo(map2);

    //Se traza la ruta
    let control2 = L.Routing.control({
        waypoints: [
            L.latLng(latitude, longitude),
            L.latLng(41.4113756, 2.1922824)
        ],
        language: 'es',
        show: false,   //oculto la ruta porque la letra de mi trabajo es blanca y no se ve bien
        //Ponemos Popup con datos de nuestros centros, con image
        createMarker: function(i, wp, nWps){
            switch (i){
                case 0:
                return L.marker(wp.latLng, {
                    draggable: true                
                }).bindPopup('<b>' + 'Ubicación actual' + '</b>');
                case nWps - 1:
                return L.marker(wp.latLng, {
                    draggable: true
                }).bindPopup('<b>' + '<h2>Inetum España, S.A.</h2>' + '<img src="../assets/images/inetum-barcelona.jpg">' + '<p><strong>Dirección:</strong> Parque empresarial 22@, Carrer de Fluvià, 65, 08019 Barcelona</p>' + '<p><strong>Teléfono: 932 16 21 00' + '</b>');
                default:
                return L.marker(wp.latLng, {
                    draggable: true
                }).bindPopup("<b>" + "Waypoint" + "</b>");
            }
        }
    
    }).addTo(map2);
}


// Si da error algo, les aparecerá el mapa de con la ubicación del centro

function error(){
    let map1 = L.map('map1',{
        center: [40.499694, -3.66062],
        zoom: 17

    });
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'

    }).addTo(map1);

    let map2 = L.map('map2',{
        center: [41.4113756, 2.1922824],
        zoom: 17

    });
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        
    }).addTo(map2);

}