// src/components/Navbar.tsx
import { useState } from "react";
import { FaLeaf } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
    { label: "Ana səhifə", href: "/" },
    { label: "Xüsusiyyətlər", href: "/features" },
    { label: "Bonus", href: "/rewards" },
    { label: "Blog", href: "/blog" },
    { label: "Əlaqə", href: "/contact" },
];

export function Navbar() {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    // Blok: Overlay açıqda mobil menyu üçün
    function Overlay() {
        return (
            <div
                className="fixed inset-0 bg-[#2e865e13] backdrop-blur-[2px] z-40 transition-opacity animate-fade-in"
                onClick={() => setOpen(false)}
                aria-label="Menyu fonu"
            />
        );
    }

    return (
        <header className="sticky top-0 z-[100] bg-white/80 backdrop-blur-[8px] shadow-[0_2px_24px_0_rgba(46,134,94,0.09)] transition-all border-b border-[#d0e6d6]">
            <nav className="w-full flex items-center justify-between px-5 md:px-8 py-3 max-w-[1640px] mx-auto relative">
                {/* Logo/Brand */}
                <Link
                    to="/"
                    className="flex items-center gap-2 font-extrabold text-2xl md:text-3xl text-[#2E865E] select-none"
                    style={{ lineHeight: 1.1 }}
                >
    <span className="relative flex items-center">
        <FaLeaf className="w-10 h-10 md:w-12 md:h-12 drop-shadow-[0_1px_8px_#2e865e15]" />

    </span>
                    <span className="ml-2">Yaşıl Hesab</span>
                </Link>

                {/* Desktop Links */}
                <ul className="hidden md:flex items-center gap-8 font-medium">
                    {navLinks.map(link => (
                        <li key={link.label} className="relative group">
                            <Link
                                to={link.href}
                                className={`
                                    px-1 py-0.5 transition-all duration-150 rounded
                                    ${location.pathname === link.href
                                    ? "text-[#2E865E] font-bold"
                                    : "text-[#233123BB] hover:text-[#2E865E]"}
                                `}
                            >
                                {link.label}
                                {/* Active underline */}
                                <span
                                    className={`
                                        absolute left-0 -bottom-1 h-[2px] w-full transition-all
                                        ${location.pathname === link.href
                                        ? "bg-gradient-to-r from-[#2E865E] via-[#51e2a7] to-[#6FCF97] opacity-80 scale-100"
                                        : "bg-[#2E865E33] opacity-0 group-hover:opacity-70 scale-x-75"}
                                        rounded-full
                                    `}
                                />
                            </Link>
                        </li>
                    ))}
                    {/* Call to action: Giriş/Qeydiyyat */}
                    <li>
                        <Link
                            to="/login"
                            className="ml-2 bg-[#2E865E] hover:bg-[#269257] transition text-white px-5 py-2 rounded-xl font-bold shadow shadow-[#2e865e18] text-base"
                        >
                            Giriş
                        </Link>
                    </li>
                </ul>
                {/* Mobile hamburger */}
                <button
                    className="md:hidden p-2 rounded-xl hover:bg-[#e0f4e8] transition relative z-[110]"
                    onClick={() => setOpen(v => !v)}
                    aria-label={open ? "Menyunu bağla" : "Menyunu aç"}
                >
                    <div className="relative w-7 h-7 flex items-center justify-center">
                        <span
                            className={`
                                absolute block h-0.5 w-7 bg-[#2E865E] rounded transition-all
                                ${open ? "rotate-45 translate-y-2" : "-translate-y-2"}
                            `}
                        />
                        <span
                            className={`
                                absolute block h-0.5 w-7 bg-[#2E865E] rounded transition-all
                                ${open ? "opacity-0" : ""}
                            `}
                        />
                        <span
                            className={`
                                absolute block h-0.5 w-7 bg-[#2E865E] rounded transition-all
                                ${open ? "-rotate-45 -translate-y-2" : "translate-y-2"}
                            `}
                        />
                    </div>
                </button>
            </nav>
            {/* Mobile Drawer */}
            {open && (
                <>
                    <Overlay />
                    <div className="fixed top-0 left-0 w-full z-[120] animate-slide-down">
                        <div className="bg-white/98 px-8 pt-8 pb-10 shadow-2xl rounded-b-3xl flex flex-col items-center">
                            <ul className="flex flex-col gap-6 font-semibold w-full">
                                {navLinks.map(link => (
                                    <li key={link.label}>
                                        <Link
                                            to={link.href}
                                            className={`
                                                block text-lg text-center py-1 rounded
                                                transition font-bold
                                                ${location.pathname === link.href
                                                ? "text-[#2E865E] underline underline-offset-4 decoration-[#2E865E44]"
                                                : "text-[#233123] hover:text-[#2E865E]"}
                                            `}
                                            onClick={() => setOpen(false)}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <Link
                                to="/login"
                                className="mt-8 bg-[#2E865E] hover:bg-[#269257] transition text-white px-7 py-3 rounded-xl font-bold text-lg shadow shadow-[#2e865e22] w-full text-center"
                                onClick={() => setOpen(false)}
                            >
                                Giriş / Qeydiyyat
                            </Link>
                        </div>
                    </div>
                </>
            )}
        </header>
    );
}
