import { useEffect, useRef, useState } from 'react';
import { usePlayer } from '../context/PlayerContext';

export default function Player() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const { currentSong, playNext, playPrev } = usePlayer();

  useEffect(() => {
    if (currentSong && audioRef.current) {
      const audio = audioRef.current;
      audio.pause();
      audio.load();
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false));
      }
    }
  }, [currentSong]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (audioRef.current && isPlaying) {
        const percent = (audioRef.current.currentTime / audioRef.current.duration) * 100;
        setProgress(percent || 0);
      }
    }, 500);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleSeek = (e) => {
    const newProgress = e.target.value;
    if (audioRef.current) {
      const newTime = (audioRef.current.duration / 100) * newProgress;
      audioRef.current.currentTime = newTime;
      setProgress(newProgress);
    }
  };

  return (
    <div className="bg-gray-800 text-white p-4 sm:p-6 fixed bottom-0 left-0 right-0 z-50 shadow-xl rounded-t-xl">
      <div className="flex flex-col gap-4 sm:gap-6 lg:flex-row lg:items-center lg:justify-between">
        {/* Song Info */}
        <div className="flex flex-col items-center sm:flex-row sm:items-center gap-3 w-full lg:w-1/3">
          {currentSong && (
            <>
              <img
                src={currentSong.cover}
                alt={currentSong.title}
                className="w-16 h-16 rounded-md object-cover"
              />
              <div className="text-center sm:text-left">
                <p className="font-semibold text-sm sm:text-base lg:text-lg truncate">
                  🎵 {currentSong.title}
                </p>
                <p className="text-gray-400 text-xs sm:text-sm truncate">
                  {currentSong.artist}
                </p>
              </div>
            </>
          )}
        </div>

        {/* Controls */}
        <div className="flex justify-center items-center gap-4 w-full lg:w-1/3 order-1 lg:order-none">
          <button onClick={playPrev} className="text-xl sm:text-2xl">⏮️</button>
          <button onClick={togglePlay} className="text-2xl sm:text-3xl">
            {isPlaying ? '⏸️' : '▶️'}
          </button>
          <button onClick={playNext} className="text-xl sm:text-2xl">⏭️</button>
        </div>

        {/* Volume - Responsive layout */}
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
          <div className="flex items-center gap-2 w-full sm:w-auto justify-center lg:justify-end mt-2 sm:mt-0">
            <label htmlFor="volume" className="text-lg">🔊</label>
            <input
              id="volume"
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="w-40 sm:w-32 md:w-40 cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <input
        type="range"
        min="0"
        max="100"
        value={progress}
        onChange={handleSeek}
        className="w-full mt-4 cursor-pointer"
      />

      {/* Audio Element */}
      <audio ref={audioRef}>
        <source src={currentSong?.url} type="audio/mpeg" />
      </audio>
    </div>
  );
}
