// perform = button 
// effect = nav class

var toggleMenu = () => {
    var mynav = document.querySelector(".nav");
    mynav.classList.toggle("navShow")
}

// perform and effect = header 
var myheader = document.querySelector("header");
window.addEventListener("scroll", () => {
    var curr = window.scrollY;
    if (curr > 30) {
        myheader.classList.add("headerchange")
    } else {
        myheader.classList.remove("headerchange")
    }
})

let dropdown = document.querySelector(".dropdown");
let dropmenu = document.querySelector(".dropmenu");
dropdown.addEventListener("click", () => {
    dropmenu.classList.toggle("show")
})