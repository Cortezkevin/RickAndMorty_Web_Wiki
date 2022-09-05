import axios from "axios";

const getAllEpisodes = (state) => {

};

const getMultipleEpisodes = async (arrId, state) => {
    const getIdEpisode = /[0-9]/g;
    const multipleId = arrId.map( url => url.match(getIdEpisode).join('')).join();
    const url = 'https://rickandmortyapi.com/api/episode/' + multipleId;
    const result = await axios.get(url);
    state(result.data);
};

export { getAllEpisodes, getMultipleEpisodes };
