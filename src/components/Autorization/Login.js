import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import {loginTrue} from "../../ac/loginChange";

class Login extends Component {

    state = {
        login: "Логин",
        password: "Пароль",
        Message: ""
    };

    userDataControl = () => {
        console.log(this.state.login, this.state.password);
        axios.post(
            'http://localhost:5002/api/auth/login', {
                login: this.state.login,
                password: this.state.password,
            }
        ).then(
            (response)  => {
                console.log(response);
                this.setState({Message: "Вход успешно выполнен"});
                this.props.loginCheck({login: this.state.login, token: response.data.token, password: this.state.password, role: response.data.role});
                console.log(response.data.role);
                alert(this.state.Message);
            }).catch(
            () => {
                this.setState({Message: "Вы не зарегистрированы"});
                alert(this.state.Message);
            }
        )
    };

    changeLogin = (e) => {
        this.setState({login: e.target.value})
    };

    changePassword = (e) => {
        this.setState({password: e.target.value})
    };

    render() {

        if (this.props.isLogin) return <div className="sub-container"><Link to = {'/profile'}>Продолжить</Link></div>;

        return (
            <div className="sub-container">
                <h1>{this.props.login}</h1>
                <input onChange={this.changeLogin} placeholder={this.state.login} />
                <input onChange={this.changePassword} placeholder={this.state.password} />
                <button onClick={this.userDataControl}>Войти</button>
                <Link to={'/autorisation'}>Зарегистрироваться</Link>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isLogin: state.isLogin.login
});

const mapDispatchToProps = {
    loginCheck: loginTrue
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

