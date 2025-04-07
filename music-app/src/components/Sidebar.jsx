import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-850 p-6 flex flex-col gap-4">
      <Link to="/">Home</Link>
      <Link to="/search">Search</Link>
      <Link to="/library">Library</Link>
    </div>
  );
}
