$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger, .header-nav').toggleClass('active');
        $('body').toggleClass('lock');
    })
    $('.header__sidebar-r').click(function(event){
        $('.sidebar-r_mobile, .header__sidebar-r').toggleClass('active');
    })
})
