import React , {useEffect, useRef, useContext} from 'react'
import classes from "./Cockpit.css";
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {
    const toggleButtonRef =  useRef(null);
    const authContext = useContext(AuthContext);
    useEffect(() =>{
     /*   console.log(`Cockpit.js useEffect`);
        const timer = setTimeout(()=> {

        }, 1000);*/
     toggleButtonRef.current.click();
        return () => {
            // clearTimeout(timer);
            console.log('Cockpit.js clean up work')
        }
    }, []);

    useEffect(() =>{
        console.log(`Cockpit.js 2nd useEffect`);
        return () => {
            console.log('Cockpit.js clean up work')
        }
    });
    let btnClass = '';
    const assignedClasses = [];
    if(props.showPersons){
        btnClass = classes.Red;
    }

    if(props.personsLength <= 2){
        assignedClasses.push(classes.red)
    }
    if(props.personsLength <= 1){
        assignedClasses.push(classes.bold)
    }
    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>Changing Styles</p>
            <button className={btnClass} ref={toggleButtonRef} onClick={props.clicked}>Switch Name</button>
            <button onClick={authContext.login}>Login</button>
            </div>
    );
};

export default React.memo(Cockpit);