import { useState } from "react";
import {
    FaPlug, FaGift, FaCheckCircle, FaChartBar, FaQuestionCircle,
    FaAngleDown, FaAngleUp, FaLightbulb, FaTrophy, FaLeaf, FaShareAlt, FaBuilding, FaUsers, FaBrain
} from "react-icons/fa";
import advice from "../assets/ai_advice.png";
import bonus from "../assets/bonus.png";
import sharing from "../assets/sharing.png";
import graph from "../assets/graph.png";
import clsx from "clsx";

// --- Label helpers
const statLabels: Record<string, { label: string, icon?: any }> = {
    devices: { label: "Cihaz", icon: <FaPlug /> },
    rooms: { label: "Otaq", icon: <FaBuilding /> },
    totalTips: { label: "Məsləhət", icon: <FaLightbulb /> },
    avgSaving: { label: "Ortalama qənaət (%)", icon: <FaChartBar /> },
    totalPoints: { label: "Toplanmış Xal", icon: <FaTrophy /> },
    ecoProducts: { label: "Ekoloji Məhsul", icon: <FaLeaf /> },
    posts: { label: "Paylaşım", icon: <FaShareAlt /> },
    events: { label: "Aksiya", icon: <FaGift /> }
};

// --- Main Data
const features = [
    {
        icon: <FaPlug className="w-14 h-14 text-[#2E865E]" />,
        title: "Cihaz və Otaq üzrə İzləmə",
        desc: "Evinizdəki hər bir cihaz və otağın elektrik sərfiyyatını real vaxtda izləyin. Həftəlik, aylıq və illik qrafiklərdə ən çox enerji sərf edənləri görün və sərfiyyatı azaldın.",
        img: "/device.jpeg",
        stats: { devices: 15, rooms: 5 },
        cases: [
            "Uşağın otağında gecə boyu işləyən elektrikli qızdırıcı tapılıb, istifadə müddəti azaldıldı.",
            "Kondisioner və soyuducu bir-birinə yaxın yerləşdirilmişdi, enerji israfı aradan qaldırıldı."
        ],
        demo: {
            deviceList: [
                { name: "Kondisioner", usage: 38 },
                { name: "Soyuducu", usage: 27 },
                { name: "Televizor", usage: 13 },
                { name: "Qabyuyan", usage: 8 },
                { name: "Digərləri", usage: 14 }
            ]
        }
    },
    {
        icon: <FaBrain className="w-14 h-14 text-[#2E865E]" />,
        title: "AI Əsaslı Məsləhətlər",
        desc: "App AI-dən istifadə edərək sizin istifadə vərdişlərinizi analiz edir və ən uyğun qənaət tövsiyələri verir. Misal üçün: 'Qabyuyanı axşam saatlarında işə salın' və ya 'LED lampaya keçid edin'.",
        img: advice,
        stats: { totalTips: 430, avgSaving: 17 },
        cases: [
            "İstifadəçinin səhər pik saatlarında elektrik sərfiyyatını azaltmaq üçün vaxt dəyişimi tövsiyə olundu.",
            "İşıqlandırma üçün LED lampa məsləhət görülərək, illik 40₼ qənaət əldə edildi."
        ],
        demo: {
            tips: [
                "Axşam saatlarında paltaryuyanı işə salın — enerji daha ucuzdur.",
                "Qabyuyanı yalnız tam dolduqda işə salın.",
                "Köhnə cihazları A+ enerji sinifli cihazlara dəyişin."
            ]
        }
    },
    {
        icon: <FaGift className="w-14 h-14 text-[#2E865E]" />,
        title: "Bonus və Mükafat Sistemi",
        desc: "İstifadəçi hər ay qənaət etdikcə bonus xal qazanır. Bu xalları real ekoloji məhsullara, endirimlərə və ya ağacəkmə kampaniyalarına dəyişə bilər.",
        img: bonus,
        stats: { totalPoints: 4820, ecoProducts: 12 },
        cases: [
            "Murad əvvəlki aya görə 25% daha az enerji sərf etdi və 30 bonus xal qazandı.",
            "Toplanmış xallar hesabına ağacəkmə aksiyasında iştirak edildi."
        ],
        demo: {
            rewards: [
                { name: "LED Lampa (Eco)", points: 20 },
                { name: "Əl fanatı", points: 10 },
                { name: "Ağac əkmə", points: 30 }
            ]
        }
    },
    {
        icon: <FaUsers className="w-14 h-14 text-[#2E865E]" />,
        title: "İcma və Paylaşım Paneli",
        desc: "İstifadəçilər uğur hekayələrini və ipuclarını paylaşır, bir-birini motivasiya edir və kollektiv aksiyalarda iştirak edirlər.",
        img: sharing,
        stats: { posts: 93, events: 7 },
        cases: [
            "Rəqabətli aylıq leaderboard — ən çox qənaət edən ailə icmada paylaşıldı.",
            "Uğur hekayələri və yeni ideyalar sayəsində 15% əlavə qənaət əldə olundu."
        ],
        demo: {
            posts: [
                { user: "Leyla", text: "Köhnə cihazları dəyişəndən bəri xeyli qənaət edirəm!" },
                { user: "Murad", text: "LED lampalarla işıq xərci ikiqat azalıb." }
            ]
        }
    }
];

const FAQ = [
    {
        q: "Hər cihazı ayrıca izləmək üçün xüsusi avadanlıq lazımdır?",
        a: "Əgər smart plug və ya enerji monitoru varsa, cihazları ayrıca izləyə bilərsiniz. Yoxdursa, otaq/ümumi səviyyədə izləmə aktiv olacaq."
    },
    {
        q: "AI əsaslı məsləhətlər nə dərəcədə fərdidir?",
        a: "Məsləhətlər sizin son istifadə statistikalarınız və cihaz profilinizə əsaslanır."
    },
    {
        q: "Bonus xalları nə vaxt və necə istifadə edə bilərəm?",
        a: "Hər ay nəticələr yenilənir, topladığınız xalları həm fiziki məhsul, həm də ekoloji tədbirlər üçün istifadə edə bilərsiniz."
    },
    {
        q: "İcma panelində nələri paylaşa bilərəm?",
        a: "Uğur hekayələri, ipucları, suallar və iştirak etdiyiniz ekoloji aksiyaları paylaşa bilərsiniz."
    }
];

// Pie Chart (No dependency)
function PieChart({ data, size = 120, stroke = 14 }: {
    data: { name: string, usage: number }[], size?: number, stroke?: number
}) {
    const total = data.reduce((a, b) => a + b.usage, 0);
    let angle = 0;
    const center = size / 2;
    const radius = (size - stroke) / 2;

    return (
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
            {data.map((item, i) => {
                const val = (item.usage / total) * 360;
                const x1 = center + radius * Math.cos((Math.PI / 180) * (angle - 90));
                const y1 = center + radius * Math.sin((Math.PI / 180) * (angle - 90));
                angle += val;
                const x2 = center + radius * Math.cos((Math.PI / 180) * (angle - 90));
                const y2 = center + radius * Math.sin((Math.PI / 180) * (angle - 90));
                const largeArc = val > 180 ? 1 : 0;
                const path = `
                  M ${center} ${center}
                  L ${x1} ${y1}
                  A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2}
                  Z
                `;
                const colors = ["#2E865E", "#FFC300", "#6FCF97", "#50B5FF", "#FF5E57", "#B57DFB", "#FFB996"];
                return (
                    <path key={item.name}
                          d={path}
                          fill={colors[i % colors.length]}
                          opacity={0.85}
                    />
                );
            })}
        </svg>
    );
}

// Stats Component
function FeatureStats({ stats }: { stats: Record<string, number | string | undefined> }) {

    if (!stats) return null;
    return (
        <div className="flex flex-wrap gap-3 mt-3 justify-center">
            {Object.entries(stats).map(([k, v]) => (
                <div
                    key={k}
                    className="flex items-center gap-1 px-3 py-1 bg-[#2E865E1A] text-[#2E865E] rounded-xl text-xs font-semibold"
                >
                    {statLabels[k]?.icon && <span className="mr-1">{statLabels[k].icon}</span>}
                    <span>{statLabels[k]?.label || k}:</span>
                    <b className="ml-1">{v}</b>
                </div>
            ))}
        </div>
    );
}

// Case Component
function FeatureCase({ caseText }: { caseText: string }) {
    return (
        <div className="flex items-start gap-2 text-[#2E865E] mb-2">
            <FaCheckCircle className="w-5 h-5 mt-0.5" />
            <span className="text-[#233123]">{caseText}</span>
        </div>
    );
}

// Demo Block
function FeatureDemo({ demo, i }: { demo: any, i: number }) {
    if (!demo) return null;
    if (i === 0 && demo.deviceList) {
        return (
            <div className="mt-6 w-full flex flex-col md:flex-row gap-8 items-center">
                <PieChart data={demo.deviceList} />
                <div>
                    <h4 className="font-semibold mb-2 text-[#2E865E]">Top cihazlar və istifadə (%)</h4>
                    <ul className="ml-6 text-[#233123BB]">
                        {demo.deviceList.map((d: any, idx: number) => (
                            <li key={idx}><b>{d.name}:</b> {d.usage}%</li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
    if (i === 1 && demo.tips) {
        return (
            <div className="mt-6">
                <h4 className="font-semibold mb-2 text-[#2E865E]">AI tərəfindən təkliflər:</h4>
                <ul className="list-disc ml-8 text-[#233123BB]">
                    {demo.tips.map((tip: string, idx: number) => (
                        <li key={idx}>{tip}</li>
                    ))}
                </ul>
            </div>
        );
    }
    if (i === 2 && demo.rewards) {
        return (
            <div className="mt-6">
                <h4 className="font-semibold mb-2 text-[#2E865E]">Əldə edilə biləcək bonuslar:</h4>
                <ul className="list-disc ml-8 text-[#233123BB]">
                    {demo.rewards.map((r: any, idx: number) => (
                        <li key={idx}><b>{r.name}</b> – {r.points} xal</li>
                    ))}
                </ul>
            </div>
        );
    }
    if (i === 3 && demo.posts) {
        return (
            <div className="mt-6">
                <h4 className="font-semibold mb-2 text-[#2E865E]">Son paylaşım və uğurlar:</h4>
                <ul className="list-disc ml-8 text-[#233123BB]">
                    {demo.posts.map((p: any, idx: number) => (
                        <li key={idx}><b>{p.user}:</b> {p.text}</li>
                    ))}
                </ul>
            </div>
        );
    }
    return null;
}

// FAQ Section
function FaqAccordion() {
    const [openIdx, setOpenIdx] = useState<number | null>(null);
    return (
        <section className="mt-20 max-w-4xl mx-auto bg-[#EDF5EE] rounded-2xl shadow p-10">
            <h3 className="text-2xl font-bold text-[#2E865E] mb-7 flex items-center gap-3">
                <FaQuestionCircle /> Tez-tez verilən suallar
            </h3>
            {FAQ.map((f, i) => (
                <div key={i} className="mb-4 border-b pb-4 border-[#2E865E22]">
                    <button
                        onClick={() => setOpenIdx(openIdx === i ? null : i)}
                        className="flex items-center justify-between w-full text-left font-semibold text-[#233123] text-lg focus:outline-none"
                    >
                        <span>{f.q}</span>
                        {openIdx === i
                            ? <FaAngleUp className="text-[#2E865E]" />
                            : <FaAngleDown className="text-[#2E865E]" />}
                    </button>
                    {/* Animated answer */}
                    <div
                        className={clsx(
                            "overflow-hidden transition-all duration-400 ease-in-out",
                            openIdx === i ? "max-h-52 opacity-100 mt-3" : "max-h-0 opacity-0"
                        )}
                    >
                        <div className="text-[#233123BB] text-base px-1 py-2">
                            {f.a}
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}


// --- Main Page ---
export default function FeaturesPage() {
    return (
        <div className="relative w-full min-h-screen py-16 px-2 overflow-x-hidden">
            {/* --- Dynamic Background Blobs --- */}
            <div className="pointer-events-none select-none">
                <div className="absolute -top-40 -left-60 w-[650px] h-[420px] rounded-full opacity-25 blur-3xl bg-gradient-to-br from-[#B8CBFF] via-[#FAF9F6] to-[#2E865E] z-0" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[300px] rounded-full opacity-10 blur-2xl bg-gradient-to-tr from-[#CFFFE3] to-[#71D99E] z-0" />
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-[#2E865E] text-center mb-16 z-10 relative">
                Əsas Xüsusiyyətlər
            </h1>
            <div className="grid md:grid-cols-2 gap-14 max-w-7xl mx-auto relative z-10">
                {features.map((f, i) => (
                    <div
                        key={i}
                        className="relative flex flex-col bg-[#EDF5EE]/95 rounded-3xl shadow-2xl px-0 pt-0 pb-10 overflow-hidden group
             border border-[#c2d6cf33] hover:shadow-emerald-200/70 hover:shadow-2xl transition-all"
                    >
                        {/* Top image section */}
                        <div className="w-full flex flex-col items-center justify-center pt-6 bg-gradient-to-b from-[#f8fdfc] to-[#e4faee] rounded-t-3xl min-h-[170px] md:min-h-[200px]">
                            {/* Icon (üst sol küncdə kiçik badge kimi) */}
                            <div className="absolute top-5 left-6 z-10">
                                <div className="bg-white/90 rounded-full p-3 shadow-md border border-[#d4eadc]">{f.icon}</div>
                            </div>
                            {/* Card image (hər zaman eyni ölçüdə və depth) */}
                            {f.img && (
                                <img
                                    src={f.img}
                                    alt={f.title}
                                    className="w-[110px] h-[110px] md:w-[130px] md:h-[130px] object-cover rounded-2xl border-2 border-[#f5f8ff] shadow-lg transition group-hover:scale-105 bg-white"
                                    style={{ boxShadow: '0 8px 32px 0 #2e865e19, 0 2px 8px 0 #b8cbff15' }}
                                />
                            )}
                        </div>
                        {/* Content */}
                        <div className="px-8 mt-2 flex flex-col gap-2">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#2E865E] mb-2 mt-4">{f.title}</h2>
                            <p className="text-[#233123BB] mb-2 text-lg">{f.desc}</p>
                            <FeatureStats stats={f.stats} />
                            <div className="mt-2">
                                <h4 className="font-semibold mb-1 text-[#2E865E]">Case Study:</h4>
                                {f.cases.map((c, idx) => (
                                    <FeatureCase key={idx} caseText={c} />
                                ))}
                            </div>
                            <FeatureDemo demo={f.demo} i={i} />
                        </div>
                    </div>

                ))}
            </div>

            {/* Qrafik Placeholder */}
            <div className="max-w-6xl mx-auto mt-24 z-10 relative">
                <h2 className="text-2xl font-bold text-[#2E865E] mb-4 flex items-center">
                    <FaChartBar className="mr-2" /> Qənaət Statistikası
                </h2>
                <div className="bg-[#EDF5EE] p-8 rounded-2xl shadow flex flex-col md:flex-row gap-8 items-center">
                    <img src={graph} alt="Qrafik" className="w-[280px] h-[180px] object-contain rounded-xl shadow" />
                    <div>
                        <ul className="list-disc ml-8 text-[#233123BB] text-lg">
                            <li>Feedback və self-monitoring funksiyası ilə evdə orta hesabla 13% qənaət</li>
                            <li>Bonus sistemi ilə vərdiş formalaşması və davamlı qənaət</li>
                            <li>İcma dəstəyi ilə uzunmüddətli motivasiya</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* FAQ */}
            <FaqAccordion />
        </div>
    );
}
