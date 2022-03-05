import { useContext } from "react";

// importo el Context
import { MusicPlayerContext } from "../MusicPlayerContext";

// Este custom Hooks lo uso para centralizar todas las acciones de modificación del Context
const useMusicPlayer = () => {
  // traigo todo lo que tengo en el contexto
  // aca podriamos usar la desestructuracion del state para escribir menos
  const [state, setState] = useContext(MusicPlayerContext);

  // Funcion propia para repoduccir
  function playTrack(index) {
    if (index === state.currentTrackIndex) {
      togglePlay();
    } else {
      state.audioPlayer.pause();
      state.audioPlayer = new Audio(state.tracks[index].file);
      state.audioPlayer.play();
      // Modifico el Context como si fuera un simple useState
      // lo mas raro es que uso el operador spread
      // en este ejemplo solo cambio currentTrackIndex y isPlaying
      // al resto del state lo dejo como esta (...state)
      setState((state) => ({
        ...state,
        currentTrackIndex: index,
        isPlaying: true,
      }));
    }
  }

  function togglePlay() {
    if (state.isPlaying) {
      state.audioPlayer.pause();
    } else {
      state.audioPlayer.play();
    }
    // modifico el Context
    setState((state) => ({ ...state, isPlaying: !state.isPlaying }));
  }

  function playPreviousTrack() {
    const newIndex =
      (((state.currentTrackIndex + -1) % state.tracks.length) +
        state.tracks.length) %
      state.tracks.length;
    playTrack(newIndex);
  }

  function playNextTrack() {
    const newIndex = (state.currentTrackIndex + 1) % state.tracks.length;
    playTrack(newIndex);
  }

  // retorno las funciones que cambian el Context y las variables que necesito para la app
  // que tambien las podria traer con el hook useContext
  // ahora creamos los componentes principales de mi app
  // son TrackList y PlayerControls
  return {
    playTrack,
    togglePlay,
    currentTrackName: state.currentTrackIndex !== null && state.tracks[state.currentTrackIndex].name,
    trackList: state.tracks,
    isPlaying: state.isPlaying,
    playPreviousTrack,
    playNextTrack,
  };
};

export default useMusicPlayer;
