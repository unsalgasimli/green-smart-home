// src/components/Testimonials.tsx
const testimonials = [
    {
        user: "Aytac, Bakı",
        text: "Yaşıl Hesab sayəsində hər ay elektrik xərclərim 15% azalıb!",
    },
    {
        user: "Murad, Sumqayıt",
        text: "İcma panelində başqalarının paylaşdığı ipucları çox bəyəndim.",
    },
    {
        user: "Leyla, Gəncə",
        text: "App motivasiya və rahat istifadə ilə mükəmməldir.",
    }
];

export function Testimonials() {
    return (
        <section className="max-w-5xl mx-auto px-4 py-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#233123] mb-8 text-center">
                İstifadəçi rəyləri
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((t, i) => (
                    <div key={i} className="bg-[#EDF5EE] rounded-2xl p-6 shadow-md">
                        <p className="text-[#233123BB] mb-4">“{t.text}”</p>
                        <span className="font-semibold text-[#2E865E]">{t.user}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
