import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 sticky top-0 z-40 shadow-lg px-4 py-3 sm:px-6">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-xl sm:text-2xl font-bold text-white">
          🎧 BeatBlender
        </Link>

        <button
          className="sm:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className="hidden sm:flex gap-4 text-white text-sm sm:text-base">
          <Link to="/recent" className="hover:text-yellow-400">Recent</Link>
          <Link to="/search" className="hover:text-yellow-400">Search</Link>
          <Link to="/playlists" className="hover:text-yellow-400">Playlists</Link>
          <Link to="/now-playing" className="hover:text-yellow-400">Now Playing</Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`flex flex-col sm:hidden mt-2 gap-2 text-white text-sm transition-all duration-300 ${
          isOpen ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 overflow-hidden'
        }`}
      >
        <Link to="/recent" onClick={() => setIsOpen(false)} className="hover:text-yellow-400">Recent</Link>
        <Link to="/search" onClick={() => setIsOpen(false)} className="hover:text-yellow-400">Search</Link>
        <Link to="/playlists" onClick={() => setIsOpen(false)} className="hover:text-yellow-400">Playlists</Link>
        <Link to="/now-playing" onClick={() => setIsOpen(false)} className="hover:text-yellow-400">Now Playing</Link>
      </div>
    </nav>
  );
}
