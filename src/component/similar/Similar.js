import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { POSTER } from '../../config/config';
import { useData } from '../../context/DataContext'
import { fetchSimilar } from '../../servicess/fetch.serviecess';
import styles from "./Similar.module.scss";

const Similar = () => {
  const { movieID,setMovieID, similar, setSimilar } = useData();
  const navigate = useNavigate();
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
    <div className={styles.similar_card}>
      {similar?.map((ele, id) => {
        return (
          <div onClick={() => navigateDetails(ele?.id)}>
            <img src={`${POSTER}${ele?.poster_path}`} alt="poster" />
            <p>{ele?.title}</p>
          </div>
        )
      })}
    </div >
  )
}

export default Similar