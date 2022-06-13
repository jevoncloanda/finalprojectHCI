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
const checkbox = document.getElementById('checkbox');
const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
    let messages = [];
    if(name.value.trim() === '' || name.value == null) {
        messages.push('Name is required');
    } else if(name.value.length < 3) {
        messages.push('Name must be at least 3 characters');
    }

    if(email.value.trim() === '' || email.value == null) {
        messages.push('Email is required');
    } else if(!email.value.trim().endsWith('@gmail.com')) {
        messages.push('Email must ends with @gmail.com');
    }

    if(phone.value.trim() === '' || phone.value == null) {
        messages.push('Phone Number is required');
    } else if(!(phone.value.startsWith('0') || phone.value.startsWith('+62') || phone.value.startsWith('+65') || phone.value.startsWith('+60'))) {
        messages.push('Phone Number must starts with 0, +62, +65, or +60');
    } else if(!phone.value.length > 14) {
        messages.push('Phone Number must be less than 12 digits');
    }

    if(country.value.trim() === '' || country.value == null) {
        messages.push('Country is required');
    } else if(!(country.value.trim() === 'Indonesia' || country.value.trim() === 'Singapore' || country.value.trim() === 'Malaysia')) {
        messages.push('Country must be Indonesia, Singapore or Malaysia');
    }

    if(!checkbox.checked) {
        messages.push('You must agree to our terms and conditions');
    }

    if(messages.length > 0) {
        event.preventDefault();
        alert(messages.join('\n'));
    }
    else {
        alert('Form Submitted');
    }
});
