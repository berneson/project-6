const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.style.backgroundColor = '#2b313587';
  } else {
    header.style.backgroundColor = 'transparent';
  }
});



// MENU

const sidebar = () => {

  const menuButton = document.querySelector('.menu-button')
  const sidebar = document.querySelector('.sidebar')

  const toggleSidebar = () => {
    sidebar.classList.toggle('sidebar--open')
    menuButton.classList.toggle('menu-button--close')
  }

  menuButton.addEventListener('click', toggleSidebar)

}

sidebar()