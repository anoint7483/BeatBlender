import { Link, useLocation } from 'react-router-dom';
import { Home, Search, Library } from 'lucide-react';

export default function Sidebar({ isOpen }) {
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/', icon: <Home size={20} /> },
    { label: 'Search', path: '/search', icon: <Search size={20} /> },
    { label: 'Library', path: '/library', icon: <Library size={20} /> },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-gray-950 to-gray-900 p-6 z-50 transform transition-transform duration-300 ease-in-out
      ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:static md:translate-x-0 md:flex md:flex-col md:w-64`}
    >
      {/* Logo */}
      <div className="text-2xl font-bold text-lime-400 mb-10">🎧 BeatBlender</div>

      {/* Navigation */}
      <nav className="flex flex-col gap-4">
        {navItems.map(({ label, path, icon }) => (
          <Link
            to={path}
            key={path}
            className={`flex items-center gap-3 px-3 py-2 rounded transition-all duration-200 text-sm ${
              isActive(path)
                ? 'bg-gray-800 text-lime-400 font-medium'
                : 'text-gray-300 hover:text-white hover:bg-gray-800'
            }`}
          >
            {icon}
            {label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
