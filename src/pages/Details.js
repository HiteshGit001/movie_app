import { Button } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import NavBar from '../component/NavBar/NavBar';
import ShowStat from '../component/showStat/ShowStat';
import { useData } from '../context/DataContext';
import { fetchMovie, fetchVideo } from '../servicess/fetch.serviecess';

const Details = () => {
  const { movieID, movieDetails, setMovieDetails, videoData, setVideoData, youtubeKey, setYoutubeKey } = useData();

  const fetchMovieDetails = async () => {
    const response = await fetchMovie(movieID);
    if (response?.status === 200) {
      setMovieDetails(response?.data);
    }
    else {
      setMovieDetails("");
    }
  }
  const fetchvideo = async () => {
    const videoRes = await fetchVideo(movieID);
    if (videoRes?.status === 200) {
      setVideoData(videoRes?.data);
      let keys = videoData?.results?.filter((ele, id) => ele.name === "Official Trailer");
      setYoutubeKey(keys?.map((ele) => {
        return ele?.key;
      }));
      console.log(youtubeKey?.toString(), 'ouo');
    }
    else {
      setVideoData("");
    }
  }
  useEffect(() => {
    fetchMovieDetails();
    fetchvideo();
  }, []);

  return (
    <div className="page_padding">
      <NavBar />
      {youtubeKey?.toString() !== "" || null || undefined ?
        <iframe width="100%" height="300" src={`https://youtube.com/embed/${youtubeKey?.toString()}?autoplay=0`}></iframe>
        : <p>kds</p>}
      <div>
        <ShowStat movieDetails={movieDetails} />
      </div>
    </div>
  )
}

export default Details