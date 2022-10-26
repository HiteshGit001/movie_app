import { Button } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import NavBar from '../component/NavBar/NavBar';
import ShowStat from '../component/showStat/ShowStat';
import { useData } from '../context/DataContext';
import { fetchMovie, fetchTV, fetchVideo } from '../servicess/fetch.serviecess';

const Details = () => {
  const { movieID, movieDetails, setMovieDetails, videoData, setVideoData, youtubeKey, setYoutubeKey } = useData();
  const [searchparams] = useSearchParams();
  console.log(searchparams.get("movie"), 'dkf')
  const fetchMovieDetails = async () => {
    const response = searchparams.get("movie") === "true" ? await fetchMovie(movieID) : await fetchTV(movieID);
    if (response?.status === 200) {
      setMovieDetails(response?.data);
    }
    else {
      setMovieDetails("");
    }
  }
  let keys;
  const fetchvideo = async () => {
    const videoRes = await fetchVideo(movieID);
    console.log(videoRes, 'vid')
    if (videoRes?.status === 200) {
      setVideoData(videoRes?.data);
      keys = videoData?.results?.filter((ele, id) => ele?.name === "Official Trailer");
      setYoutubeKey(keys?.map((ele) => {
        return ele?.key;
      }));
    }
    else {
      setVideoData("");
    }
  }
  const fetchNull = () => {
    return null;
  }
  useEffect(() => {
    fetchMovieDetails();
    searchparams.get("movie") === "true" ? fetchvideo() : fetchNull();
  }, [movieID]);

  return (
    <div className="page_padding">
      <NavBar />
      <p className="sub_title">{movieDetails?.title}</p>
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