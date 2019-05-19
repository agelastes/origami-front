import React, { Component } from 'react';
import "./Navigation.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {nonfilterOrigamiList} from "../../../ac/getOrigamiList";

class Navigation extends Component {

    render() {
        console.log(this.props.users);
        return (
            <div className="nav-container">
                <Link className="link" to = {'/'}><button onClick={this.props.filterFalse}>Главная</button></Link>
                <Link className="link" to = {'/contacts'}>Контакты</Link>
                <Link className="link" to = {this.props.path}>{this.props.name}</Link>
                <Link className="link" to = {'/users'}>{this.props.users}</Link>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    path: state.isLogin.path,
    name: state.isLogin.name,
    users: state.isLogin.users
});

const mapDispatchToProps = {
  filterFalse: nonfilterOrigamiList
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
