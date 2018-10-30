import React from 'react';
import { NavLink } from 'react-router-dom';
import './Components.css';

const SideBar = () => (
    <div className="sidebar-container">
        <h1>
            Lambda <br /> Notes
        </h1>
        <NavLink to='/'>View Your Notes</NavLink>
        <NavLink to='/createnote'>+ Create New Note</NavLink>
    </div>
)

export default SideBar;