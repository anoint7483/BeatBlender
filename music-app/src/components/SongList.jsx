import SongCard from './SongCard';

export default function SongList() {
  const songs = [
    { title: 'Alone', artist: 'Alan Walker' },
    { title: 'Faded', artist: 'Alan Walker' },
    { title: 'Fairytale', artist: 'Alexander Rybak' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {songs.map((song, idx) => (
        <SongCard key={idx} title={song.title} artist={song.artist} />
      ))}
    </div>
  );
}
