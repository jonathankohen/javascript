import React, { useState } from 'react';
import axios from 'axios';

import CrabForm from '../components/CrabForm';
import { navigate } from '@reach/router';

const New = (props) => {
    const initialCrab = {
        name: '',
        spaceShip: '',
        weaponOne: '',
        weaponTwo: '',
        weaponThree: '',
    };

    const [crab, setCrab] = useState(initialCrab);

    const [errors, setErrors] = useState(initialCrab);

    const handleInputChange = (e) => {
        setCrab({
            ...crab,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        setErrors(initialCrab);
        e.preventDefault();
        axios
            .post('http://localhost:8000/api/create/crab', crab)
            .then((res) => {
                if (res.data.results) {
                    navigate('/');
                } else {
                    setErrors(res.data);
                }
            })
            .catch((err) => console.log(err));
    };

    return (
        <div>
            <h2 className="mb-5">Create a Crab</h2>
            <CrabForm
                inputs={crab}
                errors={errors}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                submitValue="Create a Crab"
            />
        </div>
    );
};

export default New;
