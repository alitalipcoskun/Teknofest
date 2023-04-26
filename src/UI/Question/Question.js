import React from "react";
import classes from './Question.module.css';





const Question = (props) => {
    return (<div className= {classes.container}>
        <div className= {classes.question}>
            <h5>{props.question}</h5>
        </div>
        <div className= {classes.answer}>
            <p>{props.answer}</p>
        </div>
    </div>)
}

export default Question;