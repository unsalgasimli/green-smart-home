import { useNavigate } from "react-router-dom";
import {
    FaPlug, FaChartBar, FaGift, FaBook, FaUsers, FaHandshake,
    FaLeaf, FaBolt, FaLightbulb, FaCrown
} from "react-icons/fa";
import { useEffect, useState } from "react";
import clsx from "clsx";
import leylaa from "../assets/leylaa.png";
import muradd from "../assets/muradd.png";
import cemilee from "../assets/cemilee.png";

// --- Data ---
const sectionIcons = [
    <FaPlug className="w-10 h-10 text-[#2E865E]" />,
    <FaChartBar className="w-10 h-10 text-[#2E865E]" />,
    <FaGift className="w-10 h-10 text-[#2E865E]" />,
    <FaBook className="w-10 h-10 text-[#2E865E]" />,
    <FaUsers className="w-10 h-10 text-[#2E865E]" />,
    <FaHandshake className="w-10 h-10 text-[#2E865E]" />,
];

const sections = [
    {
        title: "Əsas Xüsusiyyətlər",
        desc: "Cihaz izləmə, AI məsləhət, bonus və icma!",
        link: "/features",
    },
    {
        title: "Statistika və Təsir",
        desc: "İstifadəçi uğurları və real qənaət rəqəmləri",
        link: "/stats",
    },
    {
        title: "Bonus və Mükafatlar",
        desc: "Hər qənaətinə görə real bonus və motivasiya!",
        link: "/rewards",
    },
    {
        title: "Blog və Maarifləndirmə",
        desc: "Ekoloji bilik və son xəbərlər",
        link: "/blog",
    },
    {
        title: "Rəylər və Uğurlar",
        desc: "İstifadəçi təcrübəsi və community",
        link: "/testimonials",
    },
    {
        title: "Sponsorlar və Partnyorlar",
        desc: "Əməkdaşlıq və dəstəkçilər",
        link: "/partners",
    },
];

const brandValues = [
    {
        icon: <FaLeaf className="w-8 h-8 text-[#2E865E]" />,
        title: "Ekoloji Məsuliyyət",
        desc: "Hər addımda təbiəti qorumağa və elektrik enerjisinə qənaətə yönəlmiş platforma."
    },
    {
        icon: <FaLightbulb className="w-8 h-8 text-[#FFD700]" />,
        title: "Ağıllı Tövsiyələr",
        desc: "AI əsaslı fərdi tövsiyələr ilə istifadəçi davranışına uyğun qənaət strategiyaları."
    },
    {
        icon: <FaBolt className="w-8 h-8 text-[#2E865E]" />,
        title: "Enerji Monitorinqi",
        desc: "Hər cihaz və otaq üzrə anlıq və tarixçəli enerji statistikası."
    },
    {
        icon: <FaCrown className="w-8 h-8 text-[#FFD700]" />,
        title: "İnnovasiya və Liderlik",
        desc: "Azərbaycan bazarında qabaqcıl və mükafatlı eko-texnoloji həllər."
    }
];

const testimonials = [
    {
        name: "Leyla Məmmədova",
        avatar: leylaa,
        comment: "İlk dəfə belə rahat və həvəsləndirici app istifadə edirəm. İndi ailəmizdə enerji qənaəti oyun kimidir!",
        role: "İT müəllimi"
    },
    {
        name: "Murad Quliyev",
        avatar: muradd,
        comment: "Bonuslar və icma hissi çox motivasiya verir. Evdə qənaəti gündəlik vərdişə çevirdik.",
        role: "Ailə başçısı"
    },
    {
        name: "Cəmilə Abbasova",
        avatar: cemilee,
        comment: "Bütün elektrik sərfiyyatımızı bir baxışda görürəm. İllik qənaətə inana bilmirəm!",
        role: "Startapçı"
    }
];

function useTestimonialSlider(length: number, delay = 4000) {
    const [idx, setIdx] = useState(0);
    useEffect(() => {
        const t = setInterval(() => setIdx(i => (i + 1) % length), delay);
        return () => clearInterval(t);
    }, [length, delay]);
    return [idx, setIdx] as const;
}

export default function HomePage() {
    const navigate = useNavigate();
    const [testIdx, setTestIdx] = useTestimonialSlider(testimonials.length);

    return (
        <div className="relative w-full min-h-screen overflow-x-hidden bg-[#F7FFF9] font-inter">
            {/* --- Apple-style Blobs/Gradients (decorative) --- */}
            <div className="pointer-events-none select-none">
                <div className="absolute -top-32 -left-32 w-[540px] h-[340px] rounded-full opacity-30 blur-3xl bg-gradient-to-br from-[#C3FFE3] via-[#B8CBFF] to-[#2E865E] z-0" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[260px] rounded-full opacity-20 blur-2xl bg-gradient-to-tr from-[#B8CBFF] to-[#71D99E] z-0" />
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 z-0" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#F7FFF9] via-[#ECFDF5] to-[#CFFFE3] z-0" />
            </div>

            <div className="relative z-10">

                {/* HERO SECTION */}
                <section
                    className="relative flex flex-col items-center justify-between min-h-[95vh] md:min-h-screen w-full px-2 bg-gradient-to-br from-[#F7FFF9] via-[#ECFDF5] to-[#B8CBFF] overflow-hidden"
                >
                    {/* #1 Eko Platforması badge - Always at Top */}
                    <div className="w-full flex justify-center absolute top-8 left-0 z-20 mt-40">
                        <span className="inline-block bg-[#2E865E]/10 rounded-full px-6 py-2 text-[#2E865E] font-semibold text-lg shadow-sm tracking-wider uppercase text-center">
                            Azərbaycanın #1 Eko Platforması
                        </span>
                    </div>
                    {/* Main Title and Description */}
                    <div className="flex-1 flex flex-col items-center justify-center w-full max-w-4xl mx-auto z-10 pt-14 md:pt-20">
                        <h1 className="text-4xl xs:text-5xl md:text-7xl font-black text-[#2E865E] text-center mb-6 leading-tight drop-shadow-xl">
                            Yaşıl Hesab <br />
                            <span className="block text-[#239e59] md:text-6xl text-3xl mt-3">— Gələcəyini Qoru</span>
                        </h1>
                        <p className="text-xl md:text-3xl text-[#233123CC] mb-10 max-w-2xl mx-auto text-center">
                            Elektrik sərfiyyatını izləmək, qənaət etmək və yaşıl icmaya qoşulmaq üçün mükəmməl başlanğıc nöqtən!
                            <br className="hidden md:block" />
                            Ətraf mühiti qoru, öz cibinə və gələcəyinə töhfə ver.
                        </p>
                    </div>
                    {/* CTA Button - at the bottom */}
                    <div className="w-full flex justify-center pb-8 md:pb-16 z-10 mb-40">
                        <button
                            onClick={() => navigate("/features")}
                            className="px-10 py-5 rounded-2xl bg-[#2E865E] text-white font-bold text-xl shadow-2xl hover:bg-[#239e59] hover:scale-105 active:scale-95 transition-all duration-300"
                        >
                            Platformaya Başla →
                        </button>
                    </div>
                </section>

                {/* --- FEATURES SECTION --- */}
                <section className="max-w-6xl mx-auto mt-12 md:mt-24 px-2">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#2E865E] text-center mb-8 animate-slideUp">
                        Əsas Xüsusiyyətlər və Modul Bölmələr
                    </h2>
                    <div className="grid xs:grid-cols-1 md:grid-cols-3 gap-8">
                        {sections.map((s, i) => (
                            <div
                                key={i}
                                onClick={() => navigate(s.link)}
                                className={clsx(
                                    "bg-[#EDF5EE] rounded-2xl p-8 flex flex-col items-center shadow cursor-pointer transition-all group border border-[#2e865e22] hover:border-[#2E865E55] relative animate-fadeIn",
                                    "hover:shadow-2xl hover:bg-[#e0f4e8]"
                                )}
                                style={{ animationDelay: `${i * 120}ms` } as any}
                                tabIndex={0}
                                role="button"
                            >
                                <div className="absolute right-6 top-6 opacity-30 group-hover:opacity-80 transition">
                                    {sectionIcons[i]}
                                </div>
                                <h3 className="font-bold text-xl text-[#2E865E] mb-3 z-10">{s.title}</h3>
                                <p className="text-[#233123BB] text-center z-10">{s.desc}</p>
                                <span className="text-[#2E865E] mt-4 font-semibold underline decoration-[#2E865E44] underline-offset-4 z-10 group-hover:decoration-[#2E865E]">
                                    Daha ətraflı →
                                </span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* --- WHY US --- */}
                <section className="max-w-5xl mx-auto mt-24 px-2">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#2E865E]">Niyə Yaşıl Hesab?</h2>
                        <p className="text-lg text-[#23312399] mt-2 max-w-2xl mx-auto">
                            Sənə sadəcə app yox, həqiqətən dəyər qatan və fərq yaradan bir ekosistem təqdim edirik.
                        </p>
                    </div>
                    <div className="grid xs:grid-cols-1 md:grid-cols-4 gap-8">
                        {brandValues.map((b, i) => (
                            <div
                                key={i}
                                className="bg-[#FAF9F6]/90 border border-[#2E865E15] rounded-2xl shadow p-6 flex flex-col items-center hover:scale-105 transition-all"
                            >
                                <div className="mb-3">{b.icon}</div>
                                <div className="font-bold text-[#2E865E] text-lg mb-1">{b.title}</div>
                                <div className="text-[#233123BB] text-center">{b.desc}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* --- TESTIMONIALS --- */}
                <section className="w-full max-w-4xl mx-auto mt-24 px-2">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#2E865E] mb-6 text-center">İstifadəçilərdən Real Rəylər</h2>
                    <div className="relative bg-[#EDF5EE] rounded-2xl shadow-lg p-10 flex flex-col items-center overflow-hidden min-h-[260px]">
                        {/* Slider indicators */}
                        <div className="absolute top-4 right-4 flex gap-2">
                            {testimonials.map((_, i) => (
                                <span
                                    key={i}
                                    onClick={() => setTestIdx(i)}
                                    className={clsx(
                                        "w-3 h-3 rounded-full cursor-pointer transition",
                                        i === testIdx ? "bg-[#2E865E]" : "bg-[#2E865E33]"
                                    )}
                                />
                            ))}
                        </div>
                        {/* Testimonial */}
                        <div className="flex flex-col items-center animate-fadeIn">
                            <img
                                src={testimonials[testIdx].avatar}
                                alt={testimonials[testIdx].name}
                                className="w-20 h-20 rounded-full object-cover shadow mb-3 border-2 border-[#2E865E]"
                            />
                            <p className="text-lg text-[#233123] text-center italic max-w-lg mb-2">
                                &quot;{testimonials[testIdx].comment}&quot;
                            </p>
                            <div className="flex items-center gap-2">
                                <span className="font-bold text-[#2E865E]">{testimonials[testIdx].name}</span>
                                <span className="text-[#23312388]">/ {testimonials[testIdx].role}</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- CTA --- */}
                <section className="max-w-5xl mx-auto mt-24 px-2 mb-10">
                    <div className="bg-gradient-to-r from-[#2E865E] to-[#71D99E] rounded-2xl shadow-xl p-10 flex flex-col md:flex-row items-center justify-between">
                        <div className="mb-4 md:mb-0">
                            <h3 className="text-2xl font-bold text-white mb-2">Sən də Yaşıl Hesab ailəsinə qoşul!</h3>
                            <p className="text-lg text-white/90 max-w-xl">
                                Start ver, ilk gündən qənaətə başla və ekoloji təsirə sahib ol. Platforma pulsuzdur və daim yenilənir!
                            </p>
                        </div>
                        <button
                            onClick={() => navigate("/signup")}
                            className="mt-4 md:mt-0 px-7 py-3 rounded-xl bg-white text-[#2E865E] font-bold text-lg shadow hover:bg-[#edf5ee] transition-all"
                        >
                            Qeydiyyatdan Keç →
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
}
