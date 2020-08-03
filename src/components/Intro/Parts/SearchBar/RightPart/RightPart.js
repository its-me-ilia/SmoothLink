import React from 'react';
import SearchBarBtn from '../../../../Reusable/SearchBarBtn/SearchBarBtn';
import menu from '../../../../../static/stack-menu.svg';

const RightPart = () => {
    return (
        <div className="right-part">
            <SearchBarBtn img={menu} />
        </div>
    );
};

export default RightPart;