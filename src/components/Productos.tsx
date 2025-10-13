import { useEffect, useState } from "react";

type Producto = {
  modelo: string;
  id_tonner: number;
  img?: string;
  nombre: string;
  descripcion: string;
  categoria: string;
};

type Props = {
  productos?: Producto[];
};

export default function Productos({ productos: productosProp }: Props) {
  const [productos, setProductos] = useState<Producto[]>([]);

  useEffect(() => {
    if (!productosProp) {
      fetch("http://localhost:3000/productos")
        .then((respuesta) => respuesta.json())
        .then((datos) => setProductos(datos))
        .catch((error) => console.error("hubo un problema", error));
    }
  }, [productosProp]);

  const data = productosProp || productos;

  return (
    <div className="flex justify-center items-center p-4 mt-10 bg-gradient-to-br">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-7xl">
        {data.map((item) => (
          <div
            key={item.id_tonner}
            className="group relative bg-gradient-to-br bg-gray-800  rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-700 hover:border-blue-500 hover:-translate-y-2"
          >
            {/* Badge de categoría flotante */}
            <div className="absolute top-4 right-4 z-10">
              <span className="px-3 py-1.5 text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-full shadow-lg backdrop-blur-sm">
                {item.categoria}
              </span>
            </div>

            {/* Contenedor de imagen con efectos */}
            <div className="relative w-full h-56 overflow-hidden bg-gradient-to-br from-slate-700 to-slate-800">
              {/* Efecto de brillo en hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500 -translate-x-full group-hover:translate-x-full"></div>
              
              <img
                src={item.img || "https://via.placeholder.com/300x300?text=Sin+Imagen"}
                alt={item.modelo}
                className="w-full h-full object-contain p-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-2"
              />
            </div>

            {/* Contenido de la tarjeta */}
            <div className="p-5 flex flex-col space-y-3">
              <h5 className="text-lg md:text-xl font-bold text-white line-clamp-2 group-hover:text-blue-400 transition-colors duration-300">
                {item.modelo}
              </h5>

              <p className="text-sm text-slate-400 line-clamp-3 leading-relaxed">
                {item.descripcion}
              </p>

              {/* Botón de acción */}
              <button className="mt-4 w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold rounded-lg shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 active:scale-95">
                Ver Detalles
              </button>
            </div>

            {/* Línea decorativa inferior */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </div>
        ))}
      </div>
    </div>
  );
}