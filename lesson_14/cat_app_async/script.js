const CatFactsElement = document.getElementById("cat-facts");

async function loadCatFact() {
    const response = await fetch("https://catfact.ninja/fact");
    const obj = await response.json();
    console.log(obj);
    const {fact, length} = obj;
    CatFactsElement.textContent = `${fact} (${length})`;
}
loadCatFact();