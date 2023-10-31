import React from 'react';
import '../../App.css';
import {useData} from "../../utils/DataContext";

const Card = ({ logo, title, number, prediction }) => {

    return (
        <div className="card">
            <div className="card-left">
                <div className="card-logo">{logo}</div>
                <div className="card-title">{title}</div>
                <div className="card-number">{number}</div>
            </div>
            <div className="card-right">
                <div className="card-prediction">{prediction}</div>
            </div>
        </div>
    );
}

export default Card;