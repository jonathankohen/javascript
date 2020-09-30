import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import Tab from './components/Tab';

function App() {
    const [tabs, setTabs] = useState([
        {
            index: 0,
            message: 'Tab 1 content',
            selected: true,
        },
        {
            index: 1,
            message: 'Tab 2 content',
            selected: false,
        },
        {
            index: 2,
            message: 'Tab 3 content',
            selected: false,
        },
    ]);

    const clickHandler = (clickedIndex) => {
        tabs.map((tab, i) => {
            if (clickedIndex === i) {
                let t = tab;
                t.selected = true;
                setTabs([...tabs.slice(0, i), t].concat(tabs.slice(i + 1)));
            }
        });
    };

    return (
        <div className="App">
            <div className="container">
                <div className="row">
                    <div className="col-4 mx-auto ">
                        <div className="btn-group" role="group">
                            {tabs.map((tab, i) => {
                                return (
                                    <Tab
                                        index={i}
                                        key={i}
                                        selected={tab.selected}
                                        onClick={clickHandler}
                                    />
                                );
                            })}
                        </div>

                        {tabs.map((tab, i) => {
                            return tab.selected ? (
                                <h1 key={i}>{tab.message}</h1>
                            ) : (
                                ''
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
