// src/pages/TestimonialsPage.tsx
import {
    FaQuoteLeft, FaUsers, FaStar, FaLightbulb, FaSmile, FaPlus
} from "react-icons/fa";

// --- Testimonial Data ---
const testimonials = [
    {
        user: "Aytac",
        city: "Bakı",
        text: "Yaşıl Hesab sayəsində hər ay elektrik xərclərim 15% azalıb!",
        feature: "Enerji izləmə və qənaət tövsiyələri",
        color: "#2E865E"
    },
    {
        user: "Murad",
        city: "Sumqayıt",
        text: "İcma panelində başqalarının paylaşdığı ipucları çox bəyəndim.",
        feature: "İcma və paylaşım paneli",
        color: "#FFC300"
    },
    {
        user: "Leyla",
        city: "Gəncə",
        text: "App motivasiya və rahat istifadə ilə mükəmməldir.",
        feature: "Gamification və istifadəçi dostu interfeys",
        color: "#6FCF97"
    },
    {
        user: "Orxan",
        city: "Şəki",
        text: "App-dan gələn AI məsləhətlər mənim üçün yeni qənaət imkanları açdı.",
        feature: "AI əsaslı fərdi tövsiyələr",
        color: "#B57DFB"
    },
    {
        user: "Aysel",
        city: "Lənkəran",
        text: "Ailəmi leaderboard-da görmək motivasiyamı artırır!",
        feature: "Liderboard və aylıq statistika",
        color: "#50B5FF"
    }
];

// --- Community Stats ---
const stats = [
    { value: "1,200+", label: "İştirakçı ailə", icon: <FaUsers /> },
    { value: "150+", label: "Rəy və hekayə", icon: <FaStar /> },
    { value: "430+", label: "Qənaət tip & ipucu", icon: <FaLightbulb /> },
    { value: "99%", label: "Məmnuniyyət", icon: <FaSmile /> }
];

// --- UserAvatar helper (ad baş hərfi, fon rəngi ilə) ---
function UserAvatar({ name, color }: { name: string, color?: string }) {
    return (
        <div
            className="w-14 h-14 rounded-full flex items-center justify-center text-2xl font-black shadow-lg ring-2 ring-white
            bg-gradient-to-br"
            style={{
                background: color
                    ? `linear-gradient(120deg, ${color} 60%, #FAF9F6 100%)`
                    : "#2E865E",
                color: "#fff"
            }}
        >
            {name[0].toUpperCase()}
        </div>
    );
}

// --- Main Page ---
export default function TestimonialsPage() {
    return (
        <div className="relative w-full min-h-screen bg-gradient-to-br from-[#FAF9F6] via-[#F0FFF4] to-[#E5FAF2] py-10 px-2 flex flex-col">
            {/* --- Dynamic Blobs & BG --- */}
            <div className="pointer-events-none select-none absolute -top-36 -left-36 w-[500px] h-[320px] rounded-full opacity-10 blur-3xl bg-gradient-to-br from-[#B8CBFF] via-[#FAF9F6] to-[#2E865E] z-0" />
            <div className="pointer-events-none select-none absolute bottom-0 right-0 w-[420px] h-[260px] rounded-full opacity-10 blur-2xl bg-gradient-to-tr from-[#CFFFE3] to-[#71D99E] z-0" />
            <div className="pointer-events-none select-none absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 z-0" />

            <div className="relative z-10 flex flex-col items-center w-full">
                <h1 className="text-3xl md:text-5xl font-black text-[#2E865E] text-center mb-3 drop-shadow-xl mt-8">
                    İstifadəçi Rəyləri & Community
                </h1>
                <p className="text-center text-[#233123BB] mb-10 max-w-2xl mx-auto text-lg font-medium">
                    Platformamız yalnız bir enerji appı deyil, <span className="text-[#2E865E] font-bold">Azərbaycanın ən böyük ekoloji ailəsidir</span>. Burada hər rəy motivasiya və yeni ideyadır!
                </p>

                {/* Testimonials Grid */}
                <div className="
                  w-full grid
                  grid-cols-1
                  sm:grid-cols-2
                  lg:grid-cols-3
                  gap-7
                  max-w-6xl
                  mx-auto
                  mb-16
                  px-2
                ">
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className="relative bg-white/90 rounded-3xl shadow-2xl px-6 pt-10 pb-8 flex flex-col items-center
                            border-l-[6px] hover:scale-[1.025] hover:shadow-2xl transition
                            "
                            style={{ borderLeftColor: t.color, minHeight: "290px" }}
                        >
                            <FaQuoteLeft className="absolute left-5 top-5 text-[#2E865E13] text-3xl" />
                            <UserAvatar name={t.user} color={t.color} />
                            <div className="mt-2 text-[#233123BB] text-center text-[17px] leading-relaxed italic font-medium min-h-[70px]">
                                “{t.text}”
                            </div>
                            <div className="mt-4 flex flex-col items-center">
                                <span className="font-bold text-[#2E865E] text-lg">{t.user}</span>
                                <span className="text-[#50B5FF] text-sm">{t.city}</span>
                                <span className="mt-2 text-xs px-2 py-1 bg-[#2e865e11] text-[#2E865E] rounded-full">{t.feature}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Community Stats Cards */}
                <div className="
                  flex flex-wrap justify-center gap-6 w-full mb-14
                  max-w-4xl
                ">
                    {stats.map((s, i) => (
                        <div
                            key={i}
                            className="bg-[#F7FFF9] border border-[#2E865E22] rounded-2xl shadow px-8 py-7 flex flex-col items-center min-w-[150px]
                            hover:shadow-lg transition"
                        >
                            <div className="text-3xl mb-2 text-[#2E865E]">{s.icon}</div>
                            <span className="font-black text-2xl text-[#2E865E]">{s.value}</span>
                            <span className="text-[#233123BB] text-sm mt-1 text-center">{s.label}</span>
                        </div>
                    ))}
                </div>

                {/* CTA (her zaman ortada və responsive) */}
                <div className="w-full flex flex-col items-center mt-8">
                    <button
                        className="flex items-center gap-3 bg-[#2E865E] hover:bg-[#269257] transition text-white font-bold rounded-xl px-8 py-4 text-lg shadow-lg"
                        onClick={() => alert("Feedback göndərmək üçün qeydiyyatdan keç!")}
                    >
                        <FaPlus className="text-xl" /> Öz uğurunu bölüş!
                    </button>
                    <p className="mt-3 text-[#23312399] text-base text-center">Siz də rəyinizi bölüşərək, digər ailələrə ilham olun!</p>
                </div>
            </div>
        </div>
    );
}
