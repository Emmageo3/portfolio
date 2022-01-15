/**
 * ----------------menu---------------------
 */
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')


if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}


if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/**--------------------SKills---------------------- */

const skillsContent = document.getElementsByClassName('skills-content')
const skillsHeader = document.querySelectorAll('.skills-header')

function toggleSkills(){
    let itemClass = this.parentNode.className

     for(i=0;i<skillsContent.length;i++){
         skillsContent[i].className = 'skills-content skills-close'
     }
     if(itemClass === 'skills-content skills-close'){
         this.parentNode.className = 'skills-content skills-open'
     }
}

skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
})


/**--------------------services----------------- */

const modalViews = document.querySelectorAll('.services-modal')
const modalBtns = document.querySelectorAll('.services-button')
const modalCloses = document.querySelectorAll('.services-modal-close')


let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})

/**----------------swiper slide------------------- */

var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionID = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)

function scrollHeader(){
    const nav = document.getElementById('header')

    if(this.scrollY >= 80) scrollTop.classList.add('scroll-header'); else scrollTop.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)