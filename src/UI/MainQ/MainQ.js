import React from "react";
import classes from './MainQ.module.css';





const MainQuestion = (props) => {
    return (<div className= {classes.container}>
        <div className= {classes.question}>
            <h5>{props.question}</h5>
        </div>
        <div className= {classes.answer}>
            <p>{props.answer}</p>
        </div>
    </div>)
}

export default MainQuestion;