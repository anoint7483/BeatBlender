import { useParams } from 'react-router-dom';
import { usePlayer } from '../context/PlayerContext';

// Mock playlist songs by playlist id
const playlistSongs = {
  1: [
    { title: 'Lofi Beats', url: '/songs/faded.mp3' },
    { title: 'Chill Vibes', url: '/songs/fairytale.mp3' },
    { title: 'Night Jazz', url: '/songs/Alone.mp3' },
  ],
  2: [
    { title: 'Beast Mode', url: '/songs/workout1.mp3' },
    { title: 'Energy Rush', url: '/songs/workout2.mp3' },
  ],
  3: [
    { title: 'Indie Glow', url: '/songs/indie1.mp3' },
    { title: 'Soft Fire', url: '/songs/indie2.mp3' },
  ],
};

export default function PlaylistDetail() {
  const { id } = useParams();
  const { setPlaylist, setCurrentSong } = usePlayer();
  const songs = playlistSongs[id] || [];

  const handlePlaySong = (song, index) => {
    setPlaylist(songs); // Set playlist in context
    setCurrentSong(song, index); // Set selected song
  };

  return (
    <div className="p-6 mb-24 text-white">
      <h1 className="text-2xl font-bold mb-4">Playlist #{id}</h1>
      <ul className="space-y-3">
        {songs.map((song, idx) => (
          <li
            key={idx}
            className="p-4 bg-gray-800 rounded-lg hover:bg-gray-700 cursor-pointer"
            onClick={() => handlePlaySong(song, idx)}
          >
            🎵 {song.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
