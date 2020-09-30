import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Router, Link } from '@reach/router';
import Main from './views/Main';
import New from './views/New';
import Show from './views/Show';
import Edit from './views/Edit';

function App() {
    return (
        <div className="App">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
                <Link class="navbar-brand text-warning" to="/">
                    Space Crabs
                </Link>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <Link class="nav-link" to="/">
                                Home <span class="sr-only">(current)</span>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/new">
                                Create
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <Router>
                <Main path="/" />
                <New path="/new" />
                <Show path="/crab/:id" />
                <Edit path="/edit/:id" />
            </Router>
        </div>
    );
}

export default App;
