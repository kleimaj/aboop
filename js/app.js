const displaySplash = () => {
    let pages = document.querySelectorAll('.page')
    pages[1].classList.add('hidden')
    pages[2].classList.add('hidden')
}

displaySplash()