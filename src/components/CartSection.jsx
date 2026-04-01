function CartSection({ cart, onRemoveFromCart, onCheckout }) {
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  if (cart.length === 0) {
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

  return (
    <section className="py-20">
      <div className="w-[92%] max-w-[1200px] mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-slate-900">
          Your Cart
        </h2>

        <div className="mt-8 bg-white border-2 border-slate-200 rounded-2xl p-6">
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.cartItemId}
                className="flex items-center justify-between border-b border-slate-200 pb-4"
              >
                <div className="flex items-center gap-3">
                  <img src={item.icon} alt={item.name} className="w-10 h-10" />
                  <div>
                    <p className="font-semibold text-slate-800">{item.name}</p>
                    <p className="text-slate-500 text-sm">${item.price}</p>
                  </div>
                </div>

                <button
                  onClick={() => onRemoveFromCart(item.cartItemId)}
                  className="text-red-500 font-semibold text-sm"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between text-lg font-semibold">
            <p>Total ({cart.length} items)</p>
            <p>${totalPrice}</p>
          </div>

          <button
            onClick={onCheckout}
            className="btn btn-primary rounded-full w-full mt-5"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </section>
  );
}

export default CartSection;
