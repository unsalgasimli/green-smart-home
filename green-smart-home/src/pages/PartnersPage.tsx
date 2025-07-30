import {
    FaLeaf,
    FaHandshake,
    FaGift,
    FaUserFriends,
    FaTrophy,
    FaLightbulb,
    FaArrowRight,
    FaChartLine,
    FaPlug,
    FaCheckCircle,
    FaArrowCircleUp,
    FaBullseye,
    FaQuestionCircle,
    FaAngleUp,
    FaAngleDown
} from "react-icons/fa";
import { useState } from "react";

// --- Demo Partners/Supporters Data ---
const partners = [
    {
        name: "Eco Product Azerbaijan",
        logo: "/eco-logo.svg",
        link: "https://eco.az",
        desc: "Ekoloji məhsullar üçün platforma istifadəçilərinə xüsusi imkanlar.",
        tags: ["Eco", "Məhsul", "Sosial məsuliyyət"]
    },
    {
        name: "BirBank",
        logo: "/birbank-logo.svg",
        link: "https://birbank.az",
        desc: "Bonus xalların real bank dəyəri və ödəniş imkanları.",
        tags: ["Bankçılıq", "Qənaət", "Motivasiya"]
    },
    {
        name: "Ministry of Energy AZ",
        logo: "/moe-logo.svg",
        link: "https://minenergy.gov.az",
        desc: "Rəsmi statistik məlumatlar və energetika bazarı dəstəyi.",
        tags: ["Dövlət", "Enerji"]
    },
    {
        name: "GGC Green Project",
        logo: "/ggc-logo.svg",
        link: "https://greenbit.com",
        desc: "Yaşıl texnologiya və gənclər arasında ekoloji təşəbbüslər.",
        tags: ["Startup", "Təhsil", "Texnologiya"]
    }
    // ... istədiyin qədər əlavə edə bilərsən
];

// --- Impact Stats (from PDF & App) ---
const impactStats = [
    {
        title: "2.8 milyon ₼",
        desc: "BirBank-dan istifadəçilərə verilən bonus/cashback (2022).",
        icon: <FaGift className="text-[#2E865E]" />
    },
    {
        title: "54 AZN",
        desc: "BirBank istifadəçilərinin orta bonus qazancı (2022).",
        icon: <FaTrophy className="text-[#FFD600]" />
    },
    {
        title: "68%",
        desc: "Kommunal ödənişlərdə ay ərzində artım.",
        icon: <FaChartLine className="text-[#4C9B62]" />
    },
    {
        title: "95%",
        desc: "İnsanlar qənaət app-ını faydalı hesab edir.",
        icon: <FaPlug className="text-[#2E865E]" />
    },
    {
        title: "77%",
        desc: "Mükafat sistemi olarsa, insanlar iştirak etməyə hazırdır.",
        icon: <FaArrowCircleUp className="text-[#2E865E]" />
    }
];

// --- App Value Propositions ---
const valueProps = [
    {
        icon: <FaLeaf className="text-[#50B84C]" />,
        title: "Ətraf Mühitə Real Təsir",
        desc: "İstifadəçilər hər qənaət etdikdə, karbon izi azalır və təbiətə bir addım yaxınlaşır."
    },
    {
        icon: <FaUserFriends className="text-[#2E865E]" />,
        title: "Komanda və İcma Gücü",
        desc: "Ənənəvi rəqabətdən fərqli olaraq, burda həmrəylik və birlik gücləndirilir."
    },
    {
        icon: <FaBullseye className="text-[#FFD600]" />,
        title: "Hədəfə Yönəlik Qənaət",
        desc: "Ağıllı tövsiyələr və AI əsaslı analiz sayəsində hədəflər daha asan əldə edilir."
    },
    {
        icon: <FaHandshake className="text-[#4C9B62]" />,
        title: "Həqiqi Brendlərlə Əməkdaşlıq",
        desc: "Qazandığın xalları real məhsullara və xidmətlərə dəyiş, hər qənaətin real dəyəri olsun."
    }
];

// --- Partner Highlight Banner ---
function PartnerBanner() {
    return (
        <div className="w-full rounded-2xl shadow-lg mb-14 flex flex-col md:flex-row bg-gradient-to-tr from-[#e5fbee] via-[#e5f5ec] to-[#e9f6f7] border border-[#2E865E15] p-8 items-center gap-7">
            <div className="flex-1">
                <h2 className="text-3xl font-extrabold text-[#2E865E] mb-2">Partnyorlarımız & Dəstəkçilər</h2>
                <p className="text-lg text-[#233123CC] mb-4">
                    Yaşıl Hesab ekosistemi real brendlər, dövlət qurumları və sosial təşəbbüslərlə əməkdaşlıq edir. Platformamızın uğuru sizin dəstəyinizlə mümkündür!
                </p>
                <ul className="ml-5 text-[#2E865E] font-semibold">
                    <li><FaCheckCircle className="inline mr-2" /> Real bonus və məhsul partnyorları</li>
                    <li><FaCheckCircle className="inline mr-2" /> Dövlət və qeyri-hökumət təşkilatları</li>
                    <li><FaCheckCircle className="inline mr-2" /> Yerli & beynəlxalq eko-təşəbbüslər</li>
                </ul>
            </div>
            <div className="flex flex-col items-center md:items-end">
                <img
                    src="/partners-banner.png"
                    alt="Partners Banner"
                    className="w-[180px] md:w-[220px] rounded-xl shadow-lg border border-[#2E865E33] bg-[#EDF5EE] p-2"
                />
                <span className="text-sm text-[#2E865E99] mt-3">Birgə daha yaşıl gələcəyə!</span>
            </div>
        </div>
    );
}

// --- Partner Cards Grid ---
function PartnersGrid() {
    return (
        <div className="flex flex-wrap justify-center gap-14 max-w-6xl mx-auto">
            {partners.map((p, i) => (
                <a
                    key={i}
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#EDF5EE] rounded-2xl shadow-xl border border-[#2E865E15] p-8 flex flex-col items-center w-[320px] min-h-[320px] hover:bg-[#e0f4e8] transition group relative"
                >
                    <img src={p.logo} alt={p.name} className="w-24 h-24 object-contain mb-4 drop-shadow-xl" />
                    <span className="font-bold text-lg text-[#2E865E] mb-1">{p.name}</span>
                    <p className="text-[#233123BB] text-center mb-3">{p.desc}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {p.tags?.map((t, j) => (
                            <span key={j} className="bg-[#2E865E18] text-[#2E865E] px-3 py-1 rounded-xl text-xs font-semibold">
                                {t}
                            </span>
                        ))}
                    </div>
                    <span className="absolute bottom-3 right-3 text-[#2E865E99] opacity-0 group-hover:opacity-100 transition"><FaArrowRight /></span>
                </a>
            ))}
        </div>
    );
}

// --- Stats/Impact Section ---
function ImpactStatsSection() {
    return (
        <div className="mt-16 max-w-6xl mx-auto grid md:grid-cols-5 grid-cols-2 gap-8">
            {impactStats.map((s, i) => (
                <div key={i} className="flex flex-col items-center bg-[#FAF9F6] p-6 rounded-2xl shadow border border-[#2E865E11]">
                    <div className="w-12 h-12 flex items-center justify-center mb-3">{s.icon}</div>
                    <div className="text-2xl font-bold text-[#2E865E]">{s.title}</div>
                    <div className="text-xs text-[#233123BB] mt-2 text-center">{s.desc}</div>
                </div>
            ))}
        </div>
    );
}

// --- Value Proposition Section ---
function ValuePropsSection() {
    return (
        <div className="mt-24 max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-[#2E865E] mb-7 flex items-center gap-2">
                <FaLightbulb className="text-[#FFD600]" /> Niyə Yaşıl Hesab və Onun Partnyorları?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
                {valueProps.map((v, i) => (
                    <div key={i} className="flex items-start gap-4 bg-[#EDF5EE] p-6 rounded-2xl shadow hover:shadow-xl transition">
                        <div className="w-11 h-11 flex items-center justify-center">{v.icon}</div>
                        <div>
                            <div className="font-bold text-[#2E865E] text-lg">{v.title}</div>
                            <div className="text-[#233123BB]">{v.desc}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// --- FAQ: Partnership Questions ---
function PartnershipFaq() {
    const [openIdx, setOpenIdx] = useState<number | null>(null);
    const faqData = [
        {
            q: "Partnyor olmaq üçün nə etmək lazımdır?",
            a: "Sadəcə info@yasilhesab.az emailinə yazın və komanda sizinlə əlaqə saxlayacaq."
        },
        {
            q: "Platforma bonuslarını necə istifadə etmək olar?",
            a: "Qazandığınız xalları app-da partnyor mağazalarda və xüsusi aksiyalarda istifadə edə bilərsiniz."
        },
        {
            q: "Əməkdaşlıq hansı üstünlüklər verir?",
            a: "Brend və ya şirkətiniz sosial məsuliyyət, istifadəçi bazası və real təsir baxımından əlavə dəyər əldə edəcək."
        },
        {
            q: "Məlumat və data paylaşımı necə qorunur?",
            a: "Yalnız istifadəçinin icazəsi ilə data anonim şəkildə partnyor brendlərlə paylaşılır."
        }
    ];
    return (
        <section className="mt-24 max-w-3xl mx-auto bg-[#EDF5EE] rounded-2xl shadow p-8">
            <h3 className="text-xl font-bold text-[#2E865E] mb-5 flex items-center gap-2">
                <FaQuestionCircle /> Tez-tez verilən suallar (Tərəfdaşlıq)
            </h3>
            {faqData.map((f, i) => (
                <div key={i} className="mb-3 border-b pb-3 border-[#2E865E22]">
                    <button
                        onClick={() => setOpenIdx(openIdx === i ? null : i)}
                        className="flex items-center justify-between w-full text-left font-semibold text-[#233123] focus:outline-none"
                    >
                        <span>{f.q}</span>
                        {openIdx === i
                            ? <FaAngleUp className="text-[#2E865E]" />
                            : <FaAngleDown className="text-[#2E865E]" />}
                    </button>
                    {openIdx === i && (
                        <div className="mt-2 text-[#233123BB]">
                            {f.a}
                        </div>
                    )}
                </div>
            ))}
        </section>
    );
}

// --- Call to Action for New Partners ---
function CallToAction() {
    return (
        <div className="mt-24 mb-12 flex flex-col items-center justify-center max-w-3xl mx-auto bg-gradient-to-tr from-[#e5fbee] via-[#f3fff8] to-[#e3f5ee] rounded-2xl p-10 shadow-xl border border-[#2E865E22]">
            <div className="flex items-center gap-4">
                <FaHandshake className="w-10 h-10 text-[#2E865E]" />
                <h2 className="text-2xl font-bold text-[#2E865E]">Siz də bizim tərəfdaşımız olun!</h2>
            </div>
            <div className="mt-4 text-[#233123BB] text-center">
                Yaşıl Hesab-a partnyor və ya sponsor kimi qoşulmaq, istifadəçilərinizə sosial məsuliyyət, ekoloji brend imici və rəqəmsal platformada xüsusi imkanlar yaradır.<br />
                Əməkdaşlıq üçün bizimlə əlaqə saxlayın: <a href="mailto:info@yasilhesab.az" className="underline text-[#2E865E]">info@yasilhesab.az</a>
            </div>
            <button
                className="mt-6 px-8 py-3 bg-[#2E865E] text-white rounded-xl font-bold shadow hover:bg-[#21704c] transition"
                onClick={() => window.location.href = "mailto:info@yasilhesab.az"}
            >
                Əməkdaşlıq üçün yazın
            </button>
        </div>
    );
}

// --- Main Page ---
export default function PartnersPage() {
    return (
        <div className="w-full min-h-screen bg-[#F6F7F3] py-16 px-2 flex flex-col">
            <PartnerBanner />
            <PartnersGrid />
            <ImpactStatsSection />
            <ValuePropsSection />
            <PartnershipFaq />
            <CallToAction />
            <div className="w-full h-16" />
        </div>
    );
}
