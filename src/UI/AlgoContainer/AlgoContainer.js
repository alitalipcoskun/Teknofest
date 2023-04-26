import React from "react";
import classes from './AlgoContainer.module.css';


const AlgoContainer = (props) => {
  return (
    <div className={classes.container}>
        <p>{props.text}</p>
    </div>
  );
};


export default AlgoContainer;