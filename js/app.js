/*
    Jacob Kleiman
    Aboop
*/
/* GLOBAL VARIABLES */
const screens = []
var score = 0
let bubble_container = {
    x: 0,
    y: 0,
    width: screen.width,
    height: screen.height
}

/* CLASSES */
class Bubble {
    constructor(x=15,y=15) {
        this.x = x
        this.y = y
        // let coords = this.generateRandomPos()
        // this.x = coords[0]
        // this.y = coords[1]
        this.xV = 5 // 5 pixels/ms
        this. yV = 5
        this.width = '50px'
        this.height = '50px'
        this.borderRadius = '50%'

        this.serpentine = 0;

        //create div element and make appear
        this.element = document.createElement('div')
        this.appear()
        // this.move()
        setInterval(this.move.bind(this), 50)
       
    }
    move() {
        // y position
        if (this.y >= bubble_container.height-80) {
            this.yV *= -1
            //change velocity
        }
        else if (this.y <= -40) {
            this.yV *= -1
        }
        this.y += this.yV
        this.element.style.marginTop = this.y+"px"

        //x position
        if (this.x >= bubble_container.width-50) {
            this.xV *= -1
        }
        else if (this.x <= -10) {
            this.xV *= -1
        }

        this.x += this.xV
        this.element.style.marginLeft = this.x+"px"


        // if (this.serpentine == 50) {
        //     this.serpentine = 0
        //     this.xV *= -1
        // }
        // this.serpentine++
    }
    getPos() {
        return [this.x,this.y]
    }
    generateRandomPos() {
        let x = Math.floor(Math.random()*bubble_container.width)*5
        let y = Math.floor(Math.random()*bubble_container.height)*5

        return [x,y]

    }
    // collide() { //collision detection
    //     if (this.x == bubble_container.width-5 || this.x == 0) {

    //     }
    // }
    appear() {
        this.element.classList.add('bubble')
        this.element.addEventListener("click",pop)
        //place bubble on screen
        // this.element.style.margin="15px"
        //append child to bubble_container
        document.querySelector('.bubble_container').appendChild(this.element)

    }
}

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
    //create a bubble
    const bubble = new Bubble()
    // bubble.move()
    // bubble.appear()
    // const bubble = document.createElement('div')
    // bubble.classList.add('bubble')
    // bubble.addEventListener("click",pop)
    // //append child to bubble_container
    // document.querySelector('.bubble_container').appendChild(bubble)
}
const pop = (event) => {
    updateScore()
    document.querySelector('.bubble_container').removeChild(event.target)
}
const updateScore = () => {
    score++
    document.querySelector('.score').textContent = score
}

/* GAME LOGIC*/
loadScreens()
assignButtonListeners()

//for testing
displayGame()