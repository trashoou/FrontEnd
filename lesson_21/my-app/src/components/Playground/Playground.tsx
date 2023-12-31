import React, { useState, useEffect } from 'react';

function Playground(): JSX.Element {
    const [numberOfDogs, setNumberOfDogs] = useState<number>(0);
    const [numberOfBirds, setNumberOfBirds] = useState<number>(10);
    function handleAddDog(): void {
        setNumberOfDogs(numberOfDogs + 1);
    }
    function handleAddBird(): void {
        setNumberOfBirds(numberOfBirds + 1);
    }
    function handleRemoveDog(): void {
        setNumberOfDogs(numberOfDogs - 1);
    }
    function handleRemoveBird(): void {
        setNumberOfBirds(numberOfBirds - 1);
    }
    // Жизненый цикл компонента
    // Этапы:
    // 1) Mounting - первая отрисовка компонента
    // 2) Updating - обновление компонента
    // 3) Unmounting - удаление компонента (перестает отрисовываться)

    // Пример 1 - пустой массив зависимостей
    useEffect(() => {
        console.log('useEffect 1 - только при первой отрисовке === Mounting');
    }, []);

    // Пример 2 - без массива вообще
    useEffect(() => {
        console.log('useEffect 2 - при маунте и при любых изменениях');
    },);

    // Пример 3 - массив зависимостей
    useEffect(() => {
        console.log('useEffect 3 - при первичной отрисовке и при изменении');
    }, [numberOfDogs]);

    return (
        <div>
            <h1>Playground</h1>
            <p>Number of dogs: {numberOfDogs}</p><p>Number of birds: {numberOfBirds}</p>
            <button type="button" style={{ backgroundColor: 'green' }} onClick={handleAddDog}>Let the dog in</button>
            <button type="button" style={{ backgroundColor: 'green' }} onClick={handleAddBird}>Let the bird in</button>
            <button type="button" style={{ backgroundColor: 'red' }} onClick={handleRemoveDog}>Remove the dog</button>
            <button type="button" style={{ backgroundColor: 'red' }} onClick={handleRemoveBird}>Remove the bird</button>
        </div>
    );
}

// function useState<T>(arg0: number): [any, any] {
//     throw new Error('Function not implemented.');
// }
export default Playground;
