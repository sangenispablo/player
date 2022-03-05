// mis Componentes
import TrackList from "./components/TrackList";
import PlayerControls from "./components/PlayerControls";
// mi functional high component (por que envuelve a los otros)
import { MusicPlayerProvider } from "./MusicPlayerContext";

const App = () => {
  return (
    <MusicPlayerProvider>
      <div className="container">
        <TrackList />
        <PlayerControls />
      </div>
    </MusicPlayerProvider>
  );
};

export default App;
