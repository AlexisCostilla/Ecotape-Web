import { useEffect, useState } from "react";
import { Card } from "flowbite-react";

type Producto = {
  id_tonner: number;
  imagen?: string;
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
    <div className="flex justify-center items-center min-h-screen p-4 mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 w-full max-w-7xl">
        {data.map((item) => (
          <Card key={item.id_tonner} className="max-w-sm mx-auto">
            <img
              src="data:image/jpeg;base64,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"
              alt="tonner 435"
            />
            <h5 className="text-lg md:text-xl font-bold tracking-tight text-gray-900 mt-2">
              {item.nombre}
            </h5>
            <p className="text-sm md:text-base font-normal text-gray-700 break-words">
              {item.descripcion}
            </p>
            <p className="text-xs text-gray-500">{item.categoria}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
