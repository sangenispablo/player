import React, { useState } from "react";

// Estas importaciones las hago para tener acceso a los archivos a reproducir
import LostChameleon from "./assets/LostChameleon.mp3";
import Rock from "./assets/TheHipsta.mp3";
import Tobu from "./assets/Tobu.mp3";

// Creo el context, le paso como parametro al create un array con un objeto y una funcion, todo vacio
// esto lo hago para que cuando use el Provider le pase el state y setState respectivamente
const MusicPlayerContext = React.createContext([{}, () => {}]);

// Creo un componente Provider esto lo denominan High Component
// por que va a envolver a los componentes que quieran tener acceso
// al Context
const MusicPlayerProvider = (props) => {
  // uso un useState para guardar un estado
  // que tiene un objeto donde guardo cosas para manejar
  // la reproduccion, esto se conoce como el initValue
  const [state, setState] = useState({
    audioPlayer: new Audio(),
    tracks: [
      {
        name: "Lost Chameleon - Genesis",
        file: LostChameleon,
      },
      {
        name: "The Hipsta - Shaken Soda",
        file: Rock,
      },
      {
        name: "Tobu - Such Fun",
        file: Tobu,
      },
    ],
    currentTrackIndex: null,
    isPlaying: false,
  });

  // este componente devuelve un Provider que posee el context
  // no te confundas con los nombres
  // Context = MusicPlayerContext
  // mi componente = MusicPlayerProvider es que voy a usar como funcional High Component
  // lo ves mas claro cuando lo use en App
  // despues de esto mira el custon hook en el directorio hooks useMusicPlayer
  return (
    <MusicPlayerContext.Provider value={[state, setState]}>
      {props.children}
    </MusicPlayerContext.Provider>
  );

};

export { MusicPlayerContext, MusicPlayerProvider };
