import React from 'react';
import './SearchBox.css';

const SearchBox = ({ searchChange }) => {
    return (
        <input type='text' placeholder='Search your robofriends' onChange={searchChange} />
    )
}

export default SearchBox;