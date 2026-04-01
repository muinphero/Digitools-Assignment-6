import { FaCamera } from "react-icons/fa";

function CartSection({ cart, onRemoveFromCart, onCheckout }) {
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  if (cart.length === 0) {
    return (
      <section className="py-16">
        <div className="w-[92%] max-w-[1200px] mx-auto">
          <div className="bg-white border-2 border-dashed border-slate-300 rounded-2xl p-10 text-center">
            <h3 className="text-2xl font-bold text-slate-800">Your Cart</h3>
            <p className="text-slate-500 mt-3">Your cart is empty. Add products from the Products tab.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16">
      <div className="w-[92%] max-w-[1200px] mx-auto">
        <div className="bg-white border-2 border-slate-200 rounded-2xl p-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Your Cart</h2>

          <div className="mt-6 space-y-3">
            {cart.map((item) => (
              <div
                key={item.cartItemId}
                className="flex items-center justify-between border-b border-slate-200 pb-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-violet-100 grid place-content-center border border-slate-200">
                    {item.iconType === "camera" ? (
                      <FaCamera className="text-sky-500" />
                    ) : (
                      <img src={item.icon} alt={item.name} className="w-6 h-6" />
                    )}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">{item.name}</p>
                    <p className="text-slate-500 text-sm">${item.price}</p>
                  </div>
                </div>

                <button
                  onClick={() => onRemoveFromCart(item.cartItemId)}
                  className="text-rose-500 font-semibold text-sm"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between text-lg font-semibold text-slate-900">
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
