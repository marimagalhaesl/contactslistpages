const contact_item = document.getElementsByClassName("contact-item");
const btnOne = document.getElementById("1");
const btnTwo = document.getElementById("2");
const btnThree = document.getElementById("3");
const btnFour = document.getElementById("4");
const btnFive = document.getElementById("5");
const btnSix = document.getElementById("6");

function Page(min, max) {
    for(let i = min; i < max; i++) {
       contact_item[i].style.display = "block";
    }
}

function HideAll() {
    for(let i = 0; i < contact_item.length; i++) {
        contact_item[i].style.display = "none";
    }
}

HideAll();
Page(0,9);

btnOne.addEventListener("click", function(ev) {
    ev.preventDefault();
    HideAll();
    Page(0, 9);
})

btnTwo.addEventListener("click", function(ev) {
    ev.preventDefault();
    HideAll();
    Page(10, 19);
})

btnThree.addEventListener("click", function(ev) {
    ev.preventDefault();
    HideAll();
    Page(20, 29);
})

btnFour.addEventListener("click", function(ev) {
    ev.preventDefault();
    HideAll();
    Page(30, 39);
})

btnFive.addEventListener("click", function(ev) {
    ev.preventDefault();
    HideAll();
    Page(40, 49);
})

btnSix.addEventListener("click", function(ev) {
    ev.preventDefault();
    HideAll();
    Page(50, contact_item.length);
})