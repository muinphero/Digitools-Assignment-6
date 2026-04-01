import { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import StatsSection from "./components/StatsSection";
import ProductSection from "./components/ProductSection";
import CartSection from "./components/CartSection";
import ToggleButtons from "./components/ToggleButtons";
import Footer from "./components/Footer";

function App() {
  const [activeTab, setActiveTab] = useState("products");
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    const cartItem = {
      ...product,
      cartItemId: `${product.id}-${Date.now()}-${Math.random()}`,
    };
    setCart((prev) => [...prev, cartItem]);
  };

  const handleRemoveFromCart = (cartItemId) => {
    setCart((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
  };

  const handleCheckout = () => {
    setCart([]);
  };

  return (
    <>
      <Navbar cartCount={cart.length} />
      <Banner />
      <StatsSection />

      <main className="py-10">
        <ToggleButtons activeTab={activeTab} setActiveTab={setActiveTab} />
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

      <Footer />
    </>
  );
}

export default App;
