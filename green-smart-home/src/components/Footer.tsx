// src/components/Footer.tsx
import { FaInstagram, FaFacebook, FaEnvelope, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export function Footer() {
    return (
        <footer className="relative w-full bg-[#233123] z-20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 py-6 px-6 md:px-14">
                {/* Left - Logo & Slogan */}
                <div className="flex flex-col items-center md:items-start gap-2">
                    <div className="flex items-center gap-1 mb-1">
                        <img
                            src="/logoext.png"
                            alt="Yaşıl Hesab Logo"
                            className="w-12 h-16 drop-shadow-xl"
                        />
                        <span className="text-3xl font-black text-[#FAF9F6] tracking-wide drop-shadow-lg select-none">
                            Yaşıl Hesab
                        </span>
                    </div>
                    <span className="text-[#edf5eecc] text-sm mb-1">
                        Ekoloji gələcək üçün birlikdə
                    </span>
                    <span className="text-[#EDF5EE88] text-xs">
                        &copy; {new Date().getFullYear()} YasilHesab. Bütün hüquqlar qorunur.
                    </span>
                </div>
                {/* Center - Footer Nav Links */}
                <nav className="flex flex-wrap gap-6 text-[#E5FFEB] text-base font-medium justify-center">
                    <Link to="/" className="hover:text-[#71D99E] transition">Ana səhifə</Link>
                    <Link to="/features" className="hover:text-[#71D99E] transition">Xüsusiyyətlər</Link>
                    <Link to="/community" className="hover:text-[#71D99E] transition">İcma</Link>
                    <Link to="/blog" className="hover:text-[#71D99E] transition">Blog</Link>
                    <Link to="/contact" className="hover:text-[#71D99E] transition">Əlaqə</Link>
                    <Link to="/help" className="hover:text-[#71D99E] transition text-sm">Dəstək & FAQ</Link>
                </nav>
                {/* Right - Social & Contact */}
                <div className="flex flex-col items-center md:items-end gap-2 min-w-[200px]">
                    <div className="flex gap-5 mb-2">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <FaFacebook className="w-6 h-6 text-[#EDF5EE] hover:text-[#71D99E] transition" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <FaTwitter className="w-6 h-6 text-[#EDF5EE] hover:text-[#71D99E] transition" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <FaInstagram className="w-6 h-6 text-[#EDF5EE] hover:text-[#71D99E] transition" />
                        </a>
                        <a href="mailto:info@yasilhesab.az" className="ml-2" aria-label="Email">
                            <FaEnvelope className="w-6 h-6 text-[#EDF5EE] hover:text-[#71D99E] transition" />
                        </a>
                    </div>
                    <span className="text-[#edf5ee] text-sm text-center">
                        Əlaqə: <a href="mailto:info@yasilhesab.az" className="underline hover:text-[#71D99E] transition">info@yasilhesab.az</a>
                    </span>
                    <span className="text-[#edf5ee88] text-xs text-center">
                        Dəstək və FAQ üçün: <Link to="/help" className="underline hover:text-[#71D99E]">/help</Link>
                    </span>
                </div>
            </div>
        </footer>
    );
}
