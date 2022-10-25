import { useMediaQuery } from '@chakra-ui/react';
import React, { createContext, useContext, useState } from 'react'

const Data = createContext();

export const useData = () => useContext(Data);

const DataContext = ({ children }) => {

  const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");
  const [trending, setTrinding] = useState();
  const [trendingType, setTrendingType] = useState("all");
  const [movieID, setMovieID] = useState();
  const [movieDetails, setMovieDetails] = useState();
  const [videoData, setVideoData] = useState();
  const [youtubeKey, setYoutubeKey] = useState("");
  const [similar, setSimilar] = useState();
  const [movieSearched, setMovieSearched] = useState([]);
  const value = {
    trending, setTrinding,
    trendingType, setTrendingType,
    movieID, setMovieID,
    movieDetails, setMovieDetails,
    videoData, setVideoData,
    youtubeKey, setYoutubeKey,
    similar, setSimilar,
    movieSearched, setMovieSearched,
    isLargerThan1024,
  }
  return (
    <Data.Provider value={value}>
      {children}
    </Data.Provider>
  )
}

export default DataContext;