let navBurger = document.querySelector('.menu-burger'),
    headerNav = document.querySelector('.header-nav'),
    body = document.querySelector('body')
    


navBurger.addEventListener('click', function(){
    navBurger.classList.toggle('menu-burger_active')
    headerNav.classList.toggle('header-nav_active')
    body.classList.toggle('lock')
})


 $(document).ready(function(){
    $(".header-nav-list").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top,}, 500);
    });
});

// Cache selectors
var lastId,
    topMenu = $(".header-nav-list"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 300);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href='#"+id+"']").parent().addClass("active");
   }                   
});


$(document).ready(function(){   
    var $element = $('.block-counter');
    let counter = 0;
    $(window).scroll(function() {
        var scroll = $(window).scrollTop() + $(window).height();
        //Если скролл до конца елемента
        //var offset = $element.offset().top + $element.height();
        //Если скролл до начала елемента
        var offset = $element.offset().top

        if (scroll > offset && counter == 0) {
            $('.block-counter__number').each(function () {
                $(this).prop('Counter',0).animate({
                    Counter: $(this).text()
                    }, {
                    duration: 1500,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
            counter = 1;
        }
    });
    $('.btn').click(function(){
        $('#block').slideUp();
    });

   });

   