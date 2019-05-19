import React, { Component } from 'react';
import axios from "axios";
import { connect } from "react-redux";
import {loginTrue} from "../../ac/loginChange";
import { Link } from "react-router-dom";

class Autorization extends Component {

    state = {
      login: "Логин",
      password: "Пароль",
      email: "Email",
      Message: ""
    };

    addNewUser = () => {
        let token = "";
        axios.post(
            'http://localhost:5002/api/auth/register', {
                login: this.state.login,
                password: this.state.password,
                email: this.state.email
            }
        ).then(
            (response)  => {
                this.setState({Message: "Вы были успешно зарегистрированы"});
                console.log(token);
              //  this.props.loginTrue({login: this.state.login, token: token, password: this.state.password, role: response.data.role});
                alert(this.state.Message);
            }).catch(
            () => {
                this.setState({Message: "email занят, попробуйте ввести другой"});
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

    changeEmail = (e) => {
        this.setState({email: e.target.value})
    };

    render() {

        if (this.props.isLogin) return <div className="sub-container"><Link to = {'/login'}>Продолжить</Link></div>;

        return (
            <div className="sub-container">
                <input onChange={this.changeLogin} placeholder={this.state.login} />
                <input type="password" onChange={this.changePassword} placeholder={this.state.password} />
                <input onChange={this.changeEmail} placeholder={this.state.email} />
                <button onClick={this.addNewUser}>Зарегистрироваться</button>
                <Link to={'/login'}>Войти</Link>
            </div>
        );
    }
}

const mapDispatchToProps = {
  loginTrue: loginTrue
};

const mapStateToProps = (state) => ({
  isLogin: state.isLogin.status
});


export default connect(mapStateToProps, mapDispatchToProps)(Autorization);