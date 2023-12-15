/*--------SECCIÓN NOTICIAS-----------*/
//Carga de XML con Ajax y Jquery

$(document).ready(
    cargar()
);
function cargar(){
    $.ajax({
        url: 'inetum.xml',
        type: 'GET',
        dataType: 'xml',
        success: function(xml){
            let cadena = "";

            $(xml).find('item').each(function(){
                cadena += "<b>Puesto: </b>" + $(this).find("title").text() + "<br/>";
                cadena += "<b>Categoria: </b>" + $(this).find("category").text() + "<br/>";
                cadena += "<b></b> " + $(this).find("description").text() + "<br/>";
                cadena += "<a href=' " + $(this).find("link").text() + " ' target='_blank'>" + $(this).find("link").text() + "<a/><br/><br/>";
                
            });
            $("#not").html(cadena);
            
            
        },
        error : function(xhr, status){
            alert('Disculpe, existió un problema');
        }
    });
}

















