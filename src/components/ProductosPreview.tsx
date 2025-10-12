import { useEffect, useState } from "react";
import Productos from "./Productos";
import Banner from "./BannerMarcas"

export default function ProductosPreview() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    // Hago el fetch para obtener los productos
    fetch("http://localhost:3000/productos")
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        // Tomo solo los primeros 5 productos para la vista previa
        const primerosCinco = datos.slice(0, 7);
        setProductos(primerosCinco);
      });
  }, []);

  return (
    <div className="bg-[#35566B] pt-30 ">
      <p className="text-4xl flex justify-center font-medium text-white mb-20">
        Explora Todos Nuestros Productos
      </p>
      <Banner />

      <div className="relative">
        <Productos productos={productos} />{" "}
        {/* Productos ahora recibe productos */}
        {/* Overlay borroso en la parte inferior */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t "></div>
        <div className="flex justify-center mt-2 relative z-10">
          <a
            href="/AllProductos"
            className="px-6 py-5 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 transition mb-16"
          >
            Ver todos
          </a>
        </div>
      </div>
    </div>
  );
}
