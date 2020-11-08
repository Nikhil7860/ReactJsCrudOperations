import React from 'react';

import { NavLink } from 'react-router-dom';

const Navbar = () => {


    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">

                <NavLink className="navbar-brand" to="/">ReactJsCrudOperations</NavLink>

                <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav  ml-auto mr-1">
                        <li className="nav-item ">
                            <NavLink className="nav-link" exact to="/">Home </NavLink></li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/aboutUs">About </NavLink></li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/login">Login </NavLink></li>
                    </ul>
                </div>
                <NavLink className="btn btn-outline-light" to="/users/add">AddUser</NavLink>
            </div>
        </nav>
    );
}


export default Navbar;