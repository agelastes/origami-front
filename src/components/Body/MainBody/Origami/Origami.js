import React, { Component } from 'react';
import  Comment  from "./Comment/Comment"
import axios from "axios";
import "../../../../Button.css";

class Origami extends Component {
    state = {
      commentsVisible: false,
        commentList: [],
            title: localStorage.getItem('login'),
            text:  "",
        author: ""
    };
    viewComments = () => {
        console.log(this.props.data._id);
        axios.post('http://localhost:5002/api/origami/origamiInfo', {id: this.props.data._id, withDetail: true})
            .then((response) => (this.setState({commentList: response.data.comments})));
        this.setState({commentsVisible: !this.state.commentsVisible});
        console.log(this.state.commentList);
    };
    textReader = (e) => {
        this.setState({text: e.target.value})
    };
    createComment = () => {
        const token = localStorage.getItem('token');
        const login = localStorage.getItem('login');
        console.log(this.state.text);
        const defaultOptions = {
            headers: {
                Authorization: `${token}`
            }
        };
        axios.post(
            'http://localhost:5002/api/comment/create', {
                text: this.state.text, origamiId: this.props.data._id, login: login
            }, defaultOptions
        ).catch(
            () => {
                console.log("error");
            }
        )
    };
    origamiDelete = () => {
        const token = localStorage.getItem('token');
        const defaultOptions = {
            headers: {
                Authorization: `${token}`
            }
        };
        axios.patch('http://localhost:5002/api/origami/' + this.props.data._id, {deleted: true}, defaultOptions)
            .then(() => {this.props.reload()})
            .catch(() => (console.log("error")))
    };
    render() {
        const login = localStorage.getItem('login');
        const author = this.props.data.author;
        console.log(this.state.commentList);
        let commentList = [];
        if (this.state.commentsVisible) commentList = this.state.commentList.map((comment) => <Comment  data = {comment} />);
        if (this.props.data.deleted) return null;
        else {
            return (
                <div className="origami">
                    <h2>{this.props.data.title}</h2>
                    <span>{this.props.data.description}</span>
                    <img src={this.props.data.mainImage}/>
                    <h3>Автор:{author}</h3>
                    {login === "denislwn" ?   <button onClick={this.origamiDelete}>Удалить</button> : null}
                    <button onClick={this.viewComments}>Комментарии</button>
                    {commentList}
                    <div className="comment-adder">
                        <input className="comment-input" onChange={this.textReader} placeholder="Комментарий" />
                        <button onClick={this.createComment}>Отправить</button>
                    </div>
                </div>
            );
        }
    }
}

export default Origami;
