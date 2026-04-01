function Footer() {
  return (
    <footer id="footer" className="bg-slate-900 text-white py-12 mt-16">
      <div className="w-[92%] max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-2xl font-bold">DigiTools</h4>
          <p className="text-slate-300 mt-3">
            Premium digital tools for creators, professionals, and businesses.
          </p>
        </div>

        <div>
          <h5 className="font-semibold text-lg">Product</h5>
          <ul className="text-slate-300 mt-3 space-y-2">
            <li>Features</li>
            <li>Pricing</li>
            <li>Templates</li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold text-lg">Company</h5>
          <ul className="text-slate-300 mt-3 space-y-2">
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold text-lg">Resources</h5>
          <ul className="text-slate-300 mt-3 space-y-2">
            <li>Documentation</li>
            <li>Help Center</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      <p className="text-center text-slate-400 mt-8">Copyright 2026 DigiTools. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
