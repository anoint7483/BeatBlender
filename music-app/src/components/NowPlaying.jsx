import { usePlayer } from '../context/PlayerContext';

export default function NowPlaying() {
  const { currentSong } = usePlayer();

  if (!currentSong) {
    return (
      <div className="p-4 text-center text-white bg-gray-800 fixed bottom-0 left-0 right-0 z-50">
        <p>No song is currently playing.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 text-white p-3 flex items-center justify-between fixed bottom-0 left-0 right-0 z-50 shadow-lg">
      <div className="flex items-center space-x-4">
        <img
          src={currentSong.cover || '/default-cover.jpg'}
          alt={currentSong.title}
          className="w-12 h-12 rounded-md object-cover"
        />
        <div>
          <h2 className="text-sm font-medium">{currentSong.title}</h2>
          <p className="text-xs text-gray-400">
            {currentSong.artist || 'Unknown Artist'}
          </p>
        </div>
      </div>
    </div>
  );
}
