

const header = document.querySelector("header"); //Definerer en konstant til "header"

window.onscroll = function() {scrollFunction();}; //Når der scrolles på vinduet skal funktionen starte

function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) { //Hvis der er scrolled mere end 40px ->
        header.classList.add("scrolled"); //Får headeren classen "scrolled", som giver den en background-color

    }
    else {
        header.classList.remove("scrolled"); // Hvis ikke der er scrolled mere end 40px fra toppen fjernes classen
    }
}

