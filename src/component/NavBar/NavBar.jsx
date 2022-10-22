import React from 'react';
import styles from "./NavBar.module.scss";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const history = useNavigate();
  const navigateToHome = () => {
    history("/");
  }
  const navigateToMovie = () => {
    history("/movie");
  }
  return (
    <div className={`flex_start_center ${styles.nav_gap}`}>
      <h2 onClick={navigateToHome}>Movie App</h2>
      <p onClick={navigateToHome}>Home</p>
      <p onClick={navigateToMovie}>Movie</p>
    </div>
  )
}

export default NavBar