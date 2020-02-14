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
let intervalSet = false
let bubble_intervals = []
let limit = 0
let h3_fades = 0
let h3_interval = 0
let pop_sound = new Audio() 
const breatheIn = new Audio('audio/breathe_in.wav')
const breatheOut = new Audio('audio/breathe_out.wav')
const popSounds = []
let rainInterval = 0;
let rainSound = new Audio('audio/rain.wav')
rainSound.loop=true
// const bump = new Audio('audio/bump.mp3')
/* CLASSES */
class Bubble {
    constructor(x=15,y=15) { //max screenWidth - 100 //max screenHeight - 100
        // this.x = x
        // this.y = y
        this.width = 52 //default width and height
        this.height = 52

        let coords = this.generateRandomPos()
        this.x = coords[0]
        this.y = coords[1]
        this.xV = 5 * (Math.round(Math.random()) * 2 - 1)        // 5 pixels/function call
        this.yV = 5 * (Math.round(Math.random()) * 2 - 1)

        //create div element and make appear
        this.element = document.createElement('div')

        this.child = document.createElement('div')

        this.appear()

        this.rect = this.element.getBoundingClientRect()
        // console.log(this.rect)
        // console.log(this.child)
        this.child.classList.add('slow')
        this.child.classList.add('grow')
        this.child.classList.remove('slow')
        // console.log(this.child)

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
            // bump.play()
        }
        else if (this.y <= -5) {
            this.yV *= -1
            this.height -= 10
            this.child.style.height=this.height+"px"
            // bump.play()

        }

        //x position
        if (this.x >= bubble_container.width-50) {
            this.xV *= -1
            this.width -= 10
            this.child.style.width=this.width+"px"
            // bump.play()

        }
        else if (this.x <= -10) {
            this.xV *= -1
            this.width -= 10
            this.child.style.width=this.width+"px"
            // bump.play()

            // this.height += 15
            // this.child.style.height=this.height+"px"
        }

        // check other bubbles (with collision)
        // if (!this.collision) {
        //     if (!this.compareOthers()) {
        //     this.x += this.xV
        //     this.element.style.left = this.x+"px"
        //     this.y += this.yV
        //     this.element.style.top = this.y+"px"
        //     }
        // }
        // else {
        // this.collision=false
        // this.x += this.xV
        // this.element.style.left = this.x+"px"
        // this.y += this.yV
        // this.element.style.top = this.y+"px"
        // }

        // without collision
        this.collision=false
        this.x += this.xV
        this.element.style.left = this.x+"px"
        this.y += this.yV
        this.element.style.top = this.y+"px"
        
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
        // this.child.classList.add('grow')
        // this.child.style.transition = 'transition: all .5s linear'
        // this.child.classList.add('slow')


        //set initial position
        this.element.style.top = this.y+"px"
        this.element.style.left = this.x+"px"

        // this.child.style.width = this.width+"px"
        // this.child.style.height = this.height+"px"
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
    let title = document.querySelector('h2.title')
    setTimeout(function() {
        title.classList.remove('fade')
        title.style.bottom = "0px"
    },1000)
    let h3 = document.querySelector('h3.title')
    setTimeout(function() {
        h3.classList.remove('fade')
        h3.style.bottom = "60px"
    },2000)
    let buttons = document.querySelectorAll('.splash_button')
    setTimeout(function() {
        buttons[0].classList.remove('fade')
        buttons[1].classList.remove('fade')
        buttons[0].classList.add('mobile_clear')
        buttons[1].classList.add('mobile_clear')

        buttons[0].style.bottom = "70px"
        buttons[1].style.bottom = "70px"

    },3000)
    document.querySelector('.settings_page > .return_button').classList.add('hidden')
}
const displayGame = (event) => {
    // event.target.classList.toggle('hidden')

    //fade out 
    screens[0].classList.add('hidden')
    screens[2].classList.add('hidden')
    screens[1].classList.toggle('hidden')
    // setTimeout(startGame,2000)
    startGame()
}
const displaySettings = () => {
    screens[0].classList.toggle('hidden')
    screens[2].classList.toggle('hidden')
    let button = document.querySelector('.settings_page > .return_button')
    button.classList.remove('hidden')
    document.querySelector('.settings_page > .splash_button').classList.add('mobile_clear')

}
const changeContainerSize = () => {
    bubble_container.width = screen.width
    bubble_container.height = screen.height
    screen_area = bubble_container.width * bubble_container.height
    limit = screen_area / 28373
}
const reveal = (event) => {
    event.target.classList.toggle('blur')
}
const changeTheme = (event) => {

    let themes = document.querySelectorAll('.theme')
    for (let theme of themes) {
        if (theme.classList.contains('selected')) {
            theme.classList.remove('selected')
            theme.addEventListener('click',changeTheme)
        }
    }
    if (event.target.classList.length) {
       event.target.classList.add('selected')
       event.target.removeEventListener('click',changeTheme)
       let src = event.target.firstChild.getAttribute('src')
       if (src == 'images/bggif.gif') {
            // rainInterval = setInterval(function(){
            //     rainSound.play()
            // },10)    
            rainSound.play()
        // rainSound.play()
       }
       else {
            // rainInterval.clearInterval()
            rainSound.pause()
       }
       document.documentElement.style.setProperty('--theme', 'url(../'+src+')');
    }  
    else {
        event.currentTarget.classList.add('selected')
        event.currentTarget.removeEventListener('click',changeTheme)
        let src = event.target.getAttribute('src')
        if (src == 'images/bggif.gif') {
            rainSound.play()
            // rainInterval = setInterval(function(){
            //     rainSound.play()
            // },10)   
         // rainSound.play()
        }
        else {
            //  clearInterval(rainInterval)
             rainSound.pause()

        }
        document.documentElement.style.setProperty('--theme', 'url(../'+src+')');
    }
    // event.currentTarget.classList.add('selected')
    // event.currentTarget.removeEventListener('click',changeTheme)

    // let src = event.target.getAttribute('src')
    // console.log(src)
    // let root = document.documentElement
    // // console.log(root)
    // // root.style.setProperty('--theme','url(..'+src+');')
    // document.documentElement.style.setProperty('--theme', 'url(../'+src+')');
    // // console.log(root.style)
    // // console.log(getComputedStyle(document.documentElement)
    // // .getPropertyValue('--bubble'));

}
const changeSprite = (event) => {
    // console.log('sprite')
    let sprites = document.querySelectorAll('.sprite')
    for (let sprite of sprites) {
        if (sprite.classList.contains('selected')) {
            sprite.classList.remove('selected')
            sprite.addEventListener('click',changeSprite)
        }
    }

    if (event.target.classList.length) {
        event.target.classList.add('selected')
        event.target.removeEventListener('click',changeSprite)
    
        //reassign css variable
        let src = event.target.firstChild.getAttribute('src')
        let root = document.documentElement
        root.style.setProperty('--bubble','url(../'+src+')')
     }  
     else {
        event.currentTarget.classList.add('selected')
        event.currentTarget.removeEventListener('click',changeSprite)
    
        //reassign css variable
        let src = event.target.getAttribute('src')
        let root = document.documentElement
        root.style.setProperty('--bubble','url(../'+src+')')
     }

}
const assignButtonListeners = () => {
    let buttons = document.querySelectorAll("button")
    //start_button
    buttons[0].addEventListener("click",displayGame)
    buttons[0].addEventListener("mouseover",reveal)
    buttons[0].addEventListener("mouseout",reveal)

    buttons[4].addEventListener("click",displayGame)
    buttons[4].addEventListener("mouseover",reveal)
    buttons[4].addEventListener("mouseout",reveal)


    //settings_button
    buttons[1].addEventListener("click",displaySettings)
    buttons[1].addEventListener("mouseover",reveal)
    buttons[1].addEventListener("mouseout",reveal)

    //return_button
    buttons[2].addEventListener("click",displaySplash)
    buttons[3].addEventListener("click",displaySplash)

    //assign theme_listeners
    let themes = document.querySelectorAll('.theme')
    let sprites = document.querySelectorAll('.sprite')
    for (let theme of themes) {
        if(!theme.classList.contains('selected')) {
            theme.addEventListener('click',changeTheme)
        }
    }
    for (let sprite of sprites) {
        if(!sprite.classList.contains('selected')) {
            sprite.addEventListener('click',changeSprite)
        }
    }
}
const assignWindowListener = () => {
    // let window = document.querySelector('window')
    window.addEventListener('resize', changeContainerSize);

}
const createBubble = () => {
    if (num_bubbles >= limit) {
        // console.log(interval)
        clearInterval(interval)
        intervalSet = false
        // console.log(interval)
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
    circle.classList.add('fade')
    document.querySelector('.breathe_container').appendChild(circle)
    setTimeout(function() {
        circle.classList.remove('fade')
    },1000)
    let h3 = document.createElement('h3')
    h3.classList.add('breathe_type')
    circle.appendChild(h3)
    h3_fades = 0
    // document.querySelector
    let bool = false
    let inhale = true
    h3_interval = setInterval(function() {
    circle.classList.toggle('small')
    circle.classList.toggle('large')
    if (inhale) {
        breatheIn.play()
        inhale = false
    }
    else {  
        breatheOut.play()
        inhale = true
    }
    if (h3_fades < 4){
        if (bool) {
            h3.innerHTML = 'Breathe'+'<br />'+ 'Out'
            h3.style.opacity = '0%'
            h3.style.opacity = '100%'
            bool = false
            // breatheOut.play()
        }
        else {
            h3.innerHTML = 'Breathe'+'<br />' +'In'
            h3.style.opacity = '0%'
            h3.style.opacity = '100%'
            bool = true
            // breatheIn.play()
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

    let screen_area = bubble_container.width * bubble_container.height
    limit = Math.ceil(screen_area / 28373)

    let button = document.querySelector('.return_button')
    let score = document.querySelector('.score')

    setTimeout(function(){
        button.classList.remove('fade')
        score.classList.remove('fade')
    },1000)

    interval = setInterval(createBubble,2000)
    intervalSet = true
    breathe()
}
const assignSounds = () => {
    for (let i = 2; i < 11; i++) {
        popSounds.push('audio/pops/sound'+i+'.mp3')
    }
}
const popSound = () => {
    pop_sound = new Audio(popSounds[Math.floor(Math.random()*9)])
    pop_sound.play()
}
const pop = (event) => {
    popSound()
    updateScore()
    clearInterval(event.target.parentElement.getAttribute('data')) //stop bubble
    let circle = event.target
    let parent = circle.parentElement
    circle.classList.add('slow')
    circle.style.width = 70+'px'
    circle.style.height = 70+'px'

    let keylines = event.target.parentElement.querySelectorAll('.keyline')
    
    setTimeout(function() {
        keylines.forEach(function(keyline) {    
            keyline.classList.remove('hidden')
            circle.classList.add('hidden')
            // console.log(keyline)
        })
    },50) //0

    // disappear keylines and container entirely
    setTimeout(function() {
        parent.style.width="50px"
        circle.style.backgroundImageSize = "100px"
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
    if (num_bubbles < limit && !intervalSet) {
        interval = setInterval(createBubble,2000)
        intervalSet = true
    }
}
const updateScore = () => {
    score++
    if (score === 108) {
        document.querySelector('.score').textContent = 0
        // displaySplash()
        score = 0
        // document.querySelector('h3.title').innerHTML = "You've restored for the day. You've unlcoked a new Theme and Bubble. Namaste."
    }
    else {
        document.querySelector('.score').textContent = score + ' / 108'
    }
}

/* GAME LOGIC*/
loadScreens()
assignButtonListeners()
assignWindowListener()
assignSounds()
// displaySettings()
displaySplash()
console.log('%c🦄', 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)')
