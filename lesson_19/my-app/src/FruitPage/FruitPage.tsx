import React from 'react';

import Fruit from '../Fruit/Fruit';

function FruitPage(): JSX.Element {
    return (
        <><Fruit color="yellow" title="banana" weight={2500} /><Fruit color="green" title="apple" weight={1000} /><Fruit color="red" title="apple" weight={2000} /></>
    );
}
export default FruitPage;
