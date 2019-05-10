import React, { Component } from 'react';
import "./ImageMenuItems.css";

class ImageMenuItems extends Component {
    render() {

        const items = this.props.items.map((item) => <img src={item} />)

        return (
            <div className="image-menu">
                {items}
            </div>
        );
    }
}

export default ImageMenuItems;
