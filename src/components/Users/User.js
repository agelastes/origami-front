import React, { Component } from 'react';
import "./UserList.css";
import axios from "axios";

class User extends Component {

    deleteUser = () => {
        const token = localStorage.getItem('token');
        const defaultOptions = {
            headers: {
                Authorization: `${token}`
            },
            params: {
                id: this.props.data.id
            }
        };
        axios.patch('http://localhost:5002/api/users/' + this.props.data.id, {deleted: true}, defaultOptions)
            .then((response) => (console.log(response)))
            .catch(() => console.log("error"))
    };

    render() {
        if (this.props.data.deleted) return null;
        else {
            return (
                <div className="user-list">
                    <div className="user-item">{this.props.data.login}</div>
                    <div className="user-item">{this.props.data.email}</div>
                    <div className="user-item">{this.props.data.role}</div>
                    <button onClick={this.deleteUser}>Удалить</button>
                </div>
            );
        }
    }
}

export default User;
