import Navbar from "../../components/Navbar/Navbar";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import "./VideoPlay.css";

export default function Video({ params }) {
  const { collectionId } = params;
  const { id } = params;

  const { videoName } = params;

  console.log(videoName);
  // console.log(collectionId, id, video)
  return (
    <>
      <Navbar />
      <div className="VideoPlay">
        <VideoPlayer
          collectionId={collectionId}
          id={id}
          videoName={videoName}
        />
      </div>
    </>
  );
}
