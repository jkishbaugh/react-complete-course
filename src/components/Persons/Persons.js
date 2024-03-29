import React, {PureComponent} from 'react'
import Person from "./Person/Person";

class Persons extends PureComponent{
 /*   static getDerivedStateFromProps(props, state){
        console.log('Persons.js getDerivedStateFromProps')
    }*/
/*    shouldComponentUpdate(nextProps, nextState, nextContext) {

        console.log('Persons.js shouldComponentUpdate');
        return nextProps.persons !== this.props.persons;
    }*/
/*
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Persons.js getSnapshot')
        return {message: "Snapshot! "}
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Persons.js componentDidUpdate', snapshot)
    }

    componentWillUnmount() {
    console.log('Persons.js component will unmount')
    }
*/

    render() {
        console.log("Persons.js rendering ...");
        return this.props.persons.map((person, index) => {
            return <Person
                    click={() => this.props.clicked(index)}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    changed={(event) => this.props.changed(event, person.id)}
                />
        })
    }
};

export default Persons;