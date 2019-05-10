import React, { Component } from 'react';
import Navigation from "../NavigationMenu/Navigation";
import "./HeaderMenu.css"
import { Link } from "react-router-dom";
import {navigationMenuNames} from "../../../constants/menuConstants";

class HeaderMenu extends Component {
    render() {
        return (
            <div className="header-menu">
                <Link className="link" to = {'/'}><h1 className="App-logo">Оригами</h1></Link>
                <Navigation items = {navigationMenuNames} />
            </div>
        );
    }
}

export default HeaderMenu;
