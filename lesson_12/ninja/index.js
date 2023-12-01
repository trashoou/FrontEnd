const formElement = document.getElementById("form");
const listElement = document.getElementById("person-list");
const clearBtnElement = document.getElementById("clear");
const clearOneBtnElement = document.getElementById("clear-one");

const persons = [];

const clearList = function(){
    while (listElement.hasChildNodes()) {
        listElement.firstChild.remove();
    }
}

const clearOne = function(){
    if (listElement.hasChildNodes()) {
        listElement.lastChild.remove();
    }
}

function clearInputs(event){
    event.target.nickname.value ="";
    event.target.place.value ="";
}

function changeStatus(event){
    if (event.target.style.textDecoration ==="line-through") {
        event.target.style.textDecoration = "none";
    } else {
        event.target.style.textDecoration = "line-through";
    }
}

clearBtnElement.addEventListener("click", clearList);
clearOneBtnElement.addEventListener("click", clearOne);

formElement.addEventListener("submit", (event)=>{
    event.preventDefault();
    const person = {
        name: event.target.nickname.value,
        place: event.target.place.value
    };
    persons.push(person);

    const liElement = document.createElement("li");
    liElement.textContent = `${person.name} ${person.place} `; 
    liElement.onclick = changeStatus;

    listElement.append(liElement);
    clearInputs(event);

})