/*--------JS GALERÍA-----------*/

//Función para cagar jquery.slides.min.js
$(function() {
    $('#caja5').slidesjs({
      width: 250,
      height: 150,
      play: {
        active: true,
        auto: true,
        interval: 3000,
        swap: true
      }
    });
  });