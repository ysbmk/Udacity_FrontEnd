/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navbarSection = document.querySelector(".navbar__menu");
const navbarList    = document.querySelector("#navbar__list");
const section1      = document.getElementById("section1")
const section2      = document.getElementById("section2")
const section3      = document.getElementById("section3")
const section4      = document.getElementById("section4")
const items         = ["section1", "section2", "section3", "section4"];
let positions       = {}
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
// function calcPositions() {
//     let pageY   = window.innerHeight ;

//     console.log(`pageY:${pageY}`);
//     let bottom1 = section1.getBoundingClientRect().bottom;
//     let top2    = section2.getBoundingClientRect().top;
//     let bottom2 = section2.getBoundingClientRect().bottom;
//     let top3    = section3.getBoundingClientRect().top;
//     let bottom3 = section3.getBoundingClientRect().bottom;

//     if (pageY <bottom1){
//         section1.classList.add("active");
//     } else {
//         section1.classList.remove("active");
//     };
//     if (pageY>=top2 && pageY <bottom2){
//         section2.classList.add("active");
//     } else {
//         section2.classList.remove("active");
//     };
//     if (pageY>=top3 && pageY <bottom3){
//         section3.classList.add("active");
//     } else {
//         section3.classList.remove("active");
//     };
// }

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
// Link of each item is a placeholder.
for (let item of items){
    const navItem       = document.createElement("li");
    navItem.id          = `link__${item}`;
    const targetSection =  document.getElementById(`${item}`);
    navItem.innerHTML   = `<a class="menu__link">${item.toUpperCase()}</a>`;
    navItem.addEventListener('click', function (evt) {   
        targetSection.scrollIntoView();
    });
    navbarList.appendChild(navItem);
};


// Add class 'active' to section when near top of viewport
// document.addEventListener("scroll", calcPositions())
document.addEventListener("scroll", function () {
    // let pageY   = window.scrollY ;

    // console.log(`pageY:${pageY}`);
    let bottom1 = section1.getBoundingClientRect().bottom;
    let bottom2 = section2.getBoundingClientRect().bottom;
    let bottom3 = section3.getBoundingClientRect().bottom;

    if (200<bottom1){
        section1.classList.add("active");
        document.getElementById("link__section1").classList.add("active");
    } else {
        section1.classList.remove("active");
        document.getElementById("link__section1").classList.remove("active");
    };

    if (200>bottom1 &&200<bottom2){
        section2.classList.add("active");
        document.getElementById("link__section2").classList.add("active");
    } else {
        section2.classList.remove("active");
        document.getElementById("link__section2").classList.remove("active");
    };
    if (200>bottom2 && 200<bottom3){
        section3.classList.add("active");
        document.getElementById("link__section3").classList.add("active");
    } else {
        section3.classList.remove("active");
        document.getElementById("link__section3").classList.remove("active");
    };
    if (200>bottom3 ){
        section4.classList.add("active");
        document.getElementById("link__section4").classList.add("active");
    } else {
        section4.classList.remove("active");
        document.getElementById("link__section4").classList.remove("active");
    };
}
)
// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


