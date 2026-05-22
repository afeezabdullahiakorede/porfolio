// --- DOM ELEMENT SELECTION ---
const hamburger = document.querySelector('#hamburger');
const navLinks = document.querySelector('#navLinks');
const themeToggle = document.querySelector('#themeToggle');
const contactForm = document.querySelector('#contactForm');

// --- INTERACTION 1: MOBILE DRAWER NAVIGATION ---
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = hamburger.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.className = 'fa-solid fa-xmark';
    } else {
        icon.className = 'fa-solid fa-bars';
    }
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.querySelector('i').className = 'fa-solid fa-bars';
    });
});

// --- INTERACTION 2: CENTRAL THEME MANAGEMENT (DEFAULT LIGHT) ---
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const targetTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', targetTheme);
    
    const themeIcon = themeToggle.querySelector('i');
    if (targetTheme === 'dark') {
        themeIcon.className = 'fa-solid fa-sun';
    } else {
        themeIcon.className = 'fa-solid fa-moon';
    }
});

// --- INTERACTION 3: FORM ENTRY VALIDATION ---
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nameVal = document.querySelector('#name').value.trim();
    const emailVal = document.querySelector('#email').value.trim();
    const messageVal = document.querySelector('#message').value.trim();
    
    const nameError = document.querySelector('#nameError');
    const emailError = document.querySelector('#emailError');
    const messageError = document.querySelector('#messageError');
    const formSuccess = document.querySelector('#formSuccess');
    
    let isFormValid = true;
    nameError.innerText = "";
    emailError.innerText = "";
    messageError.innerText = "";
    formSuccess.style.display = "none";

    if (nameVal === "") {
        nameError.innerText = "Please enter your name.";
        isFormValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailVal === "") {
        emailError.innerText = "Please enter your email address.";
        isFormValid = false;
    } else if (!emailRegex.test(emailVal)) {
        emailError.innerText = "Please provide a valid email structure.";
        isFormValid = false;
    }

    if (messageVal === "") {
        messageError.innerText = "Please include details regarding your project requirements.";
        isFormValid = false;
    }

    if (isFormValid) {
        formSuccess.style.display = "block";
        contactForm.reset();
    }
});