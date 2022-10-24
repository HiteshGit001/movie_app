import React from 'react';
import styles from "./NavBar.module.scss";
import { useNavigate } from "react-router-dom";
import { useData } from '../../context/DataContext';
import { Button, Input } from '@chakra-ui/react';

const NavBar = () => {
  const history = useNavigate();
  const { trending, setTrinding, trendingType, setTrendingType } = useData();

  const navigateToHome = () => {
    setTrendingType("all");
    history("/");
  }
  const navigateToMovie = () => {
    setTrendingType("movie");
    history("/movie");
  }
  return (
    <div className={`flex_start_center ${styles.nav_gap}`}>
      <h2 onClick={navigateToHome}>Movie App</h2>
      <p onClick={navigateToHome}>Home</p>
      <p onClick={navigateToMovie}>Movie</p>
      {/* <div className='flex_start_center'>
        <Input type="text" placeholder="Search Movie or TV Shows" />
        <Button>Search</Button>
      </div> */}
    </div>
  )
}

export default NavBar