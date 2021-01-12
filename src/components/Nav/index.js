import React from 'react';



function Nav(props) {
    const tabs = ['About', 'Portfolio', 'Contact', 'Resume'];

    return(
        <header className="navbar navbar-expand-lg navbar-light bg-light" id="nav-header" >
            <a className="navbar-brand" id="nav-name" href="/">Sydney Porter</a>
            <ul className="nav nav-tabs">
                {tabs.map(tab => (
                    <li className="nav-item" key={tab}>
                        <a
                            href={'#About'}
                            onClick={() => props.handlePageChange(tab)}
                            className={
                                props.currentPage === tab ? 'nav-link active' : 'nav-link'
                            }
                        >
                            {tab}
                        </a>
                    </li>
                ))}
            </ul>
        </header>
    );
}

export default Nav;
