'use strict'

const imagesBike = document.querySelectorAll('.bike__slide img')
const bike = document.querySelector('.bike__slide-img')
const bikeDots = document.querySelectorAll('.bike__btn-group input')

const images = document.querySelectorAll('.slide__line img')
const slide = document.querySelector('.slide__line')
const slideDots = document.querySelectorAll('.slide__btn-group input')


let i = 0
let j = 0

// const swiperTouch = (img, dots, index) => {
//     dots[index].classList.remove('active')
//     img[index].classList.remove('showed')
//     index++
//     if (index >= images.length) index = 0
//     dots[index].classList.add('active')
//     img[index].classList.add('showed')
// }
// const swiperDots = (img, dots) => {
//     dots.forEach((btn, index) => {
//         btn.addEventListener('click', () => {
//             img.forEach(i => i.classList.remove('showed'))
//             dots.forEach(i => i.classList.remove('active'))
//             i = index
//             img[i].classList.add('showed')
//             dots[i].classList.add('active')
//         })
//     })
// }

slide.addEventListener('click', () => {
    slideDots[i].classList.remove('active')
    images[i].classList.remove('showed')
    i++
    if (i >= images.length) i = 0
    slideDots[i].classList.add('active')
    images[i].classList.add('showed')
})

slideDots.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        images.forEach(i => i.classList.remove('showed'))
        slideDots.forEach(i => i.classList.remove('active'))
        i = index
        images[i].classList.add('showed')
        slideDots[i].classList.add('active')
    })
})

bike.addEventListener('click', () => {
    bikeDots[j].classList.remove('active')
    imagesBike[j].classList.remove('showed')
    j++
    if (j >= images.length) j = 0
    bikeDots[j].classList.add('active')
    imagesBike[j].classList.add('showed')
})

bikeDots.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        imagesBike.forEach(i => i.classList.remove('showed'))
        bikeDots.forEach(i => i.classList.remove('active'))
        j = index
        imagesBike[j].classList.add('showed')
        bikeDots[j].classList.add('active')
    })
})

let abc = 0

const b1 = (a) => {
    a = a + 2
    // if (a > 5) a = 0
    return a
}
for (let k = 0; k < 5; k++) {
    b1(1)
    console.log(b1(abc));
}


