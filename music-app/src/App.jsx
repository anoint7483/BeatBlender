import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Home from './Pages/Home';
import Library from './Pages/Library';
import Search from './Pages/Search';
import Playlists from './Pages/Playlists';
import PlaylistDetails from './Pages/PlaylistDetails';
import NowPlaying from './components/NowPlaying';
import Recent from './Pages/Recent';

export default function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-900 text-white overflow-hidden">
        {/* Sidebar: Hidden on small screens */}
        <div className="hidden md:block">
          <Sidebar />
        </div>

        {/* Main content */}
        <div className="flex-1 flex flex-col relative overflow-hidden">
          {/* Sticky Navbar */}
          <Navbar />

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto pt-20 pb-28 px-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/library" element={<Library />} />
              <Route path="/search" element={<Search />} />
              <Route path="/playlists" element={<Playlists />} />
              <Route path="/playlists/:id" element={<PlaylistDetails />} />
              <Route path="/now-playing" element={<NowPlaying />} />
              <Route path="/recent" element={<Recent />} />
            </Routes>
          </div>

          {/* Fixed Bottom Music Player */}
          <Player />
        </div>
      </div>
    </Router>
  );
}
