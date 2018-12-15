import React from 'react'

import './Header.scss'
import SwipeableTemporaryDrawer from "./appDrawers/SwipeableTemporaryDrawer";

const header = (props) => {
    return (
        <div className="TopHeader">

            {/*<SwipeableTemporaryDrawer/>*/}

            <h1>Welcome To React App</h1>

            <button style={{color: 'red', fontWeight: 'bold'}} onClick={props.toggleClicked}>Toggle Person</button>
            <button onClick={() => props.updateClicked('Sadhan Sarker!!')}>Update Person</button>
            <button onClick={props.clicked}>Restore Person</button>

        </div>
    )
};

export default header;