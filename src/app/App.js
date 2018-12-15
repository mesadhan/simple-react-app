import React, {Component} from 'react';

import './App.scss';
import Header from "../components/header/Header";
import Persons from "../components/person/Persons";
import AppTopBar from "../components/header/appTopBar/AppTopBar";


class App extends Component {

    state = {
        persons: [
            {id: '1', name: 'Max', age: 30},
            {id: '2', name: 'Manu', age: 29},
            {id: '3', name: 'Sadhan', age: 23}
        ],
        showPersons: true,
    };


    restoreHandler = () => {
        this.setState({
            persons: [
                {id: '1', name: 'sadhan', age: 28},
                {id: '2', name: 'Manu', age: 29},
                {id: '3', name: 'Rexon', age: 27}
            ],
            showPersons: true,
        })
    };

    updateHandler = (name) => {
        this.setState({
            persons: [
                {id: '1', name: name, age: 28},
                {id: '2', name: 'Manu Hossian', age: 29},
                {id: '3', name: 'Rexon Sarker', age: 27}
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


    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    };


    render() {

        let persons = null;

        if (this.state.showPersons) {
            persons = <Persons
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangedHandler}/>;
        }


        return (

            <div className="App">
                <AppTopBar/>

                <Header
                    toggleClicked={this.togglePersonHandler}
                    updateClicked={this.updateHandler}
                    clicked={this.restoreHandler}
                />
                {persons}

            </div>

        )

        //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App'))
        //return Template.call(this);
    }
}

export default App;
