export type Product = {
    titulo: string;
    descripcion: string;
    src: string;
}

export type Productos = Record<string, Product>;