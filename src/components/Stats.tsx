    const stats = [
  {
    value: "9+",
    label: "Years Industrial Experience",
  },
  {
    value: "10+",
    label: "Major Industrial Projects",
  },
  {
    value: "ISO",
    label: "45001 Lead Auditor",
  },
  {
    value: "UAE + India",
    label: "Industry Exposure",
  },
];

export default function Stats() {
  return (
    <section className="my-10 overflow-hidden rounded-[30px] bg-gradient-to-r from-emerald-700 via-emerald-800 to-teal-900 shadow-2xl">
      <div className="grid md:grid-cols-2 lg:grid-cols-4">
        {stats.map((item, index) => (
          <div
            key={item.label}
            className={`p-8 text-center ${
              index !== stats.length - 1
                ? "border-b md:border-b-0 lg:border-r border-white/10"
                : ""
            }`}
          >
            <h2 className="text-4xl font-extrabold text-white">
              {item.value}
            </h2>

            <p className="mt-2 text-sm text-emerald-100">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}