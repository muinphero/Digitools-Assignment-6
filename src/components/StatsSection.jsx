function StatsSection() {
  const stats = [
    { value: "50K+", label: "Active Users" },
    { value: "200+", label: "Premium Tools" },
    { value: "4.9", label: "Rating" }
  ];

  return (
    <section className="bg-gradient-to-r from-indigo-600 to-fuchsia-600 py-12">
      <div className="w-[92%] max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 text-white text-center">
        {stats.map((item, index) => (
          <div
            key={item.label}
            className={`${index !== 2 ? "md:border-r md:border-white/30" : ""} py-2`}
          >
            <h3 className="text-5xl md:text-6xl font-extrabold">{item.value}</h3>
            <p className="mt-2 text-lg md:text-xl opacity-90">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsSection;
