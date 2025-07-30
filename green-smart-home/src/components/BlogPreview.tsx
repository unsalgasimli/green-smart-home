// src/components/BlogPreview.tsx
const posts = [
    {
        title: "Enerji qənaəti üçün 10 praktiki ipucu",
        desc: "Gündəlik həyatınızda enerjiyə qənaət etməyin ən asan yollarını öyrənin.",
        link: "/blog/energy-saving-tips"
    },
    {
        title: "Ağıllı ev texnologiyaları və ekoloji təsir",
        desc: "Smart home cihazları ilə həm rahatlıq, həm də qənaət əldə edin.",
        link: "/blog/smart-home-benefits"
    },
    {
        title: "Motivasiya üçün real hekayələr",
        desc: "İcma üzvlərinin uğur hekayələri və paylaşdığı təcrübələr.",
        link: "/community"
    }
];

export function BlogPreview() {
    return (
        <section id="blog" className="max-w-7xl mx-auto px-4 py-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#233123] mb-8 text-center">
                Son Maarifləndirici Paylaşımlar
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
                {posts.map((p, i) => (
                    <a key={i} href={p.link} className="bg-[#EDF5EE] rounded-2xl p-6 flex flex-col shadow-md hover:shadow-lg transition">
                        <h3 className="font-semibold text-lg text-[#2E865E] mb-2">{p.title}</h3>
                        <p className="text-[#233123BB] mb-2">{p.desc}</p>
                        <span className="text-[#233123] font-medium mt-auto">Daha çox →</span>
                    </a>
                ))}
            </div>
        </section>
    );
}
