// Toggle mobile nav
const menu_bar = document.querySelector('.menu_bar');
const mobile_menu = document.querySelector('.mobile_nav_links')

menu_bar.addEventListener('click', () => {
    mobile_menu.classList.toggle('active')
})

