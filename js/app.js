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
    height: screen.height,
}
let bubbles = []
let num_bubbles = 0
let interval
let bubble_intervals = []
let limit = 0
let h3_fades = 0
let h3_interval = 0
/* CLASSES */
class Bubble {
    constructor(x=15,y=15) { //max screenWidth - 100 //max screenHeight - 100
        // this.x = x
        // this.y = y
        this.width = 52 //default width and height
        this.height = 52

        let coords = this.generateRandomPos()
        // console.log(coords)
        this.x = coords[0]
        this.y = coords[1]
        this.xV = 5 * (Math.round(Math.random()) * 2 - 1)        // 5 pixels/function call
        this.yV = 5 * (Math.round(Math.random()) * 2 - 1)

        //create div element and make appear
        this.element = document.createElement('div')

        this.child = document.createElement('div')
        // this.img = document.createElement('img')
        // this.img.setAttribute('src',"images/bubble.png")
        // this.img.style.width="52px"
        // this.img.style.margin="0 auto"
        // this.img.style.height="52px"
        // this.child.appendChild(this.img)
        
        // this.child.style.width = "10px"
        // this.child.style.height = "10px"
        // console.log(this.child)

        this.appear()

        this.rect = this.element.getBoundingClientRect()
        // console.log(this.rect)
        this.child.classList.add('grow')
        // this.child.classList.add('popout')
        this.move()
        this.collision = false

        this.moveInterval = setInterval(this.move.bind(this), 100)
        this.element.setAttribute('data',this.moveInterval)
        this.element.style.width="30px"
        this.element.style.height="30px"
        

        this.child.classList.remove('grow')
        bubbles.push(this)

        for (let i = 0; i < 8; i++) {
            let keyline = document.createElement('div')
            keyline.classList.add('keyline')
            keyline.classList.add('hidden')
            this.element.appendChild(keyline)
        }
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
        }
        else if (this.x <= -10) {
            this.xV *= -1
            this.width -= 10
            this.child.style.width=this.width+"px"
            // this.height += 15
            // this.child.style.height=this.height+"px"
        }

        //check other bubbles
        // if (!this.collision) {
        //     if (!this.compareOthers()) {
        //     this.x += this.xV
        //     this.element.style.left = this.x+"px"
        //     this.y += this.yV
        //     this.element.style.top = this.y+"px"
        //     }
        // }
        // else {
        this.collision=false
        this.x += this.xV
        this.element.style.left = this.x+"px"
        this.y += this.yV
        this.element.style.top = this.y+"px"
        // }
        
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
                        // console.log('vertical collision detected')
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
                        other.width -= 10
                        other.child.style.width=other.width+"px"
                        ret = true
                    }
                    else if ((this.x < other.x && (this.x+40) > other.x) && (this.y < (other.y+40) && (this.y+40) > other.y)) {
                        // console.log('horizontal collision detected')
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
                        other.width -= 10
                        other.child.style.width=other.width+"px"
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
        this.left = x
        this.right = x+this.width
        this.top = y
        this.bottom = y+this.height
        // console.log(x,y)
        for (let i = 0; i < bubbles.length; i++) {
            let other = bubbles[i]

            let overlap = !(this.right < other.left || 
                this.left > other.right || 
                this.bottom < other.top || 
                this.top > other.bottom)
            // console.log(overlap)
            if (overlap) {
                return this.generateRandomPos()
            }
            else {
                return [x,y]
            }
        }

        return [x,y]

    }
    // collide() { //collision detection
    //     if (this.x == bubble_container.width-5 || this.x == 0) {

    //     }
    // }
    appear() {
        this.element.classList.add('bubble')
        this.child.addEventListener("click",pop)
        this.child.classList.add('bubble_child')
        // this.child.style.transition = 'transition: all .5s linear'
        // this.child.classList.add('slow')


        //set initial position
        this.element.style.top = this.y+"px"
        this.element.style.left = this.x+"px"

        this.child.style.width = this.width+"px"
        this.child.style.height = this.height+"px"
        // this.child.style.transition = ''

        // this.child.classList.remove('slow')
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

    console.log('splash page')
    let myNode = document.querySelector(".bubble_container");
    while (myNode.hasChildNodes()) {
        myNode.removeChild(myNode.firstChild);
    }
    limit = 0
    h3_fades = 0
    clearInterval(h3_interval)
    myNode = document.querySelector('.breathe_container')
    while (myNode.hasChildNodes()) {
        myNode.removeChild(myNode.firstChild)
    }
    num_bubbles = 0
    bubbles = []
    screens[0].classList.remove('hidden')
    // event.target.classList.toggle('hidden')
    screens[1].classList.add('hidden')
    screens[2].classList.add('hidden')
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
    screen_area = bubble_container.width * bubble_container.height
    limit = screen_area / 28373
    console.log(limit)
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
    if (num_bubbles >= limit) {
        clearInterval(interval)
    }
    else {
        new Bubble()
        num_bubbles++    
    }
    //new Bubble(75,25)
}
const breathe = () => {
    let circle = document.createElement('div')
    circle.classList.add('breathe')
    circle.classList.add('small')
    document.querySelector('.breathe_container').appendChild(circle)
    let h3 = document.createElement('h3')
    h3.classList.add('breathe_type')
    circle.appendChild(h3)
    h3_fades = 0
    // document.querySelector
    let bool = false
    h3_interval = setInterval(function() {
    circle.classList.toggle('small')
    circle.classList.toggle('large')
    if (h3_fades < 4){
        if (bool) {
            h3.innerHTML = 'Breathe'+'<br />'+ 'Out'
            h3.style.opacity = '0%'
            h3.style.opacity = '100%'
            bool = false
        }
        else {
            h3.innerHTML = 'Breathe'+'<br />' +'In'
            h3.style.opacity = '0%'
            h3.style.opacity = '100%'
            bool = true
        }
        h3_fades++
    }
    else {
        h3.style.opacity="0%"
    }
    setTimeout(function() {
        h3.style.opacity="0%"
    },3500)
    },5000)
}
const startGame = () => {
    //create a bubble
    // let bubble_area = 52*52
    let screen_area = bubble_container.width * bubble_container.height
    limit = Math.ceil(screen_area / 28373)
    console.log(limit)
    // console.log(bubble_area,screen_area)
    // let num_bubbles = screen_area/bubble_area
    // num_bubbles /= 5
    interval = setInterval(createBubble,1000)
    breathe()
}
const pop = (event) => {

    updateScore()
    clearInterval(event.target.parentElement.getAttribute('data')) //stop bubble
    let circle = event.target
    let parent = circle.parentElement
    circle.style.width = 70+'px'
    circle.style.height = 70+'px'

    let keylines = event.target.parentElement.querySelectorAll('.keyline')
    
    setTimeout(function() {
        keylines.forEach(function(keyline) {    
            keyline.classList.remove('hidden')
            circle.classList.add('hidden')
            // console.log(keyline)
        })
    },0)
    // console.log(keylines)
    // disappear keylines and container entirely
    setTimeout(function() {
        parent.style.width="50px"
        parent.style.height="50px"
    },50)
    setTimeout(function() {
        keylines.forEach(function(keyline) {    
            keyline.classList.add('hidden')
        })
    },250)
    
    let container = document.querySelector('.bubble_container')
    let target = event.target.parentElement
    setTimeout(function() {
        container.removeChild(target)
    },400)
    // document.querySelector('.bubble_container').removeChild(event.currentTarget)
    //remove from bubbles array
    bubbles.splice(bubbles.indexOf(event.target.parentElement),1)
    num_bubbles--
    interval = setInterval(createBubble,1000)
}
const updateScore = () => {
    score++
    document.querySelector('.score').textContent = score
}

/* GAME LOGIC*/
loadScreens()
assignButtonListeners()
assignWindowListener()
displayGame()