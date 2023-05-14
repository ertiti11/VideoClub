import './VideoCard.css'
import { Link } from 'wouter';

export default function VideoCard ({id, collectionId,titulo, temporada, capitulo, thumbnail,video}){
  // const rutaVideo = `http://185.51.108.185:8090/api/files/${collectionId}/${id}/${video}`;


  const videoName = video.replace(".mp4", "")
  function handleClick(){
    console.log('cleckado')
  }

  return (
    <Link to={`/video/${collectionId}/${id}/${videoName}`}>
    <div className="Card" onClick={handleClick}>
      <div className="thumbnail">
        <img src={`http://185.51.108.185:8090/api/files/${collectionId}/${id}/${thumbnail}`} alt={titulo} />
      </div>
      <div className="details">
        <h3 className="title">{titulo}</h3>
        <p className="channel">Capítulo: {capitulo}</p>
        <p className="views">Temporada: {temporada}</p>
      </div>
    </div>   
    </Link> 
  );
}









