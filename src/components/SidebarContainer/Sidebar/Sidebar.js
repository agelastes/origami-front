import React, { Component } from 'react';
import "./Sidebar.css";
import axios from "axios";
import {connect} from "react-redux";
import {filterOrigamiList} from "../../../ac/getOrigamiList";

class Sidebar extends Component {
    answer = false;
    state = {
        answerName: "",
      surveyPage: {},
      points: [],
    };

    submitAnswer = () => {
        this.answer = true;
        localStorage.setItem('answer', `${this.state.answerName}`);
        console.log(localStorage.getItem('answer'));
    };

    componentDidMount() {
        const token = localStorage.getItem('token');
        axios.post('http://localhost:5002/api/survey/getPageSurvey', {surveyType: 'MainPage'} ,{headers: {Authorization: `${token}`}})
            .then((response) => this.setState({surveyPage: response.data.survey, points: response.data.survey.points}));
    }

    answerTrue = (point) => {
        this.setState({answerName: point.name});
    };

    render() {
        let items = this.props.item;
        if (this.props.name === "Опрос") {
            if (localStorage.getItem('answer') === '' || localStorage.getItem('answer') === undefined) {
                items = this.state.points.map((point) =>
                    <div className="survey-item">
                        <div>
                            <input onClick={() => this.answerTrue(point)} type="radio" value="point"/>
                            <span>{point.name}</span>
                        </div>
                    </div>
                );
                items.push(<button onClick={this.submitAnswer}>Голосовать</button>);
            }
            else {
                items = <span>Вы проголосовали за: {localStorage.getItem('answer')}</span>;
            }}


        else {
            items = items.map((item) => <button onClick={() => this.props.filter(item)} className="sidebar-button">{item}</button>);
        }

        return (
            <div className="sidebar">
                <h3 className="sidebar-title">{this.props.name}</h3>
                {items}
            </div>
        );
    }
}

const mapDispatchToProps = {
   filter: filterOrigamiList
};

export default connect(null, mapDispatchToProps)(Sidebar);
