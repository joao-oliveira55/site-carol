const btn_icon_rigth = document.querySelector('.icon-rigth')
const btn_icon_left = document.querySelector('.icon-left')
const bolhas = document.querySelectorAll(".incone-bolhas span")
let card_grid = 0

btn_icon_rigth.addEventListener('click',() =>{
    card_grid += -100

    document.querySelector('.div-card-grid').style.transform = `translateX(${card_grid}vw)`

    if(card_grid == -200){
        btn_icon_rigth.classList.add('visi')
        bolhas[1].classList.remove('back')
        bolhas[2].classList.add('back')
    }
    if(card_grid != 0){
        btn_icon_left.classList.remove('visi')
    }
    if(card_grid  == -100){
        bolhas[0].classList.remove('back')
        bolhas[1].classList.add('back')
    }
})

btn_icon_left.addEventListener('click',() =>{
    card_grid += 100

    document.querySelector('.div-card-grid').style.transform = `translateX(${card_grid}vw)`

    if(card_grid == 0){
        btn_icon_left.classList.add('visi')
        bolhas[1].classList.remove('back')
        bolhas[0].classList.add('back')
    }
    if(card_grid < 0){
        btn_icon_rigth.classList.remove('visi')
    }
    if(card_grid  == -100){
        bolhas[2].classList.remove('back')
        bolhas[1].classList.add('back')
    }
})


const text = document.querySelector(".content-text")
const logo = document.querySelector(".div-logo-banner")


//Evento de click para o logo
jQuery(document).on('click', '#btn-banner', function(e) {
    e.preventDefault();
    jQuery('html,body').animate({scrollTop: ($(".content-body").offset().top)}, 'slow');

    text.style.padding = "150px 0 0 0"
    logo.querySelector(".div-logo-banner").style.transform = "translateY(230px)"
    document.querySelector(".text").style.opacity="1"
    
});

// Evento de Scroll para o logo
$(window).scroll(function (event) {
    event.preventDefault();
    var scroll = $(window).scrollTop();
    
    if(scroll <= 250){
        text.style.padding = "10px 0 0 0"
        logo.style.transform = "inherit"
        document.querySelector(".text").style.opacity="0"
    }else{
        text.style.padding = "150px 0 0 0"
        logo.style.transform = "translateY(230px)"
        document.querySelector(".text").style.opacity="1"
    }
});