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
let bubbles = []

/* CLASSES */
class Bubble {
    constructor(x=15,y=15) { //max screenWidth - 100 //max screenHeight - 100
        // this.x = x
        // this.y = y
        let coords = this.generateRandomPos()
        this.x = coords[0]
        this.y = coords[1]
        this.xV = 5 * (Math.round(Math.random()) * 2 - 1)        // 5 pixels/function call
        this.yV = 5 * (Math.round(Math.random()) * 2 - 1)

        this.width = 5 //default width and height
        this.height = 5
        this.borderRadius = '50%'

        //create div element and make appear
        this.element = document.createElement('div')
        this.child = document.createElement('div')

        this.appear()
        this.child.classList.add('grow')
        // this.move()
        this.collision = false
        setInterval(this.move.bind(this), 100)
        this.child.classList.remove('grow')
        bubbles.push(this)

        // console.log(bubbles)
        // console.log(this===bubbles[0])
       
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
            this.child.style.height=this.height+"px"
        }
        else if (this.y <= -5) {
            this.yV *= -1
            this.height -= 10
            this.child.style.height=this.height+"px"
        }

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

        //check other bubbles
        if (!this.collision) {
            if (!this.compareOthers()) {
            this.x += this.xV
            this.element.style.left = this.x+"px"
            this.y += this.yV
            this.element.style.top = this.y+"px"
            }
        }
        else {
            this.collision=false
            this.x += this.xV
            this.element.style.left = this.x+"px"
            this.y += this.yV
            this.element.style.top = this.y+"px"
        }
        
        // if (this.serpentine == 50) {
        //     this.serpentine = 0
        //     this.xV *= -1
        // }
        // this.serpentine++
    }
    compareOthers() {
        let ret = false
        for (let i = 0; i < bubbles.length; i++) {
            if (bubbles[i] !== this) {
                //compare sides of bubble containers
                let other = bubbles[i]
                if (other.collision === false) {
                    //if this right intersects other.left
                    //change xV
                    if ((((this.y+40) > other.y) && (this.y < other.y)) && (this.x < (other.x+40) && (this.x+40) > other.x)) {
                        console.log('vertical collision detected')
                        this.yV *= -1
                        other.yV *= -1
                        this.xV *= -1
                        other.xV *= -1
                        this.x += this.xV
                        this.element.style.left = this.x+"px"
                        this.y += this.yV
                        this.element.style.top = this.y+"px"
                        this.collision = true
                        other.collision = true

                        this.width -= 10
                        this.child.style.width=this.width+"px"
                        ret = true
                    }
                    else if ((this.x < other.x && (this.x+40) > other.x) && (this.y < (other.y+40) && (this.y+40) > other.y)) {
                        console.log('horizontal collision detected')
                        this.xV *= -1
                        other.xV *=-1
                        this.yV *= -1
                        other.yV *= -1
                        this.x += this.xV
                        this.element.style.left = this.x+"px"
                        this.y += this.yV
                        this.element.style.top = this.y+"px"
                        this.collision= true
                        other.collision=true
                        this.width -= 10
                        this.child.style.width=this.width+"px"
                        ret = true
                    }
                }
                
            }
        }
        return ret
    }
    getPos() {
        return [this.x,this.y]
    }
    generateRandomPos() {
        let x = Math.abs(Math.floor(Math.random()*bubble_container.width)-80)
        let y = Math.abs(Math.floor(Math.random()*bubble_container.height)-80)
        // console.log(x,y)

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

        this.child.style.width = this.width+"px"
        this.child.style.height = this.height+"px"

        //place bubble on screen
        // this.element.style.margin="15px"
        //append child to bubble_container
        document.querySelector('.bubble_container').appendChild(this.element)
        this.element.appendChild(this.child)

        // change the dimensions (h & w) of the child element
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
    // setTimeout(startGame,2000)
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
const createBubble = () => {
    new Bubble()
    //new Bubble(75,25)
}
const startGame = () => {
    //create a bubble
    createBubble()
    createBubble()
    createBubble()
    createBubble()
    createBubble()

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