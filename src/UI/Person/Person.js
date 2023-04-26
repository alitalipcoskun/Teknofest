import React from "react";
import classes from './Person.module.css';


const Person = (props) => {
    return (<div className= {classes.container}>
        <div className= {classes.photo}>
            <img src = {props.photo} alt = {""} className= {classes["member-photo"]}></img>
        </div>
        <div className= {classes.information}>
            <h4 className= {classes.name}>{props.name}</h4>
            <strong className= {classes.title}>{props.title}</strong>
            <p className= {classes.information}>{props.info}</p>
        </div>
    </div>);
};



export default Person;




