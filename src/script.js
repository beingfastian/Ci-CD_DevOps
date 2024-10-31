// JavaScript for Additional Interactivity
document.addEventListener('DOMContentLoaded', () => {
    // Toggle additional info on 'Learn More' button click
    const learnMoreButton = document.getElementById('learnMore');
    const moreInfo = document.getElementById('moreInfo');
    learnMoreButton.addEventListener('click', () => {
        moreInfo.style.display = moreInfo.style.display === 'none' ? 'block' : 'none';
    });

    // Handle contact form submission
    const contactForm = document.getElementById('contactForm');
    const contactStatus = document.getElementById('contactStatus');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('messageInput').value;

        if (name && email && message) {
            contactStatus.textContent = "Thank you for your message, " + name + "!";
            contactStatus.style.color = "green";
            contactForm.reset();
        } else {
            contactStatus.textContent = "Please fill out all fields.";
            contactStatus.style.color = "red";
        }
    });
});
