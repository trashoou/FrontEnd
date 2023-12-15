import React, { useState } from 'react';

const Sandwich = () => {
const [ingredients, setIngredients] = useState('');

const addBread = () => {
setIngredients(prevIngredients => `${prevIngredients} хлеб`);
};

const addCheese = () => {
    setIngredients(prevIngredients => `${prevIngredients} сыр`);
};

const addSausage = () => {
    setIngredients(prevIngredients => `${prevIngredients} колбаса`);
};

return (
<div>
    <h2>Бутерброд: {ingredients}</h2>
    <button onClick={addBread}>Добавить хлеб</button>
    <button onClick={addCheese}>Добавить сыр</button>
    <button onClick={addSausage}>Добавить колбасу</button>
</div>
);
};

export default Sandwich;
