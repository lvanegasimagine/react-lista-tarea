import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faEdit, faSquare, faTimes } from "@fortawesome/free-solid-svg-icons";

const Tarea = ({ tarea, toggleCompletada, editarTarea, borrarTarea }) => {
  const [editingTarea, setEditingTarea] = useState(false);
  const [taskUpdate, setTaskUpdate] = useState(tarea.texto);

  const handleEditingTask = () => {
      setEditingTarea(true);
  };

  const handleSubmitUpdateTask = e => {
    e.preventDefault();
    editarTarea(tarea.id, taskUpdate)
    setEditingTarea(false);
  }
  return (
    <li className="lista-tareas__tarea">
      <FontAwesomeIcon className="lista-tareas__icono lista-tareas__icono-check" icon={tarea.completada ? faCheckSquare : faSquare} onClick={() => toggleCompletada(tarea.id)} />
      <div className="lista-tareas__texto">
        {editingTarea ? (
          <form action="" className="formulario-editar-tarea" onSubmit={handleSubmitUpdateTask}>
            <input type="text" className="formulario-editar-tarea__input" onChange={e => setTaskUpdate(e.target.value)} value={taskUpdate} />
            <button type="submit" className="formulario-editar-tarea__btn">
              Actualizar
            </button>
          </form>
        ) : (
          tarea.texto
        )}
      </div>
      <div className="lista-tareas__contenedor-botones">
        <FontAwesomeIcon icon={faEdit} className="lista-tareas__icono-accion" onClick={handleEditingTask} />
        <FontAwesomeIcon icon={faTimes} className="lista-tareas__icono-accion" onClick={() => borrarTarea(tarea.id)} />
      </div>
    </li>
  );
};

export default Tarea;
