/*--------JS MENU-----------*/

//Para que el menú se quede arriba, haciendo scroll vertical
$(document).ready(function(){
    let altura = $('nav').offset().top;
    $(window).on('scroll', function(){
        if($(window).scrollTop() > altura){
            $('nav').addClass('menu-fixed');
        }else{
            $('nav').removeClass('menu-fixed');
        }
    });
});





