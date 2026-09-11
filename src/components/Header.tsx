import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import safetroxLogo from "../assets/LOGO.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Recommendations", path: "/recommendations" },
    { name: "News", path: "/news" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-4 z-50">
      <div className="mx-auto flex w-[min(1180px,calc(100%-32px))] items-center justify-between rounded-3xl border border-white/50 bg-white/70 px-5 py-3 shadow-[0_18px_60px_rgba(12,55,45,0.13)] backdrop-blur-xl">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 font-extrabold text-emerald-900"
        >
          <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-white/60 bg-gradient-to-br from-white to-emerald-100 shadow">
            <img
              src={safetroxLogo}
              alt="Safetrox"
              className="h-full w-full object-contain"
            />
          </div>

          <span className="text-xl">Safetrox</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-2 lg:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="rounded-full px-4 py-2 text-sm font-semibold text-gray-600 transition hover:bg-white hover:text-emerald-700"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Button */}
        <Link
          to="/contact"
          className="hidden rounded-full bg-gradient-to-r from-emerald-600 to-teal-500 px-6 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl lg:block"
        >
          Book Training
        </Link>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-xl p-2 transition hover:bg-gray-100 lg:hidden"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mx-auto mt-3 flex w-[min(1180px,calc(100%-32px))] flex-col rounded-3xl border border-white/50 bg-white/90 p-5 shadow-xl backdrop-blur-xl lg:hidden">

          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-3 font-medium text-gray-700 transition hover:bg-emerald-50 hover:text-emerald-700"
            >
              {link.name}
            </Link>
          ))}

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 rounded-full bg-gradient-to-r from-emerald-600 to-teal-500 px-6 py-3 text-center font-semibold text-white"
          >
            Book Training
          </Link>
        </div>
      )}
    </header>
  );
}