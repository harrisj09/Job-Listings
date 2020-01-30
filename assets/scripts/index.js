let onFirstIndex = false;

function carousel(image, backgroundColor, title, desc) {
    this.image = image;
    this.backgroundColor = backgroundColor;
    this.title = title;
    this.desc = desc;
}

const caroselImages = [
    new carousel("assets/images/iphonex.png", "linear-gradient(0.25turn, #FF4858, #8F65FF)", "iPhone X", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."),
    new carousel("assets/images/iphone6.png", "#2E90E5", "iPhone 6", "Performance and design. Taken right to the edge.")
];

window.addEventListener("load", () => {
    /* 
    Add event listeners to get rid of the newsletter on startup, but if submit is pressed check the string length 
    or check if it contains an "@" and ".com" in it.
    */
   timeHandler();
});

// Recursivly handles watching the time.
function timeHandler() {
    setTimeout(function() {
        const index = onFirstIndex ? 1 : 0;
        console.log(`displaying ${caroselImages[index].backgroundColor}`);
        // Reset image or move to next image
        onFirstIndex = !onFirstIndex;
        timeHandler();
    }, 5000);
}

/*
    Carousel effect

    - Have an array of objects that contains
        + Image used on car
        + Style for background to apply
        + BIO text
    - Set a timer to switch between images
    - If button is pressed to change image set the timer back to default wait time
*/