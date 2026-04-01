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
    setCart((prev) => [...prev, product]);
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
          <CartSection />
        )}
      </main>

      <Footer />
    </>
  );
}

export default App;
