const box1 = document.querySelector('.box1')

window.addEventListener('scroll', () => {
    let value = window.scrollY
    box1.style.top = value * 1.25 + 'px'
    box1.style.borderRadius = `${value * 0.036}%`
    if (value > 1500) {
        box1.classList.add('fading')
        box1.classList.remove('unfading')
    } else {
        box1.classList.remove('fading')
        box1.classList.add('unfading')
    }
})