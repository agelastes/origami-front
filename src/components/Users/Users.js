import React, { Component } from 'react';
import axios from "axios";
import User from "./User"

class OrigamiAdder extends Component {

   state = {
     userList: []
   };

   componentDidMount() {
       const token = localStorage.getItem('token');
       const defaultOptions = {
           headers: {
               Authorization: `${token}`
           }
       };
           axios.post('http://localhost:5002/api/users/usersList', null, defaultOptions)
               .then((response) => {this.setState({userList: response.data.users})})
               .catch(() => console.log("error"))
   }

   componentWillUpdate() {
       const token = localStorage.getItem('token');
       const defaultOptions = {
           headers: {
               Authorization: `${token}`
           }
       };
       axios.post('http://localhost:5002/api/users/usersList', null, defaultOptions)
           .then((response) => {this.setState({userList: response.data.users})})
           .catch(() => console.log("error"))
   }

    render() {
           const userList = this.state.userList.map((user) => <User data = {user} />);
           return (
               <div className="sub-container">
                   {userList}
               </div>
           );
    }
}


export default OrigamiAdder;
