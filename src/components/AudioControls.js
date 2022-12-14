import React from "react";
import { ReactComponent as Play } from "../assets/play.svg";
import { ReactComponent as Pause } from "../assets/pause.svg";
import { ReactComponent as Next } from "../assets/next.svg";
import { ReactComponent as Prev } from "../assets/prev.svg";

const AudioControls = ({
  isPlaying,
  onPlayPauseClick,
  onPrevClick,
  onNextClick
}) => (
  <div className="flex justify-between items-center mt-6">
    <button type="button" aria-label="Previous" onClick={onPrevClick}>
      <Prev />
    </button>
    {isPlaying ? (
      <button
        type="button"
        className="p-5 rounded-full bg-red-600"
        onClick={() => onPlayPauseClick(false)}
        aria-label="Pause"
      >
        <Pause />
      </button>
    ) : (
      <button
        type="button"
        className="p-5 rounded-full bg-red-600"
        onClick={() => onPlayPauseClick(true)}
        aria-label="Play"
      >
        <Play />
      </button>
    )}
    <button type="button" aria-label="Next" onClick={onNextClick}>
      <Next />
    </button>
  </div>
);

export default AudioControls;
