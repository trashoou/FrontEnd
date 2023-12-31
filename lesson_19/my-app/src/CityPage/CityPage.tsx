import React from 'react';

import style from './CityPage.module.css'; // `./CityPage.module.css`;

function CityPage(): JSX.Element {
    return (
        <div className={style.cityClass}>
            <h1>Все о городе</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, ducimus.</p>
            <img src="https://img.goodfon.ru/original/1920x1200/9/11/berlin-germaniya-muzey-bode.jpg" alt="" />
        </div>
);
}
export default CityPage;
