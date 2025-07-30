const stats = [
    { value: "1,200+", label: "Ailə qoşulub" },
    { value: "85,000 kWh", label: "Qənaət olunan enerji" },
    { value: "20 ton", label: "CO₂ emissiyasına qənaət" },
    { value: "150+", label: "Paylaşılan uğur hekayəsi" },
];

export function StatsSection() {
    return (
        <section className="bg-[#F6F7F3] py-10 px-4">
            <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {stats.map((s, i) => (
                    <div key={i} className="flex flex-col items-center">
                        <div className="text-3xl font-bold text-[#2E865E]">{s.value}</div>
                        <div className="text-[#233123CC]">{s.label}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}
