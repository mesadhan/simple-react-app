import React from 'react'
import '../person/Person.css'

let style = {
    color: 'red',
    fontSize: 20
};

const person = (props) => {
    return (
        <div className="Person">

            {/*<p style={style}>I am {props.name} and I am {Math.floor(Math.random() * 30)} years old!</p>*/}
            <p style={style} onClick={props.click}>I am <span style={{color: 'green'}}>{props.name}</span> and I am <span style={{color: 'green'}}>{props.age} </span>years old!</p>
            <div>{props.children}</div>
            <input type="text" onChange={props.changed} defaultValue={props.name}/>

        </div>
    )
};

export default person;