import React from 'react';
import LeftPart from './LeftPart/LeftPart';
import Bar from './Bar/Bar';
import RightPart from './RightPart/RightPart';
import './SearchBar.css';

const SearchBar = () => {
    return (
        <div className="search-bar-wrapper">
            <LeftPart />
            <Bar />
            <RightPart />
        </div>
    );
};

export default SearchBar;