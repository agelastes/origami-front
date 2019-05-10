import React, { Component } from 'react';
import "../SubBody.css";


class MainBody extends Component {
    render() {
        return (
            <div className="sub-body-block">
                <div className="book-container">
                    <img src="https://img1.labirint.ru/books39/384245/big.jpg"/>
                    <div className="book-contant">
                        <h3>Набор для творчества. Модульное оригами "Розовый лотос"</h3>
                        <span>Аннотация к "Набор для творчества. Модульное оригами "Розовый лотос""
                                Набор для творчества.
                                Уровень сложности 2 из 3
                                Количество деталей: 1280
                                Рекомендовано для детей старше 8 лет
                                Сделано в России.

                                Подробнее: https://www.labirint.ru/games/384245/</span>
                        <p>Цена: 139 рублей</p>
                    </div>
                    <a href="https://www.labirint.ru/games/384245/">Купить</a>
                </div>
            </div>
        );
    }
}


export default MainBody;
