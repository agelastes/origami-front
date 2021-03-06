import React, { Component } from 'react';
import "../DropDownItem.css"

class Module extends Component {

    render() {

        return (
            <div className="about-container">
                <h3 className="about-title">Модульное оригами</h3>
                <span className="sub-text">В основе лежит принцип собирания единой фигуры из нескольких модулей – составных частей. Процесс сбора модели происходит в два этапа. На первом соединяются модули – для каждого берется свой лист бумаги, а на втором – из них собирается единая фигура – модули вкладываются друг в друга. Конструкция держится за счет силы трения, которая удерживает все элементы.
Такую технику применяют для создания звездочек – плоских и объемных</span>
            </div>
        );
    }
}


export default Module;