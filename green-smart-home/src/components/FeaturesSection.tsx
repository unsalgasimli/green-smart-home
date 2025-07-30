import { FaPlug, FaBrain, FaGift, FaUsers } from "react-icons/fa";

const features = [
    {
        icon: <FaPlug className="w-8 h-8 text-[#2E865E]" />,
        title: "Cihaz və otaq üzrə izləmə",
        desc: "Hansı cihaz və otaq daha çox enerji sərf edir? Asanlıqla tap və sərfiyyatı azald!",
    },
    {
        icon: <FaBrain className="w-8 h-8 text-[#2E865E]" />,
        title: "AI əsaslı məsləhətlər",
        desc: "Ağıllı tövsiyələr və optimallaşdırma – hər istifadəçiyə fərdi yanaşma.",
    },
    {
        icon: <FaGift className="w-8 h-8 text-[#2E865E]" />,
        title: "Bonus və mükafat sistemi",
        desc: "Qənaət etdikcə xal topla, sponsorlu ekoloji məhsullara dəyiş!",
    },
    {
        icon: <FaUsers className="w-8 h-8 text-[#2E865E]" />,
        title: "İcma və paylaşım paneli",
        desc: "Başqalarının uğur hekayəsi və məsləhətləri ilə motivasiyanı artır!",
    },
];

export function FeaturesSection() {
    return (
        <section id="features" className="max-w-7xl mx-auto px-4 py-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#233123] mb-8 text-center">
                Əsas Xüsusiyyətlər
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
                {features.map((f, i) => (
                    <div
                        key={i}
                        className="bg-[#EDF5EE] rounded-2xl p-6 flex flex-col items-center shadow-md"
                    >
                        <div className="w-14 h-14 flex items-center justify-center bg-[#FAF9F6] rounded-full mb-3">
                            {f.icon}
                        </div>
                        <h3 className="font-bold text-lg text-[#233123] mb-2">{f.title}</h3>
                        <p className="text-[#233123BB] text-center">{f.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
