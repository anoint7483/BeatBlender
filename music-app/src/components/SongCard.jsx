export default function SongCard({ title, artist }) {
    return (
      <div className="bg-gray-700 p-4 rounded-xl shadow-md">
        <h3 className="font-bold">{title}</h3>
        <p className="text-sm">{artist}</p>
      </div>
    );
  }
  