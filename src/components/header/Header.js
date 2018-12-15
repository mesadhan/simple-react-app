import React from 'react'
import './Header.scss'
import Button from "@material-ui/core/Button";

const header = (props) => {
    return (
        <div className="TopHeader">
            <h1>Welcome To React App</h1>
            <Button variant="contained" style={{color: 'red', fontWeight: 'bold'}} onClick={props.toggleClicked}>Toggle Person</Button>
            <Button variant="contained" color="primary" onClick={() => props.updateClicked('Sadhan Sarker!!')}>Update Person</Button>
            <Button variant="contained" color="secondary" onClick={props.clicked}>Restore Person</Button>

        </div>
    )
};

export default header;