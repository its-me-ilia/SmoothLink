import React from 'react';
import ControlButtons from './ControlButtons/Buttons';
import SearchBarBtn from '../../../../Reusable/SearchBarBtn/SearchBarBtn';
import bookmark from '../../../../../static/bookmark.svg';
import leftarrow from '../../../../../static/arrow-left.svg';
import rightarrow from '../../../../../static/arrow-right.svg';
import './LeftBar.css';

const LeftPart = () => {
    return (
        <div className="left-part">
            <ControlButtons />
            <SearchBarBtn img={leftarrow} />
            <SearchBarBtn img={rightarrow} />
            <SearchBarBtn img={bookmark} />
        </div>
    );
};

export default LeftPart;