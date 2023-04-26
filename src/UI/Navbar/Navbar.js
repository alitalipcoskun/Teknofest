import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import logo1 from './../../Assets/Teknofest_logo.png';
import logo2 from './../../Assets/TTT.LOGO.png';
import logo3 from '../../Assets/t3_logo.png';
import logo4 from '../../Assets/tüseblogo.png';

import classes from "./Narbar.module.css";
import "./Navbar.css";

const Navbar = (props) => {
  const menuRef = useRef();
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar((prev) => {
      return !prev;
    });
  };
  //useEffect(() => {
  //  const handler = (event) => {
  //    console.log(event)
  //    setShowNavbar(false);
  //  }
  //  document.addEventListener("mousedown", handler);
  //});

  return (
    <nav className={classes.navbar}>
      <div className={classes.container}>
        <div className= {classes["logo-container"]}>
          <div className={classes.logo}>
          <h3>LEADERS</h3>
          <h6>of</h6>
          <h3>ANKA</h3>
          </div>
          <div className= {classes['tech-logo']}>
          <img src = {logo1}></img>
          </div>
          <div className= {classes['tech-logo']}>
          <img src = {logo2}></img>
          </div>
          
        </div>
        <div className={classes["menu-icon"]} onClick={handleShowNavbar}>
          <span className="material-symbols-outlined" ref = {menuRef}>menu</span>
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li  onClick={props.onLoading}>
              <NavLink to="/">Ana Sayfa</NavLink>
            </li>
            <li onClick={props.onLoading}>
              <NavLink to="/calisma" >Çalışma ve Sonuç</NavLink>
            </li>
            <li onClick={props.onLoading}>
              <NavLink to="/nedir" >A1AT Nedir?</NavLink>
            </li>
            <li onClick={props.onLoading}>
              <NavLink to="/onemli" >Önemli Noktalar</NavLink>
            </li>
            <li onClick={props.onLoading}>
              <NavLink to="/hakkinda" >Biz Kimiz</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
