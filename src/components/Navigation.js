
import React from 'react';
import { NavLink} from 'react-router-dom';

const Navigation = () => {

    return (
        <div className="App">
            <div className="wrapper">
                <div id="wrap">
                    <nav className="siteNavigation_nav_links">
                        <div className="main_links_nav">
                        <div className="logo_image">{/*<img src="/images/Logo.png"></img>*/}</div>
                           <div className="navigationpanel">
                                <NavLink className="mob_link" to="/">Home</NavLink>
                                <NavLink className="mob_link" to="/tutorials">Tutorials</NavLink>
                                <NavLink className="mob_link" to="/tutorialslist">Tutorials List</NavLink>
                                <NavLink className="mob_link" to="/about">About</NavLink>
                           </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Navigation;