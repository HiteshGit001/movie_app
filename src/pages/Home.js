import React, { useEffect } from 'react'
import NavBar from '../component/NavBar/NavBar';
import "../scss/pages.scss";
import { POSTER } from '../config/config';
import { useData } from '../context/DataContext';
import { fetchTrending } from '../servicess/fetch.serviecess'
import { createSearchParams, useNavigate } from 'react-router-dom';
import DetailsCard from '../component/DetailsCard/DetailsCard';
import styles from "../component/DetailsCard/DetailsCard.module.scss";

const Home = () => {
  const { setTrinding, trendingType, setYoutubeKey, movieID, setMovieID, movieSearched, } = useData();
  const history = useNavigate();
  const fetchDayTrend = async () => {
    const response = await fetchTrending(trendingType);
    setTrinding(response?.data?.results);
    console.log(response, "jksjd");
  };
  const navigateDetails = (id) => {
    setMovieID(id);
    setYoutubeKey("");
    history({
      pathname: `/movie/:${id}`,
      search: createSearchParams({
        id: movieID,
      }).toString(),
    });
  };
  useEffect(() => {
    fetchDayTrend();
  }, [])
  return (
    <div className="page_padding">
      <NavBar />
      {movieSearched ? (
        <>
          <p>Searched Movie</p>
          <div className={`flex_start_start ${styles.scrol}`}>
            {
              movieSearched?.map((ele, id) => {
                return (
                  <div onClick={() => { navigateDetails(ele?.id) }} className={styles.show_card}>
                    <img style={{ borderRadius: "0.85rem" }} src={`${POSTER}${ele?.poster_path}`} alt={ele?.poster_path} />
                    <p className={styles.img_card}>{ele?.title || ele?.name}</p>
                  </div>
                )
              })
            }
          </div>
        </>
      ) : null}
      <p className="sub_title">Trending Movie</p>
      <DetailsCard movie={true} />
      <p className="sub_title">Trending TV Show</p>
      <DetailsCard movie={false} />
    </div>
  )
}

export default Home