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
     fetch("https://ecotape-web.vercel.app/api/productos")
        .then((respuesta) => respuesta.json())
        .then((datos) => setProductos(datos))
        .catch((error) => console.error("hubo un problema", error));
    }
  }, [productosProp]);

  const data = productosProp || productos;

  return (
    <div className="min-h-screen bg-gradient-to-br ">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <h2 className="text-5xl font-black text-white mb-4 mt-8">
          Nuestros <span className="text-green-500">Productos</span>
        </h2>
        <div className="w-32 h-1.5 bg-gradient-to-r from-green-500 to-green-400 mx-auto mb-6"></div>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Calidad y rendimiento para tu impresora
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {data.map((item) => (
          <div
            key={item.id_tonner}
            className="group relative bg-white rounded-2xl shadow-2xl transition-all duration-500 overflow-hidden border-2 border-gray-100 hover:-translate-y-3"
          >
            {/* Verde Banfield stripe superior */}
            <div className="absolute top-0 left-0 right-0 h-2 "></div>

            {/* Badge de categoría */}
            <div className="absolute top-6 right-4 z-10">
              <span className="px-4 py-2 text-xs font-black text-black bg-amber-400 rounded-full shadow-xl backdrop-blur-sm uppercase tracking-wider">
                {item.categoria}
              </span>
            </div>

            {/* Contenedor de imagen */}
            <div className="relative w-full h-64 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
              {/* Efecto diagonal verde en hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 via-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Círculos decorativos */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-500/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-green-500/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
              
              <img
                src={item.img || "https://via.placeholder.com/300x300?text=Sin+Imagen"}
                alt={item.modelo}
                className="w-full h-full object-contain p-8 transition-all duration-700 group-hover:scale-110"
              />
            </div>

            {/* Contenido */}
            <div className="p-6 flex flex-col space-y-4 bg-white">
              <h5 className="text-xl font-bold text-gray-900 line-clamp-2 transition-colors duration-300 min-h-[3.5rem]">
                {item.modelo}
              </h5>

              <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed min-h-[4.5rem]">
                {item.descripcion}
              </p>

              {/* Botón CTA */}
              <button className="mt-4 w-full py-4 px-6 bg-gradient-to-r bg-[#00563F] text-white font-bold rounded-xl shadow-lg hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-105 active:scale-95 uppercase tracking-wide text-sm">
                Ver Detalles
              </button>
            </div>

            {/* Efecto de brillo animado */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-1000 translate-x-[-100%] group-hover:translate-x-[100%] pointer-events-none"></div>
          </div>
        ))}
      </div>

  
    </div>
  );
}