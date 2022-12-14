import "./App.scss";
import Hexagon from "./component/Hexagon";

import Index from "./component/Index";
import Particles from "react-particles";
import ParticlesContainer from "./component/ParticlesContainer";
import HexInfor from "./component/HexInfor";
function App() {
  return (
    <div>
      <ParticlesContainer />
      <Hexagon />
      {/* <Index /> */}
      <HexInfor />
    </div>
  );
}

export default App;
