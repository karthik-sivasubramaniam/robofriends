import React from 'react';
import Card from './Card';

const cardList = ({ robots }) => {
    const cardsArray = robots.map((user, id) => {
        return <Card key={id} robot={user} />;
    });
    return (
        <div>
            {cardsArray}
        </div>
    )
}


export default cardList;