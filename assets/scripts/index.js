function carousel(image, color, title, desc) {
    this.image = image;
    // Background color
    this.color = color;
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
});

/*
    Carousel effect

    - Have an array of objects that contains
        + Image used on car
        + Style for background to apply
        + BIO text
    - Set a timer to switch between images
    - If button is pressed to change image set the timer back to default wait time
*/