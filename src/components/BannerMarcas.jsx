export default function SponsorsCarousel() {
  const brands = [
    "HP", "BROTHER", "EPSON", "LEXMARK", "SAMSUNG", 
    "XEROX", "RICOH"
  ];

  return (
    <div className="w-full bg-gray-700 py-8 overflow-hidden">
      <div className="relative">
        {/* Gradientes en los bordes para efecto de desvanecimiento */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-700 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-700 to-transparent z-10"></div>
        
        {/* Contenedor de animación */}
        <div className="flex animate-scroll">
          {/* Repetimos las marcas múltiples veces para pantallas anchas */}
          {[1, 2, 3].map((group) => (
            <div key={`group-${group}`} className="flex gap-16 px-8">
              {brands.map((brand, index) => (
                <div
                  key={`brand-${group}-${index}`}
                  className="text-gray-400 font-bold text-2xl whitespace-nowrap opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300"
                >
                  {brand}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}