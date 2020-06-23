let sliderFor = document.querySelector('.slider-for'),
    sliderNav = document.querySelectorAll('.slider-nav-item')

sliderNav.forEach(function(e){
    e.addEventListener('click', function(){
        let item = this.innerHTML
        sliderFor.innerHTML = item
    })
})