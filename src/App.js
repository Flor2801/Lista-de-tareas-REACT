import "./index.css";
import "./App.css";
import React, { useState } from "react";
import Tareas from "tareas";

const App = () => {
  const [valorInput, setValorInput] = useState("");
  const [lista, setNuevoArray] = useState([
    "Limpiar",
    "Hacer compras",
    "Ir al gimnasio 3 veces",
    "Lavar ropa",
  ]);

  const handleChange = (e) => {
    setValorInput(e.target.value);
  };

  const handleClick = () => {
    if (valorInput !== "") {
      setNuevoArray([...lista, valorInput]);
      setValorInput("");
    }
    return;
  };

  const borrarTarea = (param) => {
    let nuevalista = lista.filter((tareas) => tareas !== param);
    console.log("PROBANDO BOTON ELIMINAR");
    setNuevoArray(nuevalista);
  };

  const ModificarTarea = (i) => {
    console.log("hola modificar", i);
  };

  return (
    <>
      <h2>LISTA DE TAREAS</h2>
      <div className="contenedor">
        <div>
          <ul>
            {lista.map((tareas, i) => {
              return (
                <Tareas
                  tareas={tareas}
                  key={i}
                  index={i}
                  borrarTarea={borrarTarea}
                  ModificarTarea={ModificarTarea}
                />
              );
            })}
          </ul>
        </div>

        <div className="agregar-contenedor">
          <input
            onChange={handleChange}
            type="text"
            placeholder="nueva tarea"
          ></input>
          <button onClick={handleClick} className="agregar">
            +
          </button>
        </div>
      </div>
    </>
  );
};
export default App;

//     <div className="contenedor">
//     <input value={valorInput} onChange={handleChange} type="text" placeholder="escribi tu nombre"></input>
//     <input value={valorEdad} onChange={handleChangeEdad} type="number" placeholder="escribi tu edad"></input>
// <button onClick={handleClick}>ENVIAR FORMULARIO</button>
//     </div>
