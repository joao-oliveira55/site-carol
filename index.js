const hamburguer = document.querySelector('.hamburguer')
const btnDrop = document.querySelector(".drop")
const btnClose =  document.querySelector('.close')
const menu = document.querySelector('.menu-mobile')

hamburguer.addEventListener('click',function(){
    menu.classList.toggle('deactivated')
    hamburguer.classList.toggle('hamburguer-transi')
})

btnDrop.addEventListener('click', function(){
    const categori = document.querySelector('.section-categoria')
    categori.classList.toggle('deactivated')
    categori.classList.toggle('section-categoria-drop')
    btnDrop.classList.toggle('drop-rotate')
})



//  Service

const card = document.querySelectorAll('.card')

for(let cards of card){
    cards.addEventListener('click',function(){
        let desc_card = cards.querySelectorAll('p')
        let card_list_service = cards.querySelector('ul')
        let card_title = cards.querySelector('.card-title')
        

        desc_card[0].classList.toggle('deactivated')
        desc_card[1].classList.toggle('deactivated')
        card_list_service.classList.toggle('deactivated')
        card_title.classList.toggle('open-card-title')
        
        cards.classList.toggle('open-card')
    })
}
