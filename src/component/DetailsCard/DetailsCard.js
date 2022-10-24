import React from 'react'
import { createSearchParams, useNavigate } from 'react-router-dom';
import { POSTER } from '../../config/config';
import { useData } from '../../context/DataContext';
import styles from "./DetailsCard.module.scss";

const DetailsCard = ({ movie }) => {
  const { trending, setYoutubeKey, setTrinding, trendingType, setTrendingType, movieID, setMovieID } = useData();
  const history = useNavigate();
  const navigateDetails = (id) => {
    setMovieID(id);
    setYoutubeKey("");
    history({
      pathname: `/movie/:${id}`,
      search: createSearchParams({
        id: movieID,
        movie: movie,
      }).toString(),
    });
  };
  return (
    <>
      <div className={`flex_start_start ${styles.scrol}`}>
        {movie ? trending?.filter((ele, id) => ele.media_type === "movie")?.map((ele, id) => {
          return (
            <div onClick={() => { navigateDetails(ele?.id) }} className={styles.show_card}>
              <img style={{ borderRadius: "0.85rem" }} src={`${POSTER}${ele?.poster_path}`} alt={ele?.poster_path} />
              <p className={styles.img_card}>{ele?.title || ele?.name}</p>
            </div>
          )
        }) :
          trending?.filter((ele, id) => ele.media_type === "tv")?.map((ele, id) => {
            return (
              <div onClick={() => { navigateDetails(ele?.id) }} className={styles.show_card}>
                <img style={{ borderRadius: "0.85rem" }} src={`${POSTER}${ele?.poster_path}`} alt={ele?.poster_path} />
                <p className={styles.img_card}>{ele?.title || ele?.name}</p>
              </div>
            )
          })}
      </div>
    </>
  )
}

export default DetailsCard