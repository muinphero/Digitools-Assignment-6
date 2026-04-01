import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import StatsSection from "./components/StatsSection";
import ProductSection from "./components/ProductSection";
import CartSection from "./components/CartSection";
import ToggleButtons from "./components/ToggleButtons";
import StepsSection from "./components/StepsSection";
import PricingSection from "./components/PricingSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

function App() {
  const [activeTab, setActiveTab] = useState("products");
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    const cartItem = {
      ...product,
      cartItemId: `${product.id}-${Date.now()}-${Math.random()}`
    };
    setCart((prev) => [...prev, cartItem]);
    toast.success(`${product.name} added to cart`);
  };

  const handleRemoveFromCart = (cartItemId) => {
    setCart((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
    toast.info("Item removed from cart");
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.warning("Your cart is already empty");
      return;
    }
    setCart([]);
    toast.success("Checkout complete. Cart cleared.");
  };

  return (
    <>
      <Navbar cartCount={cart.length} />
      <Banner />
      <StatsSection />

      <main className="py-10">
        <ToggleButtons activeTab={activeTab} setActiveTab={setActiveTab} cartCount={cart.length} />
        {activeTab === "products" ? (
          <ProductSection onAddToCart={handleAddToCart} />
        ) : (
          <CartSection
            cart={cart}
            onRemoveFromCart={handleRemoveFromCart}
            onCheckout={handleCheckout}
          />
        )}
      </main>

      <StepsSection />
      <PricingSection />
      <CTASection />
      <Footer />

      <ToastContainer position="top-right" autoClose={1500} />
    </>
  );
}

export default App;
