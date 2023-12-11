async function fetchData() {
    try {
        const response = await fetch(`https://raw.githubusercontent.com/trashoou/FrontEnd/main/lesson_14/hw/index.json`);
        const data = await response.json();

        console.log(data);
        
        const ul = document.createElement('ul');
        data.array.forEach(element => {
            const li = document.createElement('li');
            li.textContent = `Name: ${element.name}, Age: ${element.age}`;
            ul.appendChild(li);
        });

        document.body.appendChild(ul);
    } catch (error){
        console.error("Ошибка загрузки данных: ", error);
    }
}

fetchData();