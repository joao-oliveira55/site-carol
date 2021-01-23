//  Service

const card = document.querySelectorAll('.card')
const desc_cards = document.querySelectorAll('.desc-card')
const title_cards = document.querySelectorAll('.card-title')

function checkCard(classe){
    if (classe == 'sobrancelha'){
        closeCard(1)
        closeCard(2)
        closeCard(3)
    }
    if (classe == 'massagem'){
        closeCard(0)
        closeCard(2)
        closeCard(3)
    }
    if (classe == 'pele'){
        closeCard(0)
        closeCard(1)
        closeCard(3)
    }
    if (classe == 'gordura'){
        closeCard(0)
        closeCard(1)
        closeCard(2)
    }
}
function closeCard(number){
    card[number].classList.remove('open-card')
    desc_cards[number].classList.add('deactivated')
    title_cards[number].classList.remove('open-card-title')
}

for(let cards of card){
    cards.addEventListener('click',( event) =>{
        let desc_card = cards.querySelector('.desc-card')
        let card_title = cards.querySelector('.card-title')
        
        desc_card.classList.toggle('deactivated')
        card_title.classList.toggle('open-card-title')
        cards.classList.toggle('open-card')

        let cardClass = event.target.classList[1]

        checkCard(cardClass)
    })
}


const btn_service = document.querySelector('.arrow_right')
btn_service.addEventListener('click', function(){
    const service = document.querySelectorAll('.services')
    service[0].classList.toggle('slick-service')
    service[1].classList.toggle('slick-service')

    btn_service.classList.toggle('transform')
})


function opencard(card){
    document.querySelector(`.${card}`).click()
    jQuery('html,body').animate({scrollTop: ($(`.${card}`).offset().top -100)},'slow');
}

$(document).ready(function(){
	const url = document.URL
    if(url.indexOf("service.html?sobrancelha") != -1){
        opencard("sobrancelha")
    }
    if(url.indexOf("service.html?massagem") != -1){
        opencard("massagem")
    }
    if(url.indexOf("service.html?pele") != -1){
        opencard("pele")
    }
    if(url.indexOf("service.html?gordura") != -1){
        opencard("gordura")
    }
})