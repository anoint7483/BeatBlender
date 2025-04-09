export default function Library() {
  return (
    <div className="p-6 text-white">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4">🎵 Your Library</h2>

      <div className="bg-gray-800 rounded-lg p-6 flex flex-col items-center justify-center text-center shadow-md">
        <img
          src="https://img.icons8.com/ios-filled/100/ffffff/music-library.png"
          alt="Library"
          className="w-20 h-20 mb-4 opacity-70"
        />
        <p className="text-gray-300 text-base sm:text-lg mb-2">
          You haven’t saved any playlists or songs yet.
        </p>
        <p className="text-sm text-gray-500 mb-4">
          Start exploring and add your favorite music to your library.
        </p>
        <button className="px-5 py-2 rounded-full bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition">
          Explore Playlists
        </button>
      </div>
    </div>
  );
}
