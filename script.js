const slider = document.querySelector('.slider-container'),
  slides = Array.from(document.querySelectorAll('.slide'))

let isDragging = false,
  startPos = 0,
  currentTranslate = 0,
  prevTranslate = 0,
  animationID = 0,
  currentIndex = 0

slides.forEach((slide, index) => {
  const slideImage = slide.querySelector('img')
  slideImage.addEventListener('dragstart', (e) => e.preventDefault())

  // Touch events
  slide.addEventListener('touchstart', touchStart(index))
  slide.addEventListener('touchend', touchEnd)
  slide.addEventListener('touchmove', touchMove)

  // Mouse events
  slide.addEventListener('mousedown', touchStart(index))
  slide.addEventListener('mouseup', touchEnd)
  slide.addEventListener('mouseleave', touchEnd)
  slide.addEventListener('mousemove', touchMove)
})

// Disable context menu
/*
window.oncontextmenu = function (event) {
  event.preventDefault()
  event.stopPropagation()
  return false
}
*/
function touchStart(index) {
  return function (event) {
    currentIndex = index
    startPos = getPositionX(event)
    isDragging = true

    // https://css-tricks.com/using-requestanimationframe/
    animationID = requestAnimationFrame(animation)
    slider.classList.add('grabbing')
  }
}

function touchEnd() {
  isDragging = false
  cancelAnimationFrame(animationID)

  const movedBy = currentTranslate - prevTranslate

  if (movedBy < -100 && currentIndex < slides.length - 1) currentIndex += 1

  if (movedBy > 100 && currentIndex > 0) currentIndex -= 1

  setPositionByIndex()

  slider.classList.remove('grabbing')
}

function touchMove(event) {
  if (isDragging) {
    const currentPosition = getPositionX(event)
    currentTranslate = prevTranslate + currentPosition - startPos
  }
}

function getPositionX(event) {
  return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
}

function animation() {
  setSliderPosition()
  if (isDragging) requestAnimationFrame(animation)
}

function setSliderPosition() {
  slider.style.transform = `translateX(${currentTranslate}px)`
}

function setPositionByIndex() {
  currentTranslate = currentIndex * -window.innerWidth
  prevTranslate = currentTranslate
  setSliderPosition()
}

//Bark
let btnMeow = document.getElementById('btnMeow')
let btnBark = document.getElementById('btnBark')
let btnScreech = document.getElementById('btnScreech')
let swipe1 = document.getElementById('swipe1')


btnBark.addEventListener('click', function() {
    let audio = document.getElementById('barkSound')
    audio.play()
    let bark = document.getElementById('bark')
    bark.innerHTML = 'bark!'
    document.getElementById('btnBark').setAttribute("style", "box-shadow: 0 0 0")
    btnBark.style.backgroundColor = 'chartreuse'
    btnBark.style.color = 'red'
    swipe1.style.visibility = 'visible'
    btnBark.disabled = 'true'
    btnScreech.disabled = 'true'
    btnMeow.disabled = 'true'
})

btnMeow.addEventListener('click', function() {
    let audio = document.getElementById('boing')
    audio.play()
    document.getElementById('btnMeow').setAttribute("style", "box-shadow: 0 0 0")
    btnMeow.style.backgroundColor = 'red'
    btnMeow.style.color = 'yellow'
    btnMeow.disabled = 'true'
    
})
btnScreech.addEventListener('click', function() {
    let audio = document.getElementById('boing')
    audio.play()
    document.getElementById('btnScreech').setAttribute("style", "box-shadow: 0 0 0")
    btnScreech.style.color = 'yellow'
    btnScreech.style.backgroundColor = 'red'
    btnScreech.disabled = 'true'
})


//Meow
let btnGrowl2 = document.getElementById('btnGrowl2')
let btnMeow2 = document.getElementById('btnMeow2')
let btnScreech2 = document.getElementById('btnScreech2')
let swipe2 = document.getElementById('swipe2')


btnMeow2.addEventListener('click', function() {
    let audio = document.getElementById('meowSound')
    audio.play()
    let meow = document.getElementById('meow')
    meow.innerHTML = 'meow!'
    document.getElementById('btnMeow2').setAttribute("style", "box-shadow: 0 0 0")
    btnMeow2.style.backgroundColor = 'chartreuse'
    btnMeow2.style.color = 'red'
    swipe2.style.visibility = 'visible'
    btnMeow2.disabled = 'true'
    btnScreech2.disabled = 'true'
    btnGrowl2.disabled = 'true'
})

btnGrowl2.addEventListener('click', function() {
    let audio = document.getElementById('boing')
    audio.play()
    document.getElementById('btnGrowl2').setAttribute("style", "box-shadow: 0 0 0")
    btnGrowl2.style.backgroundColor = 'red'
    btnGrowl2.style.color = 'yellow'
    btnGrowl2.disabled = 'true'
    
})
btnScreech2.addEventListener('click', function() {
    let audio = document.getElementById('boing')
    audio.play()
    document.getElementById('btnScreech2').setAttribute("style", "box-shadow: 0 0 0")
    btnScreech2.style.color = 'yellow'
    btnScreech2.style.backgroundColor = 'red'
    btnScreech2.disabled = 'true'
})

//Crow
let btnGrowl3 = document.getElementById('btnGrowl3')
let btnCrow3 = document.getElementById('btnCrow3')
let btnScreech3 = document.getElementById('btnScreech3')
let swipe3 = document.getElementById('swipe3')


btnCrow3.addEventListener('click', function() {
    let audio = document.getElementById('crowSound')
    audio.play()
    let crow = document.getElementById('crow')
    crow.innerHTML = 'crow!'
    document.getElementById('btnCrow3').setAttribute("style", "box-shadow: 0 0 0")
    btnCrow3.style.backgroundColor = 'chartreuse'
    btnCrow3.style.color = 'red'
    swipe3.style.visibility = 'visible'
    btnCrow3.disabled = 'true'
    btnScreech3.disabled = 'true'
    btnGrowl3.disabled = 'true'
})

btnGrowl3.addEventListener('click', function() {
    let audio = document.getElementById('boing')
    audio.play()
    document.getElementById('btnGrowl3').setAttribute("style", "box-shadow: 0 0 0")
    btnGrowl3.style.backgroundColor = 'red'
    btnGrowl3.style.color = 'yellow'
    btnGrowl3.disabled = 'true'
    
})
btnScreech3.addEventListener('click', function() {
    let audio = document.getElementById('boing')
    audio.play()
    document.getElementById('btnScreech3').setAttribute("style", "box-shadow: 0 0 0")
    btnScreech3.style.color = 'yellow'
    btnScreech3.style.backgroundColor = 'red'
    btnScreech3.disabled = 'true'
})

//Neigh
let btnGrowl4 = document.getElementById('btnGrowl4')
let btnNeigh4 = document.getElementById('btnNeigh4')
let btnChirp4 = document.getElementById('btnChirp4')
let swipe4 = document.getElementById('swipe4')


btnNeigh4.addEventListener('click', function() {
    let audio = document.getElementById('neighSound')
    audio.play()
    let neigh = document.getElementById('neigh')
    neigh.innerHTML = 'neigh!'
    document.getElementById('btnNeigh4').setAttribute("style", "box-shadow: 0 0 0")
    btnNeigh4.style.backgroundColor = 'chartreuse'
    btnNeigh4.style.color = 'red'
    swipe4.style.visibility = 'visible'
    btnNeigh4.disabled = 'true'
    btnChirp4.disabled = 'true'
    btnGrowl4.disabled = 'true'
})

btnGrowl4.addEventListener('click', function() {
    let audio = document.getElementById('boing')
    audio.play()
    document.getElementById('btnGrowl4').setAttribute("style", "box-shadow: 0 0 0")
    btnGrowl4.style.backgroundColor = 'red'
    btnGrowl4.style.color = 'yellow'
    btnGrowl4.disabled = 'true'
    
})
btnChirp4.addEventListener('click', function() {
    let audio = document.getElementById('boing')
    audio.play()
    document.getElementById('btnChirp4').setAttribute("style", "box-shadow: 0 0 0")
    btnChirp4.style.color = 'yellow'
    btnChirp4.style.backgroundColor = 'red'
    btnChirp4.disabled = 'true'
})

//Chirp
let btnGrowl5 = document.getElementById('btnGrowl5')
let btnChirp5 = document.getElementById('btnChirp5')
let btnScreech5 = document.getElementById('btnScreech5')



btnChirp5.addEventListener('click', function() {
    let audio = document.getElementById('chirpSound')
    audio.play()
    let chirp = document.getElementById('chirp')
    chirp.innerHTML = 'chirp!'
    document.getElementById('btnChirp5').setAttribute("style", "box-shadow: 0 0 0")
    btnChirp5.style.backgroundColor = 'chartreuse'
    btnChirp5.style.color = 'red'
    
    btnChirp5.disabled = 'true'
    btnScreech5.disabled = 'true'
    btnGrowl5.disabled = 'true'
})

btnGrowl5.addEventListener('click', function() {
    let audio = document.getElementById('boing')
    audio.play()
    document.getElementById('btnGrowl5').setAttribute("style", "box-shadow: 0 0 0")
    btnGrowl5.style.backgroundColor = 'red'
    btnGrowl5.style.color = 'yellow'
    btnGrowl5.disabled = 'true'
    
})
btnScreech5.addEventListener('click', function() {
    let audio = document.getElementById('boing')
    audio.play()
    document.getElementById('btnScreech5').setAttribute("style", "box-shadow: 0 0 0")
    btnScreech5.style.color = 'yellow'
    btnScreech5.style.backgroundColor = 'red'
    btnScreech5.disabled = 'true'
})


//Practice
let btnPractice = document.getElementById('btnPractice')
let practiceWord = document.getElementById('practiceWord')

btnPractice.addEventListener('click', function() {
  let audio = document.getElementById('practice')
  audio.play()
    practiceWord.innerHTML = 'Dogs bark!'
    setTimeout(() => {
        practiceWord.innerHTML = 'Cats meow!'
        setTimeout(() => {
            practiceWord.innerHTML = 'Roosters crow!'
            setTimeout(() => {
                practiceWord.innerHTML = 'Horses neigh!'
                setTimeout(() => {
                    practiceWord.innerHTML = 'Birds chirp!'
                    }, 2000)
                }, 2000)
            }, 2000)
        }, 2000) 
    },2000)



