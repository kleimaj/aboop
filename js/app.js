/*
    Jacob Kleiman
    Aboop
*/
/* GLOBAL VARIABLES */
const screens = []
var score = 0

/* FUNCTIONS */
const loadScreens = () => {
    let pages = document.querySelectorAll('.page')
    for (let page of pages) {
        screens.push(page)
        page.classList.toggle('hidden')
    }
    screens[0].classList.toggle('hidden')
}
const displaySplash = (event) => {
    screens[0].classList.remove('hidden')
    // event.target.classList.toggle('hidden')
    screens[1].classList.add('hidden')
    screens[2].classList.add('hidden')
    console.log('splash page')
}
const displayGame = (event) => {
    console.log("game page")
    // event.target.classList.toggle('hidden')
    screens[0].classList.add('hidden')
    screens[2].classList.add('hidden')
    screens[1].classList.toggle('hidden')
    startGame()
}
const displaySettings = () => {
    console.log("settings page")
    screens[0].classList.toggle('hidden')
    screens[2].classList.toggle('hidden')
}
const assignButtonListeners = () => {
    let buttons = document.querySelectorAll("button")
    //start_button
    buttons[0].addEventListener("click",displayGame)
    buttons[4].addEventListener("click",displayGame)

    //settings_button
    buttons[1].addEventListener("click",displaySettings)

    //return_button
    buttons[2].addEventListener("click",displaySplash)
    buttons[3].addEventListener("click",displaySplash)
}
const startGame = () => {
    
}
const updateScore = () => {
    score++
    document.querySelector('.score').textContent = score
}

/* GAME LOGIC*/
loadScreens()
assignButtonListeners()