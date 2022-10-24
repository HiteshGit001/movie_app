import React from 'react'
import { POSTER } from '../../config/config';
import { useData } from '../../context/DataContext';
import Similar from '../similar/Similar';
import styles from "./ShowStat.module.scss";

const ShowStat = ({ movieDetails }) => {
  const { trending, isLargerThan1024 } = useData();
  console.log(movieDetails, 'kdsf')
  return (
    <div className={styles.show_card}>
      <div className={`flex_start_start ${styles.poster}`}>
        <div>
          <img src={`${POSTER}${movieDetails?.poster_path}`} alt="movie poster" />
        </div>
        <div className={styles.details}>
          <p className={styles.dis_title}>Status</p>
          <p className={styles.dis_content}>{movieDetails?.status}</p>
          <p className={styles.dis_title}>Release Date : </p>
          <p className={styles.dis_content}>{movieDetails?.release_date || movieDetails?.first_air_date}</p>
          <p className={styles.dis_title}>{movieDetails?.runtime ? "Duration :" : "Episodes"}</p>
          <p className={styles.dis_content}>{movieDetails?.runtime || movieDetails?.episode_run_time[0]} min</p>
          <p className={styles.dis_title}>Genres : </p>
          {movieDetails?.genres?.map((ele) => {
            return (
              <span className={styles.dis_content}>{ele?.name}, </span>
            )
          })}
        </div>
        {isLargerThan1024 ? (
          <div>
            <Similar />
          </div>
        ) : null}
      </div>
      <div className={styles.details}>
        <div className={styles.bg_card}>
          <img className={styles.sop_img} src={`${POSTER}${movieDetails?.backdrop_path}`} alt="poster" />
          {isLargerThan1024 ? (<div className={styles.make_bg}>
            <p className={styles.dis_title}>Sypnosis</p>
            <p className={styles.dis_content}>{movieDetails?.overview}</p>
          </div>) : null}
        </div>
        <div>
          {isLargerThan1024 ? null : (<div className={styles.make_bg}>
            <p className={styles.dis_title}>Sypnosis</p>
            <p className={styles.dis_content}>{movieDetails?.overview}</p>
          </div>)}
        </div>
      </div>
      <div>
        <p className={styles.dis_title}>Production Companies</p>
        <div className={`flex_start_center scrol ${styles.production}`}>
          {movieDetails?.production_companies?.map((ele) => {
            return (
              <div className={styles.logo}>
                {ele?.logo_path === null ? null : <img src={`${POSTER}${ele?.logo_path}`} alt="movie poster" />}
                <p>{ele.name}</p>
              </div>
            )
          })}
        </div>
      </div>
      {isLargerThan1024 ? null : (
        <div>
          <Similar />
        </div>
      )}
    </div>
  )
}

export default ShowStat