import React from 'react';


function Footer() {

    return(
        <footer className="navbar navbar-expand-lg navbar-light bg-light" id="footer">
            <ul className="nav" >
                <li className="nav-item">
                    <a className="github-icon" href="https://github.com/Sydneypo">
                        <img src="./img/github-logo.png" alt="" width="70" height="70" />
                    </a>
                </li>
                <li className="nav-item">
                    <a className="linkedIn-icon" href="https://www.linkedin.com/in/sydney-porter-669775203/">
                        <img src="./img/linkedIn-icon.png" alt="" width="70" height="70" />
                    </a>
                </li>
                <li className="nav-item">
                    <a className="stack-logo" href="https://stackoverflow.com/users/14969478/sydneypo?tab=profile">
                        <img src="./img/stack-logo.png" alt="" width="70" height="70"  />
                    </a>
                </li>
            </ul>
           
        </footer>
    );
}

export default Footer;


