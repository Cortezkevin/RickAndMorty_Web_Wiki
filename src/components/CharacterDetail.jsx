import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCharacterById } from "../functions/CharacterService";
import '../styles/CharacterDetail.css';
import ListEpisodes from "./ListEpisodes";

const CharacterDetail = () => {
  const params = useParams();

  const [character, setCharacter] = useState(null);

  useEffect(() => {
    getCharacterById(params.id, setCharacter);
  },[]);

  return (
    <>
      {character!=null ? (
        <div className="container-character-detail">
          <div className="detail-character">
            <div className="detail-img">        
              <img
                src={character.image}
                alt={character.name}
                />                              
            </div>
            <div className="detail-text">
              <h1>{character.name }</h1>
              <div className="atributes"><p className='atribute-name'>Status: </p><p className={`atribute-value ${character.status==='Alive' ? 'alive' : character.status==='Dead' ? 'dead' : 'unknown'}`}>{character.status}</p></div>
              <div className="atributes"><p className="atribute-name">Specie: </p><p className="atribute-value">{character.species}</p></div>  
              <div className="atributes"><p className="atribute-name">Gender: </p><p className="atribute-value">{character.gender}</p></div> 
              <div className="atributes"><p className="atribute-name">Origin: </p><a href="#" className="atribute-value">{character.origin.name}</a> </div>
              <div className="atributes"><p className="atribute-name">Location: </p><a href="#" className="atribute-value">{character.location.name}</a> </div>
            </div>
          </div>
          <div className="detail-episodes">
            <h1>Episodes</h1>
            <ListEpisodes              
              episodeArr={character.episode}
            /> 
          </div>
        </div>        
      ) : (
        <h1 style={{color: 'white'}}>Cargando ...</h1>
      )}
    </>
  );
};

export default CharacterDetail;