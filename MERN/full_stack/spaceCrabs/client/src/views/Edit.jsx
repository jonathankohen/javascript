import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

import CrabForm from '../components/CrabForm';

const Edit = (props) => {
    const initialCrab = {
        name: '',
        spaceShip: '',
        weaponOne: '',
        weaponTwo: '',
        weaponThree: '',
    };

    const [edit, setEdit] = useState(initialCrab);

    const [errors, setErrors] = useState(initialCrab);

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/crab/${props.id}`)
            .then((res) => setEdit(res.data.results))
            .catch((err) => console.log(err));
    }, [props]);

    const handleInputChange = (e) => {
        setEdit({
            ...edit,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        setErrors(initialCrab);
        e.preventDefault();
        axios
            .put(`http://localhost:8000/api/update/crab/${props.id}`, edit)
            .then((res) => {
                if (res.data.results) {
                    navigate(`/crab/${props.id}`);
                } else {
                    setErrors(res.data);
                }
            })
            .catch((err) => console.log(err));
    };

    return (
        <div>
            <h2>Edit Crab:</h2>
            <CrabForm
                inputs={edit}
                errors={errors}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                submitValue="Edit Crab"
            />
        </div>
    );
};

export default Edit;
