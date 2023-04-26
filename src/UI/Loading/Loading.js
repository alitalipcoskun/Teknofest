import React from "react";
import classes from "./Loading.module.css";

const Loading = (props) => {
  return (
    <div className={classes["loader-container"]}>
      <div className= {classes.spinner}></div>
    </div>
  );
};

export default Loading;
