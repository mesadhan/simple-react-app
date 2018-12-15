import React, {Component} from 'react';
import './App.css';
//import Template from './Template';
import Person from '../person/Person'


class App extends Component {

    state = {
        persons: [
            {name: 'Max', age: 30},
            {name: 'Manu', age: 29},
            {name: 'Sadhan', age: 23}
        ],
        showPersons: true
    };


    clickHandler = () => {
        // console.log('Was clicked!');
        // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
        this.setState({
            persons: [
                {name: 'sadhan', age: 28},
                {name: 'Manu', age: 29},
                {name: 'Stephanie', age: 27}
            ]
        })
    };

    updateHandler = (name) => {
        this.setState({
            persons: [
                {name: name, age: 28},
                {name: 'Manu', age: 29},
                {name: 'Stephanie', age: 27}
            ]
        })
    };


    togglePersonHandler = () => {
        console.log('message', 'toggle');
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow})
    };


    nameChangeHandler = (event) => {
        this.setState({
            persons: [
                {name: 'Max', age: 30},
                {name: event.target.value, age: 23},
                {name: 'Sadhan', age: 23}
            ]
        })
    };

    render() {

        let person = null;
        if (this.state.showPersons) {
            person = <div>
                <Person name={this.state.persons[0].name}
                        age={this.state.persons[0].age}/>

                <Person name={this.state.persons[1].name}
                        age={this.state.persons[1].age}
                        click={this.updateHandler.bind(this, 'Max!')}
                        changed={this.nameChangeHandler}>
                    <div className="">
                        My Hobbies: Racing, Gaming
                    </div>
                </Person>

                <Person name={this.state.persons[2].name}
                        age={this.state.persons[2].age}/>
            </div>
        }


        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is really working!</p>
                <button onClick={this.clickHandler}>Click Person</button>
                <button onClick={this.togglePersonHandler}>Toggle Person</button>
                <button onClick={() => this.updateHandler('Maximilian!!')}>Update Person</button>


                {person}

            </div>
        );

        //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App'))
        //return Template.call(this);
    }
}

export default App;
