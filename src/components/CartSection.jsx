function CartSection() {
  return (
    <section className="py-20">
      <div className="w-[92%] max-w-[1200px] mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-slate-900">
          Your Cart
        </h2>

        <div className="mt-8 bg-white border-2 border-dashed border-slate-300 rounded-2xl p-10 text-center">
          <p className="text-xl font-semibold text-slate-700">
            Your cart is empty
          </p>
          <p className="text-slate-500 mt-2">
            Add products from the Products tab.
          </p>
        </div>
      </div>
    </section>
  );
}

export default CartSection;
