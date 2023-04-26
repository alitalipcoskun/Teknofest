import React from "react";
import classes from "./IntQuestion.module.css";
import logo1 from './../../Assets/Teknofest_logo.png';
import logo2 from './../../Assets/saglkta-yz_logo.png';
import logo3 from '../../Assets/t3_logo.png';
import logo4 from '../../Assets/tüseblogo.png';

const IntQuestion = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.question}>
        <h5>{props.question}</h5>
      </div>
      <div className={classes["logo-container"]}>
        <div className={classes.logo}>
          <h3>LEADERS</h3>
          <h6>of</h6>
          <h3>ANKA</h3>
        </div>
        <div className={classes["tech-logo"]}>
          <img src={logo1}></img>
        </div>
        <div className={classes["tech-logo"]}>
          <img src={logo2}></img>
        </div>
      </div>
      <div className={classes.answer}>
        <p>{props.answer}</p>
      </div>
      <div className={classes["logo-container"]}>
        <div className={classes.logo}>
          <h3>LEADERS</h3>
          <h6>of</h6>
          <h3>ANKA</h3>
        </div>
        <div className={classes["tech-logo"]}>
          <img src={logo3}></img>
        </div>
        <div className={classes["tech-logo"]}>
          <img src={logo4}></img>
        </div>
      </div>
    </div>
  );
};

export default IntQuestion;
