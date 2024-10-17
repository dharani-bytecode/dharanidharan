let slideIndex = 0; // Initialize slide index
showSlides(); // Call the function to show slides

function showSlides() {
    let slides = document.getElementsByClassName("slide"); // Get all slides

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    
    slideIndex++; // Increment slide index

    // Reset to the first slide if it's beyond the last one
    if (slideIndex >= slides.length) {
        slideIndex = 0; 
    }

    slides[slideIndex].style.display = "block"; // Show the current slide
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}
