// toggle nav
if (window.innerWidth < 768) {
    document.getElementById("topnav-links").classList.add("hidden"); //hidden by default
}

// every time the window is resized...check the size and hide or show the nav
window.onresize = () => {
    if (window.innerWidth >= 768) {
        document.getElementById("topnav-links").classList.remove("hidden");
    } else {
        document.getElementById("topnav-links").classList.add("hidden");
    }
}

// toggle the nav when the hamburger is clicked
document.getElementById("hamburger-toggle").onclick = () => {
    document.getElementById("topnav-links").classList.toggle("hidden");
};

// gallery slideshow - the logic follows the pattern:
// get all images and buttons for each section
// when each kind of button is clicked, shift the hidden classes appropriately
document.querySelectorAll(".gallery-section").forEach (section => { //selects all gallery sections and
                                                                    // uses a for each loop
    // function to find the image item that does not have 
    // the hidden class and shift the hidden class 
    // in the provided direction
    function navigateImages(direction) {
        // selects all images and converts it to an array
        const images = [...section.querySelectorAll(".gallery-images img")];
        
        const current = images.findIndex(img => !img.classList.contains("hidden"));

        images[current].classList.add("hidden");
        images[(current + direction + images.length) % images.length].classList.remove("hidden");
    }
    section.querySelector(".prev-button").onclick = () => {navigateImages(-1)};
    section.querySelector(".next-button").onclick = () => {navigateImages(1)};
});