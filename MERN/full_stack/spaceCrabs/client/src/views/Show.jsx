import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';

const Show = (props) => {
    const [crab, setCrab] = useState({
        name: '',
        spaceShip: '',
        weaponOne: '',
        weaponTwo: '',
        weaponThree: '',
    });

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/crab/${props.id}`)
            .then((res) => setCrab(res.data.results))
            .catch((err) => console.log(err));
    }, [props]);

    const destroyCrab = () => {
        axios
            .delete(`http://localhost:8000/api/destroy/crab/${props.id}`)
            .then((res) => navigate('/'))
            .catch((err) => console.log(err));
    };

    return (
        <div className="mx-auto p-5 col-6 bg-dark text-warning">
            <h2>{crab.name}</h2>
            <p className="text-light mb-4">Spaceship: {crab.spaceShip}</p>
            <h3>Weapons:</h3>
            <p className="text-light">{crab.weaponOne}</p>
            <p className="text-light">{crab.weaponTwo}</p>
            <p className="text-light">{crab.weaponThree}</p>
            <button
                className="btn btn-danger btn-outline-light m-5"
                onClick={destroyCrab}
            >
                Destroy {crab.name}
            </button>
        </div>
    );
};

export default Show;
