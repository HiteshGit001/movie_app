import React, { useEffect } from 'react'
import NavBar from '../component/NavBar/NavBar';
import "../scss/pages.scss";
import { POSTER } from '../config/config';
import { useData } from '../context/DataContext';
import { fetchTrending } from '../servicess/fetch.serviecess';
import DetailsCard from '../component/DetailsCard/DetailsCard';

const Movies = () => {
  const { trending, setTrinding, trendingType, setTrendingType } = useData();
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

export default Movies