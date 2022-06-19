import React from "react";
import ReactDOM from "react-dom/client";
import { Stage, Layer, Ring } from "react-konva";

const App = () => {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Ring
          x={150}
          y={150}
          innerRadius={40}
          outerRadius={70}
          fill={"yellow"}
          stroke={"black"}
          strokeWidth={4}
        />
      </Layer>
    </Stage>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
