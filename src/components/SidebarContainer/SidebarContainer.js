import React, { Component } from 'react';
import Sidebar from "./Sidebar/Sidebar";
import "./SidebarContainer.css"

class SidebarContainer extends Component {
    render() {

        const sideBars = this.props.items.map((item) => <Sidebar name = {item.name} item = {item.data} />);

        return (
            <div className="sidebar-container">{sideBars}</div>
        );
    }
}

export default SidebarContainer;
