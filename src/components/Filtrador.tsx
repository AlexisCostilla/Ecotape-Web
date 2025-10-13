import React, { useState, useEffect } from "react";
import SectionFiltrado from "../components/SectionFiltrado";
import Productos from "../components/Productos";

export default function Filtrador() {
  const [todosProductos, setTodosProductos] = useState([]);
  const [marcaSeleccionada, setMarcaSeleccionada] = useState("");
  const [modeloSeleccionado, setModeloSeleccionado] = useState("");

  // Cargar todos los productos
  useEffect(() => {
    fetch("http://localhost:3000/productos")
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setTodosProductos(datos);
      })
      .catch((error) => console.error("hubo un problema", error));
  }, []);

  // Función que se ejecuta cuando cambia la marca
const manejarCambioDeMarca = (marca) => {
    setMarcaSeleccionada(marca);
};

// ← FALTA ESTA
const manejarCambioDeModelo = (modelo) => {
    setModeloSeleccionado(modelo);
};

  // Filtrar productos por categoría y modelo
  const productosFiltrados = todosProductos.filter((p) => {
    const coincideCategoria =
      marcaSeleccionada === "" || p.categoria === marcaSeleccionada;
    const coincideModelo =
      modeloSeleccionado === "" || p.modelo === modeloSeleccionado;
    return coincideCategoria && coincideModelo;
  });
  return (

    <div>
      <SectionFiltrado 
        marcaSeleccionada={marcaSeleccionada}
        onMarcaChange={manejarCambioDeMarca}
        modeloSeleccionado={modeloSeleccionado}
        onModeloChange={manejarCambioDeModelo}
      />
      <Productos productos={productosFiltrados} />
    </div>
);

}
