import React, { useEffect, useState } from 'react'
import NavBar from '../component/NavBar/NavBar';
import "../scss/pages.scss";
import { POSTER, TRENDING } from '../config/config';
import { useData } from '../context/DataContext';
import { fetchTrending } from '../servicess/fetch.serviecess'
import { useNavigate } from 'react-router-dom';
import DetailsCard from '../component/DetailsCard/DetailsCard';

const Home = () => {
  const { trending, setTrinding, trendingType, setTrendingType, movieID, setMovieID } = useData();
  // const [trending, setTrending] = useState();
  const fetchDayTrend = async () => {
    const response = await fetchTrending(trendingType);
    setTrinding(response?.data?.results);
    console.log(response, "jksjd");
  }
  useEffect(() => {
    fetchDayTrend();
  }, [])
  return (
    <div className="page_padding">
      <NavBar />
      <DetailsCard />
    </div>
  )
}

export default Home