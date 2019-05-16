import React, { Component } from 'react';
import "./OrigamiAdder.css";
import axios from "axios";
import ImageUpload from "../../../ImageUploader/ImageUploader";

class OrigamiAdder extends Component {

    state = {
        title: "",
        description: "",
        category: ""
    };

    createOrigami = () => {
        const token = localStorage.getItem('token');
        console.log(token);
        const mainImage = localStorage.getItem('origami-avatar');
        const defaultOptions = {
            headers: {
                Authorization: `${token}`
            }
        };
        axios.post('http://localhost:5002/api/origami/create',
            {title: this.state.title, description: this.state.description, mainImage: mainImage, author: localStorage.getItem('login'), category: this.state.category},
            defaultOptions)
            .then((response) => console.log(response))
                .catch(() => alert("Пожалуйста зарегистрируйтесь чтобы оставить запись"));
        localStorage.setItem('author', localStorage.getItem('login'));
    };

    onChangeTitle = (e) => {
        this.setState({title: e.target.value})
    };

    onChangeDescription = (e) => {
        this.setState({description: e.target.value})
    };

    onChangeCategory = (e) => {
        this.setState({category: e.target.value});
    };

    render() {
        console.log(this.state.category);
        return (
            <div className="origami-adder-container">
                <h1 className="origami-adder-header">Добавить оригами</h1>
                <input onChange={this.onChangeTitle} className="origami-adder-title" placeholder="Заголовок"/>
                <input onChange={this.onChangeDescription} className="origami-adder-description" placeholder="Описание" />
                    <select onChange= {this.onChangeCategory} className="category" id="category">
                        <option value="Простое оригами">Простое оригами</option>
                        <option value="Модульное оригами">Модульное оригами</option>
                        <option value="Оригами паттерн">Оригами паттерн</option>
                        <option value="Мокрое складывание">Мокрое оригами</option>
                        <option value="Оригами для детей">Для детей</option>
                        <option value="Оригами для начинающих">Для начинающих</option>
                        <option value="Оригами для продвинутых">Для продвинутых</option>
                    </select>
                    <ImageUpload />
                <button onClick={this.createOrigami}>Добавить</button>
            </div>
        );
    }
}

export default OrigamiAdder;
