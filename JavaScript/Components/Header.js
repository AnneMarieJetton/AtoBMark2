function loadHeader() {
    fetch('../../HTML/Components/Header.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('afterbegin', data);
            addHeaderFunctionality();
        })
        .catch(error => console.error('Error loading Header:', error));
}

function addHeaderFunctionality() {
    const navLinks = document.querySelector('.HeaderLinks');
    const hamburgerIcon = document.querySelector('.HeaderLinksHamburger');

    hamburgerIcon.addEventListener('click', () => {
        if (navLinks.classList.contains('closed')) {
            navLinks.classList.remove('closed');
            navLinks.classList.add('open');
        } else {
            navLinks.classList.remove('open');
            navLinks.classList.add('closed');
        }
    });
}

// Call the function to load the header
loadHeader();


// document.addEventListener('DOMContentLoaded', () => {
//     const navLinks = document.querySelector('.HeaderLinks');
//     const hamburgerIcon = document.querySelector('.HeaderLinksHamburger');

//     hamburgerIcon.addEventListener('click', () => {
//         if (navLinks.classList.contains('closed')) {
//             navLinks.classList.remove('closed');
//             navLinks.classList.add('open');
//         } else {
//             navLinks.classList.remove('open');
//             navLinks.classList.add('closed');
//         }
//     });
// });
