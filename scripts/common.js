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
 
    // menu color

    const link_cat = document.querySelectorAll('.categoria')
    const link_dep = document.querySelectorAll('.departament')

    for(let link_categoria of link_cat){
        link_categoria.addEventListener('click', function(){
            let link = link_categoria.querySelectorAll('a')

            link.style.color = 'black'
        })
    }