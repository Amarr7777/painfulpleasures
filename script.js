/*navbar response*/
const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropdownNav = document.querySelector('.dropdown_nav');

function deviceChange(){
    const isOpen = dropdownNav.classList.toggle('open')   

    toggleBtnIcon.classList = isOpen?'fa-solid fa-xmark': 'fa-solid fa-bars'
}