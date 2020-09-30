import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const PersonCard = (props) => {
    const [state, setState] = useState({
        age: props.age,
    });

    const handleClick = () => {
        setState({
            age: state.age + 1,
        });
    };

    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">
                    {props.lastName}, {props.firstName}
                </h4>
                <p className="card-text">{state.age}</p>
                <p className="card-text">Hair Color: {props.hairColor}</p>
                <button onClick={handleClick}>
                    Birthday Button for {props.firstName} {props.lastName}
                </button>
            </div>
        </div>
    );
};

export default PersonCard;
