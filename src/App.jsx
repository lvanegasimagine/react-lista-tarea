import { useState, useEffect } from "react";
import "./App.css";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListaTareas from "./components/ListaTareas";

const TAREAS = [
  { id: 1, texto: "Comprar leche", completada: false },
  { id: 2, texto: "Comprar pan", completada: true },
  { id: 3, texto: "Comprar huevos", completada: false },
];

function App() {
  let tareasIniciales = localStorage.getItem("tareas") ? JSON.parse(localStorage.getItem("tareas")) : [];
  
  const [tareas, setTareas] = useState(tareasIniciales);
  
  // TODO: Guardando el estado dentro de localstorage
  useEffect(() => {
    let tareasIniciales = JSON.parse(localStorage.getItem("tareas"));

    if (tareasIniciales) {
      localStorage.setItem("tareas", JSON.stringify(tareas));
    } else {
      localStorage.setItem("tareas", JSON.stringify([]));
    }
  }, [tareas]);

  let mostrarCompletadasConfig = '';
  if(localStorage.getItem('mostrarCompletadas') === null){
    mostrarCompletadasConfig = true;
  }else{
    mostrarCompletadasConfig = localStorage.getItem('mostrarCompletadas') === 'true';
  }

  const [mostrarCompletadas, setMostrarCompletada] = useState(mostrarCompletadasConfig);

  useEffect(() => {
      localStorage.setItem("mostrarCompletadas", mostrarCompletadas.toString());
  }, [mostrarCompletadas])
  

  return (
    <div className="contenedor">
      <Header mostrarCompletadas={mostrarCompletadas} setMostrarCompletada={setMostrarCompletada} />
      <Formulario tareas={tareas} setTareas={setTareas} />
      <ListaTareas tareas={tareas} setTareas={setTareas} mostrarCompletadas={mostrarCompletadas} />
    </div>
  );
}

export default App;
