import React from 'react';
import './Card.css';

const Card = (props) => {
    const {name, email} = props.robot;
    return(
        <div id="card">
            <img alt={`${name}`} src={`https://robohash.org/${email}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default Card;