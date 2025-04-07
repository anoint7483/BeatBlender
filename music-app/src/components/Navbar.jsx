import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4 shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl sm:text-2xl font-bold text-white">
          🎧 BeatBlender
        </h1>

        {/* Hamburger menu (mobile only) */}
        <div className="sm:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden sm:flex gap-4 text-white text-sm sm:text-base">
          <Link to="/recent" className="hover:text-yellow-400">Recent</Link>
          <Link to="/search" className="hover:text-yellow-400">Search</Link>
          <Link to="/playlists" className="hover:text-yellow-400">Playlists</Link>
          <Link to="/now-playing" className="hover:text-yellow-400">Now Playing</Link>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="sm:hidden mt-3 flex flex-col gap-2 text-white text-sm">
          <Link to="/recent" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Recent</Link>
          <Link to="/search" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Search</Link>
          <Link to="/playlists" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Playlists</Link>
          <Link to="/now-playing" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Now Playing</Link>
        </div>
      )}
    </nav>
  );
}
