const header = document.querySelector("header");

window.onscroll = function() {scrollFunction();};

function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 20) {
        header.classList.add("scrolled");

    }
    else {
        header.classList.toggle("scrolled");
    }
}