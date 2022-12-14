import React, { useState, useEffect, useRef } from "react";
import AudioControls from "./AudioControls";
import Backdrop from "./Backdrop";


const AudioPlayer = ({ tracks }) => {
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const { title, artist, bg, image, audioSrc } = tracks[trackIndex];

  const audioRef = useRef(new Audio(audioSrc));
  const intervalRef = useRef();
  const isReady = useRef(false);

  const { duration } = audioRef.current;

  const startTimer = () => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        toNextTrack();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, [1000]);
  };

  const onPress = (value) => {
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
  };

  const onPressEnd = () => {
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
  };

  const toPrevTrack = () => {
    if (trackIndex - 1 < 0) {
      setTrackIndex(tracks.length - 1);
    } else {
      setTrackIndex(trackIndex - 1);
    }
  };

  const toNextTrack = () => {
    if (trackIndex < tracks.length - 1) {
      setTrackIndex(trackIndex + 1);
    } else {
      setTrackIndex(0);
    }
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(audioSrc);
    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      isReady.current = true;
    }
  }, [trackIndex]);

  useEffect(() => {
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-black text-white shadow-lg rounded-lg">
        <div className="flex">
          <div>
            <img
              className="w-full rounded-full m-2 p-4"
              src={image}
              alt="random cover images"
            />
          </div>
          <div className="w-full p-4">
            <div className="flex flex-col justify-between">
              <h2 className="text-2xl text-grey font-medium">{title}</h2>
              <h3 className="text-sm text-grey mt-1">{artist}</h3>
            </div>

            <AudioControls
              isPlaying={isPlaying}
              onPrevClick={toPrevTrack}
              onNextClick={toNextTrack}
              onPlayPauseClick={setIsPlaying}
            />

            <div className="mx-8 py-4">
              <div className="mt-1">
                <input
                  className="rounded-lg overflow-hidden appearance-none bg-gray-300 h-2 w-full"
                  type="range"
                  value={trackProgress}
                  step="1"
                  min="0"
                  max={duration ? duration : `${duration}`}
                  onChange={(e) => onPress(e.target.value)}
                  onMouseUp={onPressEnd}
                  onKeyUp={onPressEnd}
                />
              </div>
            </div>
          </div>

          <Backdrop
            trackIndex={trackIndex}
            activeBg={bg}
            isPlaying={isPlaying}
          />
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
