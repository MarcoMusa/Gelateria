let navbar = document.querySelector('#navbar')
let navbarBrand = document.querySelector('#navbarBrand')
let navbarCTAScroll = document.querySelector('#navbarCTAScroll')


if (window.innerWidth > 576) {


    document.addEventListener('scroll', () => {

        if (window.pageYOffset > 20) {
            navbar.classList.add('bg-white', 'shadow')
        } else {
            navbar.classList.remove('bg-white', 'shadow')
            navbar.classList.add('bg-transparent')
        }


    })
}