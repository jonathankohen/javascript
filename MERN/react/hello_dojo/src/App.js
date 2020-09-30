import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import PersonCard from './components/PersonCard';
// import Sandwich from './components/Sandwich';
import HookForm from './components/HookForm';

function App() {
    return (
        <div className="App">
            <HookForm />
            {/* <Sandwich /> */}
            {/* <div className="card-group">
                <PersonCard
                    firstName="Jane"
                    lastName="Doe"
                    age={45}
                    hairColor="Black"
                />
                <PersonCard
                    firstName="John"
                    lastName="Smith"
                    age={88}
                    hairColor="Brown"
                />
                <PersonCard
                    firstName="Millard"
                    lastName="Fillmore"
                    age={50}
                    hairColor="Brown"
                />
                <PersonCard
                    firstName="Maria"
                    lastName="Smith"
                    age={62}
                    hairColor="Brown"
                />
            </div> */}
        </div>
    );
}

export default App;
