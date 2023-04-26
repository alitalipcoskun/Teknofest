import React from "react";
import classes from './Container.module.css';
import logo2 from './../../Assets/saglkta-yz_logo.png';

const Container = (props) => {
  return (
    <div className={classes.container}>
        <p>{props.text}</p>
    </div>
  );
};


export default Container;
