import React, { Component } from 'react';
import { connect } from "react-redux";
import "./MainBody.css";
import axios from "axios";
import {getOrigamiList} from "../../../ac/getOrigamiList";
import Origami from "./Origami/Origami";
import OrigamiAdder from "./OrigamiAdder/OrigamiAdder";


class MainBody extends Component {
    constructor(props) {
            axios.post('http://localhost:5002/api/origami/list').then(
                (response) => {
                    this.props.getOrigamiList(response.data);
                }
            ).catch( () => {
                console.log("ssdds")
            });

        super(props);
    };

    render() {
        const origamiList = this.props.origamiList.map((origami) => <Origami data={origami} />);

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

const mapDispatchToProps = {
  getOrigamiList: getOrigamiList
};

export default connect(mapStateToProps, mapDispatchToProps)(MainBody);
