import React, { Component } from 'react';
import "../../MainBody.css"


class Origami extends Component {

    render() {
            return (
                <div className="comment">
                    <div className="comment-content">
                        <h2>{this.props.data.author}</h2>
                        <span>{this.props.data.text}</span>
                    </div>
                </div>
            );
    }
}

export default Origami;
