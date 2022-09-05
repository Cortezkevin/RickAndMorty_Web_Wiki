import axios from "axios";

const getAllCharacters = async (page, state) => {
    const data = await axios.get('https://rickandmortyapi.com/api/character/?page='+page);
    state(data.data.results);
};

const getCharacterById = async (id, state)  => {
    const data = await axios.get('https://rickandmortyapi.com/api/character/'+id)   
    state(data.data);
};

export { getAllCharacters, getCharacterById };
