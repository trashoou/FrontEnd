import React from 'react';
import Flower from './Flower';

function FlowerCard(): JSX.Element {
    return (
        <div>
            <h2>FlowerCard</h2>
            <Flower title="Rose" color="red" price={10} family="Roses" />
            <Flower title="Tulip" color="white" price={10} family="tulip" />
            <Flower title="Iris blue" color="blue" price={10} family="Iris" />
        </div>
    );
}
export default FlowerCard;
