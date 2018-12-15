import React, {Component} from 'react';
import './App.css';
import '../components/person/Person.css'
import Persons from "../components/person/Persons";


class App extends Component {

    state = {
        persons: [
            {id: '1', name: 'Max', age: 30},
            {id: '2', name: 'Manu', age: 29},
            {id: '3', name: 'Sadhan', age: 23}
        ],
        showPersons: true,
        vipPerson: {id: 10, name: 'Manu', age: 29}
    };


    clickHandler = () => {
        // console.log('Was clicked!');
        // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
        this.setState({
            persons: [
                {id: '1', name: 'sadhan', age: 28},
                {id: '2', name: 'Manu', age: 29},
                {id: '3', name: 'Stephanie', age: 27}
            ]
        })
    };

    updateHandler = (name) => {
        this.setState({
            persons: [
                {id: '1', name: name, age: 28},
                {id: '2', name: 'Manu', age: 29},
                {id: '3', name: 'Stephanie', age: 27}
            ]
        })
    };


    togglePersonHandler = () => {
        console.log('message', 'toggle');
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow})
    };


    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;
        this.setState({persons: persons});
    };


    deletePersonHandler = ( personIndex ) => {
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice( personIndex, 1 );
        this.setState( { persons: persons } );
    };


    render() {

        let persons = null;

        if ( this.state.showPersons ) {
            persons = <Persons
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangedHandler} />;
        }



        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is really working!</p>
                <button onClick={this.clickHandler}>Click Person</button>
                <button style={{color: 'red', fontWeight: 'bold'}} onClick={this.togglePersonHandler}>Toggle Person</button>
                <button onClick={() => this.updateHandler('Maximilian!!')}>Update Person</button>


                {persons}

                <h1>Welcome To React App</h1>

            </div>
        );

        //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App'))
        //return Template.call(this);
    }
}

export default App;
