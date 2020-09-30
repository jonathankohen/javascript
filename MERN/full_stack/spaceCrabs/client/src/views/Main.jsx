import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';

const Main = () => {
    const [crabs, setCrabs] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/crabs')
            .then((res) => setCrabs(res.data.results))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <h1 className="mb-5">All Space Crabs:</h1>
            <table className="table table-dark col-8 mx-auto">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Spaceship</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {crabs.map((c, i) => {
                        return (
                            <tr key={i}>
                                <td className="vertical-align-center">
                                    {c.name}
                                </td>
                                <td className="vertical-align-center">
                                    {c.spaceShip}
                                </td>
                                <td>
                                    <Link
                                        to={`/edit/${c._id}`}
                                        className="btn-sm btn-outline-warning mr-2"
                                    >
                                        Edit
                                    </Link>
                                    <Link
                                        to={`/crab/${c._id}`}
                                        className="btn-sm btn-warning"
                                    >
                                        Show
                                    </Link>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Main;
