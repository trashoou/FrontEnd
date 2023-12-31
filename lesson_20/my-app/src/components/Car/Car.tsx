import React from 'react';

interface Props {
    color: string;
    brand: string;
}
function Car(props: Props): JSX.Element {
    const { color, brand } = props;
    return (
        <div style={{ backgroundColor: color, color: 'white' }}>
            <h2>Car card</h2>
            <p>Color: {color}</p>
            <p>Brand: {brand}</p>
        </div>
    );
}
export default Car;
