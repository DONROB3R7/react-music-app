import React from 'react'

// My Component 
import AudioPlayer from "../components/AudioPlayer";
import tracks from "../data/data";
import NavBar from '../components/NavBar';

export default function TracksPage() {
  return (
    <>
        <NavBar buttons={true} />
        <AudioPlayer tracks={tracks} />
    </>
  )
}
