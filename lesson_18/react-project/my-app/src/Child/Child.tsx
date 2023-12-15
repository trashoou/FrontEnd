import React from 'react';

interface Pirat {
    name: string;
    age: number;
}
interface Props {
    pirat: Pirat;
}

function Child(props:Props): JSX.Element {
    const { pirat } = props;
    const { name, age } = pirat;
    return (
        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
        </div>
    );
}
export default Child;
