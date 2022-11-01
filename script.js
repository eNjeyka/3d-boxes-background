let boxes = document.getElementById('boxes')
let btn = document.getElementById('btn')

btn.addEventListener('click', () => {
    boxes.classList.toggle('big')
})

function createBoxes () {
    for(let i = 0; i < 4; i++) {
        for(let j = 0; j < 4; j++) {
            let box = document.createElement("div")
            box.classList.add("box")
            box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`
            boxes.appendChild(box)
        }
    }
}

createBoxes()