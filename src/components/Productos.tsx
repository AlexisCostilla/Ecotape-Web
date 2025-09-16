import productos from "./Data/Productos.json";
import { Card } from "flowbite-react";

const cards = productos.map((item) => (
  <Card
    key={item.id}
    className="max-w-sm mx-auto"
  >
    <img
      src={item.imagen}
      alt={item.nombre}
      className="w-full h-40 object-cover rounded-t"
    />
    <h5 className="text-lg md:text-xl font-bold tracking-tight text-gray-900 mt-2">
      {item.nombre}
    </h5>
    <p className="text-sm md:text-base font-normal text-gray-700">
      {item.descripcion}
    </p>
  </Card>
));

export default function Productos() {
  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-full max-w-7xl">
        {cards}
      </div>
    </div>
  );
}
