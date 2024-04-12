const leftArrow = document.querySelector(".leftArrow"),
      rightArrow = document.querySelector(".rightArrow"),
      slider = document.querySelector("#slider"),
      sliderSection = document.querySelectorAll(".slider-section"),
      punto = document.querySelectorAll(".items-puntos");

leftArrow.addEventListener("click", e => moveToLeft())
rightArrow.addEventListener("click", e => moveToRight())

setInterval(() => {
    moveToRight()
},3000);

let operacion = 0
    counter = 0
    widthImg = 100 / sliderSection.length

function moveToRight() {
    if(counter >= sliderSection.length -1){
        counter = 0
        operacion = 0
        slider.style.transform = `translate(-${operacion}%)`
        slider.style.transition = "none";
        return
    }
    counter++
    operacion = operacion + widthImg
    slider.style.transform = `translate(-${operacion}%)`
    slider.style.transition = "all ease .6s" 
}

function moveToLeft() {
    counter--
    if(counter < 0){
        counter = sliderSection.length -1
        operacion = widthImg * (sliderSection.length-1)
        slider.style.transform = `translate(-${operacion}%)`
        slider.style.transition = "none";
        return
    }
    operacion = operacion - widthImg
    slider.style.transform = `translate(-${operacion}%)`
    slider.style.transition = "all ease .6s" 
}

punto.forEach((cadaPunto, i) => {
    punto[i].addEventListener('click', () => {
        let posicion = i
        let operando = posicion * -20
        slider.style.transform = `translateX(${operando}%)`

        punto.forEach((cadaPunto, i) => {
            punto[i].classList.remove('activo')
        })
        punto[i].classList.add('activo')
    })
})