import { useEffect, useState, type ReactNode } from "react";
import { Card } from "flowbite-react";

type Producto = {
  modelo: ReactNode;
  id_tonner: number;
  img?: string;
  nombre: string;
  descripcion: string;
  categoria: string;
};

type Props = {
  productos?: Producto[]; // puede venir como prop
};

export default function Productos({ productos: productosProp }: Props) {
  const [productos, setProductos] = useState<Producto[]>([]);

  useEffect(() => {
    if (!productosProp) {
      // si NO recibí productos por props, hago el fetch
      fetch("http://localhost:3000/productos")
        .then((respuesta) => respuesta.json())
        .then((datos) => setProductos(datos))
        .catch((error) => console.error("hubo un problema", error));
    }
  }, [productosProp]);

  // si recibí por props → uso esos, si no → uso los del fetch
  const data = productosProp || productos;

  return (
   <div className="flex justify-center items-center min-h-screen p-4 mt-10 ">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-7xl">
    {data.map((item) => (
      <Card
        key={item.id_tonner}
        className="max-w-sm mx-auto bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
      >
        <div className="relative w-full h-48 overflow-hidden">
          <img
            src={item.img}
            className="w-full h-full object-contain p-4 transition-transform duration-300 hover:scale-125"
          />
        </div>

        <div className="p-4 flex flex-col items-start space-y-2">
          <h5 className="text-lg md:text-xl font-semibold tracking-tight text-gray-900">
            {item.modelo}
          </h5>

          <p className="text-sm text-gray-600 line-clamp-3">
            {item.descripcion}
          </p>

          <span className="inline-block mt-2 px-3 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full">
            {item.categoria}
          </span>
        </div>
      </Card>
    ))}
  </div>
</div>

  );
}
