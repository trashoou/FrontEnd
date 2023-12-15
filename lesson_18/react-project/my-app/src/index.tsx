import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CityPage from './CityPage/CityPage';
import Counter from './Counter/counter';
import Car from './Car/Car';
import Sandwich from './Sandwich/Sandwich';
import Fruit from './Fruit/Fruit';
import Parent from './Parent/parent';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <CityPage />
    <Counter />
    <Sandwich />
    <Car color="red" brand="BMW" />
    <Car color="blue" brand="Mercedes" />
    <Car color="yellow" brand="Volvo" />
    <Car color="black" brand="Tesla" />
    <Car color="green" brand="Suzuki" />
    <Fruit title="Apple" color="red" weight={100} />
    <Fruit title="Banana" color="yellow" weight={200} />
    <Fruit title="Orange" color="orange" weight={300} />
    <Parent />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
