const galleryButton = document.querySelector(".galleryButton")
const mainContainer = document.querySelector(".hideContent")
const nextButton = document.querySelector(".nextButton")
const previousButton = document.querySelector(".previousButton")
const img1 = document.querySelector(".img1")
const img2 = document.querySelector(".img2")
const img3 = document.querySelector(".img3")
const img4 = document.querySelector(".img4")
const dot1 = document.querySelector(".dot1")
const dot2 = document.querySelector(".dot2")
const dot3 = document.querySelector(".dot3")
const dot4 = document.querySelector(".dot4")
startTimer = setInterval(nextSlide, 5000)

let currentPic = 1

function nextSlide(){
    currentPic = currentPic + 1

    console.log(currentPic)

    if(currentPic === 1 || currentPic >= 5) {
        currentPic = 1
        showPic1()

    }else if(currentPic === 2) {
        showPic2()

    }else if(currentPic === 3) {
        showPic3()

    }else if(currentPic === 4) {
        showPic4()

    }


};

function previousSlide(){
    currentPic = currentPic - 1

    console.log(currentPic)

    if(currentPic === 1) {
        showPic1()

    }else if(currentPic === 2) {
        showPic2()

    }else if(currentPic === 3) {
        showPic3()

    }else if(currentPic <= 0 || currentPic === 4) {
        currentPic = 4
        showPic4()

    }


};


function showPic1() {

    img1.style.display = "block"
    img2.style.display = "none"
    img3.style.display = "none"
    img4.style.display = "none"

    dot1.classList.toggle("selectedDot")
    dot2.classList.remove("selectedDot")
    dot3.classList.remove("selectedDot")
    dot4.classList.remove("selectedDot")

    clearInterval(startTimer)
    startTimer = setInterval(nextSlide, 5000)

}

function showPic2() {


    img1.style.display = "none"
    img2.style.display = "block"
    img3.style.display = "none"
    img4.style.display = "none"

    dot1.classList.remove("selectedDot")
    dot2.classList.toggle("selectedDot")
    dot3.classList.remove("selectedDot")
    dot4.classList.remove("selectedDot")

    clearInterval(startTimer)
    startTimer = setInterval(nextSlide, 5000)

}

function showPic3() {

    img1.style.display = "none"
    img2.style.display = "none"
    img3.style.display = "block"
    img4.style.display = "none"

    dot1.classList.remove("selectedDot")
    dot2.classList.remove("selectedDot")
    dot3.classList.toggle("selectedDot")
    dot4.classList.remove("selectedDot")

    clearInterval(startTimer)
    startTimer = setInterval(nextSlide, 5000)

}

function showPic4() {
    img1.style.display = "none"
    img2.style.display = "none"
    img3.style.display = "none"
    img4.style.display = "block"

    dot1.classList.remove("selectedDot")
    dot2.classList.remove("selectedDot")
    dot3.classList.remove("selectedDot")
    dot4.classList.toggle("selectedDot")
    
    clearInterval(startTimer)
    startTimer = setInterval(nextSlide, 5000)

}

img1.style.display = "block"
img2.style.display = "none"
img3.style.display = "none"
img4.style.display = "none"

dot1.classList.toggle("selectedDot")
dot2.classList.remove("selectedDot")
dot3.classList.remove("selectedDot")
dot4.classList.remove("selectedDot")

galleryButton.addEventListener("click", function(){

    mainContainer.classList.toggle("hideContent")


})

nextButton.addEventListener("click", nextSlide)

previousButton.addEventListener("click", previousSlide)

dot1.addEventListener("click", function(){
    currentPic = 1
    showPic1()
})

dot2.addEventListener("click", function(){
    currentPic = 2
    showPic2()
})

dot3.addEventListener("click", function(){
    currentPic = 3
    showPic3()
})

dot4.addEventListener("click", function(){
    currentPic = 4
    showPic4()
})


