import React from "react";

export default function SectionFiltrado({
  marcaSeleccionada,
  onMarcaChange,
  modeloSeleccionado,
  onModeloChange,
}) {
  const handleMarcaChange = (e) => {
    const valorSeleccionado = e.target.value;
    onMarcaChange(valorSeleccionado);
  };

  const handleModeloChange = (e) => {
    const valorSeleccionado = e.target.value;
    onModeloChange(valorSeleccionado);
  };

  return (
    <aside className="w-full max-w-7xl mb-6">
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl shadow-2xl p-6 border border-slate-700">
        <div className="flex items-center gap-3 mb-5">
          <div className="bg-blue-500 rounded-lg p-2">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-white">Filtrar Productos</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="group">
            <label
              htmlFor="categoria"
              className="block text-sm font-semibold text-slate-300 mb-2 transition-colors group-hover:text-blue-400"
            >
              Categoría
            </label>
            <div className="relative">
              <select
                id="categoria"
                className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-4 py-3 pr-10 appearance-none cursor-pointer transition-all duration-200 hover:bg-slate-600 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={modeloSeleccionado}
                onChange={handleModeloChange}
              >
                <option value="">Todas las categorías</option>
                <option value="original">Original</option>
                <option value="alternativo">Alternativo</option>
                {/* Agrega aquí más opciones si es necesario */}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="group">
            <label
              htmlFor="marca"
              className="block text-sm font-semibold text-slate-300 mb-2 transition-colors group-hover:text-blue-400"
            >
              Marca
            </label>
            <div className="relative">
              <select
                id="marca"
                className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-4 py-3 pr-10 appearance-none cursor-pointer transition-all duration-200 hover:bg-slate-600 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={marcaSeleccionada}
                onChange={handleMarcaChange}
              >
                <option value="">Todas las marcas</option>
                <option value="HP">HP</option>
                <option value="Samsung">Samsung</option>
                <option value="Xerox">Xerox</option>
                <option value="Brother">Brother</option>
                <option value="Epson">Epson</option>
                <option value="Lexmark">Lexmark</option>
                <option value="Ricoh">Ricoh</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {marcaSeleccionada && (
          <div className="mt-4 flex items-center gap-2 text-sm">
            <span className="text-slate-400">Filtro activo:</span>
            <span className="bg-blue-500 text-white px-3 py-1 rounded-full font-medium">
              {marcaSeleccionada}
            </span>
            <button
              onClick={() => onMarcaChange("")}
              className="text-slate-400 hover:text-white transition-colors ml-1"
              aria-label="Limpiar filtro"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </aside>
  );
}
