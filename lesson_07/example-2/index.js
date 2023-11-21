const paragraphElement = document.getElementById("text");
const changeButtonElement = document.getElementById("btn-change");
const resetButtonElement = document.getElementById("btn-reset");
const flowerElement = document.getElementById("flowers");
const changeFlowerButtonElement = document.getElementById("btn-change-flower");
const resetButtonElementFlower = document.getElementById("btn-reset-flower");
// console.log(resetButtonElement);
// console.log(paragraphElement);
// console.log(changeButtonElement);

// Сохраняем исходный текст при загрузке страницы
const originalText = paragraphElement.textContent;
const originalTextFlower = flowerElement.textContent;

changeButtonElement.addEventListener("click", () => {
    paragraphElement.textContent = "Текст изменён!";
    paragraphElement.style.color = "red";
})
resetButtonElement.addEventListener("click", () => {
    paragraphElement.textContent = originalText;
    paragraphElement.style.color = "";
})

changeFlowerButtonElement.addEventListener("click", () => {
    flowerElement.textContent = "Ягодки";
    flowerElement.style.color = "red";
})

resetButtonElementFlower.addEventListener("click", () => {
    flowerElement.textContent = originalTextFlower;
    flowerElement.style.color = "";
})


const surikatElement = document.getElementById("Surikat");
const surikatChangeButtonElement = document.getElementById("add-surikat");

surikatChangeButtonElement.addEventListener("click", () => {
    surikatElement.src = "https://img.freepik.com/free-photo/dutch-angle-shot-of-a-meerkat-lying-on-a-rocky-surface_181624-43429.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1698364800&semt=ais";
    surikatElement.style.width = "300px";
})

