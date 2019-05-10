import React, { Component } from 'react';
import "./Sidebar.css";
import axios from "axios";

class Sidebar extends Component {
    answerId;
    state = {
      surveyPage: {},
      points: []
    };
    submitAnswer = () => {
        console.log(this.answerId);
        const token = localStorage.getItem('token');
        axios.post('http://localhost:5002/api/survey/setAnswer', {surveyType: 'MainPage', pointId: this.answerId, value: true, id: localStorage.getItem('userId')},
            {headers: { Authorization: `${token}`} })
            .then((response) => console.log(response));
    };
    render() {
        let items = this.props.item;
        if (this.props.name === "Опрос") {
            const token = localStorage.getItem('token');
            axios.post('http://localhost:5002/api/survey/getPageSurvey', {surveyType: 'MainPage'} ,{headers: {Authorization: `${token}`}})
                .then((response) => this.setState({surveyPage: response.data.survey, points: response.data.survey.points}));
            items = this.state.points.map((point) =>
                <div className="survey-item">
                    <input onClick={this.answerId = point.id} type="radio"/>
                    {point.name}
                </div>);
            items.push(<button onClick={this.submitAnswer}>Голосовать</button>);
        }

        else {
            items = items.map((item) => <button className="sidebar-button">{item}</button>);
        }

        return (
            <div className="sidebar">
                <h3 className="sidebar-title">{this.props.name}</h3>
                {items}
            </div>
        );
    }
}

export default Sidebar;
