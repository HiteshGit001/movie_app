import React from 'react'
import { useNavigate } from 'react-router-dom';
import { POSTER } from '../../config/config';
import { useData } from '../../context/DataContext';
import styles from "./DetailsCard.module.scss";

const DetailsCard = () => {
  const { trending, setYoutubeKey, setTrinding, trendingType, setTrendingType, movieID, setMovieID } = useData();
  const history = useNavigate();
  const navigateDetails = (id) => {
    setMovieID(id);
    setYoutubeKey("");
    history(`/movie/:${id}`)
  }
  return (
    <>
      <div className={`flex_start_start ${styles.scrol}`}>
        {trending?.map((ele, id) => {
          return (
            <div onClick={() => { navigateDetails(ele?.id) }} className={styles.show_card}>
              <img src={`${POSTER}${ele?.poster_path}`} alt={ele?.poster_path} />
              <p className={styles.img_card}>{ele?.title || ele?.name}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default DetailsCard