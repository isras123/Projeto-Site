const navBar = document.querySelector('.navBar')
const menuButton = document.querySelector('.menu-button')
let qtdV1


menuButton.addEventListener('click', () => {
    navBar.classList.toggle('show-menu')
})