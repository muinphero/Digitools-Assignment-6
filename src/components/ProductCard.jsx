import { FaCheckCircle } from "react-icons/fa";

function ProductCard({ product }) {
  const tagStyles = {
    "Best Seller": "bg-amber-100 text-amber-700",
    Popular: "bg-indigo-100 text-indigo-700",
    New: "bg-green-100 text-green-700",
  };

  return (
    <div className="bg-white border-2 border-slate-200 rounded-2xl p-5 relative">
      <div className="w-14 h-14 rounded-full bg-violet-100 flex items-center justify-center">
        <img src={product.icon} alt={product.name} className="w-7 h-7" />
      </div>

      <span
        className={`absolute top-3 right-3 text-xs px-3 py-1 rounded-full font-medium ${tagStyles[product.tagType]}`}
      >
        {product.tagType}
      </span>

      <h3 className="text-3 font-bold text-slate-900 mt-4">{product.name}</h3>
      <p className="text-slate-600 mt-3 leading-5">{product.description}</p>

      <p className="text-3xl font-bold mt-4">
        ${product.price}
        <span className="text-base font-medium text-slate-500">
          /{product.period === "one-time" ? "One-Time" : "Mo"}
        </span>
      </p>

      <ul className="mt-4 space-y-2">
        {product.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-slate-600">
            <FaCheckCircle className="text-green-500" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button className="btn btn-primary rounded-full w-full mt-5">
        Buy Now
      </button>
    </div>
  );
}

export default ProductCard;
