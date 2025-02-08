const hamburger = document.querySelector('.hamburger-menu')
const navList = document.querySelector('.nav-list')

hamburger.addEventListener('click', () => {
    navList.classList.toggle('hide')
})