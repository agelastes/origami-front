import React, { Component } from 'react';
import "../DropDownItem.css"

class Module extends Component {

    render() {

        return (
            <div className="about-container">
                <h3 className="about-title">Оригами из денег</h3>
                <span className="sub-text">Вариаций материалов, из которых можно складывать фигурки-оригами, не счесть. Например, почему бы не сложить интересную фигурку прямо из… денежной купюры?   Такая интересная мысль пришла мастеру оригами из Кореи Вону Парку. Он первым начал использовать купюры номиналом 1 и 2 доллара для создания новых произведений бумажного искусства. Это направление оригами получило название «манигами».   Вон Парк познакомился с искусством оригами в шестилетнем возрасте. Тогда, живя в семье с очень низким достатком, он научился у мамы делать самостоятельно себе игрушки из бумаги. В качестве материала использовались страницы, вырванные из телефонного справочника. Сегодня он успешный человек, который написал несколько книг об оригами, живет и работает на Гавайях.   Из купюр получаются очень интересные фигурки, они могут выполняться как из одной  купюры, так и из нескольких купюр, соединенных тем или иным образом. Примечательно, что манигами не способствует сокращению семейного бюджета – фигурки всегда можно разобрать и использовать деньги по назначению.   Для создания фигурок из денег можно использовать купюры любого номинала. Главное будьте аккуратны, ведь в процессе работы можно повредить купюру! </span>
            </div>
        );
    }
}


export default Module;