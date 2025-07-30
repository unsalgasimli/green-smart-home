import { FaMedal, FaGift, FaTree, FaSeedling, FaHandHoldingUsd, FaStar, FaTrophy, FaRegSmile } from "react-icons/fa";
import { useState } from "react";
import leylaa from "../assets/leylaa.png";
import muradd from "../assets/muradd.png";

// --- Rewards Main Features
const rewards = [
    {
        icon: <FaMedal className="w-12 h-12 text-[#2E865E]" />,
        title: "Bonus Xal Qazan",
        desc: "Hər ay əvvəlkindən daha az enerji sərf et – avtomatik xal yığ və səviyyəni artır.",
    },
    {
        icon: <FaGift className="w-12 h-12 text-[#2E865E]" />,
        title: "Xalları İstifadə Et",
        desc: "Yığdığın xalları ekoloji məhsullara, endirimlərə və ya kampaniyalara dəyiş.",
    },
    {
        icon: <FaTree className="w-12 h-12 text-[#2E865E]" />,
        title: "Ağacəkmə və Ekoloji Aksiyalar",
        desc: "Bonus xallarını real ağacəkmə və təbiət aksiyalarında istifadə edə bilərsən.",
    },
];

// --- Reward Examples (like a shop)
const rewardExamples = [
    { icon: <FaSeedling className="w-9 h-9 text-[#50B84C]" />, name: "Ağac Əkmə Sertifikatı", points: 30, desc: "Xal ilə real ağac əkmə." },
    { icon: <FaHandHoldingUsd className="w-9 h-9 text-[#FFD600]" />, name: "Ekoloji Endirim Kuponu", points: 15, desc: "Partnyor mağazalarda endirim." },
    { icon: <FaStar className="w-9 h-9 text-[#2E865E]" />, name: "LED Lampa (Eco)", points: 20, desc: "Daha az enerji sərf edən lampa." },
    { icon: <FaTrophy className="w-9 h-9 text-[#4C9B62]" />, name: "VIP Profil Statusu", points: 40, desc: "Daimi qənaət edənlər üçün xüsusi badge." }
];

// --- FAQ
const faq = [
    { q: "Xalları necə qazanmaq olar?", a: "Enerji sərfiyyatını azalt, aksiyalarda iştirak et, dostlarını dəvət et və hər ay yeni nailiyyətlər əldə et." },
    { q: "Xalları necə istifadə edə bilərəm?", a: "App-dakı mağazada məhsul və ya endirim seç, xalları dəyiş – partnyorlar və ekoloji tədbirlər üçün." },
    { q: "Xal hesabı necə aparılır?", a: "Hər ay sənin enerji statistikaların yoxlanır və avtomatik bonus əlavə olunur. Qənaət, iştirak və dəvət – bunların hamısı xal verir." },
    { q: "Xalları başqasına göndərə bilərəm?", a: "Hazırda yalnız öz hesabında istifadə mümkündür, gələcəkdə dostlara transfer də planlaşdırılır." }
];

// --- User Testimonials
const testimonials = [
    {
        name: "Leyla S.",
        quote: "App sayəsində həm qənaət edirəm, həm də ağac əkmək üçün bonusları real istifadə edirəm!",
        img: leylaa,
    },
    {
        name: "Murad Q.",
        quote: "P   artnyor mağazalardan endirim aldım, əlavə motivasiya oldu!",
        img: muradd
    }
];

// --- Animated Progress Bar
function ProgressBar({ percent }: { percent: number }) {
    return (
        <div className="w-full h-3 bg-[#e0f4e8] rounded-xl overflow-hidden mt-2 mb-3">
            <div
                className="h-full bg-gradient-to-r from-[#2E865E] to-[#6FCF97] transition-all duration-700"
                style={{ width: `${percent}%` }}
            ></div>
        </div>
    );
}

// --- FAQ Accordion
function FaqAccordion() {
    const [openIdx, setOpenIdx] = useState<number | null>(null);
    return (
        <section className="mt-20 max-w-4xl mx-auto w-full">
            <h3 className="text-xl font-bold text-[#2E865E] mb-6 flex items-center gap-2 pl-8">
                <FaRegSmile className="text-[#2E865E]" /> Tez-tez verilən suallar
            </h3>
            <div className="flex flex-col gap-4">
                {faq.map((f, i) => (
                    <div
                        key={i}
                        className={`transition-all duration-300 border border-[#2E865E22] rounded-2xl bg-[#EDF5EE] shadow
                            ${openIdx === i ? "py-5 px-8" : "py-3 px-8"}
                            w-full min-w-[320px]`}
                        style={{
                            maxWidth: "100%",
                            minWidth: "320px"
                        }}
                    >
                        <button
                            onClick={() => setOpenIdx(openIdx === i ? null : i)}
                            className="flex items-center justify-between w-full text-left font-semibold text-[#233123] focus:outline-none text-lg"
                        >
                            <span>{f.q}</span>
                            {openIdx === i
                                ? <span className="text-[#2E865E] font-bold text-xl">–</span>
                                : <span className="text-[#2E865E] font-bold text-xl">+</span>}
                        </button>
                        <div className={`overflow-hidden transition-all duration-500
                                ${openIdx === i ? "max-h-[500px] mt-4 opacity-100" : "max-h-0 opacity-0"}
                            `}>
                            <div className="text-[#233123BB] text-base">
                                {f.a}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

// --- Main Page
export default function RewardsPage() {
    return (
        <div className="relative w-full min-h-screen bg-[#F7FFF9] overflow-x-hidden">
            {/* --- Apple/Stripe style modern background --- */}
            <div className="pointer-events-none select-none z-0">
                <div className="absolute -top-44 -left-44 w-[800px] h-[500px] rounded-full opacity-25 blur-3xl bg-gradient-to-br from-[#70D9B6] via-[#B8CBFF] to-[#2E865E]"/>
                <div className="absolute -bottom-44 right-0 w-[900px] h-[300px] rounded-full opacity-20 blur-2xl bg-gradient-to-tr from-[#B8CBFF] to-[#2E865E]"/>
            </div>

            <div className="relative z-10 w-full max-w-[110rem] mx-auto flex flex-col items-center px-2">
                {/* Title & Hero */}
                <h1 className="text-4xl md:text-5xl font-bold text-[#2E865E] text-center mt-8 mb-8 drop-shadow-xl">
                    Bonus və Mükafatlar
                </h1>
                <p className="max-w-3xl mx-auto text-center text-2xl text-[#23312399] mb-12">
                    Qənaət edən hər kəs motivasiyanı və real faydanı hiss edir! Platformada topladığın bonus xallarla həyatını və təbiəti yaxşılaşdır.
                </p>

                {/* Main Features */}
                <div className="grid md:grid-cols-3 gap-12 max-w-7xl w-full mx-auto mb-20">
                    {rewards.map((r, i) => (
                        <div key={i} className="bg-[#EDF5EE] rounded-3xl shadow-lg p-10 flex flex-col items-center hover:shadow-2xl transition-all">
                            <div className="bg-[#FAF9F6] rounded-full p-5 mb-5">{r.icon}</div>
                            <h2 className="font-bold text-2xl text-[#2E865E] mb-2">{r.title}</h2>
                            <p className="text-[#233123BB] text-center text-lg">{r.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Shop Rewards */}
                <div className="w-full max-w-6xl mx-auto mt-2 mb-20">
                    <h2 className="text-3xl font-bold text-[#2E865E] mb-8 flex items-center gap-2">
                        <FaGift className="text-[#2E865E]" /> Əldə edə biləcəyin mükafatlar:
                    </h2>
                    <div className="grid md:grid-cols-2 gap-10">
                        {rewardExamples.map((rw, idx) => (
                            <div key={idx} className="flex items-center gap-7 bg-[#FAF9F6] rounded-2xl p-7 shadow border border-[#2E865E11]">
                                <div className="bg-[#EDF5EE] rounded-full p-4">{rw.icon}</div>
                                <div className="flex-1">
                                    <div className="font-bold text-[#2E865E] flex items-center text-lg">
                                        {rw.name}
                                        <span className="ml-2 text-xs text-[#FFD600]">{rw.points} xal</span>
                                    </div>
                                    <div className="text-[#23312399] text-base">{rw.desc}</div>
                                    <ProgressBar percent={80 - idx * 10} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Testimonials */}
                <div className="w-full max-w-6xl mx-auto mb-16">
                    <h2 className="text-2xl font-semibold text-[#2E865E] mb-8">İstifadəçi təcrübəsi</h2>
                    <div className="flex flex-col md:flex-row gap-10 w-full">
                        {testimonials.map((t, idx) => (
                            <div key={idx} className="flex items-center bg-[#EDF5EE] rounded-2xl p-6 shadow w-full md:w-1/2">
                                <img src={t.img} alt={t.name} className="w-16 h-16 rounded-full object-cover mr-6" />
                                <div>
                                    <div className="font-bold text-[#2E865E] text-lg">{t.name}</div>
                                    <div className="text-[#233123BB] italic text-base">"{t.quote}"</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


               {/* FAQ Section */}
                <FaqAccordion />

                {/* Call to Action */}
                <div className="w-full mt-24 flex flex-col items-center mb-4">
                    <a
                        className="px-12 py-4 bg-[#2E865E] text-white font-bold rounded-2xl shadow-xl hover:bg-[#21704c] transition text-xl"
                        href="mailto:support@yasilhesab.az"
                    >
                        Sualın var? Bizimlə əlaqə saxla
                    </a>
                </div>
            </div>
        </div>
    );
}
