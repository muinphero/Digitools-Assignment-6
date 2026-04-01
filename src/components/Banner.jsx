function Banner() {
  return (
    <section className="bg-white py-14">
      <div className="w-[92%] max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="inline-block bg-purple-100 text-purple-700 text-sm px-4 py-2 rounded-full font-medium">
            New: AI-Powered Tools Available
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-4 leading-tight">
            Supercharge Your Digital Workflow
          </h2>

          <p className="text-slate-600 mt-4">
            Access premium AI tools, design assets, templates, and productivity
            software, all in one place. Start creating faster today.
          </p>

          <div className="mt-6 flex gap-3 flex-wrap">
            <button className="btn btn-primary rounded-full">
              Explore Products
            </button>
            <button className="btn btn-outline rounded-full">Watch Demo</button>
          </div>
        </div>

        <div className="h-[420px] rounded-xl overflow-hidden bg-slate-100">
          <img
            src="/banner.png"
            alt="Banner"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Banner;
