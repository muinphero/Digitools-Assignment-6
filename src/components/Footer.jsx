import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer id="footer" className="bg-[#101727] text-white pt-20 pb-8 mt-0">
      <div className="w-[92%] max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[320px_1fr_1fr_1fr_220px] gap-10">
        <div>
          <h4 className="text-2xl font-bold">DigiTools</h4>
          <p className="text-slate-300 mt-3 leading-6">
            Premium digital tools for creators, professionals, and businesses. Work smarter with
            our suite of powerful tools.
          </p>
        </div>

        <div>
          <h5 className="font-semibold text-lg">Product</h5>
          <ul className="text-slate-300 mt-3 space-y-2">
            <li>Features</li>
            <li>Pricing</li>
            <li>Templates</li>
            <li>Integrations</li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold text-lg">Company</h5>
          <ul className="text-slate-300 mt-3 space-y-2">
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold text-lg">Resources</h5>
          <ul className="text-slate-300 mt-3 space-y-2">
            <li>Documentation</li>
            <li>Help Center</li>
            <li>Community</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold text-lg">Social Links</h5>
          <div className="mt-3 flex gap-3">
            <span className="w-9 h-9 rounded-full bg-white text-[#101727] grid place-content-center"><FaInstagram /></span>
            <span className="w-9 h-9 rounded-full bg-white text-[#101727] grid place-content-center"><FaFacebookF /></span>
            <span className="w-9 h-9 rounded-full bg-white text-[#101727] grid place-content-center"><FaTwitter /></span>
          </div>
        </div>
      </div>

      <div className="w-[92%] max-w-[1200px] mx-auto mt-10 pt-6 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-3 text-slate-400 text-sm">
        <p>Copyright 2026 DigiTools. All rights reserved.</p>
        <p>Privacy Policy • Terms of Service • Cookies</p>
      </div>
    </footer>
  );
}

export default Footer;
