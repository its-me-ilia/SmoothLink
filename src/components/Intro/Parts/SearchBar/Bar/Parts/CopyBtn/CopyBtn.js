import React from 'react';
import link from "../../../../../../../static/link.svg";
import blackLink from "../../../../../../../static/black-link.svg";
import activeLink from "../../../../../../../static/active-link.svg";
import copy from "../../../../../../../static/copy.svg";
import blackCopy from "../../../../../../../static/black-copy.svg";
import activeCopy from "../../../../../../../static/active-copy.svg";
import PropTypes from 'prop-types';
import './CopyBtn.css'

const CopyBtn = (props) => {
    let linkIcon = window.screen.width <= 768 ? blackLink : link;
    let copyIcon = window.screen.width <= 768 ? blackCopy : copy;
    return (
        <div onClick={props.shorten} onMouseOver={e => props.setHovered(true)} onMouseOut={e => props.setHovered(false)}>
            <img className={`copy-btn ${!props.hovered && 'active-copy' }`} src={props.shortened ? copyIcon : linkIcon} alt="Copy" />
            <img className={`copy-btn ${props.hovered && 'active-copy'}`} src={props.shortened ? activeCopy : activeLink} alt="Active Copy" />
        </div>
    )
}

CopyBtn.propTypes = {
    shorten: PropTypes.func,
    setHovered: PropTypes.func,
    hovered: PropTypes.bool,
    shortened: PropTypes.bool
};

export default CopyBtn;