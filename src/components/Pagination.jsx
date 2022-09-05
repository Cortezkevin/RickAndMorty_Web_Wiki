import React from "react";
import Boton from "./Boton";

const Pagination = ({ page, onPrevPage, onNextPage}) => {
  return (
    <>
      <Boton text={`Prev ${page - 1}`} event={onPrevPage} />
      <p className="page">{page}</p>
      <Boton text={`Next ${page + 1}`} event={onNextPage} />
    </>
  );
};

export default Pagination;