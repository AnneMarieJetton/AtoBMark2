(function() {
    // Define the component HTML
    const componentHTML = `
    <div class="hq-rental-software-integration"
         data-integrator_link="https://a-to-b-rentals.caagcrm.com/public/car-rental/integrations"
         data-brand="sccjsj1l-sskp-dwyb-k4ho-ffvkjrv2fxvf"
         data-snippet="reservation-form"
         data-skip_language=""
         data-skip_redirect="1"
         data-reservation_page=""
         data-layout="vertical"
         data-currency=""
         data-rate_type_uuid=""
         data-referral="">
    </div>
    `;

    // Define the function to insert the component into the DOM
    function insertCarRentalComponent(selector) {
        const targetElement = document.querySelector(selector);
        if (targetElement) {
            targetElement.innerHTML = componentHTML;

            // Load the external script dynamically
            const script = document.createElement('script');
            script.src = 'https://a-to-b-rentals.caagcrm.com/public/car-rental/integrations/assets/integrator';
            script.async = true;
            document.body.appendChild(script);
        } else {
            console.warn('Target element not found for Car Rental Component.');
        }
    }

    // Expose the function to the global scope
    window.insertCarRentalComponent = insertCarRentalComponent;
})();
