import { createContext, useContext, useState } from 'react';

const PlayerContext = createContext();

export function PlayerProvider({ children }) {
  const [playlist, setPlaylist] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [recentSongs, setRecentSongs] = useState([]);
  const [volume, setVolume] = useState(1); // volume between 0.0 and 1.0

  const currentSong = playlist[currentIndex] || null;

  const setCurrentSong = (song, index = 0) => {
    setPlaylist((prev) => prev.length ? prev : [song]);
    setCurrentIndex(index);

    setRecentSongs((prev) => {
      const filtered = prev.filter((s) => s.title !== song.title);
      return [song, ...filtered].slice(0, 10);
    });
  };

  const playSong = (song) => {
    setPlaylist([song]);
    setCurrentIndex(0);

    setRecentSongs((prev) => {
      const filtered = prev.filter((s) => s.title !== song.title);
      return [song, ...filtered].slice(0, 10);
    });
  };

  const playNext = () => {
    if (playlist.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % playlist.length);
  };

  const playPrev = () => {
    if (playlist.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
  };

  const changeVolume = (value) => {
    setVolume(value);
  };

  return (
    <PlayerContext.Provider
      value={{
        currentSong,
        setPlaylist,
        setCurrentSong,
        playSong,
        playNext,
        playPrev,
        recentSongs,
        volume,
        changeVolume,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
}

export const usePlayer = () => useContext(PlayerContext);
