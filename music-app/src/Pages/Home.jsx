import { demoPlaylists } from '../data/playlists';
import { usePlayer } from '../context/PlayerContext';

export default function Home() {
  const { playSong } = usePlayer();

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      {/* Welcome Banner */}
      <div className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">Welcome to BeatBlender 🎧</h2>
        <p className="text-gray-300 text-sm sm:text-base">
          Discover new music, your favorite playlists, and keep jamming!
        </p>
      </div>

      {/* Playlist Sections */}
      <div className="space-y-10">
        {demoPlaylists.map((playlist, idx) => (
          <div key={idx}>
            <h3 className="text-lg sm:text-xl font-semibold mb-4">{playlist.name}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {playlist.songs.slice(0, 5).map((song, index) => (
                <div
                  key={index}
                  onClick={() => playSong(song)}
                  className="cursor-pointer bg-gray-800 hover:bg-gray-700 rounded-lg p-3 transition duration-200 shadow-md hover:shadow-lg"
                >
                  <img
                    src={song.cover}
                    alt={song.title}
                    className="w-full h-36 object-cover rounded mb-2"
                  />
                  <h4 className="text-white text-sm font-medium truncate">{song.title}</h4>
                  <p className="text-gray-400 text-xs truncate">{song.artist}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
