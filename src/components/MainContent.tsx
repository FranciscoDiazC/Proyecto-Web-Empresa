import rawProducts from "../data/products.json";
import type { Productos } from "../types/products";

export const MainContent = () => {
  const products: Productos = rawProducts;

  return (
    <div className="bg-background py-8 px-4 lg:px-[12%]">
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
        {Object.entries(products).map(([key, product]) => (
        <div 
            key={key}
            className="bg-card text-card-foreground rounded-lg shadow-md overflow-hidden flex flex-col transition-transform hover:scale-105"
        >
            {/* Imagen */}
            <div className="w-full h-32 bg-muted flex items-center justify-center">
              <span className="text-muted-foreground">Imagen</span>
            </div>

            {/* Contenido */}
            <div className="p-4 flex flex-col flex-1">
              <h2 className="text-lg font-bold mb-2">{product.titulo}</h2>
              <p className="text-sm text-muted-foreground mb-4">{product.descripcion}</p>

              {/* Botón Más Información */}
              <button className="mt-auto bg-primary text-primary-foreground px-3 py-1 rounded hover:bg-secondary transition-colors">
                Más Información
              </button>
            </div>
            
        </div>
        ))}
      </div>
    </div>
  );
};
