async function fetchData() {
    try {
        const response = await fetch(`https://raw.githubusercontent.com/trashoou/FrontEnd/main/lesson_14/hw/index.json`);
        const data = await response.json();

        // Display the fetched data in the console
        console.log(data);

        // Create an unordered list element
        const ul = document.createElement('ul');

        // Iterate over the data and create list items
        data.forEach(element => {
            // Create a list item element
            const li = document.createElement('li');
            // Set the text content of the list item
            li.textContent = `Name: ${element.name}, Age: ${element.age}`;
            // Append the list item to the unordered list
            ul.appendChild(li);
        });

        // Append the unordered list to the document body
        document.body.appendChild(ul);
    } catch (error){
        console.error("Ошибка загрузки данных: ", error);
    }
}

fetchData();
