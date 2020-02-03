/**
 * Entire script handles DOM such as carousel, shopping cart etc
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
 * @type {HTMLElement} - Actual image of item being displayed
 * @type {HTMLElement} - Overlay/newsletter
 */
const mainDisplayBackground = document.querySelector(".app__main-display");
const mainDisplayTitle = document.querySelector(".app__main-title");
const mainDisplayDesc = document.querySelector(".app__main-paragraph");
const imageWrapper = document.querySelector(".app__main-display--item");
const overLay = document.querySelector(".overlay");
const newsletter = document.querySelector(".newsletter__wrapper");

/**
 * Event listeners to handle Newsletter
 * Changes the display property to none
 * if conditionals are met.
 */
newsletter.addEventListener("click", () => {
    overLay.style.display = 'none'; 
    newsletter.style.display = 'none'; 
});

/**
 * Represents the images used in the carousel
 * 
 * @constructor
 * @param {String} image - URL for image to be used
 * @param {String} colorTheme - Reference for background color to change
 * @param {String} title - Item that currenty in display (ex iPhoneX)
 * @param {String} desc - Placeholder text to display
 */
function carousel(mainImage, colorTheme, title, desc) {
    this.mainImage = mainImage;
    this.colorTheme = colorTheme;
    this.title = title;
    this.desc = desc;
}

/**
 * @type {Array} - Array of carousel images object properties to reference for DOM
 */
const carouselImages = [
    new carousel("assets/images/iphonex.png", "linear-gradient(0.25turn, #FF4858, #8F65FF)", "iPhone X", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."),
    new carousel("assets/images/iphone6.png", "#2E90E5", "iPhone 6", "Performance and design. Taken right to the edge.")
];

/**
 * This is called as soon as the page loads it creates event listeners and starts the timer for the carosel. 
 */
window.addEventListener("load", () => {
   timeHandler();
});

/**
 * timeHandler is called recursivly and includes a setTimeout to change between the caroselImages array
 */
function timeHandler() {
    setTimeout( () => {
        const index = onFirstIndex ? 1 : 0;
        imageWrapper.src = carouselImages[index].mainImage;
        mainDisplayTitle.innerHTML = carouselImages[index].title;
        mainDisplayDesc.innerHTML = carouselImages[index].desc;
        onFirstIndex = !onFirstIndex;
        timeHandler();
    }, 5000);
}