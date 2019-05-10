import React, { Component } from 'react';
import { connect } from "react-redux";
import {loginFalse} from "../../ac/loginChange";
import { Link } from "react-router-dom";

class Profile extends Component {
    render() {
        return (
            <div className="sub-container">
                <h1>{this.props.login}</h1>
                <Link to={'/autorisation'}><button onClick={this.props.anLogin}>Выйти</button></Link>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
   login: state.isLogin.login
});

const mapDispatchToProps = {
  anLogin: loginFalse
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
