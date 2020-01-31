/**
 * Documentation is probably not needed due to how short the code is, but it's just to show that I can write documentation.
 * @author John Harris
 */

 /**
  * This is used in a ternary operator to check what what index 
  * @type {boolean}
  */
let onFirstIndex = true;


const mainDisplayBackground = document.querySelector(".app__main-display");
const mainDisplayTitle = document.querySelector(".app__main-title");
const mainDisplayDesc = document.querySelector(".app__main-paragraph");

/**
 * Represents the images used in the carousel
 * @constructor
 * @param {string} image - URL for image to be used
 * @param {string} colorTheme - Reference for background color to change
 * @param {string} title - Item that currenty in display (ex iPhoneX)
 * @param {string} desc - Placeholder text to display
 */
function carousel(image, colorTheme, title, desc) {
    this.image = image;
    this.colorTheme = colorTheme;
    this.title = title;
    this.desc = desc;
}

/**
 * Array of carosel images to reference
 */
const caroselImages = [
    new carousel("assets/images/iphonex.png", "linear-gradient(0.25turn, #FF4858, #8F65FF)", "iPhone X", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."),
    new carousel("assets/images/iphone6.png", "#2E90E5", "iPhone 6", "Performance and design. Taken right to the edge.")
];

/**
 * This is called as soon as the page loads it creates event listeners and starts the timer for the carosel. 
 */
window.addEventListener("load", () => {
    /* 
    Add event listeners to get rid of the newsletter on startup, but if submit is pressed check the string length 
    or check if it contains an "@" and ".com" in it.
    */

   timeHandler();
});

/**
 * timeHandler is called recursivly and includes a setTimeout to change between the caroselImages array
 */
function timeHandler() {
    setTimeout( () => {
        const index = onFirstIndex ? 1 : 0;
        // Reset image or move to next image
        mainDisplayTitle.innerHTML = caroselImages[index].title;
        mainDisplayDesc.innerHTML = caroselImages[index].desc;
        // not working
        mainDisplayBackground.style.backgroundColor = caroselImages[index].colorTheme;
        onFirstIndex = !onFirstIndex;
        timeHandler();
    }, 5000);
}