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
      <div className="h-screen flex overflow-hidden bg-gray-900 text-white">
        {/* Sidebar - fixed on medium+ screens */}
        <div className="hidden md:block fixed h-full w-64 bg-gray-850 z-40">
          <Sidebar />
        </div>

        {/* Main area */}
        <div className="flex-1 flex flex-col md:ml-64">
          {/* Fixed Navbar */}
          <div className="fixed w-full md:w-[calc(100%-16rem)] z-50 top-0">
            <Navbar />
          </div>

          {/* Scrollable Page Content */}
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
          <div className="fixed bottom-0 w-full md:w-[calc(100%-16rem)] z-50">
            <Player />
          </div>
        </div>
      </div>
    </Router>
  );
}
