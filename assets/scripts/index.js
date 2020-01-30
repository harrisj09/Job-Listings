let onFirstIndex = true;

// DOM for timeHandler
const mainDisplayBackground = document.querySelector(".app__main-display");
const mainDisplayTitle = document.querySelector(".app__main-title");
const mainDisplayDesc = document.querySelector(".app__main-paragraph");

function carousel(image, colorTheme, title, desc) {
    this.image = image;
    this.colorTheme = colorTheme;
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
    setTimeout( () => {
        const index = onFirstIndex ? 1 : 0;
        console.log(`displaying ${caroselImages[index].colorTheme}`);
        // Reset image or move to next image
        mainDisplayTitle.innerHTML = caroselImages[index].title;
        mainDisplayDesc.innerHTML = caroselImages[index].desc;
        // not working
        mainDisplayBackground.style.backgroundColor = caroselImages[index].colorTheme;
        onFirstIndex = !onFirstIndex;
        timeHandler();
    }, 5000);
}