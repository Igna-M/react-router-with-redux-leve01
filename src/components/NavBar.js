import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const NavBar = (props) => {

    return (
        <nav 
            className="ui raised very padded segment" 
        >
            <a href="/" className="ui teal inverted segment">App</a>   
            <div className="ui right floated header">
                <button className="ui button"><Link to="/">Home</Link></button>
                <button className="ui button"><NavLink to="/about">About</NavLink></button>
                <button className="ui button"><Link to="/contact">Contact</Link></button>
                <button className="ui button"><Link to="/users">Users</Link></button>
            </div>
        </nav>
    )
}

export default NavBar;