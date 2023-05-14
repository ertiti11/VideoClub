import { allVideos } from ".././../services/PBservices";
import VideoCard from "../VideoCard/VideoCard";
import "./ListVideos.css";

export default function ListVideos() {
  return (
    <div className="VideoList">
      {allVideos.items.map((videos) => {
        return (
          <VideoCard
            key={videos.id}
            id={videos.id}
            collectionId={videos.collectionId}
            titulo={videos.titulo}
            temporada={videos.temporada}
            capitulo={videos.capitulo}
            thumbnail={videos.thumbnail}
            video={videos.video}
          />
        );
      })}
    </div>
  );
}
