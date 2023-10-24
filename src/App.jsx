import Drum from "./Drum";

// import { useState } from "react";

import "./App.css";

const audioClips = [
  {
    uniqueid: 1,
    keyTrigger: "Q",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    description: "Heater 1",
  },
  {
    uniqueid: 2,
    keyTrigger: "W",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    description: "Heater 2",
  },
  {
    uniqueid: 3,
    keyTrigger: "E",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    description: "Heater 3",
  },
  {
    uniqueid: 4,
    keyTrigger: "A",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    description: "Heater 4",
  },
  {
    uniqueid: 5,
    keyTrigger: "S",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    description: "Clap",
  },
  {
    uniqueid: 6,
    keyTrigger: "D",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    description: "Open HH",
  },
  {
    uniqueid: 7,
    keyTrigger: "Z",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    description: "Kick n' Hat",
  },
  {
    uniqueid: 8,
    keyTrigger: "X",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    description: "Kick",
  },
  {
    uniqueid: 9,
    keyTrigger: "C",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    description: "Closed HH",
  },
];
const playaudio = (e) => {
  console.log(e);
  const clip = audioClips.find(
    (clip) => clip.keyTrigger === e.key.toUpperCase()
  );
  console.log(clip);
  if (clip) {
    const audioElement = document.getElementById(clip.keyTrigger);
    audioElement.play().catch(() => console.log("Error playing the sound"));
  }

  document.getElementById("drum-" + clip.keyTrigger)?.focus();
};

function App() {
  return (
    <>
      <div id="drum-machine" tabIndex={0} onKeyDown={playaudio}>
        <h1>Drum machine</h1>
        <div className="wholedrum">
          {audioClips.map((elem) => {
            return <Drum key={elem.description} audioclip={elem} />;
          })}
        </div>
        <div id="display"></div>
      </div>
    </>
  );
}

export default App;
