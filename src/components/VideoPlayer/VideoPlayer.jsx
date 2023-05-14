import { useRef } from 'react';

import ReactPlayer from "react-player";


export default function VideoPlayer({collectionId,id,videoName}) {
  const playerRef = useRef(null);

  const handleProgress = (state) => {
    // Acceder al progreso actual del video
    const { playedSeconds  } = state;
    console.log(playedSeconds /60)
    // Verificar si el progreso alcanza cierto punto
    if (playedSeconds  >= 500) {
      // Cambiar el progreso a los 30 segundos (por ejemplo)
      //playerRef.current.seekTo(300);
    }
  };

 
  return (
    <ReactPlayer
      ref={playerRef}
      url={`http://185.51.108.185:8090/api/files/${collectionId}/${id}/${videoName}.mp4`}
      controls={true}
      height="auto"
      playing
      width="50%"
      onProgress={handleProgress}
      

      

    />
  );
}
