import React from "react";
import EpisodeImg from '../images/episode.jpg'

const Episode = ({ data }) => {
  return (
    <div className="episode" key={data.id}>
    <img src={EpisodeImg} alt="episode" />
    <a href="#" style={{color: 'white'}}>{data.name}</a>
  </div> 
  );
};

export default Episode;