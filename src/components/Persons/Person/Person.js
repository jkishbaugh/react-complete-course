import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classes  from './Person.css'
import Aux from '../../../hoc/Auxillary'
import withClass from "../../../hoc/WithClass";
import AuthContext from '../../../context/auth-context'

class Person extends Component{
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef()
    };
    static contextType = AuthContext;
    componentDidMount(prevProps, prevState, snapshot) {
        console.log(this.context.authenticated);
        this.inputElementRef.current.focus();
    }

    render(){
        console.log("Person.js rendering ...");
        return (
            <Aux>

                    {this.context.authenticated? <p>Authenticated!</p>: <p>Login Already</p>}



                    <div onClick={this.props.click} >
                        <h1 className='person'>{this.props.name}</h1>
                        <p>Age: {this.props.age}</p>
                        <p>{this.props.children}</p>
                    </div>
                    <input ref={this.inputElementRef} type="text" onChange={this.props.changed} value={this.props.name}/>
            </Aux>

        )
    }

}
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.string,
    changed: PropTypes.func
};
export default withClass(Person, classes.Person);