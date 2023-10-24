const Drum = ({ audioclip }) => {
  const playSound = (audioclip) => {
    const audioElement = document.getElementById(audioclip.keyTrigger);
    if (audioElement) {
      audioElement.play().catch(() => console.log("Error playing the sound"));
    }
    document.getElementById("display").innerText = audioclip.description;
  };

  return (
    <button
      className="drum-pad"
      id={audioclip.uniqueid}
      onClick={() => {
        playSound(audioclip);
      }}
    >
      <audio
        src={audioclip.url}
        id={audioclip.keyTrigger}
        className="clip"
      ></audio>
      {audioclip.keyTrigger}
    </button>
  );
};

export default Drum;
