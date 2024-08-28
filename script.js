
//Funcion que oculta o muestra el menú hamburguesa
function mostrarOcultarMenu(){
    const nav = document.getElementById('nav');
    if(nav.style.display === 'block'){
        nav.style.display = 'none';
    }else{
        nav.style.display = 'block'
    }
}

//Oculto el menu hamburguesa una vez que selecciono una opción
function seleccionar(){
    const nav = document.getElementById('nav');
    if(window.innerWidth <= 768){
        nav.style.display = 'none';
    }
}

//SECCION HECHO A MANO - CARROUSEL
let prev = document.querySelector(".leftArrow"),
    next = document.querySelector(".rightArrow"),
    slideImages = document.querySelectorAll(".slideImages"),
    dots = document.querySelectorAll(".items-puntos");

let counter = 0

//Next button(Right arrow)
next.addEventListener("click", e => slideNext())
function slideNext() {
    slideImages[counter].style.animation = "next1 0.6s ease-in forwards"
    if(counter >= slideImages.length-1){
        counter = 0
    }
    else{
        counter++
    }
    slideImages[counter].style.animation = "next2 0.6s ease-in forwards"
    indicators()
}

//Prev button(Left arrow)
prev.addEventListener("click", e => slidePrev())
function slidePrev() {
    slideImages[counter].style.animation = "prev1 0.6s ease-in forwards"
    if(counter == 0){
        counter = slideImages.length -1
    }
    else{
        counter--
    }
    slideImages[counter].style.animation = "prev2 0.6s ease-in forwards"
    indicators()
}

//Auto sliding
function autosliding(){
    deletInterval = setInterval(timer, 3000)
    function timer(){
        slideNext();
        indicators();
    }
}
autosliding();

//Stop autosliding when mouse is over
const container = document.querySelector(".container-carrousel");
container.addEventListener("mouseover", function(){
    clearInterval(deletInterval)
})

//Resume sliding when mouse is out
container.addEventListener("mouseout", autosliding)

//Add and remove active class to the indicators
function indicators(){
    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" activo", "");
    }
    dots[counter].className += " activo";
}

/*
//Add click event to the indicator
function switchImage(currentImage){
    currentImage.classList.add("activo")
    let imageId = currentImage.getAttribute("attr")
    if(imageId > counter){
        slideImages[counter].style.animation = "next1 0.6s ease-in forwards"
        counter = imageId
        slideImages[counter].style.animation = "next2 0.6s ease-in forwards"
    }
    else if(imageId = counter){
        return;
    }
    else{
        slideImages[counter].style.animation = "prev1 0.6s ease-in forwards"
        counter = imageId
        slideImages[counter].style.animation = "prev2 0.6s ease-in forwards"
    }
    indicators()
}
*/

