import React, { Component } from 'react';
import "./SubBody.css";

class SubBody extends Component {
    render() {

        console.log(this.props.data.path);

        return (
            <div className="about-container">
                <h3 className="about-title">{this.props.data.header}</h3>
                <span className="sub-text">{this.props.data.text}</span>
                <img src={this.props.data.path} />
            </div>
        );
    }
}

export default SubBody;
