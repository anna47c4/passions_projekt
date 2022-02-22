//indledningsvis defineres to konstanter, nemlig url og key, som skal bruges til at fetche vores data
//bagefter har vi lavet en konstant med header, som vores overskrift skal bruges til
const url = "https://passionsprojekt-6310.restdb.io/rest/rejser";
const key = "6212710334fd621565858859";
const headline = document.querySelector("h2");

//her definerer vi konstanten options, og sætter den sammen med vores key, de to skal bruges i den næste function
const options = {
  headers: {
    "x-apikey": "6212710334fd621565858859",
  },
};

// nu laver vi en eventlistener, der kalder på start funktionen når DOM'ens indhold er hentet ind
// nenunder har vi lavet to variable, som skal bruges til filtreringen
document.addEventListener("DOMContentLoaded", start);
let destinationer = [];
let filter = "alle";

// i denne funktion gør vi knapperne klikbare, og sørge for at de findes som en konstant
function start() {
  const filterknapper = document.querySelectorAll(".knapper button");
  filterknapper.forEach((knap) => knap.addEventListener("click", filtrer));

  hentData();
}

//her opretter vi vores filtrerings funktion og tilføjer og fjerner klassen valgt så den passer til filtreringen
function filtrer() {
  filter = this.dataset.type;
  document.querySelector(".valgt").classList.remove("valgt");
  this.classList.add("valgt");
  vis();
  headline.textContent = this.textContent;
  console.log(this);
}

//her går vi i gang med at hente vores data ind og opretter i den forbindelse navnet 'hentData', da det er et logisk navn
//til slut i denne function kalder vi vores 'vis' function, som skal hjælpe med at vise vores data i DOM'en
async function hentData() {
  const respons = await fetch(url, options);
  destinationer = await respons.json();
  console.log("destinationer", destinationer);
  vis();
}

//i denne function starter vi med at definere to konstanter, nemlig den container vores data skal klones ind i og den template vi skal bruges til at vise dataerne
//bagefter sørger vi for at der ikke er noget indhold i containeren, medmindre der sker en kloning
function vis(json) {
  const container = document.querySelector(".data-container");
  const temp = document.querySelector("template");
  container.textContent = "";
  // her sørger vi både for at der kan filtreres mellem de enkelte med en 'if' sætning, og vi får klonet vores ønskede indhold ind
  destinationer.forEach((destination) => {
    if (destination.type == filter || filter == "alle") {
      const klon = temp.cloneNode(true).content;
      klon.querySelector("h3").textContent = destination.land;
      klon.querySelector(".type").textContent = "Type: " + destination.type;
      klon.querySelector(".region").textContent =
        "Region: " + destination.region;
      klon.querySelector(".by").textContent = "By: " + destination.by;
      klon.querySelector(".box img").src =
        "billeder/" + destination.listebillede;
      klon
        .querySelector(".destination")
        .addEventListener("click", () => visDest(destination));
      container.appendChild(klon);
    }
  });
}

//til slut i ovenstående funktion gør vi artiklerne klikbare, og sender dem videre til nedestående funktion, som sender dem videre til en singleside
function visDest(destination) {
  location.href = `single_view.html?id=${destination._id}`;
}

// til header scroll effekt

const header = document.querySelector("header");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 20) {
    header.classList.add("scrolled");
  } else {
    header.classList.toggle("scrolled");
  }
}
