let width = $('body').innerWidth()
    if (width < 960) {
        $('.sidebar-r').removeClass('sidebar-r').addClass('sidebar-r_mobile');
    }
    if(width > 960){
        $('.sidebar-r_mobile').removeClass('sidebar-r_mobile').addClass('sidebar-r'); 
    }

$(window).resize(function () { 
    let width = $('body').innerWidth()
    if (width < 960) {
        $('.sidebar-r').removeClass('sidebar-r').addClass('sidebar-r_mobile');
    }
    if(width > 960){
        $('.sidebar-r_mobile').removeClass('sidebar-r_mobile').addClass('sidebar-r'); 
    }
 });

$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger, .header-nav').toggleClass('active');
        $('body').toggleClass('lock');
    })
    $('.header__sidebar-r').click(function(event){
        $('.sidebar-r_mobile, .header__sidebar-r').toggleClass('active');
    })
})

$('.masonry').masonry({
    // options
    itemSelector: '.page-projects-content-block',
    columnWidth: 210,
    horizontalOrder: true,
    fitWidth: true,
    gutter: 15,
  });


