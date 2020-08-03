import React from 'react';
import './SearchBarBtn.css';

const SearchBarBtn = (props) => {
    return (
        <div className="searchbar-btn">
            <img src={props.img} />
        </div>
    );
};

export default SearchBarBtn;