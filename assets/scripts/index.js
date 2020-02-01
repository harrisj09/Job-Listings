/**
 * Documentation is probably not needed due to how short the code is, but this is a learning project.
 * So it's probably a good idea to learn how to write proper documentation
 * @author John Harris
 */

 /**
  * This is used in a ternary operator to check what index the user is on 
  * @type {boolean}
  */
let onFirstIndex = true;

/**
 * These HTML elements are going to be targeted for the carousel effect 
 * @type {HTMLElement} - Background Color
 * @type {HTMLElement} - Title (iPhone X)
 * @type {HTMLElement} - Infomation about the item being displayed (mostly dummy text)
 * @type (HTMLElement) - Actual image of item being displayed
 */
const mainDisplayBackground = document.querySelector(".app__main-display");
const mainDisplayTitle = document.querySelector(".app__main-title");
const mainDisplayDesc = document.querySelector(".app__main-paragraph");
const imageWrapper = document.querySelector(".app__main-display--item");

/**
 * Represents the images used in the carousel
 * @constructor
 * @param {string} image - URL for image to be used
 * @param {string} colorTheme - Reference for background color to change
 * @param {string} title - Item that currenty in display (ex iPhoneX)
 * @param {string} desc - Placeholder text to display
 */
function carousel(mainImage, colorTheme, title, desc) {
    this.mainImage = mainImage;
    this.colorTheme = colorTheme;
    this.title = title;
    this.desc = desc;
}

/**
 * @type {Array} - Array of carousel images object properties to reference
 */
const carouselImages = [
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
        /*
            @TODO
             - Fix width and height for iPhone 6
             - Fix changing background color
        */
        imageWrapper.src = carouselImages[index].mainImage;
        mainDisplayTitle.innerHTML = carouselImages[index].title;
        mainDisplayDesc.innerHTML = carouselImages[index].desc;
        onFirstIndex = !onFirstIndex;
        timeHandler();
    }, 5000);
}