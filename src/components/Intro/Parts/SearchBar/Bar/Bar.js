import React, { useState } from "react";
import search from "../../../../../static/search.svg";
import abc from "../../../../../static/alphabet.svg";
import "./Bar.css";
import CopyBtn from './Parts/CopyBtn/CopyBtn';

const Bar = () => {
  const [shortened,setShortened] = useState(false);
  const [hovered,setHovered] = useState(false);
  const [url,setUrl] = useState('');
  const shorten = () => {
    setShortened(!shortened);
  };
  const inputChange = (e) => {
    if(shortened){
      setShortened(false);
    };
    setUrl(e.target.value)
  }
  console.log(window.screen.height)
  return (
    <div className="search-bar">
      <div className="search-left-part">
        <div className="search-icon">
          <img src={window.screen.width <= 768 ? abc : search} alt="Search" />
        </div>
        <div className="search-input-container">
          <input value={url} onChange={inputChange} type="url" placeholder="https://example.com" />
        </div>
      </div>
      <div className="copy-btn-container">
        <CopyBtn shorten={shorten} shortened={shortened} hovered={hovered} setHovered={setHovered} />
      </div>
    </div>
  );
};

export default Bar;
