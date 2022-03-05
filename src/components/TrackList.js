// mi custom Hook
import useMusicPlayer from "../hooks/useMusicPlayer";

// componentes de terceros
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

const TrackList = () => {
  // desestructuro lo que necesito de mi custom Hook
  // miren como traigo la funcion para reproducir playTrack
  const { trackList, currentTrackName, playTrack, isPlaying } = useMusicPlayer();

  return (
    <>
      {trackList.map((track, index) => (
        <div className="box" key={index}>
          {/* que el codigo de abajo no te asuste simplemente estoy usando
          un condicional para ver si el tema se esta reproduciendo o no
          y de eso depende que ponga un icono u otro */}
          <button className="button" onClick={() => playTrack(index)}>
            {currentTrackName === track.name && isPlaying ? (
              <FontAwesomeIcon icon={faPause} />
            ) : (
              <FontAwesomeIcon icon={faPlay} />
            )}
          </button>
          <div className="song-title">{track.name}</div>
        </div>
      ))}
    </>
  );
};

export default TrackList;
