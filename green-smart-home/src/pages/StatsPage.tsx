import {
    FaUsers, FaBolt, FaCloud, FaStar, FaTrophy,
    FaArrowUp, FaLeaf, FaGlobeEurope, FaRegSmile,
} from "react-icons/fa";
import fidan from "../assets/fidan.png";
import resad from "../assets/resad.png";

// -------------- Data -----------------
const stats = [
    { value: "1,200+", label: "Ailə qoşulub", icon: <FaUsers className="text-[#6FCF97] w-9 h-9" /> },
    { value: "85,000 kWh", label: "Qənaət olunan enerji", icon: <FaBolt className="text-[#FFD600] w-9 h-9" /> },
    { value: "20 ton", label: "CO₂ emissiyasına qənaət", icon: <FaCloud className="text-[#50B5FF] w-9 h-9" /> },
    { value: "150+", label: "Paylaşılan uğur hekayəsi", icon: <FaStar className="text-[#B57DFB] w-9 h-9" /> },
];

const months = [
    { month: "Yan", saved: 4300 },
    { month: "Fev", saved: 7200 },
    { month: "Mar", saved: 8600 },
    { month: "Apr", saved: 10200 },
    { month: "May", saved: 12400 },
    { month: "İyun", saved: 15300 },
];

const leaderboard = [
    { user: "Aytac", energySaved: 320, city: "Bakı" },
    { user: "Murad", energySaved: 260, city: "Sumqayıt" },
    { user: "Leyla", energySaved: 190, city: "Gəncə" },
    { user: "Orxan", energySaved: 130, city: "Şəki" },
    { user: "Aysel", energySaved: 125, city: "Lənkəran" },
];

const regions = [
    { region: "Bakı", households: 500, saved: 34000 },
    { region: "Gəncə", households: 170, saved: 9200 },
    { region: "Sumqayıt", households: 140, saved: 8000 },
    { region: "Şəki", households: 70, saved: 4000 },
    { region: "Lənkəran", households: 60, saved: 2800 },
];

const testimonials = [
    {
        name: "Fidan Ə.",
        quote: "Platformaya qoşulduqdan sonra, ailəmizdə enerji istifadəsi 25% azalıb. Liderboard-da adımızı görəndə qürur hissi keçirirəm!",
        img: fidan
    },
    {
        name: "Rəşad S.",
        quote: "Uğur hekayəmi bölüşəndən sonra daha çox insan motivasiya alıb, hamı üçün faydalıdır!",
        img: resad
    }
];

// -------- Bar Chart --------
function BarChart({ data }: { data: { month: string, saved: number }[] }) {
    const max = Math.max(...data.map(d => d.saved));
    return (
        <div className="flex items-end h-52 gap-8 md:gap-6 px-3 animate-fadeIn">
            {data.map((d, i) => (
                <div key={i} className="flex flex-col items-center w-16 md:w-12 group">
                    <div
                        className="w-10 md:w-8 rounded-xl shadow-lg group-hover:scale-110 transition-all duration-300"
                        style={{
                            height: `${(d.saved / max) * 140 + 36}px`,
                            background: "linear-gradient(120deg, #2E865E 70%, #6FCF97 100%)",
                            boxShadow: "0 8px 24px 0 #6FCF9733"
                        }}
                        title={`${d.saved} kWh`}
                    />
                    <div className="text-xs text-[#23312399] mt-3">{d.month}</div>
                    {/* Tooltip on hover */}
                    <span className="absolute mt-[-30px] px-2 py-1 bg-[#2E865E] text-white text-xs rounded shadow opacity-0 group-hover:opacity-100 transition">{d.saved} kWh</span>
                </div>
            ))}
        </div>
    );
}

// ----------- Leaderboard Table -------------
function LeaderboardTable() {
    return (
        <div className="bg-[#FAF9F6]/95 rounded-2xl p-8 shadow-xl mb-16 max-w-4xl mx-auto animate-slideUp">
            <h3 className="text-lg font-bold text-[#2E865E] mb-5 flex items-center gap-2">
                <FaTrophy /> Top qənaət edən ailələr
            </h3>
            <table className="w-full text-left">
                <thead>
                <tr className="text-[#2E865E] border-b font-semibold">
                    <th className="py-2">Ad</th>
                    <th className="py-2">Qənaət (kWh)</th>
                    <th className="py-2">Şəhər</th>
                    <th className="py-2">Trend</th>
                </tr>
                </thead>
                <tbody>
                {leaderboard.map((item, idx) => (
                    <tr key={idx} className="border-t hover:bg-[#e0f4e8]/60 transition">
                        <td className="py-2 font-semibold">{item.user}</td>
                        <td className="py-2 text-[#2E865E] font-bold">{item.energySaved}</td>
                        <td className="py-2">{item.city}</td>
                        <td className="py-2">
                            <FaArrowUp className="inline text-[#6FCF97]" title="Daim artır" />
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

// ----------- Region Table -------------
function RegionsTable() {
    return (
        <div className="bg-[#EDF5EE]/95 rounded-2xl p-8 shadow-xl mb-16 max-w-5xl mx-auto animate-fadeIn">
            <h3 className="text-lg font-bold text-[#2E865E] mb-5 flex items-center gap-2">
                <FaGlobeEurope /> Regionlar üzrə təsir
            </h3>
            <table className="w-full text-left">
                <thead>
                <tr className="text-[#2E865E] border-b">
                    <th className="py-2">Region</th>
                    <th className="py-2">Ailə sayı</th>
                    <th className="py-2">Qənaət (kWh)</th>
                </tr>
                </thead>
                <tbody>
                {regions.map((r, i) => (
                    <tr key={i} className="border-t hover:bg-[#e0f4e8]/60 transition">
                        <td className="py-2 font-semibold">{r.region}</td>
                        <td className="py-2">{r.households}</td>
                        <td className="py-2 text-[#2E865E] font-bold">{r.saved}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

// ---------- Testimonials -------------
function TestimonialsBlock() {
    return (
        <div className="max-w-4xl mx-auto mb-14 animate-fadeIn">
            <h3 className="text-xl font-semibold text-[#2E865E] mb-5 flex items-center gap-2"><FaRegSmile /> İstifadəçi rəyləri və uğur hekayələri</h3>
            <div className="flex flex-col md:flex-row gap-8">
                {testimonials.map((t, idx) => (
                    <div key={idx} className="flex items-center bg-[#EDF5EE] rounded-2xl p-5 shadow w-full md:w-1/2">
                        <img src={t.img} alt={t.name} className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-[#6FCF97] shadow" />
                        <div>
                            <div className="font-bold text-[#2E865E]">{t.name}</div>
                            <div className="text-[#233123BB] italic">"{t.quote}"</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// --------- Progress Circle ------------
function ProgressCircle({ percent }: { percent: number }) {
    const radius = 44, stroke = 10, normalizedRadius = radius - stroke / 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (percent / 100) * circumference;
    return (
        <svg height={radius * 2} width={radius * 2} className="rotate-[-90deg] block mx-auto">
            <circle
                stroke="#e0f4e8"
                fill="transparent"
                strokeWidth={stroke}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
            />
            <circle
                stroke="#2E865E"
                fill="transparent"
                strokeWidth={stroke}
                strokeDasharray={circumference + ' ' + circumference}
                strokeDashoffset={strokeDashoffset}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
                style={{ transition: 'stroke-dashoffset 1s' }}
            />
        </svg>
    );
}

// --------- Future Impact Block ------------
function FutureBlock() {
    return (
        <div className="max-w-4xl mx-auto mt-20 mb-16 bg-[#EDF5EE]/95 p-10 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
                <h2 className="text-2xl font-bold text-[#2E865E] mb-4">Hədəf: 10,000 ailə, 1 milyon kWh qənaət!</h2>
                <p className="text-[#233123CC] mb-4">
                    Platformanın məqsədi — yaxın 2 ildə 10 min ailənin qoşulması və 1 milyon kWh enerji qənaəti ilə ölkənin ekoloji təsirini artırmaqdır.
                </p>
                <ul className="list-disc ml-8 text-[#23312399] space-y-2">
                    <li>Daha çox region, məktəb və iş yerləri ilə əməkdaşlıq</li>
                    <li>Yeni “smart” cihaz inteqrasiyaları və AI tövsiyələri</li>
                    <li>Daim yenilənən leaderboard və gamification</li>
                </ul>
            </div>
            <div className="w-44">
                <ProgressCircle percent={12} />
                <div className="text-center mt-3 font-bold text-[#2E865E]">12% yerinə yetirilib</div>
            </div>
        </div>
    );
}

// -------- Impact Graph Block -----------
function ImpactGraphBlock() {
    return (
        <div className="max-w-4xl mx-auto mb-16 animate-fadeIn">
            <h3 className="text-xl font-semibold text-[#2E865E] mb-6 flex items-center gap-2">
                <FaLeaf /> Aylar üzrə qənaət (kWh)
            </h3>
            <div className="bg-[#F7FFF9]/95 rounded-2xl shadow p-8">
                <BarChart data={months} />
                <div className="flex justify-between text-xs text-[#23312388] mt-2">
                    <span>2025 Yanvar</span>
                    <span>2025 İyun</span>
                </div>
            </div>
        </div>
    );
}

// ------------- Main Page ---------------
export default function StatsPage() {
    return (
        <div className="relative w-full min-h-screen py-16 px-2 bg-gradient-to-br from-[#F6F7F3] via-[#FAF9F6] to-[#E7FDF2]">
            {/* Dynamic background blobs */}
            <div className="pointer-events-none select-none">
                <div className="absolute -top-36 -left-44 w-[600px] h-[420px] rounded-full opacity-15 blur-3xl bg-gradient-to-br from-[#B8CBFF] via-[#F6F7F3] to-[#2E865E] z-0" />
                <div className="absolute bottom-0 right-0 w-[420px] h-[260px] rounded-full opacity-10 blur-2xl bg-gradient-to-tr from-[#CFFFE3] to-[#71D99E] z-0" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-[#2E865E] text-center mb-16 z-10 relative animate-slideUp">
                Platformanın Statistika və Təsiri
            </h1>
            {/* Top Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-5xl mx-auto mb-20 z-10 relative">
                {stats.map((s, i) => (
                    <div
                        key={i}
                        className="flex flex-col items-center bg-[#EDF5EE]/95 p-10 rounded-2xl shadow-xl border border-[#2e865e14]
                            hover:scale-105 hover:shadow-2xl transition-all duration-300 group"
                    >
                        <div className="mb-4 scale-110 group-hover:rotate-6 group-hover:scale-125 transition-all">{s.icon}</div>
                        <span className="text-3xl md:text-4xl font-black text-[#2E865E]">{s.value}</span>
                        <span className="text-[#233123BB] mt-3 text-lg">{s.label}</span>
                    </div>
                ))}
            </div>

            {/* Impact Graph */}
            <ImpactGraphBlock />
            {/* Regions Table */}
            <RegionsTable />
            {/* Leaderboard */}
            <LeaderboardTable />
            {/* Testimonials */}
            <TestimonialsBlock />
            {/* Future Block */}
            <FutureBlock />
        </div>
    );
}
