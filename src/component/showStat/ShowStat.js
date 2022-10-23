import React from 'react'
import { POSTER } from '../../config/config';
import styles from "./ShowStat.module.scss";

const ShowStat = ({ movieDetails }) => {
  console.log(movieDetails, 'kdsf')
  return (
    <div>
      <div className={`flex_start_start ${styles.poster}`}>
        <div>
          <img src={`${POSTER}${movieDetails?.poster_path}`} alt="movie poster" />
        </div>
        <div>
          <p className={styles.dis_title}>Status</p>
          <p className={styles.dis_content}>{movieDetails?.status}</p>
          <p className={styles.dis_title}>Release Date : </p>
          <p className={styles.dis_content}>{movieDetails?.release_date}</p>
          <p className={styles.dis_title}>Duration : </p>
          <p className={styles.dis_content}>{movieDetails?.runtime} min</p>
          <p className={styles.dis_title}>Genres : </p>
          {movieDetails?.genres?.map((ele) => {
            return (
              <span className={styles.dis_content}>{ele?.name}, </span>
            )
          })}
        </div>
      </div>
      <div>
        <p className={styles.dis_title}>Sypnosis</p>
        <p className={styles.dis_content}>{movieDetails?.overview}</p>
      </div>
      <div>
        <p className={styles.dis_title}>Production Companies</p>
        <div className={`flex_between_center ${styles.production}`}>
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
    </div>
  )
}

export default ShowStat