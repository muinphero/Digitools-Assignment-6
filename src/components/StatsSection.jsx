function StatsSection() {
  const stats = [
    { value: "50K+", label: "Active Users" },
    { value: "200+", label: "Premium Tools" },
    { value: "4.9", label: "Rating" },
  ];

  return (
    <section className="bg-gradient-to-r from-indigo-600 to-fuchsia-600 py-10">
      <div className="w-[92%] max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 text-white text-center">
        {stats.map((item) => (
          <div key={item.label}>
            <h3 className="text-5xl font-extrabold">{item.value}</h3>
            <p className="mt-2 text-lg opacity-90">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsSection;
