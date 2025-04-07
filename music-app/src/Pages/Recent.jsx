import { usePlayer } from '../context/PlayerContext';

export default function Recent() {
  const { recentSongs, playSong } = usePlayer();

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Recently Played</h2>
      <ul className="space-y-2">
        {recentSongs.length === 0 && <p>No recent songs yet.</p>}
        {recentSongs.map((song, index) => (
          <li
            key={index}
            onClick={() => playSong(song)}
            className="cursor-pointer p-2 bg-gray-100 hover:bg-gray-200 rounded"
          >
            🎶 {song.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
