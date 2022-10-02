'use strict'

const images = document.querySelectorAll('.slide__line img')
const slide = document.querySelector('.slide__line')
const slideBtn = document.querySelectorAll('.slide__btn-group input')

let i = 0

slide.addEventListener('click', () => {
    slideBtn[i].classList.remove('active')
    images[i].classList.remove('showed')
    i++
    if (i >= images.length) i = 0
    images[i].classList.add('showed')
    slideBtn[i].classList.add('active')
})

slideBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        images.forEach(i => i.classList.remove('showed'))
        slideBtn.forEach(i => i.classList.remove('active'))
        i = index
        images[i].classList.add('showed')
        slideBtn[i].classList.add('active')
    })
})
