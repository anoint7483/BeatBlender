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
      <div className="flex h-screen bg-gray-900 text-white">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Navbar />
          <div className="flex-1 p-4 overflow-y-auto">
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
          <Player />
        </div>
      </div>
    </Router>
  );
}
