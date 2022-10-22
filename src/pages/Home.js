import React, { useEffect, useState } from 'react'
import NavBar from '../component/NavBar/NavBar'
import { POSTER, TRENDING } from '../config/config';
import { fetchTrending } from '../servicess/fetch.serviecess'

const Home = () => {
  const [trending, setTrending] = useState();
  const fetchDayTrend = async () => {
    const response = await fetchTrending();
    setTrending(response?.data?.results);
    console.log(response, "jksjd");
  }
  useEffect(() => {
    fetchDayTrend();
  }, [])
  return (
    <div>
      <NavBar />
      {trending?.map((ele, id) => {
        return (
          <>
            <img src={`${POSTER}${ele?.poster_path}`} alt="" />
            <p>{ele?.id}</p>
          </>
        )
      })}
    </div>
  )
}

export default Home