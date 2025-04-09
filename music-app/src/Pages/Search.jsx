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
    <div className="p-6 text-white">
      <input
        type="text"
        placeholder="Search songs..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-3 mb-6 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
      />

      {query && filteredSongs.length === 0 ? (
        <p className="text-center text-gray-400">No matching songs found.</p>
      ) : (
        <ul className="space-y-2">
          {filteredSongs.map((song, index) => (
            <li
              key={index}
              onClick={() => playSong(song)}
              className="cursor-pointer p-3 bg-gray-700 hover:bg-gray-600 rounded transition-colors duration-150"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && playSong(song)}
            >
              🎵 {highlightMatch(song.title, query)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// Optional: Highlight matching part of the song title
function highlightMatch(text, query) {
  if (!query) return text;

  const regex = new RegExp(`(${query})`, 'gi');
  const parts = text.split(regex);

  return parts.map((part, i) =>
    regex.test(part) ? (
      <span key={i} className="text-yellow-400 font-semibold">{part}</span>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}
