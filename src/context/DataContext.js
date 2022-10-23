import React, { createContext, useContext, useState } from 'react'

const Data = createContext();

export const useData = () => useContext(Data);

const DataContext = ({ children }) => {

  const [trending, setTrinding] = useState();
  const [trendingType, setTrendingType] = useState("all");
  const [movieID, setMovieID] = useState();
  const [movieDetails, setMovieDetails] = useState();
  const [videoData, setVideoData] = useState();
  const [youtubeKey, setYoutubeKey] = useState("");
  const value = {
    trending, setTrinding,
    trendingType, setTrendingType,
    movieID, setMovieID,
    movieDetails, setMovieDetails,
    videoData, setVideoData,
    youtubeKey, setYoutubeKey,
  }
  return (
    <Data.Provider value={value}>
      {children}
    </Data.Provider>
  )
}

export default DataContext;