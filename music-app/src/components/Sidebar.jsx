import { Link } from 'react-router-dom';

export default function Sidebar({ isOpen }) {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-gray-900 p-6 z-40 transform transition-transform duration-300 ease-in-out
      ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:static md:translate-x-0 md:flex md:flex-col md:w-64`}
    >
      <nav className="flex flex-col gap-4 mt-16 md:mt-0">
        <Link to="/" className="hover:text-yellow-400">Home</Link>
        <Link to="/search" className="hover:text-yellow-400">Search</Link>
        <Link to="/library" className="hover:text-yellow-400">Library</Link>
      </nav>
    </div>
  );
}
