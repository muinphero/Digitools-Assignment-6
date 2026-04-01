function ToggleButtons({ activeTab, setActiveTab }) {
  return (
    <div className="flex justify-center mb-8">
      <div className="bg-white border border-slate-200 rounded-full p-1 flex">
        <button
          onClick={() => setActiveTab("products")}
          className={`px-6 py-2 rounded-full font-semibold ${
            activeTab === "products"
              ? "bg-purple-600 text-white"
              : "text-slate-600"
          }`}
        >
          Products
        </button>

        <button
          onClick={() => setActiveTab("cart")}
          className={`px-6 py-2 rounded-full font-semibold ${
            activeTab === "cart" ? "bg-purple-600 text-white" : "text-slate-600"
          }`}
        >
          Cart
        </button>
      </div>
    </div>
  );
}

export default ToggleButtons;
