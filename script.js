//indledningsvis defineres to konstanter, nemlig url og key, som skal bruges til at fetche vores data
const url = "https://passionsprojekt-6310.restdb.io/rest/rejser";
const key = "3673ffb994a729cfa64e95352137fea3f841a ";

//her definerer vi konstanten options, og sætter den sammen med vores key, de to skal bruges i den næste function
const options = {
  headers: {
    "x-apikey": key,
  },
};
//her går vi i gang med at hente vores data ind og opretter i den forbindelse navnet 'hentData', da det er et logisk navn
//til slut i denne function kalder vi vores 'vis' function, som skal hjælpe med at vise vores data i DOM'en
async function hentData() {
  const respons = await fetch(url, options);
  const json = await respons.json();
  vis(json);
}

//i denne function starter vi med at definere to konstanter, nemlig den container vores data skal klones ind i og den template vi skal bruges til at vise dataerne
function vis(json) {
  const container = document.querySelector(".data-container");
  const temp = document.querySelector("template");

  json.forEach((destination) => {
    console.log(json);
    const klon = temp.cloneNode(true).content;
    klon.querySelector("h3").textContent = destination.type;
    klon.querySelector(".land").textContent = destination.land;
    klon.querySelector("img").src = "billeder/" + destination.billede;

    container.appendChild(klon);
  });
}

hentData();
