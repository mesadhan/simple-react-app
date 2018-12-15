import React from 'react'

import './Header.scss'
import Button from "@material-ui/core/Button";

const header = (props) => {
    return (
        <div className="TopHeader">

            {/*<SwipeableTemporaryDrawer/>*/}


            <h1>Welcome To React App</h1>

            <Button variant="contained" style={{color: 'red', fontWeight: 'bold', margin: 5}} onClick={props.toggleClicked}>Toggle Person</Button>
            <Button variant="contained" color="primary"  style={{margin: 5}} onClick={() => props.updateClicked('Sadhan Sarker!!')}>Update Person</Button>
            <Button variant="contained" color="secondary" style={{margin: 5}} onClick={props.clicked}>Restore Person</Button>

        </div>
    )
};

export default header;