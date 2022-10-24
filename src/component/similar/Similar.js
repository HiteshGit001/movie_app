import React, { useEffect } from 'react'
import { POSTER } from '../../config/config';
import { useData } from '../../context/DataContext'
import { fetchSimilar } from '../../servicess/fetch.serviecess';
import styles from "./Similar.module.scss";

const Similar = () => {
  const { movieID, setMovieID, similar, setSimilar, isLargerThan1024, } = useData();
  const fetchDetails = async () => {
    const response = await fetchSimilar(movieID);
    setSimilar(response?.data?.results.slice(0, 4));
  }
  const navigateDetails = (id) => {
    setMovieID(id);
  }
  useEffect(() => {
    fetchDetails();
  }, [movieID])
  return (
    <>
      <p className="sub_title">Similar</p>
      <div className={`${isLargerThan1024 ? styles.similar_card : styles.similar_sm} ${styles.sim} flex_start_start scrol`}>
        {similar?.map((ele, id) => {
          return (
            <div className="pointer" onClick={() => navigateDetails(ele?.id)}>
              <img src={`${POSTER}${ele?.poster_path}`} alt="poster" />
              <p>{ele?.title}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Similar