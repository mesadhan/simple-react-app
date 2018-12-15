import React from 'react'
import ErrorBoundary from "../error-catch/ErrorBoundary";
import Person from "./Person";


const persons = (props) =>  props.persons.map((person, index) => {
    return (
        <ErrorBoundary key={person.id}>
            <div className="Person">
                <Person name={person.name}
                        click={() => props.clicked( index )}    //  click={this.deletePersonHandler.bind(this, index)}
                        changed={(event) => props.changed(event, person.id)}
                        age={person.age}/>
            </div>
        </ErrorBoundary>
    )
});

export default persons;