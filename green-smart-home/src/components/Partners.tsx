// src/components/Partners.tsx
const partners = [
    { name: "Eco Product Azerbaijan", logo: "/eco-logo.svg", link: "https://eco.az" },
    { name: "BirBank", logo: "/birbank-logo.svg", link: "https://birbank.az" },
];

export function Partners() {
    return (
        <section className="max-w-5xl mx-auto px-4 py-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#233123] mb-8 text-center">
                Tərəfdaşlar və Sponsorlar
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-12">
                {partners.map((p, i) => (
                    <a href={p.link} target="_blank" rel="noopener noreferrer" key={i} className="flex flex-col items-center">
                        <img src={p.logo} alt={p.name} className="w-24 h-24 object-contain mb-2" />
                        <span className="font-semibold text-[#2E865E]">{p.name}</span>
                    </a>
                ))}
            </div>
        </section>
    );
}
