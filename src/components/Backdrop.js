import React, { useEffect } from "react";

const Backdrop = ({ activeBg, trackIndex, isPlaying }) => {
  useEffect(() => {
    document.documentElement.style.setProperty("--active-bg", activeBg);
  }, [trackIndex, activeBg]);

  return (
    <div className="p-2 text-xs text-yellow-400">
      <a>
        Team Banana
      </a>
    </div>
  );
};

export default Backdrop;
