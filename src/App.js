import React, { Component } from 'react';
import "./components/Header/DropDownItem/DropDownItem";
import './App.css';
import DropDownItem from "./components/Header/DropDownItem/DropDownItem";
import HeaderMenu from "./components/Header/HeaderMenu/HeaderMenu";
import ImageMenuItems from "./components/Header/ImageMenuItems/ImageMenuItems";
import SidebarContainer from "./components/SidebarContainer/SidebarContainer";
import MainBody from "./components/Body/MainBody/MainBody";
import Footer from "./components/Footer/Footer";
import { Switch, Route } from "react-router-dom";
import {
    dropDownItemNames,
    imageMenuItems,
    sideBarData
} from "./constants/menuConstants"
import SubBody from "./components/Body/SubBody/SubBody";
import {aboutData, aboutOrigamiData, typesOfOrigamiData} from "./constants/bodyConstants";
import Autorization from "./components/Autorization/Autorization";
import Contacts from "./components/Contacts/Contacts";
import Profile from "./components/Profile/Profile"
import Login from "./components/Autorization/Login";
import Users from "./components/Users/Users";
import axios from "axios";
import { connect } from "react-redux";
import {loginFalse, loginTrue} from "./ac/loginChange";
import Books from "./components/Body/SubBody/Books/Books"


class App extends Component {

    loginControl = (token, userData) => {
        if (userData.token === token) this.props.isLogin(userData);
        else this.props.noLogin();
    };

    componentWillMount() {
        const login = localStorage.getItem('login');
        const password = localStorage.getItem('password');
        const token = localStorage.getItem('token');
        axios.post('http://localhost:5002/api/auth/login', {login: login, password: password})
            .then((response) => {
                this.loginControl(token, {login: login, password: password, token: token, role: response.data.role});
                localStorage.setItem('userId', response.data.id);
                console.log(localStorage.getItem('userId'))
            });
    }

    kurlikPopo = () => {
        const token = localStorage.getItem('token');
      axios.post('http://localhost:5002/api/survey/create', {name: "Опрос",
          points: [{name: "Модульное оригами"}, {name: "Оригами паттерн"},
              {name: "Простое оригами"}, {name: "Мокрое складывание"}, {name: "Оригами из денег"},
              {name: "Квиллинг"}, {name: "Мне все нравится!"}], surveyType: 'MainPage'}, {headers: {Authorization: `${token}`}})
    };

    render() {
    return (
      <div className="App">
          <HeaderMenu />
          <header className="App-header">
          </header>
          <DropDownItem items = {dropDownItemNames} />
          <body className="App-body">
              <SidebarContainer items = {sideBarData}/>
              <Switch>
                  <Route exact path = {'/'} component = {MainBody} />
                  <Route path = {'/about'} render={(props) => <SubBody data = {aboutData}{...props}/>} />
                  <Route path = {'/about-origami'} render={(props) => <SubBody data = {aboutOrigamiData}{...props}/>} />
                  <Route path = {'/types-of-origami'} render={(props) => <SubBody data = {typesOfOrigamiData}{...props}/>} />
                  <Route path = {'/autorisation'} component = {Autorization} />
                  <Route path = {'/login'} component = {Login} />
                  <Route path = {'/contacts'} component = {Contacts} />
                  <Route path = {'/profile'} component = {Profile} />
                  <Route path = {'/users'} component = {Users} />
                  <Route path = {'/books'} component = {Books} />
              </Switch>
          </body>
      </div>
    );
  }
}

const mapDispatchToProps = {
  isLogin: loginTrue,
  noLogin: loginFalse
};

export default connect(null, mapDispatchToProps)(App);
