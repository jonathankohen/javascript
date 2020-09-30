import React from 'react';

const Tab = (props) => {
    return (
        <button
            type="button"
            className={props.selected ? 'btn btn-dark' : 'btn btn-light'}
            onClick={() => props.clickHandler(props.index)}
        >
            Tab {props.index}
        </button>
    );
};

export default Tab;
