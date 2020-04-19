import React from 'react'
import {NavLink } from "react-router-dom"

export default function Header() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <NavLink  className="navbar-brand" to="/">
                <img src="logo.png" alt="Logo" className="logo"></img>
            </NavLink >
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink  className="nav-link" to="/" activeClassName="active">Home <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about" activeClassName="active">About Us</NavLink >
                    </li>
                </ul>

            </div>
        </nav>
    )
}
