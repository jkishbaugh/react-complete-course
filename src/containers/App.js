import React, { Component } from 'react';
import classes from './App.css';
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import withClass from "../hoc/WithClass";
import Aux from "../hoc/Auxillary";
import AuthContext from '../context/auth-context'


class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor')
  }
  state={
    persons:[
      {id: '12345', name: 'Nobody', age: "Old"},
      {id: 'abdcd', name: 'Somebody', age: "Not as Old"},
      {id: '54321', name: 'Anybody', age: "Unknown"}
    ],
    showPersons: false,
    showCockpit: true,
    changedCounter: 0,
    authenticated: false,
  };

  static getDerivedStateFromProps(props, state){
    console.log('App.js get derived state method');
    return state;
  }
  componentDidMount() {
    console.log(`App.js component did mount`)
  }
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log("App.js should component update")
    return true
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("App.js component did update.")
  }

  nameChangedHandler = (e, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person ={
      ...this.state.persons[personIndex]
    };
    person.name = e.target.value;
    const persons = [...this.state.persons];

    persons[personIndex] = person;
    this.setState((prevState, props) =>{
      return {persons:persons, changedCounter: prevState.changedCounter + 1}
    });
  };

  deletePersonHandler = (personIndex) => {

      const persons = [...this.state.persons];
      persons.splice(personIndex, 1);
      this.setState({persons: persons});
  } ;

  loginHandler = () => {
    this.setState({authenticated: !this.state.authenticated})
  };
  render() {
    console.log('App.js render method');
    let persons = null;


    if(this.state.showPersons){
      persons = (
      <div>
      <Persons persons={this.state.persons}
               clicked={this.deletePersonHandler}
               changed={this.nameChangedHandler}
               isAuthenticated ={this.state.authenticated}
               />
      </div>
      );

    }
    return (
          <Aux classes={classes.App}>
            <button onClick={(()=>this.setState({showCockpit: !this.state.showCockpit}))}>Remove Cockpit</button>
         <AuthContext.Provider value={{authenticated: this.state.authenticated, login: this.loginHandler}}>
           { this.state.showCockpit?  ( <Cockpit title={this.props.appTitle}
               showPersons={this.state.showPersons}
               personsLength={this.state.persons.length}
               clicked={this.togglePersonsHandler}
          />): null}
            {persons}
         </AuthContext.Provider>
          </Aux>
    );
  }

  togglePersonsHandler = ()  =>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});

  }
}

export default withClass(App, classes.App);
