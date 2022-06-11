// NAVBAR MOBILE MENU
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');

const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

// SUBSCRIBE VALIDATION
const name = document.getElementById('name');
const email = document.getElementById('email');
const submit = document.getElementById('phone');
const country = document.getElementById('country');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    let messages = [];
    if(name.value.trim() === '' || name.value == null) {
        messages.push('Name is required');
    }
    if(email.value.trim() === '' || email.value == null) {
        messages.push('Email is required');
    }
    if(phone.value.trim() === '' || phone.value == null) {
        messages.push('Phone Number is required');
    }
    if(country.value.trim() === '' || country.value == null) {
        messages.push('Country is required');
    }

    if(messages.length > 0) {
        e.preventDefault();
        alert(messages.join('\n'));
    }
});
