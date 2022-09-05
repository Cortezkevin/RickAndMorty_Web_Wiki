import React from "react";
import '../styles/Character.css'

const Character = ({ data }) => {
  return (
    <div key={data.id} className='container-character'>
      <div className='container-img'>
        <img className='img'
          src={data.image}
          alt={data.name}
        />
      </div>
      <div className='container-text'>
        <p>{data.id}</p>
        <a href={`/character/${data.id}`}>{data.name}</a>
        <p className={data.status === 'Alive' ? 'alive': data.status === 'Dead' ? 'dead' : 'unknown'}>{data.status}</p>
        <p>{data.gender}</p>
      </div>
    </div>
  );
};

export default Character;