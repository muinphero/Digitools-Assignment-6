import { FaCheckCircle } from "react-icons/fa";

function PricingSection() {
  const plans = [
    {
      name: "Starter",
      subtitle: "Perfect for getting started",
      price: "$0",
      period: "/month",
      features: ["Access to 10 free tools", "Basic templates", "Community support", "1 project per month"],
      buttonText: "Get Started Free",
      highlight: false
    },
    {
      name: "Pro",
      subtitle: "Best for professionals",
      price: "$29",
      period: "/month",
      features: [
        "Access to all premium tools",
        "Unlimited templates",
        "Priority support",
        "Unlimited projects",
        "Cloud sync",
        "Advanced analytics"
      ],
      buttonText: "Start Pro Trial",
      highlight: true
    },
    {
      name: "Enterprise",
      subtitle: "For teams and businesses",
      price: "$99",
      period: "/month",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantee",
        "Custom branding"
      ],
      buttonText: "Contact Sales",
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="w-[92%] max-w-[1200px] mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-slate-900">Simple, Transparent Pricing</h2>
        <p className="text-slate-600 text-center mt-3 max-w-2xl mx-auto">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-6 border-2 relative ${
                plan.highlight
                  ? "bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white border-transparent"
                  : "bg-[#f9fafc] border-slate-200"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-semibold">
                  Most Popular
                </span>
              )}

              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <p className={`mt-2 ${plan.highlight ? "text-white/90" : "text-slate-600"}`}>{plan.subtitle}</p>

              <p className="mt-4 text-4xl font-extrabold">
                {plan.price}
                <span className={`text-xl font-medium ${plan.highlight ? "text-white" : "text-slate-500"}`}>{plan.period}</span>
              </p>

              <ul className="mt-5 space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <FaCheckCircle className={plan.highlight ? "text-white" : "text-green-500"} />
                    <span className={plan.highlight ? "text-white" : "text-slate-600"}>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`rounded-full w-full mt-6 h-12 font-semibold ${
                  plan.highlight ? "bg-white text-purple-700" : "btn btn-primary"
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
