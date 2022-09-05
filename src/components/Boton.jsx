import React from "react";
import '../styles/Boton.css';

const Boton = ({ text, event}) =>{
  return (
    <>
      <button
        onClick={() => event()}
      >{text}</button>
    </>
  );   
};

export default Boton;