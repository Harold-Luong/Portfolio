import "./App.scss";
import Hexagon from "./component/Hexagon";

import Index from "./component/Index";
import Particles from "react-particles";
import ParticlesContainer from "./component/ParticlesContainer";
function App() {
  return (
    <div>
      <ParticlesContainer />
      <Hexagon />
      <Index />
    </div>
  );
}

export default App;
