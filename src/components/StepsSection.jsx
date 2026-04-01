function StepsSection() {
  const steps = [
    {
      id: "01",
      title: "Create Account",
      description: "Sign up for free in seconds. No credit card required to get started.",
      icon: "/user.png"
    },
    {
      id: "02",
      title: "Choose Products",
      description: "Browse our catalog and select the tools that fit your needs.",
      icon: "/package.png"
    },
    {
      id: "03",
      title: "Start Creating",
      description: "Download and start using your premium tools immediately.",
      icon: "/rocket.png"
    }
  ];

  return (
    <section id="steps" className="py-20 bg-[#f5f7fc]">
      <div className="w-[92%] max-w-[1200px] mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-slate-900">Get Started In 3 Steps</h2>
        <p className="text-slate-600 text-center mt-3 max-w-2xl mx-auto">
          Start using premium digital tools in minutes, not hours.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div key={step.id} className="bg-white border-2 border-slate-200 rounded-2xl p-6 relative text-center">
              <span className="absolute top-4 right-4 w-9 h-9 rounded-full bg-purple-600 text-white text-sm font-semibold grid place-content-center">
                {step.id}
              </span>

              <div className="w-20 h-20 rounded-full bg-purple-100 grid place-content-center mx-auto mt-4">
                <img src={step.icon} alt={step.title} className="w-10 h-10" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mt-4">{step.title}</h3>
              <p className="text-slate-600 mt-3">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StepsSection;
