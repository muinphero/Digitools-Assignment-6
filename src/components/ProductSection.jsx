import { products } from "../data/products";
import ProductCard from "./ProductCard";

function ProductSection({ onAddToCart }) {
  return (
    <section id="products" className="py-20">
      <div className="w-[92%] max-w-[1200px] mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-slate-900">
          Premium Digital Tools
        </h2>
        <p className="text-slate-600 text-center mt-3 max-w-2xl mx-auto">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductSection;
