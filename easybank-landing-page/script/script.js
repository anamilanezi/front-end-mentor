const toggler = document.querySelector('.navbar-toggler')
const headerBackground = document.querySelector('.header__main.mobile')

toggler.addEventListener('click', () => {
    headerBackground.classList.toggle('shadow')
}

)