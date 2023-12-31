import React, { useEffect, useState } from 'react';

import style from './Activity.module.css';

function Activity(): JSX.Element {
    const [name, setName] = useState<string>('');
    const [numberOfParticipants, setNumberOfParticipants] = useState<number>(0);
    const [activityType, setActivityType] = useState<string>('');

    async function fetchActivity(): Promise<void> {
        const res = await fetch('https://www.boredapi.com/api/activity');
        const obj = await res.json();
        const { activity, type, participants } = obj;
        setName(activity);
        setNumberOfParticipants(participants);
        setActivityType(type);
    }
    useEffect(() => {
        fetchActivity();
    }, []);
    // eslint-disable-next-line no-lone-blocks
    const handleReload = (): void => { { fetchActivity(); } };
return (
    <div>
        <h1>Random Activity</h1>
        <p>Название мероприятия : {name}</p>
        <p>Число участников : {numberOfParticipants}</p>
        <p>Тип мероприятия : {activityType}</p>
        <button type="button" onClick={handleReload}>NEXT</button>
    </div>
);
}
export default Activity;
