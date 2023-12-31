import React from 'react';

interface Props {
    title: string;
    color: string;
    weight: number;
}

function Fruit(props: Props): JSX.Element {
    const { title, color, weight } = props;
    return (
        <div style={{ backgroundColor: color, color: 'white' }}>
            <h1>Fruit</h1>
            <p>Title: {title}</p>
            <p>Color: {color}</p>
            <p>Weight: {weight}</p>
        </div>
    );
}
export default Fruit;
