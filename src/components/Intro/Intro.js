import React from 'react';
import SearchBar from './Parts/SearchBar/SearchBar';
import './Intro.css';
import bgimg from '../../static/human.png';
import respbgimg from '../../static/human-resp.png'
import logo from '../../static/logo.svg';

const Intro = () => {
    return (
        <div className="intro-container">
            <div className="logo-container">
                <img src={logo} alt="logo" />
                <span className="logo-text">Smooth</span><span className="logo-text-link">Link</span>
            </div>
            <div className="intro-content">
                <div className={`intro-bg fadein`}>
                    <img src={window.screen.width <= 1024 ? respbgimg : bgimg} />
                </div>
                <div className="intro-text">
                    <h1>Smoothly Shorten Any URL</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </div>
                <SearchBar />
            </div>
            <div className="copyright">
                <p>Sketched By <a target="_blank" href="https://github.com/its-me-ilia">Ilia</a></p>
            </div>
        </div>
    );
};

export default Intro;