import productos from "./Data/Productos.json";
import { Card } from "flowbite-react";

const cards = productos.map((item) => (
  <Card
    key={item.id}
    className="max-w-sm"
  >
    <h5 className="text-2xl font-bold tracking-tight text-gray-900">
      <img src={item.imagen} alt={item.nombre} />
      {item.nombre}
    </h5>
    <p className="font-normal text-gray-700">
      {item.descripcion}
    </p>
  </Card>
));

export default function Productos() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="grid grid-cols-5 gap-4 max-w-7xl justify-center">
        {cards}
      </div>
    </div>
  );
}