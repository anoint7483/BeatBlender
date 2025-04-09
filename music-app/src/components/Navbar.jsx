import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Clock, Search, ListMusic, PlayCircle, Home, Book } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // All links for mobile navbar (including home & library)
  const navLinks = [
    { label: "Home", path: "/", icon: <Home size={16} />, mobileOnly: true },
    { label: "Library", path: "/library", icon: <Book size={16} />, mobileOnly: true },
    { label: "Recent", path: "/recent", icon: <Clock size={16} /> },
    { label: "Search", path: "/search", icon: <Search size={16} /> },
    { label: "Playlists", path: "/playlists", icon: <ListMusic size={16} /> },
    { label: "Now Playing", path: "/now-playing", icon: <PlayCircle size={16} /> },
  ];

  const isActive = (path) => location.pathname === path;

  const linkClass = (path) =>
    `flex items-center gap-2 px-3 py-1 rounded-full transition-colors duration-200 ${
      isActive(path)
        ? "bg-yellow-400 text-black font-semibold"
        : "text-white hover:bg-gray-700"
    }`;

  return (
    <nav className="bg-gradient-to-r from-gray-800 to-gray-900 sticky top-0 z-50 shadow-md px-4 py-3 sm:px-6 backdrop-blur-lg">
      <div className="flex justify-between items-center">
        {/* Logo: visible only on mobile */}
        <Link
          to="/"
          className="text-xl sm:text-2xl font-bold text-white tracking-wide md:hidden"
        >
          🎧 BeatBlender
        </Link>

        {/* Toggle button for mobile */}
        <button
          className="sm:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop nav links (excluding Home & Library) */}
        <div className="hidden sm:flex gap-6 text-sm sm:text-base">
          {navLinks
            .filter((link) => !link.mobileOnly)
            .map(({ label, path, icon }) => (
              <Link key={path} to={path} className={linkClass(path)}>
                {icon}
                {label}
              </Link>
            ))}
        </div>
      </div>

      {/* Mobile menu (includes Home & Library) */}
      <div
        className={`sm:hidden flex flex-col gap-2 text-sm mt-3 overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {navLinks.map(({ label, path, icon }) => (
          <Link
            key={path}
            to={path}
            onClick={() => setIsOpen(false)}
            className={linkClass(path)}
          >
            {icon}
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
