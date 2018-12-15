import React from 'react'

import './Header.scss'

const header = (props) => {
    return (
        <div className="TopHeader">
            <h1>Welcome To React App</h1>

            <button style={{color: 'red', fontWeight: 'bold'}} onClick={props.toggleClicked}>Toggle Person</button>
            <button onClick={() => props.updateClicked('Sadhan Sarker!!')}>Update Person</button>
            <button onClick={props.clicked}>Restore Person</button>

        </div>
    )
};

export default header;