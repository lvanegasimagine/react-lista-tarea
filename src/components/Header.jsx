import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Header = ({ mostrarCompletadas, setMostrarCompletada }) => {

  const toggleCompletadas = () => {
    setMostrarCompletada(!mostrarCompletadas);
  }
  return (
    <header className="header">
      <h1 className="header__titulo">Lista de Tareas</h1>
      {mostrarCompletadas ? (
        <button className="header__boton" onClick={toggleCompletadas}>
          No mostrar Completada
          <FontAwesomeIcon className="header__icono-boton" icon={faEyeSlash} onClick={toggleCompletadas}  />
        </button>
      ) : (
        <button className="header__boton" onClick={toggleCompletadas}>
          Mostrar Completada
          <FontAwesomeIcon className="header__icono-boton" icon={faEye} onClick={toggleCompletadas} />
        </button>
      )}
    </header>
  );
};

export default Header;
