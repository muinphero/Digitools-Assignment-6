function CTASection() {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-fuchsia-600 py-20 text-white text-center">
      <div className="w-[92%] max-w-[1200px] mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold">Ready to Transform Your Workflow?</h2>
        <p className="mt-4 text-white/90 max-w-2xl mx-auto leading-6">
          Join thousands of professionals who are already using DigiTools to work smarter.
          Start your free trial today.
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <button className="h-12 px-6 rounded-full bg-white text-purple-700 font-semibold">Explore Products</button>
          <button className="h-12 px-6 rounded-full border border-white font-semibold">View Pricing</button>
        </div>

        <p className="mt-4 text-white/80">14-day free trial • No credit card required • Cancel anytime</p>
      </div>
    </section>
  );
}

export default CTASection;
