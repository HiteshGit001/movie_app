import React, { useEffect, useState } from 'react';
import styles from "./NavBar.module.scss";
import { useNavigate } from "react-router-dom";
import { useData } from '../../context/DataContext';
import { Button, Input } from '@chakra-ui/react';
import { fetchSearch } from '../../servicess/fetch.serviecess';

const NavBar = () => {
  const history = useNavigate();
  const { movieSearched, setMovieSearched, setTrendingType } = useData();

  const [name, setName] = useState("");
  const navigateToHome = () => {
    setTrendingType("all");
    history("/");
  }
  const navigateToMovie = () => {
    setTrendingType("movie");
    history("/movie");
  }
  const handleChange = (event) => {
    const { value } = event.target;
    setName(value);
  }

  const search = async () => {
    let response = await fetchSearch(name);
    setMovieSearched(response?.data?.results);
  }
  useEffect(() => {
    search()
  }, [name]);
  return (
    <div className={`flex_start_center ${styles.nav_gap}`}>
      <h2 className="logo pointer" onClick={navigateToHome}>Movie App</h2>
      <p className="nav_item pointer" onClick={navigateToHome}>Home</p>
      <p className="nav_item pointer" onClick={navigateToMovie}>Movie</p>
      <div className='flex_start_center'>
        <Input onChange={handleChange} type="text" placeholder="Search Movie or TV Shows" />
        {/* <Button onClick={handleSearch}>Search</Button> */}
      </div>
    </div>
  )
}

export default NavBar