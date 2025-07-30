// src/components/RewardSection.tsx
import { FaMedal, FaTree } from "react-icons/fa";

export function RewardSection() {
    return (
        <section className="max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row gap-10 items-center">
            <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-[#233123] mb-4">
                    Qənaət et, bonus topla!
                </h2>
                <p className="text-[#233123BB] mb-6 max-w-md">
                    Hər ay qənaət etdiyin enerjiyə görə xal topla və onları ekoloji məhsullara, endirimlərə və ya ağacəkmə kampaniyalarına dəyiş!
                </p>
                <ul className="list-disc ml-5 space-y-2">
                    <li>Enerji qənaətinə görə avtomatik xal yığımı</li>
                    <li>Xalların real məhsullara və ya ekoloji aksiyalara dəyişimi</li>
                    <li>İcma içi müsabiqələr və leaderboard</li>
                </ul>
            </div>
            <div className="flex-1 flex flex-col gap-6 items-center">
                <div className="bg-[#EDF5EE] rounded-2xl p-6 flex flex-col items-center shadow-md">
                    <FaMedal className="w-12 h-12 text-[#2E865E] mb-2" />
                    <span className="font-semibold text-lg text-[#233123]">Bonuslar və mükafatlar</span>
                </div>
                <div className="bg-[#EDF5EE] rounded-2xl p-6 flex flex-col items-center shadow-md">
                    <FaTree className="w-12 h-12 text-[#2E865E] mb-2" />
                    <span className="font-semibold text-lg text-[#233123]">Ağac ək və planetə töhfə ver!</span>
                </div>
            </div>
        </section>
    );
}
