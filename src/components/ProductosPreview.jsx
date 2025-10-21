import { useEffect, useState } from "react";
import Productos from "./Productos";
import Banner from "./BannerMarcas";

export default function ProductosPreview() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    // Hago el fetch para obtener los productos
   fetch("https://ecotape-web.vercel.app/api/productos")
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        // Tomo solo los primeros 5 productos para la vista previa
        const primerosCinco = datos.slice(0, 7);
        setProductos(primerosCinco);
      });
  }, []);

  return (
    <div>
      <Banner />

      <div className="relative">
        <Productos productos={productos} />{" "}
        {/* Productos ahora recibe productos */}
        {/* Overlay borroso en la parte inferior */}
        <div className="pointer-events-none"></div>
        <div className="flex justify-center mt-8">
          <a
            href="/AllProductos"
            className="px-6 py-5 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 mb-16"
          >
            Ver todos 
          </a>
        </div>
      </div>
    </div>
  );
}
