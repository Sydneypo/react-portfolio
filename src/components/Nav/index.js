import React from 'react';



function Nav() {

    return(
        <header className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">Sydney Porter</a>
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <a className="nav-link" href="#About">About Me</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#Portfolio">Portfolio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#Contact">Contact Me</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#Resume">Resume</a>
                </li>
            </ul>
        </header>
    );
}

export default Nav;
