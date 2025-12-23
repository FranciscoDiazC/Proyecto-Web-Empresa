import rawProducts from "../../data/products.json";
import type { Productos } from "../../types/products";
import { ProductCard } from "./ProductCard";

export const MainContent = () => {
  const products: Productos = rawProducts;

  return (
    <div className="bg-background py-8 px-4 lg:px-[12%]">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
            {Object.entries(products).map(([key, product]) => (
                <ProductCard key={key} product={product}></ProductCard>
            ))}
        </div>
    </div>
  );
};
