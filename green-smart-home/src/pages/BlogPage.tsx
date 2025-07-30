import { useEffect, useState, useMemo } from "react";
import {
    FaBookOpen, FaUserCircle, FaSearch, FaTag, FaCalendarAlt,
    FaArrowRight, FaShareAlt, FaFire, FaCrown
} from "react-icons/fa";
import clsx from "clsx";
import emin from "../assets/emin.png";
import aytac from "../assets/aytac.png";
import ipucu from "../assets/ai_ipucu.png";
import smarthome from "../assets/smart_home.png";
import ugur from "../assets/ugur.png";

// ----------- Types -----------
type BlogPost = {
    id: string;
    title: string;
    desc: string;
    content: string;
    date: string;
    link: string;
    author: string;
    authorAvatar: string;
    tags: string[];
    views: number;
    likes: number;
    comments: number;
    cover?: string;
};

type Author = {
    name: string;
    avatar: string;
    bio: string;
    postCount: number;
};

type BlogCategory = {
    name: string;
    tag: string;
    count: number;
};

// ----------- Dummy Data -----------

const DUMMY_AUTHORS: Author[] = [
    {
        name: "Emin Quliyev",
        avatar: emin,
        bio: "Yaşıl Hesab layihəsinin məqalə müəllifi və enerji qənaəti həvəskarı.",
        postCount: 3,
    },
    {
        name: "Aytac Əliyeva",
        avatar: aytac,
        bio: "Sürdürülebilir yaşam və ağıllı ev texnologiyaları mütəxəssisi.",
        postCount: 2,
    }
];

const DUMMY_POSTS: BlogPost[] = [
    {
        id: "1",
        title: "Enerji qənaəti üçün 10 əsas ipucu",
        desc: "Elektrik xərclərini azaltmaq üçün evdə gündəlik tətbiq edə biləcəyin üsullar.",
        content: `
            <ul>
                <li><b>LED lampa istifadə et</b> — daha az enerji sərf edir.</li>
                <li><b>Cihazları tam söndür</b> — standby-da da enerji xərclənir.</li>
                <li><b>Paltaryuyanı və qabyuyanı tam dolanda işə sal</b>.</li>
                <li>...və daha çox!</li>
            </ul>
        `,
        date: "2025-07-12",
        link: "/blog/energy-tips",
        author: "Emin Quliyev",
        authorAvatar: emin,
        tags: ["enerji", "ipucları", "ev"],
        views: 423,
        likes: 52,
        comments: 8,
        cover: ipucu
    },
    {
        id: "2",
        title: "Ağıllı ev texnologiyaları ilə qənaət",
        desc: "Smart home cihazları ilə rahatlıq və qənaət necə birləşir?",
        content: `
            <p>Sensorlu lampalar, ağıllı termostatlar və enerji monitorları haqqında hər şey!</p>
        `,
        date: "2025-07-06",
        link: "/blog/smart-home",
        author: "Aytac Əliyeva",
        authorAvatar: aytac,
        tags: ["ağıllı-ev", "texnologiya"],
        views: 317,
        likes: 40,
        comments: 6,
        cover: smarthome
    },
    {
        id: "3",
        title: "Motivasiya üçün real uğur hekayələri",
        desc: "Yaşıl Hesab istifadəçilərinin təcrübəsi və paylaşdıqları məsləhətlər.",
        content: `
            <blockquote>“App sayəsində hər ay elektrik xərclərim 15% azalıb!” — Aytac</blockquote>
        `,
        date: "2025-07-01",
        link: "/blog/community-stories",
        author: "Emin Quliyev",
        authorAvatar: emin,
        tags: ["community", "uğur-hekayəsi"],
        views: 512,
        likes: 65,
        comments: 13,
        cover: ugur
    },
];

const DUMMY_CATEGORIES: BlogCategory[] = [
    { name: "Bütün yazılar", tag: "all", count: DUMMY_POSTS.length },
    { name: "Enerji", tag: "enerji", count: 1 },
    { name: "Ağıllı Ev", tag: "ağıllı-ev", count: 1 },
    { name: "Community", tag: "community", count: 1 },
    { name: "Texnologiya", tag: "texnologiya", count: 1 },
    { name: "Uğur hekayəsi", tag: "uğur-hekayəsi", count: 1 },
];

// ----------- Helpers -----------

function formatDate(dateStr: string) {
    const d = new Date(dateStr);
    return d.toLocaleDateString("az-AZ", { year: 'numeric', month: 'short', day: 'numeric' });
}

// ----------- Main BlogPage -----------

export default function BlogPage() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("all");
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const POSTS_PER_PAGE = 6;

    useEffect(() => {
        setLoading(true);
        setError("");
        const timeout = setTimeout(() => setLoading(false), 800);
        return () => clearTimeout(timeout);
    }, [search, category, page]);

    // Filtered
    const filtered = useMemo(() => {
        let res = DUMMY_POSTS;
        if (category !== "all") {
            res = res.filter(p => p.tags.includes(category));
        }
        if (search.trim()) {
            res = res.filter(p =>
                p.title.toLowerCase().includes(search.toLowerCase()) ||
                p.desc.toLowerCase().includes(search.toLowerCase())
            );
        }
        return res;
    }, [search, category]);

    // Pagination
    const paged = useMemo(() => {
        const start = (page - 1) * POSTS_PER_PAGE;
        return filtered.slice(start, start + POSTS_PER_PAGE);
    }, [filtered, page]);

    const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);

    // Top authors
    const topAuthors = DUMMY_AUTHORS;
    // Popular posts
    const popularPosts = useMemo(() => [...DUMMY_POSTS].sort((a, b) => b.views - a.views).slice(0, 3), []);

    return (
        <div className="relative w-full min-h-screen bg-[#F6F7F3] overflow-x-hidden">
            {/* Modern gradient background */}
            <div className="pointer-events-none select-none z-0">
                <div className="absolute -top-40 -left-60 w-[800px] h-[420px] rounded-full opacity-25 blur-3xl bg-gradient-to-br from-[#B8CBFF] via-[#FAF9F6] to-[#2E865E]"/>
                <div className="absolute bottom-0 right-0 w-[620px] h-[320px] rounded-full opacity-10 blur-2xl bg-gradient-to-tr from-[#CFFFE3] to-[#71D99E]"/>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-2 py-12 flex flex-col gap-12">
                {/* Header */}
                <header className="flex flex-col md:flex-row md:justify-between md:items-center mb-10 px-2">
                    <div>
                        <h1 className="text-3xl md:text-5xl font-black text-[#2E865E] mb-4 flex items-center gap-3">
                            <FaBookOpen className="inline mb-1" /> Blog və Maarifləndirici İpuçları
                        </h1>
                        <p className="text-[#233123BB] text-xl max-w-2xl">
                            Enerji qənaəti, ağıllı ev texnologiyaları və community hekayələri bir yerdə!
                        </p>
                    </div>
                    <form className="flex items-center mt-6 md:mt-0 max-w-sm w-full" onSubmit={e => { e.preventDefault(); }}>
                        <div className="flex items-center bg-white px-4 py-3 rounded-2xl shadow border border-[#e0f4e8] w-full">
                            <FaSearch className="text-[#2E865E] mr-3" />
                            <input
                                className="outline-none border-none bg-transparent text-lg text-[#233123] placeholder:text-[#b0b0b0] flex-1"
                                type="text"
                                placeholder="Axtarış..."
                                value={search}
                                onChange={e => { setSearch(e.target.value); setPage(1); }}
                            />
                        </div>
                    </form>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    {/* Sidebar */}
                    <aside className="md:col-span-1 flex flex-col gap-10 sticky top-28 h-fit">
                        {/* Categories */}
                        <div className="backdrop-blur-lg bg-white/90 border border-[#e0f4e8] rounded-2xl shadow-lg p-6 flex flex-col gap-3">
                            <h2 className="text-xl font-bold text-[#2E865E] mb-3 flex items-center"><FaTag className="mr-2" />Kateqoriyalar</h2>
                            <ul className="flex flex-col gap-2">
                                {DUMMY_CATEGORIES.map(cat => (
                                    <li key={cat.tag}>
                                        <button
                                            className={clsx(
                                                "w-full text-left rounded-xl px-3 py-2 text-lg transition-all",
                                                cat.tag === category
                                                    ? "bg-[#2E865E] text-white font-bold shadow"
                                                    : "hover:bg-[#e0f4e8] text-[#233123BB]"
                                            )}
                                            onClick={() => { setCategory(cat.tag); setPage(1); }}
                                        >
                                            {cat.name} <span className="ml-2 text-sm">{cat.count}</span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Top Authors */}
                        <div className="backdrop-blur-lg bg-white/90 border border-[#e0f4e8] rounded-2xl shadow-lg p-6 flex flex-col gap-3">
                            <h2 className="text-xl font-bold text-[#2E865E] mb-3 flex items-center"><FaUserCircle className="mr-2" />Top müəlliflər</h2>
                            <ul className="flex flex-col gap-4">
                                {topAuthors.map(a => (
                                    <li key={a.name} className="flex items-center gap-3">
                                        <img src={a.avatar} alt={a.name} className="w-12 h-12 rounded-full border-2 border-[#2E865E]" />
                                        <div>
                                            <div className="font-semibold text-[#233123] text-lg">{a.name}</div>
                                            <div className="text-xs text-[#233123BB]">{a.bio}</div>
                                            <span className="text-xs text-[#2E865E]">{a.postCount} yazı</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Popular Posts */}
                        <div className="backdrop-blur-lg bg-white/90 border border-[#e0f4e8] rounded-2xl shadow-lg p-6">
                            <h2 className="text-xl font-bold text-[#2E865E] mb-3 flex items-center"><FaFire className="mr-2" />Populyar postlar</h2>
                            <ul className="flex flex-col gap-4">
                                {popularPosts.map(p => (
                                    <li key={p.id} className="flex items-center gap-2">
                                        <FaCrown className="text-[#FFD600]" />
                                        <a href={p.link} className="text-[#2E865E] font-medium hover:underline">{p.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>

                    {/* Blog List */}
                    <main className="md:col-span-3 flex flex-col gap-10 w-full">
                        {loading ? (
                            <BlogLoadingSkeleton />
                        ) : error ? (
                            <BlogError msg={error} />
                        ) : paged.length === 0 ? (
                            <BlogEmpty />
                        ) : (
                            <>
                                <div className="grid md:grid-cols-2 gap-10">
                                    {paged.map(post => (
                                        <BlogCard key={post.id} post={post} />
                                    ))}
                                </div>
                                {/* Pagination */}
                                {totalPages > 1 && (
                                    <div className="flex gap-2 items-center justify-center mt-8">
                                        <button
                                            disabled={page === 1}
                                            onClick={() => setPage(page - 1)}
                                            className="px-5 py-2 rounded-xl bg-[#EDF5EE] text-[#2E865E] font-semibold text-lg disabled:opacity-50 shadow"
                                        >Geri</button>
                                        {Array.from({ length: totalPages }).map((_, i) => (
                                            <button
                                                key={i}
                                                className={clsx(
                                                    "px-4 py-2 rounded-lg text-lg font-bold transition-all",
                                                    page === i + 1
                                                        ? "bg-[#2E865E] text-white shadow"
                                                        : "hover:bg-[#e0f4e8] text-[#233123BB]"
                                                )}
                                                onClick={() => setPage(i + 1)}
                                            >{i + 1}</button>
                                        ))}
                                        <button
                                            disabled={page === totalPages}
                                            onClick={() => setPage(page + 1)}
                                            className="px-5 py-2 rounded-xl bg-[#EDF5EE] text-[#2E865E] font-semibold text-lg disabled:opacity-50 shadow"
                                        >İrəli</button>
                                    </div>
                                )}
                            </>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
}

// ----------- BlogCard -----------
function BlogCard({ post }: { post: BlogPost }) {
    return (
        <div className="bg-[#EDF5EE] rounded-3xl shadow-xl p-7 flex flex-col h-full group transition hover:shadow-2xl hover:scale-[1.02]">
            {/* Cover */}
            {post.cover && (
                <img
                    src={post.cover}
                    alt={post.title}
                    className="rounded-2xl mb-5 object-cover h-48 w-full group-hover:scale-105 transition"
                    loading="lazy"
                />
            )}
            {/* Content */}
            <div className="flex-1 flex flex-col">
                <div className="flex gap-2 mb-2 flex-wrap">
                    {post.tags.map(tag => (
                        <span key={tag} className="bg-[#2E865E22] text-[#2E865E] rounded px-3 py-1 text-xs font-bold">
                            #{tag}
                        </span>
                    ))}
                </div>
                <h2 className="font-bold text-2xl text-[#2E865E] mb-2 line-clamp-2">{post.title}</h2>
                <p className="text-[#233123BB] mb-3 line-clamp-3 text-lg">{post.desc}</p>
                <span className="text-xs text-[#233123AA] mb-2 flex items-center"><FaCalendarAlt className="inline mr-2" /> {formatDate(post.date)}</span>
                {/* Author */}
                <div className="flex items-center mt-auto gap-2">
                    <img src={post.authorAvatar} alt={post.author} className="w-8 h-8 rounded-full border border-[#2E865E]" />
                    <span className="text-xs text-[#2E865E] font-semibold">{post.author}</span>
                </div>
            </div>
            {/* Actions */}
            <div className="flex gap-4 absolute top-5 right-6 opacity-0 group-hover:opacity-100 transition-all">
                <BlogCardAction icon={<FaShareAlt />} tooltip="Paylaş" onClick={() => window.alert("Paylaşılacaq...")} />
                <BlogCardAction icon={<FaArrowRight />} tooltip="Daha ətraflı oxu" onClick={() => window.location.href = post.link} />
            </div>
        </div>
    );
}

function BlogCardAction({ icon, tooltip, onClick }: { icon: React.ReactNode, tooltip: string, onClick: () => void }) {
    return (
        <button
            className="rounded-full bg-[#2E865E22] p-2 hover:bg-[#2E865E] hover:text-white transition"
            title={tooltip}
            onClick={onClick}
            type="button"
        >
            {icon}
        </button>
    );
}

// ----------- Loading Skeleton -----------
function BlogLoadingSkeleton() {
    return (
        <div className="grid md:grid-cols-2 gap-10">
            {[1, 2, 3, 4].map(i => (
                <div key={i} className="bg-[#EDF5EE] rounded-3xl shadow-xl p-8 animate-pulse min-h-[240px] flex flex-col gap-5">
                    <div className="bg-[#E0F4E8] h-12 w-3/4 rounded-xl" />
                    <div className="bg-[#E0F4E8] h-7 w-1/2 rounded-xl" />
                    <div className="bg-[#E0F4E8] h-4 w-full rounded" />
                    <div className="bg-[#E0F4E8] h-4 w-2/3 rounded" />
                </div>
            ))}
        </div>
    );
}

// ----------- Error -----------
function BlogError({ msg }: { msg: string }) {
    return (
        <div className="text-red-700 bg-red-100 p-8 rounded-2xl text-center font-bold text-lg shadow">
            Xəta baş verdi: {msg}
        </div>
    );
}

// ----------- Empty State -----------
function BlogEmpty() {
    return (
        <div className="bg-[#EDF5EE] rounded-3xl shadow-xl p-14 text-center text-[#233123BB] text-xl font-semibold">
            Bu kateqoriyada hələ heç bir yazı yoxdur.
        </div>
    );
}
