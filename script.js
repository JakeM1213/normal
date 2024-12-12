
// Select the rotating image
const rotatingImage = document.querySelector('.rotating-image');

// Detect scroll to control 3D rotation only
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    // Apply 3D rotation to the center image
    rotatingImage.style.transform = `rotateY(${scrollPosition * 0.5}deg)`;

    // Product items animation
    const products = document.querySelectorAll(".product");
    products.forEach((product) => {
        const position = product.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (position < windowHeight - 100) {
            product.style.opacity = "1";
            product.style.transform = "translateY(0)";
        }
    });

    // Side images animation
    const sideImages = document.querySelectorAll(".side-image");
    sideImages.forEach((image) => {
        const position = image.getBoundingClientRect().top;
        if (position < window.innerHeight - 100) {
            image.style.opacity = "1";
        }
    });
});

// Hover event for the title logo to play the camera sound
const titleLogo = document.getElementById('titleLogo');
const cameraSound = document.getElementById('cameraSound');

titleLogo.addEventListener('mouseenter', () => {
    // Ensure the sound starts from the beginning each time
    cameraSound.currentTime = 0;

    // Play the sound
    cameraSound.play().catch(error => {
        console.log("Audio play was prevented by the browser:", error);
    });
});

