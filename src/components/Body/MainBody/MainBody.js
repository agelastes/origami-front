import React, { Component } from 'react';
import { connect } from "react-redux";
import "./MainBody.css";
import axios from "axios";
import {getOrigamiList} from "../../../ac/getOrigamiList";
import Origami from "./Origami/Origami";
import OrigamiAdder from "./OrigamiAdder/OrigamiAdder";


class MainBody extends Component {

    // componentDidUpdate() {
    //     axios.post('http://localhost:5002/api/origami/list').then(
    //         (response) => {
    //             this.props.getOrigamiList(response.data);
    //         }
    //     ).catch( () => {
    //         console.log("ssdds")
    //     });
    //
    // };

    render() {
        console.log(this.props.origamiList);
        const origamiList = this.props.origamiList.filterOrigami.map((origami) => <Origami data={origami} />);
        console.log(origamiList);
        return (
            <div className="main-body-block">
                {origamiList}
                <OrigamiAdder />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
   origamiList: state.origamiList
});

export default connect(mapStateToProps)(MainBody);
