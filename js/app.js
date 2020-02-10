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
    constructor(x=15,y=15) { //max screenWidth - 100 //max screenHeight - 100
        // this.x = x
        // this.y = y
        let coords = this.generateRandomPos()
        this.x = coords[0]
        this.y = coords[1]
        this.xV = 5 * (Math.round(Math.random()) * 2 - 1)        // 5 pixels/function call
        this. yV = 5 * (Math.round(Math.random()) * 2 - 1)

        this.width = 50 //default width and height
        this.height = 50
        this.borderRadius = '50%'

        this.serpentine = 0;

        //create div element and make appear
        this.element = document.createElement('div')
        this.child = document.createElement('div')

        this.appear()
        // this.move()
        setInterval(this.move.bind(this), 100)
       
    }
    move() {
        // y position
        this.width = 45
        this.child.style.width=this.width+"px"
        this.height = 45
        this.child.style.height=this.height+"px"
        if (this.y >= bubble_container.height-50) {
            //change velocity
            this.yV *= -1
            this.height -= 10
            this.child.style.width=this.height+"px"
        }
        else if (this.y <= -5) {
            this.yV *= -1
            this.height -= 10
            this.child.style.width=this.height+"px"
        }
        this.y += this.yV
        this.element.style.top = this.y+"px"

        //x position
        if (this.x >= bubble_container.width-50) {
            this.xV *= -1
            this.width -= 10
            this.child.style.width=this.width+"px"
            // this.height += 15
            // this.child.style.height=this.height+"px"
        }
        else if (this.x <= -10) {
            this.xV *= -1
            this.width -= 10
            this.child.style.width=this.width+"px"
            // this.height += 15
            // this.child.style.height=this.height+"px"

        }

        this.x += this.xV
        this.element.style.left = this.x+"px"


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
        let x = Math.abs(Math.floor(Math.random()*bubble_container.width)-80)
        let y = Math.abs(Math.floor(Math.random()*bubble_container.height)-80)
        console.log(x,y)

        return [x,y]

    }
    // collide() { //collision detection
    //     if (this.x == bubble_container.width-5 || this.x == 0) {

    //     }
    // }
    appear() {
        this.element.classList.add('bubble')
        this.element.addEventListener("click",pop)
        this.child.classList.add('bubble_child')

        //set initial position
        this.element.style.top = this.y+"px"
        this.element.style.left = this.x+"px"

        //place bubble on screen
        // this.element.style.margin="15px"
        //append child to bubble_container
        document.querySelector('.bubble_container').appendChild(this.element)
        this.element.appendChild(this.child)

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
    const myNode = document.querySelector(".bubble_container");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
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
const changeContainerSize = () => {
    bubble_container.width = screen.width
    bubble_container.height = screen.height
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
const assignWindowListener = () => {
    // let window = document.querySelector('window')
    window.addEventListener('resize', changeContainerSize);
    console.log(bubble_container.width,bubble_container.height)

}
const startGame = () => {
    //create a bubble
    const bubble = new Bubble()
    // const bubble2 = new Bubble(75,25)

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
    document.querySelector('.bubble_container').removeChild(event.currentTarget)
}
const updateScore = () => {
    score++
    document.querySelector('.score').textContent = score
}

/* GAME LOGIC*/
loadScreens()
assignButtonListeners()
assignWindowListener()
//for testing
displayGame()