import React, {Component} from 'react';

import './App.scss';
import Header from "../components/header/Header";
import Persons from "../components/person/Persons";
import AppTopBar from "../components/header/appTopBar/AppTopBar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
    list: {
        width: 250,
    }
};

class App extends Component {

    state = {
        persons: [
            {id: '1', name: 'Max', age: 30},
            {id: '2', name: 'Manu', age: 29},
            {id: '3', name: 'Sadhan', age: 23}
        ],
        showPersons: true,
        leftSideBar: false
    };

    toggleDrawer = (side, openSideBar) => () => {
        this.setState({leftSideBar: openSideBar} );
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
        const { classes } = this.props;

        let persons = null;
        if (this.state.showPersons) {
            persons = <Persons
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangedHandler}/>;
        }


        const sideList = (
            <div className={classes.list}>
                <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <MenuIcon /> : <MenuIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <MenuIcon /> : <MenuIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </div>
        );



        return (
            <div className="App">

                <div>
                    {/*<Button onClick={this.toggleDrawer('leftSideBar', true)}>Open Left</Button>*/}
                    <SwipeableDrawer
                        open={this.state.leftSideBar}
                        onClose={this.toggleDrawer('leftSideBar', false)}
                        onOpen={this.toggleDrawer('leftSideBar', true)}>
                        <div
                            tabIndex={0}
                            role="button"
                            onClick={this.toggleDrawer('leftSideBar', false)}
                            onKeyDown={this.toggleDrawer('leftSideBar', false)}>
                            {sideList}
                        </div>
                    </SwipeableDrawer>
                </div>


                <AppTopBar
                    toggleDrawerClicked={this.toggleDrawer}
                />

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

App.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(App);
