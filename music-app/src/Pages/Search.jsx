import { useState } from 'react';
import { demoPlaylists } from '../data/playlists';
import { usePlayer } from '../context/PlayerContext';

export default function Search() {
  const [query, setQuery] = useState('');
  const { playSong } = usePlayer();

  const allSongs = demoPlaylists.flatMap(p => p.songs);
  const filteredSongs = allSongs.filter(song =>
    song.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-6">
      <input
        type="text"
        placeholder="Search songs..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />

      <ul className="space-y-2">
        {filteredSongs.map((song, index) => (
          <li
            key={index}
            onClick={() => playSong(song)}
            className="cursor-pointer p-2 bg-gray-100 hover:bg-gray-200 rounded"
          >
            🎵 {song.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
