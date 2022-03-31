import React from "react";
import Tarea from "./Tarea";

const ListaTareas = ({ tareas, setTareas, mostrarCompletadas }) => {
  const toggleCompletada = (id) => {
    setTareas(tareas.map((tarea) => (tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea)));
  };

  const editarTarea = (id, updateTask) => {
    setTareas(tareas.map((tarea) => (tarea.id === id ? { ...tarea, texto: updateTask } : tarea)));
  };

  const borrarTarea = (id) => {
    setTareas(tareas.filter((tarea) => (tarea.id !== id ? tarea : null)));
  };
  return (
    <ul className="lista-tareas">
      {tareas.length > 0 ? (
        tareas.map((tarea) => {
          if (mostrarCompletadas) {
            return (
              <Tarea key={tarea.id} tarea={tarea} borrarTarea={borrarTarea} toggleCompletada={toggleCompletada} editarTarea={editarTarea} />
            );
            //TODO: si la tarea no esta completada, la devolvemos
          } else if (!tarea.completada) {
            return (
              <Tarea key={tarea.id} tarea={tarea} borrarTarea={borrarTarea} toggleCompletada={toggleCompletada} editarTarea={editarTarea} />
            );
          }
          // Si ya esta completada no la devolvemos
          return ;
        })
      ) : (
        <div className="lista-tareas__mensaje">No hay tareas Agregadas</div>
      )}
    </ul>
  );
};

export default ListaTareas;
