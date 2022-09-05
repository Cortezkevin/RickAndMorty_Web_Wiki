import React, { useEffect, useState } from "react";
import { getAllCharacters } from "../functions/CharacterService";
import '../styles/ListCharacters.css';
import Character from "./Character";
import Pagination from "./Pagination";

const ListCharacters = () => {

  const [characterList, setCharacterList] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getAllCharacters(page,setCharacterList)
  }, [page]);

  const prevPage =  () =>{
    if(page >= 2){
      setPage(page - 1);
    }
  };

  const nextPage = () => {
    setPage(page + 1);
  };

  return (
    <div className="container-all">
      <div className="container-pagination">
        <Pagination 
          page={page}
          onPrevPage={prevPage}
          onNextPage={nextPage}
        />
      </div>
      <div className="container-characters">
        {characterList !== null ? (
          characterList.map((character) => <Character key={character.id} data={character} />)
        ) : (
          <h1>Cargando ...</h1>
        )}
      </div>    
      <div className="container-pagination">
        <Pagination 
          page={page}
          onPrevPage={prevPage}
          onNextPage={nextPage}
        />
      </div>
    </div>
  );
};

export default ListCharacters;
