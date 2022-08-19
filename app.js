/* const box1 = document.querySelector('.box1')
const box2 = document.querySelector('.box2')
const box3 = document.querySelector('.box3')



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


let dbcl = false


box2.addEventListener('dblclick', (e) => {
    dbcl = !dbcl
    if (dbcl) {
        e.target.textContent = 'Wow'
        e.target.style.backgroundColor = 'aqua'
        e.target.style.color = 'rebeccapurple'
        e.target.style.border = '1px dotted rebeccapurple'
    } else {
        e.target.textContent = 'box2'
        e.target.style.backgroundColor = 'rebeccapurple'
        e.target.style.color = 'white'
    }


})

box3.addEventListener('mouseover', (e) => {
    e.target.textContent = 'mouse in'
    e.target.style.backgroundColor = 'aqua'
    e.target.style.color = 'rebeccapurple'
    e.target.style.border = '1px dotted rebeccapurple'
})

box3.addEventListener('mouseout', (e) => {
    e.target.textContent = 'mouse out'
    e.target.style.backgroundColor = 'rebeccapurple'
    e.target.style.color = 'white'
})

box3.addEventListener('mousemove', (e) => {
    e.target.style.backgroundColor = `rgb(${0.25 * e.clientX},${1.4 * e.clientY},${0.3 * e.clientX})`
}) */

/* 
================================================ SELECT EVENT ============================================
*/

/* const textArea = document.querySelector('.text-area')
const output = document.querySelector('.output')

textArea.addEventListener('select', (e) => {
    const selection = e.target.value.substring(e.target.selectionStart, e.target.selectionEnd);
    output.innerHTML = `
    ${e.target.value.substring(0, e.target.selectionStart)}<b>${selection}</b> ${e.target.value.substring(e.target.selectionEnd)}`
}) */