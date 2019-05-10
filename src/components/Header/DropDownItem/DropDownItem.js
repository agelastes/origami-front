import React, { Component } from 'react';
import "./DropDownItem.css"
import { Link } from "react-router-dom";

class DropDownItem extends Component {
    render() {

        const items = this.props.items.map((item) => <Link className = "drop-down-menu-item" to = {'/' + item.path}>{item.name}</Link>);

        return (
            <div className="drop-down-menu">
                {items}
            </div>
        );
    }
}


export default DropDownItem;