function Navbar({ cartCount }) {
  return (
    <header className="bg-white border-b border-slate-200">
      <div className="w-[92%] max-w-[1200px] mx-auto h-[88px] flex items-center justify-between">
        <h1 className="text-2xl font-extrabold text-purple-700">DigiTools</h1>

        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-700">
          <a href="#products">Products</a>
          <a href="#steps">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#footer">FAQ</a>
        </nav>

        <div className="flex items-center gap-4">
          <span className="text-sm font-semibold text-slate-700">
            Cart ({cartCount})
          </span>
          <span className="text-sm font-semibold text-slate-700">Login</span>
          <button className="btn btn-primary rounded-full">Get Started</button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
