import React, { Component } from 'react';
import "./DropDownItem.css"
import { Link } from "react-router-dom";

class DropDownItem extends Component {

    state = {
      typesVisible: false
    };

    dropItems = (item) => {
        if (item.name === "Виды оригами") this.setState({typesVisible: !this.state.typesVisible});
        if (item === "clear") this.setState({typesVisible: false})
    };

    render() {

        const items = this.props.items.map((item) =>
            <div>
                <Link className = "drop-down-menu-item" to = {'/' + item.path}><button onClick={() => this.dropItems(item)} className="button">{item.name}</button></Link>
                 {item.name === "Виды оригами" && this.state.typesVisible ?
                     <div className="drop-items-container">
                         <Link to={'/module'} className = "drop-down-menu-item"><button className="button" onClick={() => this.dropItems("clear")}>Модульное оригами</button></Link>
                         <Link to={'/easy'} className = "drop-down-menu-item"><button onClick={() => this.dropItems("clear")} className="button">Простое оригами</button></Link>
                         <Link to={'/razvertka'} className = "drop-down-menu-item"><button onClick={() => this.dropItems("clear")} className="button">Развертка</button></Link>
                         <Link to={'/watter'} className = "drop-down-menu-item"><button onClick={() => this.dropItems("clear")} className="button">Мокрое оригами</button></Link>
                         <Link to={'/money'} className = "drop-down-menu-item"><button onClick={() => this.dropItems("clear")} className="button">Оригами из денег</button></Link>
                         <Link to={'/kvilling'} className = "drop-down-menu-item"><button onClick={() => this.dropItems("clear")} className="button">Квиллинг</button></Link>
                     </div> : null
                 }
            </div>);

        return (
            <div className="drop-down-menu">
                {items}
            </div>
        );
    }
}


export default DropDownItem;