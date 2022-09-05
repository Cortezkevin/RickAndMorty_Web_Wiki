import React, { useEffect, useState } from "react";
import { getMultipleEpisodes } from "../functions/EpisodeService";
import '../styles/ListEpisodes.css';
import Episode from "./Episode";

const ListEpisodes = ( {episodeArr} ) => {

  const [episodeList, setEpisodeList] = useState(null);

  useEffect(() => {
    getMultipleEpisodes(episodeArr, setEpisodeList);
  }, []);

  return (
    <div className="container-episodes">
      {
        episodeList !== null && Array.isArray(episodeList) ? (
          episodeList.map( (episode) => 
            <Episode 
             key={episode.id}
             data={episode}
            />              
          )
        ) : episodeList !== null && !Array.isArray(episodeList) ? (
            <Episode 
             key={episodeList.id}
             data={episodeList}
            /> 
        ) : (
          <h1>Cargando ...</h1>
        )
      }
    </div>
  );

};

export default ListEpisodes;