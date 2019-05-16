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
import Module from "./components/Header/DropDownItem/OrigamiTypes/Module";
import Easy from "./components/Header/DropDownItem/OrigamiTypes/Easy";
import Razv from "./components/Header/DropDownItem/OrigamiTypes/Razv";
import Kvilling from "./components/Header/DropDownItem/OrigamiTypes/Kvilling";
import Watter from "./components/Header/DropDownItem/OrigamiTypes/Watter";
import Money from "./components/Header/DropDownItem/OrigamiTypes/Money";
import {getOrigamiList} from "./ac/getOrigamiList";


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
        axios.post('http://localhost:5002/api/origami/list').then(
            (response) => {
                this.props.getOrigamiList(response.data);
            }
        ).catch( () => {
            console.log("ssdds")
        });
    }

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
                  <Route path = {'/module'} component = {Module} />
                  <Route path = {'/easy'} component = {Easy} />
                  <Route path = {'/razvertka'} component = {Razv} />
                  <Route path = {'/watter'} component = {Watter} />
                  <Route path = {'/money'} component = {Money} />
                  <Route path = {'/kvilling'} component = {Kvilling} />
              </Switch>
          </body>
      </div>
    );
  }
}

const mapDispatchToProps = {
  isLogin: loginTrue,
  noLogin: loginFalse,
    getOrigamiList: getOrigamiList
};

const mapStateToProps = (state) => ({
    origamiList: state.origamiList
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
