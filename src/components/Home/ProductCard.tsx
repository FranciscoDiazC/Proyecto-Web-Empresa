interface Product {
    titulo: string;
    descripcion: string;
    src: string;
}

interface Props {
  key: string,
  product: Product,
}

export const ProductCard = ({key, product}: Props) => {
  return (
    <div 
        key={key}
        className="bg-card text-card-foreground rounded-lg shadow-md overflow-hidden flex flex-col transition-transform hover:scale-105"
    >
        {/* Imagen */}
        <div>
            {product.src ? <img src={`/${product.src}`} className="w-full h-full object-contain"></img> : <span className="text-muted-foreground">Imagen No Disponible</span>}
        </div>

        {/* Contenido */}
        <div className="p-4 flex flex-col flex-1">
            <h2 className="text-lg font-bold mb-2">{product.titulo}</h2>
            <p className="text-sm text-muted-foreground mb-4">{product.descripcion}</p>

            {/* Ruta a Informacion del Producto */}
            <button className="mt-auto bg-primary text-primary-foreground px-3 py-1 rounded hover:bg-secondary transition-colors">
            Más Información
            </button>
        </div>

    </div>
  )
}
