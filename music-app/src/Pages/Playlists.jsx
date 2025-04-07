import { Link } from 'react-router-dom';

const demoPlaylists = [
  {
    id: 1,
    name: 'Lofi Chill',
    description: 'Relaxing lofi beats',
    image: 'https://i.scdn.co/image/ab67616d00001e028f5a5dcf48e1a9b095b9c93b'
  },
  {
    id: 2,
    name: 'Workout Pump',
    description: 'Energetic tracks for workouts',
    image: 'https://i.scdn.co/image/ab67616d00001e02584f7b957fb1c5b1fd1f24b1'
  },
  {
    id: 3,
    name: 'Indie Vibes',
    description: 'Chill indie and alt pop',
    image: 'https://i.scdn.co/image/ab67616d00001e0267f7f183cb0a95a3801aa366'
  }
];

export default function Playlists() {
  return (
    <div className="p-6 mb-24"> {/* 👈 Added mb-24 here for space under content */}
      <h1 className="text-3xl font-bold mb-6 text-white">Your Playlists</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {demoPlaylists.map((playlist) => (
          <Link
            to={`/playlists/${playlist.id}`}
            key={playlist.id}
            className="bg-gray-800 rounded-2xl p-4 shadow hover:bg-gray-700 transition-all"
          >
            <img
              src={playlist.image}
              alt={playlist.name}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold text-white">{playlist.name}</h2>
            <p className="text-gray-400">{playlist.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
