import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
class App extends Component {
    state = {
        persons: [
            { id: 'abc1', name: 'Max', age: 28 },
            { id: 'abc12', name: 'Manu', age: 29 },
            { id: 'abc123', name: 'Stephanie', age: 26 }
        ],
        otherState: 'some other value'
    };

    switchNameHandler = (newName) => {
        // console.log('Was clicked!');
        // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
        this.setState({
            persons: [
                { name: newName, age: 28 },
                { name: 'Manu', age: 29 },
                { name: 'Stephanie', age: 27 }
            ],
            showPersons: false
        });
    };

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });
        const person = {
            ...this.state.persons[personIndex]
        }
        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({ persons: persons });
    }

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({ persons: persons });
    }

    togglePersonsHandler = () => {
        this.setState({
            showPersons: !this.state.showPersons
        })
    }

    render() {
        let persons = null;
        let btnClass = [classes.Button];
        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <ErrorBoundary>
                            <Person
                                click={
                                    () => this.deletePersonHandler(index)}
                                name={person.name}
                                age={person.age}
                                key={person.id}
                                changed={
                                    (event) => this.nameChangedHandler(event, person.id)}
                            />
                        </ErrorBoundary>
                    })}
                </div>
            );
            btnClass.push(classes.Red);
        }
        const assignedClasses = [];
        if (this.state.persons.length <= 2) {
            assignedClasses.push(classes.red);
        }
        if (this.state.persons.length <= 1) {
            assignedClasses.push(classes.bold);
        }
        return (
            <div className={classes.App} >
                <h1> Hi, I 'm a React App</h1>
                <p className={assignedClasses.join(' ')} > This is really working! </p>
                <button className={btnClass.join(' ')} onClick={this.togglePersonsHandler} >
                    Toggle Persons
                </button>
                {persons}
            </div>
        );
    }
}

export default App;
