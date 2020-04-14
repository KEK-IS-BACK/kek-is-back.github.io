$(document).ready(function(){
    $('.burger').click(function(event){
        $('.burger, .header-nav').toggleClass('active');
        $('body').toggleClass('lock');
    })

    $(".btn-ricardo").click(function () {
        $(".btn-ricardo").hide();
        $(".social-ricardo").fadeIn();
    });
    $(".btn-alberto").click(function () {
        $(".btn-alberto").hide();
        $(".social-alberto").fadeIn();
    });
    $(".btn-thomas").click(function () {
        $(".btn-thomas").hide();
        $(".social-thomas").fadeIn();
    });
});
