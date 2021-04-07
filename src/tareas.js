import "./App.css";
import React, { useState } from "react";



const Tareas = ({tareas, i, borrarTarea, modificarTarea}) => {
    const [eliminada, setCompletada] = useState(false);

    const completar = () => {
        setCompletada(true)
      };

      const eliminar = (i) => {
          borrarTarea(i)
      }

      const modificar = (i) => {
        modificarTarea(i)
    }

    //   const agregar = () => {};

    //   const modificar = () => {};

    return (
    <li key={i} index={i} className={eliminada ? "completada" : ""}>
    {tareas}
    <button  className="modificar" onClick={modificar}>
      Modificar
    </button>
    <button className="completar" onClick={completar} >
      Completada
    </button>
    <button  className="eliminar" onClick={eliminar} >
      Eliminar
    </button>

  </li>
    )
}

export default Tareas