import SongList from '../components/SongList';

export default function Home() {
  return (
    <div className="p-4 mb-24"> {/* This ensures padding and space for player */}
      <h2 className="text-xl font-semibold mb-4">Welcome to BeatBlender</h2>
      <SongList />
    </div>
  );
}
