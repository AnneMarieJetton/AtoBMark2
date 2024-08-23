function loadHQHomepageForm() {
    fetch('../../HTML/Components/HQ/HQHomepageForm.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('afterbegin', data);
            // addHQHomepageFormFunctionality();
        })
        .catch(error => console.error('Error loading HQHomepageForm:', error));
}

// function addHQHomepageFormFunctionality() {
//     const navLinks = document.querySelector('.HQHomepageFormLinks');
//     const hamburgerIcon = document.querySelector('.HQHomepageFormLinksHamburger');

//     hamburgerIcon.addEventListener('click', () => {
//         if (navLinks.classList.contains('closed')) {
//             navLinks.classList.remove('closed');
//             navLinks.classList.add('open');
//         } else {
//             navLinks.classList.remove('open');
//             navLinks.classList.add('closed');
//         }
//     });
// }

// Call the function to load the header
loadHQHomepageForm();