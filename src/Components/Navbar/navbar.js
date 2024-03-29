import React, { useState } from "react";
import CartWidget from "../CartWidget/CartWidget";
import HeaderCSS from "./NavBar.module.css";
import { NavLink } from "react-router-dom"
import { Navbar } from "react-bootstrap";


const NavBar = () => {


    return (
        <header className="container-fluid bg-dark">
            <nav className="row pt-3">
                <div className="col-11 d-flex align-items-center">
                    <Navbar.Brand >
                        <NavLink
                            className={`text-decoration-none text-light mx-5 `}
                            to={"/"} >Dragon's Den</NavLink>
                    </Navbar.Brand>
                    <NavLink to={"/"}>
                        <button
                            type="button"
                            className={`btn btn-dark ${HeaderCSS.button}`}>Home</button>
                    </NavLink >
                    <NavLink
                        to={"/type/Weapon"}>
                        <button type="button"
                            className={`btn btn-dark ${HeaderCSS.button}`}>Weapons</button>
                    </NavLink >
                    <NavLink
                        to={"/type/Armor"}>
                        <button type="button"
                            className={`btn btn-dark ${HeaderCSS.button}`}>Armor</button>
                    </NavLink >
                    <NavLink
                        to={"/type/Magic"}>
                        <button type="button"
                            className={`btn btn-dark ${HeaderCSS.button}`}>Magic</button>
                    </NavLink >
                    <NavLink
                        to={"/type/Misc"}>
                        <button type="button"
                            className={`btn btn-dark ${HeaderCSS.button}`}>Misc</button>
                    </NavLink >
                </div>
                <div className="col-1">
                    <CartWidget />
                </div>
            </nav>
        </header>
    )
}

export default NavBar;